"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import { authClient } from "@/lib/auth-client";

export function SignUpForm() {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef: Record<
    string,
    React.RefObject<HTMLInputElement | null>
  > = useMemo(
    () => ({
      email: emailRef,
      fullName: fullNameRef,
      password: passwordRef,
    }),
    [],
  );
  const [formError, setFormError] = useState<Record<string, boolean>>({});

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  useEffect(() => {
    // Find the first input field with an error and focus on it
    for (const fieldName in formError) {
      if (
        Object.hasOwn(formError, fieldName) &&
        Object.hasOwn(formRef, fieldName) &&
        formRef[fieldName].current
      ) {
        formRef[fieldName].current.focus();
        break; // Focus the first input with an error and exit the loop
      }
    }
  }, [formError, formRef]);

  const handleValidation = () => {
    const temporaryErrors: Record<string, boolean> = {};
    let isValid = true;

    if (form.fullName.trim().length === 0) {
      temporaryErrors["fullName"] = true;
      isValid = false;
      return isValid;
    }

    if (form.email.trim().length === 0) {
      temporaryErrors["email"] = true;
      isValid = false;
      return isValid;
    }

    if (form.password.trim().length === 0) {
      temporaryErrors["password"] = true;
      isValid = false;
    }

    setFormError({ ...temporaryErrors });
    return isValid;
  };

  const handleFormSubmit = async (event_: React.FormEvent<HTMLFormElement>) => {
    event_.preventDefault();

    try {
      setShowFailureMessage(false);
      setShowSuccessMessage(false);
      setFormError({});

      const isValidForm = handleValidation();
      if (!isValidForm) {
        return;
      }

      setIsFormSubmitting(true);

      const { error } = await authClient.signUp.email({
        email: form.email,
        name: form.fullName,
        password: form.password,
      });

      if (error) {
        setIsFormSubmitting(false);

        if (error.status === 422) {
          setFormError({ email: true });
        } else {
          setShowFailureMessage(true);
        }
        return;
      }

      setForm({
        email: "",
        fullName: "",
        password: "",
      });
      setIsFormSubmitting(false);
      setShowSuccessMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
      onSubmit={handleFormSubmit}
    >
      <h3 className="mb-2 text-2xl font-medium">Sign Up</h3>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <div>
          <label
            className="block max-w-max leading-6 font-medium"
            htmlFor="fullName"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
            id="fullName"
            name="fullName"
            onChange={(event_) =>
              setForm({ ...form, fullName: event_.target.value })
            }
            placeholder="e.g., Ozakpolor Emmanuel"
            ref={formRef.fullName}
            required
            type="text"
            value={form.fullName}
          />
          {formError.fullName && (
            <span className="text-xs text-red-500">
              Full name cannot be empty
            </span>
          )}
        </div>
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
            onChange={(event_) =>
              setForm({ ...form, email: event_.target.value })
            }
            placeholder="name@domain.com"
            ref={formRef.email}
            required
            type="email"
            value={form.email}
          />
          {formError.email && (
            <span className="text-xs text-red-500">
              Email address cannot be empty
            </span>
          )}
        </div>
        <div className="relative">
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
            onChange={(event_) =>
              setForm({ ...form, password: event_.target.value })
            }
            ref={formRef.password}
            required
            type="password"
            value={form.password}
          />
          {formError.password && (
            <span className="text-xs text-red-500">
              Password cannot be empty
            </span>
          )}
        </div>
      </div>
      <p className="text-center text-xs md:text-sm">
        By creating an account, you accept our{" "}
        <Link
          className="font-bold whitespace-nowrap text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/terms-and-conditions"
        >
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link
          className="font-bold whitespace-nowrap text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
        .
      </p>
      {isFormSubmitting ? (
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
          Sign Up
        </button>
      ) : (
        <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
          Sign Up
        </button>
      )}
      <p className="self-center">
        Have an account?{" "}
        <Link
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          href="/sign-in"
        >
          Log In
        </Link>
      </p>
      {showFailureMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-red-400 bg-red-50 p-5 dark:border-red-600 dark:bg-red-950">
          <p>
            Oops! An error occurred while processing your request. This could be
            due to an invalid request or our servers encountering an issue. We
            apologize for the inconvenience. Please try again.
          </p>
          <button onClick={() => setShowFailureMessage(false)}>
            <IoClose className="text-red-400 dark:text-red-600" size={25} />
          </button>
        </div>
      )}
      {showSuccessMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>
            Your account has been successfully created! A confirmation email has
            been sent to you for verification.
          </p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose className="text-green-400 dark:text-green-600" size={25} />
          </button>
        </div>
      )}
    </form>
  );
}
