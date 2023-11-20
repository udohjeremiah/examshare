"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowFailureMessage(false);
      setShowSuccessMessage(false);
      setEmailError(false);

      if (email.trim().length <= 0) {
        setEmailError(true);
        return;
      }

      setIsFormSubmitting(true);

      const response = await fetch("/api/auth/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }

      setEmail("");
      setIsFormSubmitting(false);
      setShowSuccessMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
    >
      {showSuccessMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>
            Done! If the email you entered matches an account, the password
            reset link will be sent to that email address.
          </p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose size={25} className="text-green-400 dark:text-green-600" />
          </button>
        </div>
      )}
      <div>
        <label
          htmlFor="email"
          className="block max-w-max font-medium leading-6"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="name@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {emailError && (
          <span className="text-xs text-red-500">
            Email address cannot be empty
          </span>
        )}
      </div>
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
          Reset Your Password
        </button>
      ) : (
        <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
          Reset Your Password
        </button>
      )}
      <div className="flex items-center justify-center">
        <Link
          href="/signin"
          className="flex items-center gap-1 text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          <CiLogout />
          <span>Back to Login</span>
        </Link>
      </div>
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
    </form>
  );
}
