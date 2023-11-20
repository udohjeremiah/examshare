"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function VerifyEmailForm() {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const showSuccessMessageWithTimeout = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      router.push("/signin");
    }, 5000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowFailureMessage(false);
      setShowSuccessMessage(false);
      setIsFormSubmitting(true);

      const response = await fetch("/api/auth/verifyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });

      if (!response.ok) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }

      setIsFormSubmitting(false);
      showSuccessMessageWithTimeout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
    >
      {isFormSubmitting ? (
        <button
          disabled
          className="flex cursor-not-allowed items-center justify-center rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
        >
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
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
          Verify Email Address
        </button>
      ) : (
        <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
          Verify Email Address
        </button>
      )}
      {showFailureMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-red-400 bg-red-50 p-5 dark:border-red-600 dark:bg-red-950">
          <p>
            Oops! An error occurred while processing your request. This could be
            due to an invalid request or our servers encountering an issue. We
            apologize for the inconvenience. Please try again.
          </p>
          <button onClick={() => setShowFailureMessage(false)}>
            <IoClose size={25} className="text-red-400 dark:text-red-600" />
          </button>
        </div>
      )}
      {showSuccessMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>
            Your account has been successfully activated! You will be redirected
            to the sign-in page automatically.
          </p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose size={25} className="text-green-400 dark:text-green-600" />
          </button>
        </div>
      )}
    </form>
  );
}
