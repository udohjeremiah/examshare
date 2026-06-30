"use client";

import type { AnswerData } from "./answer";
import { apiClient } from "@/lib/api-client";
import { useQuestionsId } from "@/providers/questions-id-provider";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import Answer from "./answer";
import RichTextEditor from "./rich-text-editor";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

interface AnswersProps {
  questionNumber: string;
}

export default function Answers({ questionNumber }: AnswersProps) {
  const { data: session } = authClient.useSession();
  const paths = usePathname();
  const [showAnswerBtn, setShowAnswerBtn] = useState(true);
  const [showAnswers, setShowAnswers] = useState(false);
  const [addAnswer, setAddAnswer] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questionsId = useQuestionsId();
  const questionId = `${questionsId}_${questionNumber}`;

  const { mutate } = useSWRConfig();

  const fetcher = async (key: string) => {
    try {
      const response = await apiClient.get(key);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: { answers: AnswerData[] } = await response.json();
      return result.answers;
    } catch (e) {
      console.error("An error occured while fetching the data: ", e);
    }
  };

  const {
    data: answers,
    error,
    isLoading,
  } = useSWR(`answers/${questionId}`, fetcher);

  const handleShowButton = async () => {
    if (!session) {
      window.location.href = `/sign-in?callbackUrl=${encodeURIComponent(paths)}`;
      return;
    }

    setShowAnswerBtn(false);
    setShowAnswers(true);
  };

  const handleHideButton = () => {
    setShowAnswerBtn(true);
    setShowAnswers(false);
    setAddAnswer(false);
  };

  const handleAddAnswer = async (
    content: string,
    setIsSubmitting: (value: boolean) => void,
  ) => {
    try {
      setIsSubmitting(true);

      const response = await apiClient.post(`answers/${questionId}`, {
        json: {
          userId: session?.user?.id,
          userName: session?.user?.name,
          userImage: session?.user?.image,
          htmlContent: content,
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
      await mutate(`answers/${questionId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="my-2 space-y-4">
      {showAnswerBtn && (
        <button
          onClick={handleShowButton}
          className="rounded-md border border-sky-700 p-2 text-center text-xs text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-300 dark:text-sky-300 dark:hover:bg-sky-950 dark:active:bg-sky-900"
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
                  <li key={answer._id} className="mb-4 flex gap-2 py-2">
                    <Answer questionId={questionId} answer={answer} />
                  </li>
                ))}
              </ol>
            )}

            {addAnswer && (
              <div className="flex flex-col gap-2">
                <RichTextEditor
                  content={htmlContent}
                  setContent={setHtmlContent}
                  mode="add"
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                  onAddOrSaveClick={() =>
                    handleAddAnswer(htmlContent, setIsSubmitting)
                  }
                />
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {!addAnswer && (
              <button
                onClick={() => setAddAnswer(true)}
                className="rounded-md border border-sky-700 p-2 text-center text-xs text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-300 dark:text-sky-300 dark:hover:bg-sky-950 dark:active:bg-sky-900"
              >
                Add an answer
              </button>
            )}
            <button
              onClick={handleHideButton}
              className="rounded-md border border-sky-700 p-2 text-center text-xs text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-300 dark:text-sky-300 dark:hover:bg-sky-950 dark:active:bg-sky-900"
            >
              Hide Answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
