"use client";

import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { z } from "zod";

import { authClient } from "@/lib/auth-client";

const schema = z.object({
  email: z.string().min(1, "Email address cannot be empty"),
});

export function ForgotPasswordForm() {
  const [submissionError, setSubmissionError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      setSubmissionError(false);
      setShowSuccess(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await (authClient as any).forgetPassword({
        email: value.email,
      });

      if (error) {
        setSubmissionError(true);
        return;
      }

      form.reset();
      setShowSuccess(true);
    },
    validators: {
      onSubmit: schema,
    },
  });

  return (
    <form
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
      onSubmit={async (event_) => {
        event_.preventDefault();
        event_.stopPropagation();
        try {
          await form.handleSubmit();
        } catch {
          // handled in onSubmit
        }
      }}
    >
      {showSuccess && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>
            Done! If the email you entered matches an account, the password
            reset link will be sent to that email address.
          </p>
          <button onClick={() => setShowSuccess(false)}>
            <IoClose className="text-green-400 dark:text-green-600" size={25} />
          </button>
        </div>
      )}
      <form.Field name="email">
        {(field) => (
          <div>
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
              id="email"
              name="email"
              onBlur={field.handleBlur}
              onChange={(event_) => field.handleChange(event_.target.value)}
              placeholder="name@domain.com"
              required
              type="email"
              value={field.state.value}
            />
            {field.state.meta.errors?.[0]?.message && (
              <span className="text-xs text-red-500">
                {field.state.meta.errors[0].message}
              </span>
            )}
          </div>
        )}
      </form.Field>
      <form.Subscribe selector={(state) => state.isSubmitting}>
        {(isSubmitting) =>
          isSubmitting ? (
            <button
              className="flex cursor-not-allowed items-center justify-center rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
              disabled
            >
              <svg
                className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                ></path>
              </svg>
              Reset Your Password
            </button>
          ) : (
            <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
              Reset Your Password
            </button>
          )
        }
      </form.Subscribe>
      <div className="flex items-center justify-center">
        <Link
          className="flex items-center gap-1 font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/sign-in"
        >
          <CiLogout />
          <span>Back to Login</span>
        </Link>
      </div>
      {submissionError && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-red-400 bg-red-50 p-5 dark:border-red-600 dark:bg-red-950">
          <p>
            Oops! An error occurred while processing your request. This could be
            due to an invalid request or our servers encountering an issue. We
            apologize for the inconvenience. Please try again.
          </p>
          <button onClick={() => setSubmissionError(false)}>
            <IoClose className="text-red-400 dark:text-red-600" size={25} />
          </button>
        </div>
      )}
    </form>
  );
}
