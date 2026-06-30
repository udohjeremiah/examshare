"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import { apiClient } from "@/lib/api-client";

export function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    phoneNumber: "",
    subject: "",
  });
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef: any = useMemo(
    () => ({
      email: emailRef,
      firstName: firstNameRef,
      lastName: lastNameRef,
      message: messageRef,
      phoneNumber: phoneNumberRef,
      subject: subjectRef,
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
      if (Object.hasOwn(formError, fieldName) && formRef[fieldName]?.current) {
        formRef[fieldName]?.current?.focus();
        break; // Focus the first input with an error and exit the loop
      }
    }
  }, [formError, formRef]);

  const handleValidation = () => {
    const temporaryErrors: Record<string, boolean> = {};
    let isValid = true;

    if (form.firstName.trim().length === 0) {
      temporaryErrors["firstName"] = true;
      isValid = false;
      return isValid;
    }

    if (form.lastName.trim().length === 0) {
      temporaryErrors["lastName"] = true;
      isValid = false;
      return isValid;
    }

    if (form.email.trim().length === 0) {
      temporaryErrors["email"] = true;
      isValid = false;
      return isValid;
    }

    if (form.subject.trim().length === 0) {
      temporaryErrors["subject"] = true;
      isValid = false;
    }

    if (form.message.trim().length === 0) {
      temporaryErrors["message"] = true;
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

      const response = await apiClient.post("contact-us", {
        json: { ...form },
      });

      if (!response.ok) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }

      setForm({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNumber: "",
        subject: "",
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
      <h3 className="mb-2 text-2xl font-medium">Talk with our team</h3>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full">
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="first-name"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
              id="first-name"
              name="first-name"
              onChange={(event_) =>
                setForm({ ...form, firstName: event_.target.value })
              }
              placeholder="e.g., Ozakpolor"
              ref={formRef.firstName}
              required
              type="text"
              value={form.firstName}
            />
            {formError.firstName && (
              <span className="text-xs text-red-500">
                First name cannot be empty
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="last-name"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
              id="last-name"
              name="last-name"
              onChange={(event_) =>
                setForm({ ...form, lastName: event_.target.value })
              }
              placeholder="Emmanuel"
              ref={formRef.lastName}
              required
              type="text"
              value={form.lastName}
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
          <div className="w-full">
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <input
              autoComplete="tel"
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
              id="phone-number"
              name="phone-number"
              onChange={(event_) =>
                setForm({ ...form, phoneNumber: event_.target.value })
              }
              placeholder="+234 500 600 7000"
              ref={formRef.phoneNumber}
              type="tel"
              value={form.phoneNumber}
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="subject"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
              id="subject"
              name="subject"
              onChange={(event_) =>
                setForm({ ...form, subject: event_.target.value })
              }
              placeholder="e.g., I want more information about you"
              ref={formRef.subject}
              required
              type="text"
              value={form.subject}
            />
            {formError.subject && (
              <span className="text-xs text-red-500">
                Subject cannot be empty
              </span>
            )}
          </div>
          <div>
            <label
              className="block max-w-max leading-6 font-medium"
              htmlFor="message"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="mt-2 block w-full resize-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-slate-900"
              id="message"
              onChange={(event_) =>
                setForm({ ...form, message: event_.target.value })
              }
              placeholder="Describe your message here..."
              ref={formRef.message}
              rows={10}
              value={form.message}
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
            className="cursor-not-allowed rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
            disabled
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
            <IoClose className="text-red-400 dark:text-red-600" size={25} />
          </button>
        </div>
      )}
      {showSuccessMessage && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>Your information has been submitted successfully.</p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose className="text-green-400 dark:text-green-600" size={25} />
          </button>
        </div>
      )}
    </form>
  );
}
