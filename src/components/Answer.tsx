"use client";

import { apiClient } from "@/lib/api-client";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import RichTextEditor from "./rich-text-editor";
import { authClient } from "@/lib/auth-client";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import InlineSVG from "react-inlinesvg";

export interface AnswerData {
  _id: string;
  userId: string;
  userImage: string;
  userName: string;
  createdAt: string;
  edited: boolean;
  answer: string;
}

interface AnswerProps {
  questionId: string;
  answer: AnswerData;
}

export default function Answer({ questionId, answer }: AnswerProps) {
  const { data: session } = authClient.useSession();
  const queryClient = useQueryClient();
  const [htmlContent, setHtmlContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditAnswer = async (content: string) => {
    try {
      setIsSaving(true);

      const response = await apiClient.patch(`answers/${questionId}`, {
        json: {
          questionUserId: answer.userId,
          userId: session?.user?.id,
          htmlContent: content,
        },
      });

      if (!response.ok) {
        setIsSaving(false);
        setIsEditing(false);
        return;
      }

      setIsSaving(false);
      setIsEditing(false);
      await queryClient.invalidateQueries({
        queryKey: ["answers", questionId],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteAnswer = async () => {
    try {
      if (
        !confirm(
          "Are you certain that you wish to delete your answer? Please note that this action is irreversible.",
        )
      ) {
        return;
      }

      setIsDeleting(true);

      const response = await apiClient.delete(`answers/${questionId}`, {
        json: { userId: session?.user?.id },
      });

      if (!response.ok) {
        setIsDeleting(false);
        return;
      }

      setIsDeleting(false);
      await queryClient.invalidateQueries({
        queryKey: ["answers", questionId],
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative h-8 w-8">
            {answer.userImage.startsWith("<svg") ? (
              <InlineSVG src={answer.userImage} width={30} height={30} />
            ) : (
              <Image
                src={answer.userImage}
                alt={answer.userName}
                fill
                className="inline-block rounded-full"
              />
            )}
          </div>

          <p className="text-sm">{answer.userName}</p>
          <span className="text-slate-400 dark:text-slate-500">•</span>
          <time
            className="text-sm text-slate-400 dark:text-slate-500"
            dateTime={new Date(answer.createdAt).toISOString()}
          >
            {new Date(answer.createdAt).toDateString()}
          </time>
          {answer.edited && (
            <span className="text-sm text-red-400 dark:text-red-500">
              edited
            </span>
          )}
        </div>
        <div className="ml-3 border-l border-sky-200 px-4 dark:border-sky-700">
          {isEditing ? (
            <RichTextEditor
              content={htmlContent}
              setContent={setHtmlContent}
              mode="save"
              isSubmitting={isSaving}
              setIsSubmitting={setIsSaving}
              onAddOrSaveClick={() => handleEditAnswer(htmlContent)}
            />
          ) : (
            <div className="prose prose-sm prose-slate dark:prose-invert">
              {HTMLReactParser(answer.answer)}
            </div>
          )}
          <div className="mt-2 flex items-center justify-between">
            {answer.userId === session?.user?.id && (
              <div className="flex gap-2">
                {!isEditing && (
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setHtmlContent(answer.answer);
                    }}
                    className="rounded-md border border-cyan-700 p-2 text-center text-xs text-cyan-700 hover:bg-blue-100 active:bg-cyan-200 dark:border-cyan-300 dark:text-cyan-300 dark:hover:bg-cyan-950 dark:active:bg-cyan-900"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={handleDeleteAnswer}
                  className="flex rounded-md border border-red-700 p-2 text-center text-xs text-red-700 hover:bg-red-100 active:bg-red-200 dark:border-red-300 dark:text-red-300 dark:hover:bg-red-950 dark:active:bg-red-900"
                >
                  {isDeleting && (
                    <svg
                      className="mr-3 -ml-1 h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
