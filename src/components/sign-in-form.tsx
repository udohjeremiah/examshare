"use client";

import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

import { authClient } from "@/lib/auth-client";

const schema = z.object({
  email: z.string().min(1, "Email address cannot be empty"),
  password: z.string().min(1, "Password cannot be empty"),
});

export function SignInForm() {
  const searchParameters = useSearchParams();
  const callbackUrl = searchParameters.get("callbackUrl") || "/";
  const [submissionError, setSubmissionError] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setSubmissionError(false);

      const { error } = await authClient.signIn.email({
        callbackURL: callbackUrl,
        email: value.email,
        password: value.password,
      });

      if (error) {
        setSubmissionError(true);
      }
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
      <h3 className="mb-2 text-2xl font-medium">Sign In</h3>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <form.Field name="email">
          {(field) => (
            <div>
              <label
                className="block max-w-max leading-6 font-medium"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                autoComplete="email"
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
        <form.Field name="password">
          {(field) => (
            <div className="flex flex-col">
              <label
                className="block max-w-max leading-6 font-medium"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset placeholder:flex focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                id="password"
                name="password"
                onBlur={field.handleBlur}
                onChange={(event_) => field.handleChange(event_.target.value)}
                required
                type="password"
                value={field.state.value}
              />
              <Link
                className="mt-2 w-max self-end text-sm font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
                href="/forgot-password"
              >
                Forgot password?
              </Link>
              {field.state.meta.errors?.[0]?.message && (
                <span className="text-xs text-red-500">
                  {field.state.meta.errors[0].message}
                </span>
              )}
            </div>
          )}
        </form.Field>
      </div>
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
              Sign In
            </button>
          ) : (
            <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
              Sign In
            </button>
          )
        }
      </form.Subscribe>
      <p className="self-center">
        Don&apos;t have an account?{" "}
        <Link
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/sign-up"
        >
          Sign Up
        </Link>
      </p>
      {submissionError && (
        <div className="text-red-500">
          There was an error submitting the form. Please try again later.
        </div>
      )}
    </form>
  );
}
