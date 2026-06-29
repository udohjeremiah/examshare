"use client";

import {
  useState,
  useRef,
  useEffect,
  useMemo,
  type FormEvent,
  type RefObject,
} from "react";

import { useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import Link from "next/link";

export default function SignInForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef: Record<string, RefObject<HTMLInputElement | null>> = useMemo(
    () => ({
      email: emailRef,
      password: passwordRef,
    }),
    [],
  );
  const [formError, setFormError] = useState<Record<string, boolean>>({});

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    // Find the first input field with an error and focus on it
    for (const fieldName in formError) {
      if (
        formError[fieldName] &&
        formRef[fieldName] &&
        formRef[fieldName].current
      ) {
        formRef[fieldName].current.focus();
        break; // Focus the first input with an error and exit the loop
      }
    }
  }, [formError, formRef]);

  const handleValidation = () => {
    const tempErrors: Record<string, boolean> = {};
    let isValid = true;

    if (form.email.trim().length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      return isValid;
    }

    if (form.password.trim().length <= 0) {
      tempErrors["password"] = true;
      isValid = false;
    }

    setFormError({ ...tempErrors });
    return isValid;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setShowFailureMessage(false);
      setShowSuccessMessage(false);
      setFormError({});

      const isValidForm = handleValidation();
      if (!isValidForm) {
        return;
      }

      setIsFormSubmitting(true);

      const { error } = await authClient.signIn.email({
        email: form.email,
        password: form.password,
        callbackURL: callbackUrl,
      });

      if (error) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
    >
      <h3 className="mb-2 text-2xl font-medium">Sign In</h3>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <div>
          <label
            htmlFor="email"
            className="block max-w-max leading-6 font-medium"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            ref={formRef.email}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@domain.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
          />
          {formError.email && (
            <span className="text-xs text-red-500">
              Email address cannot be empty
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="block max-w-max leading-6 font-medium"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            ref={formRef.password}
            id="password"
            name="password"
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset placeholder:flex focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
          />
          <Link
            href="/forgot-password"
            className="mt-2 w-max self-end text-sm font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          >
            Forgot password?
          </Link>
          {formError.password && (
            <span className="text-xs text-red-500">
              Password cannot be empty
            </span>
          )}
        </div>
      </div>
      {isFormSubmitting ? (
        <button
          disabled
          className="flex cursor-not-allowed items-center justify-center rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
        >
          <svg
            className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
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
          Sign In
        </button>
      ) : (
        <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
          Sign In
        </button>
      )}
      <p className="self-center">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          Sign Up
        </Link>
      </p>
      {showFailureMessage && (
        <div className="text-red-500">
          There was an error submitting the form. Please try again later.
        </div>
      )}
      {showSuccessMessage && (
        <div className="text-green-500">
          Your account has been created successfully.
        </div>
      )}
    </form>
  );
}
