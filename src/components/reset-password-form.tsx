"use client";

import { useForm } from "@tanstack/react-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { z } from "zod";

import { authClient } from "@/lib/auth-client";

const schema = z
  .object({
    confirmPassword: z.string().min(1, "Password cannot be empty"),
    newPassword: z.string().min(1, "Password cannot be empty"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "The passwords do not match",
    path: ["confirmPassword"],
  });

export function ResetPasswordForm() {
  const searchParameters = useSearchParams();
  const token = searchParameters.get("token");
  const router = useRouter();
  const [submissionError, setSubmissionError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      confirmPassword: "",
      newPassword: "",
    },
    onSubmit: async ({ value }) => {
      setSubmissionError(false);
      setShowSuccess(false);

      const { error } = await authClient.resetPassword({
        newPassword: value.newPassword,
        token: token ?? undefined,
      });

      if (error) {
        setSubmissionError(true);
        return;
      }

      form.reset();
      setShowSuccess(true);

      setTimeout(() => {
        router.push("/sign-in");
      }, 5000);
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
            Success! Your password has been changed successfully. You will be
            redirected to the sign-in page automatically.
          </p>
          <button onClick={() => setShowSuccess(false)}>
            <IoClose className="text-green-400 dark:text-green-600" size={25} />
          </button>
        </div>
      )}
      <form.Field name="newPassword">
        {(field) => (
          <div>
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
              id="newPassword"
              name="newPassword"
              onBlur={field.handleBlur}
              onChange={(event_) => field.handleChange(event_.target.value)}
              required
              type="password"
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
      <form.Field name="confirmPassword">
        {(field) => (
          <div>
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
              id="confirmPassword"
              name="confirmPassword"
              onBlur={field.handleBlur}
              onChange={(event_) => field.handleChange(event_.target.value)}
              required
              type="password"
              value={field.state.value}
            />
            {field.state.meta.errors?.[0]?.message && (
              <span className="block text-xs text-red-500">
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
              Change Password
            </button>
          ) : (
            <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
              Change Password
            </button>
          )
        }
      </form.Subscribe>
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
