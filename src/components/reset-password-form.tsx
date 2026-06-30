"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import { authClient } from "@/lib/auth-client";

export function ResetPasswordForm() {
  const [form, setForm] = useState({ confirmPassword: "", newPassword: "" });
  const [formError, setFormError] = useState<Record<string, boolean>>({});
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const formRef: Record<
    string,
    React.RefObject<HTMLInputElement | null>
  > = useMemo(
    () => ({
      confirmPassword: confirmPasswordRef,
      newPassword: newPasswordRef,
    }),
    [],
  );

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const searchParameters = useSearchParams();
  const token = searchParameters.get("token");
  const router = useRouter();

  useEffect(() => {
    for (const fieldName in formError) {
      if (
        Object.hasOwn(formError, fieldName) &&
        Object.hasOwn(formRef, fieldName) &&
        formRef[fieldName].current
      ) {
        formRef[fieldName].current.focus();
        break;
      }
    }
  }, [formError, formRef]);

  const showSuccessMessageWithTimeout = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      router.push("/sign-in");
    }, 5000);
  };

  const handleValidation = () => {
    const temporaryErrors: Record<string, boolean> = {};
    let isValid = true;

    if (form.newPassword.trim().length === 0) {
      temporaryErrors["newPassword"] = true;
      isValid = false;
    }

    if (form.confirmPassword.trim().length === 0) {
      temporaryErrors["confirmPassword"] = true;
      isValid = false;
    }

    if (form.newPassword !== form.confirmPassword) {
      temporaryErrors["differentPasswords"] = true;
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

      const { error } = await authClient.resetPassword({
        newPassword: form.newPassword,
        token: token ?? undefined,
      });

      if (error) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }

      setForm({ confirmPassword: "", newPassword: "" });
      setIsFormSubmitting(false);
      showSuccessMessageWithTimeout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
      onSubmit={handleFormSubmit}
    >
      {showSuccessMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>
            Success! Your password has been changed successfully. You will be
            redirected to the sign-in page automatically.
          </p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose className="text-green-400 dark:text-green-600" size={25} />
          </button>
        </div>
      )}
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
          onChange={(event_) =>
            setForm({ ...form, newPassword: event_.target.value })
          }
          ref={formRef.newPassword}
          required
          type="password"
          value={form.newPassword}
        />
        {formError.newPassword && (
          <span className="text-xs text-red-500">Password cannot be empty</span>
        )}
      </div>
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
          onChange={(event_) =>
            setForm({ ...form, confirmPassword: event_.target.value })
          }
          ref={formRef.confirmPassword}
          required
          type="password"
          value={form.confirmPassword}
        />
        {formError.confirmPassword && (
          <span className="block text-xs text-red-500">
            Password cannot be empty
          </span>
        )}
        {formError.differentPasswords && (
          <span className="block text-xs text-red-500">
            The passwords does not match
          </span>
        )}
      </div>
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
          Change Password
        </button>
      ) : (
        <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
          Change Password
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
            <IoClose className="text-red-400 dark:text-red-600" size={25} />
          </button>
        </div>
      )}
    </form>
  );
}
