"use client";
import { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

export default function ResetPasswordForm() {
  const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });
  const [formError, setFormError] = useState({});
  const formRef = {
    newPassword: useRef(null),
    confirmPassword: useRef(null),
  };

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

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

  const showSuccessMessageWithTimeout = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      router.push("/signin");
    }, 5000);
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (form.newPassword.trim().length <= 0) {
      tempErrors["newPassword"] = true;
      isValid = false;
    }

    if (form.confirmPassword.trim().length <= 0) {
      tempErrors["confirmPassword"] = true;
      isValid = false;
    }

    if (form.newPassword !== form.confirmPassword) {
      tempErrors["differentPasswords"] = true;
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

      const response = await fetch("/api/auth/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          token: token,
          newPassword: form.newPassword,
          confirmPassword: form.confirmPassword,
        }),
      });

      if (!response.ok) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }

      setForm({ newPassword: "", confirmPassword: "" });
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
      {showSuccessMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>
            Success! Your password has been changed successfully. You will be
            redirected to the sign-in page automatically.
          </p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose size={25} className="text-green-400 dark:text-green-600" />
          </button>
        </div>
      )}
      <div>
        <label
          htmlFor="newPassword"
          className="block max-w-max font-medium leading-6"
        >
          New Password
        </label>
        <input
          ref={formRef.newPassword}
          id="newPassword"
          name="newPassword"
          type="password"
          required
          value={form.newPassword}
          onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
          className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formError.newPassword && (
          <span className="text-xs text-red-500">Password cannot be empty</span>
        )}
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block max-w-max font-medium leading-6"
        >
          Confirm Password
        </label>
        <input
          ref={formRef.confirmPassword}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
          className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <IoClose size={25} className="text-red-400 dark:text-red-600" />
          </button>
        </div>
      )}
    </form>
  );
}
