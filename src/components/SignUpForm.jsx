"use client";

import { useState, useRef, useEffect } from "react";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function SignUpForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const formRef = {
    fullName: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };
  const [formError, setFormError] = useState({});

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

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
  }, [formError]);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (form.fullName.trim().length <= 0) {
      tempErrors["fullName"] = true;
      isValid = false;
      return isValid;
    }

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

  const handleFormSubmit = async (e) => {
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

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...form }),
      });

      if (!response.ok) {
        setIsFormSubmitting(false);

        const responseJson = await response.json();
        if (responseJson.status === 409) {
          setError({ email: responseJson.message });
        } else {
          setShowFailureMessage(true);
        }
        return;
      }

      setForm({
        fullName: "",
        email: "",
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
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
    >
      <h3 className="mb-2 text-2xl font-medium">Sign Up</h3>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-2 rounded-xl border border-sky-700 p-3 text-center font-semibold text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-200 dark:text-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-900"
        >
          <FcGoogle size={30} />
          <span>Google</span>
        </button>
        <button
          type="button"
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-2 rounded-xl border border-sky-700 p-3 text-center font-semibold text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-200 dark:text-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-900"
        >
          <FaGithub size={30} />
          <span>GitHub</span>
        </button>
      </div>
      <div className="mt-2 flex items-center justify-center gap-4 text-sm before:grow-[1] before:border-[0.5px] before:border-slate-300 after:grow-[1] after:border-[0.5px] after:border-slate-300">
        Or with email and password
      </div>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <div>
          <label
            htmlFor="fullName"
            className="block max-w-max font-medium leading-6"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            ref={formRef.fullName}
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="e.g., Ozakpolor Emmanuel"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {formError.fullName && (
            <span className="text-xs text-red-500">
              Full name cannot be empty
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block max-w-max font-medium leading-6"
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
            className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {formError.email && (
            <span className="text-xs text-red-500">
              Email address cannot be empty
            </span>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block max-w-max font-medium leading-6"
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
            className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:flex focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          href="/terms-and-conditions"
          className="whitespace-nowrap text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy-policy"
          className="whitespace-nowrap text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </p>
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
          href="/signin"
          className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
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
            <IoClose size={25} className="text-red-400 dark:text-red-600" />
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
            <IoClose size={25} className="text-green-400 dark:text-green-600" />
          </button>
        </div>
      )}
    </form>
  );
}
