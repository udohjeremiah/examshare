"use client";

import { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function ContactUsForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const formRef = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    phoneNumber: useRef(null),
    subject: useRef(null),
    message: useRef(null),
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

    if (form.firstName.trim().length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
      return isValid;
    }

    if (form.lastName.trim().length <= 0) {
      tempErrors["lastName"] = true;
      isValid = false;
      return isValid;
    }

    if (form.email.trim().length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      return isValid;
    }

    if (form.subject.trim().length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }

    if (form.message.trim().length <= 0) {
      tempErrors["message"] = true;
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

      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...form }),
      });

      if (!response.ok) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
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
      <h3 className="mb-2 text-2xl font-medium">Talk with our team</h3>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full">
            <label
              htmlFor="first-name"
              className="block max-w-max font-medium leading-6"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={formRef.firstName}
              id="first-name"
              name="first-name"
              type="text"
              required
              placeholder="e.g., Ozakpolor"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formError.firstName && (
              <span className="text-xs text-red-500">
                First name cannot be empty
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="last-name"
              className="block max-w-max font-medium leading-6"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={formRef.lastName}
              id="last-name"
              name="last-name"
              type="text"
              required
              placeholder="Emmanuel"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formError.lastName && (
              <span className="text-xs text-red-500">
                Last name cannot be empty
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full">
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
          <div className="w-full">
            <label
              htmlFor="phone-number"
              className="block max-w-max font-medium leading-6"
            >
              Phone Number
            </label>
            <input
              ref={formRef.phoneNumber}
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              placeholder="+234 500 600 7000"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block max-w-max font-medium leading-6"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              ref={formRef.subject}
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="e.g., I want more information about you"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formError.subject && (
              <span className="text-xs text-red-500">
                Subject cannot be empty
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block max-w-max font-medium leading-6"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              ref={formRef.message}
              id="message"
              rows={10}
              placeholder="Describe your message here..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 block w-full resize-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-slate-900 sm:text-sm sm:leading-6"
            ></textarea>
            {formError.message && (
              <span className="text-xs text-red-500">
                Message cannot be empty
              </span>
            )}
          </div>
        </div>
        {isFormSubmitting ? (
          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
          >
            Sending
            <span className="animate-blink">.</span>
            <span className="animate-[blink_1.5s_.2s_infinite_both]">.</span>
            <span className="animate-[blink_1.5s_.4s_infinite_both]">.</span>
          </button>
        ) : (
          <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
            Send
          </button>
        )}
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
      {showSuccessMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>Your information has been submitted successfully.</p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose size={25} className="text-green-400 dark:text-green-600" />
          </button>
        </div>
      )}
    </form>
  );
}
