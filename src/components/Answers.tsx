"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { apiClient } from "@/lib/api-client";
import { authClient } from "@/lib/auth-client";
import { useQuestionsId } from "@/providers/questions-id-provider";

import type { AnswerData } from "./answer";

import { Answer } from "./answer";
import { RichTextEditor } from "./rich-text-editor";

interface AnswersProperties {
  questionNumber: string;
}

export function Answers({ questionNumber }: AnswersProperties) {
  const { data: session } = authClient.useSession();
  const paths = usePathname();
  const [showAnswerButton, setShowAnswerButton] = useState(true);
  const [showAnswers, setShowAnswers] = useState(false);
  const [addAnswer, setAddAnswer] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questionsId = useQuestionsId();
  const questionId = `${questionsId}_${questionNumber}`;

  const queryClient = useQueryClient();

  const {
    data: answers,
    error,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      const response = await apiClient.get(`answers/${questionId}`);
      const result: { answers: AnswerData[] } = await response.json();
      return result.answers;
    },
    queryKey: ["answers", questionId],
  });

  const handleShowButton = async () => {
    if (!session) {
      location.assign(`/sign-in?callbackUrl=${encodeURIComponent(paths)}`);
      return;
    }

    setShowAnswerButton(false);
    setShowAnswers(true);
  };

  const handleHideButton = () => {
    setShowAnswerButton(true);
    setShowAnswers(false);
    setAddAnswer(false);
  };

  const handleAddAnswer = async (
    content: string,
    setIsSubmitting: (isSubmitting: boolean) => void,
  ) => {
    try {
      setIsSubmitting(true);

      const response = await apiClient.post(`answers/${questionId}`, {
        json: {
          htmlContent: content,
          userId: session?.user?.id,
          userImage: session?.user?.image,
          userName: session?.user?.name,
        },
      });

      if (!response.ok) {
        setIsSubmitting(false);
        setHtmlContent("");
        setAddAnswer(false);
        return;
      }

      setIsSubmitting(false);
      setHtmlContent("");
      setAddAnswer(false);
      await queryClient.invalidateQueries({
        queryKey: ["answers", questionId],
      });
    } catch (error_) {
      console.error(error_);
    }
  };

  return (
    <div className="my-2 space-y-4">
      {showAnswerButton && (
        <button
          className="rounded-md border border-sky-700 p-2 text-center text-xs text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-300 dark:text-sky-300 dark:hover:bg-sky-950 dark:active:bg-sky-900"
          onClick={handleShowButton}
        >
          Show Answers
        </button>
      )}

      {showAnswers && (
        <div className="space-y-2">
          {error && <div>failed to load</div>}
          {isLoading && <div>loading...</div>}
          <div className="space-y-2">
            {answers && answers.length > 0 && (
              <ol>
                {answers.map((answer: AnswerData) => (
                  <li className="mb-4 flex gap-2 py-2" key={answer._id}>
                    <Answer answer={answer} questionId={questionId} />
                  </li>
                ))}
              </ol>
            )}

            {addAnswer && (
              <div className="flex flex-col gap-2">
                <RichTextEditor
                  content={htmlContent}
                  isSubmitting={isSubmitting}
                  mode="add"
                  onAddOrSaveClick={() =>
                    handleAddAnswer(htmlContent, setIsSubmitting)
                  }
                  setContent={setHtmlContent}
                  setIsSubmitting={setIsSubmitting}
                />
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {!addAnswer && (
              <button
                className="rounded-md border border-sky-700 p-2 text-center text-xs text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-300 dark:text-sky-300 dark:hover:bg-sky-950 dark:active:bg-sky-900"
                onClick={() => setAddAnswer(true)}
              >
                Add an answer
              </button>
            )}
            <button
              className="rounded-md border border-sky-700 p-2 text-center text-xs text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-300 dark:text-sky-300 dark:hover:bg-sky-950 dark:active:bg-sky-900"
              onClick={handleHideButton}
            >
              Hide Answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
