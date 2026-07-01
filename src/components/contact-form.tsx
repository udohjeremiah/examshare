"use client";

import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { z } from "zod";

import { apiClient } from "@/lib/api-client";

const schema = z.object({
  email: z.string().min(1, "Email address cannot be empty"),
  firstName: z.string().min(1, "First name cannot be empty"),
  lastName: z.string().min(1, "Last name cannot be empty"),
  message: z.string().min(1, "Message cannot be empty"),
  phoneNumber: z.string(),
  subject: z.string().min(1, "Subject cannot be empty"),
});

export function ContactForm() {
  const [submissionError, setSubmissionError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      phoneNumber: "",
      subject: "",
    },
    onSubmit: async ({ value }) => {
      setSubmissionError(false);
      setShowSuccess(false);

      const response = await apiClient.post("contact-us", {
        json: { ...value },
      });

      if (!response.ok) {
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
      <h3 className="mb-2 text-2xl font-medium">Talk with our team</h3>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full">
            <form.Field name="firstName">
              {(field) => (
                <>
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
                    onBlur={field.handleBlur}
                    onChange={(event_) =>
                      field.handleChange(event_.target.value)
                    }
                    placeholder="e.g., Ozakpolor"
                    required
                    type="text"
                    value={field.state.value}
                  />
                  {field.state.meta.errors?.[0]?.message && (
                    <span className="text-xs text-red-500">
                      {field.state.meta.errors[0].message}
                    </span>
                  )}
                </>
              )}
            </form.Field>
          </div>
          <div className="w-full">
            <form.Field name="lastName">
              {(field) => (
                <>
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
                    onBlur={field.handleBlur}
                    onChange={(event_) =>
                      field.handleChange(event_.target.value)
                    }
                    placeholder="Emmanuel"
                    required
                    type="text"
                    value={field.state.value}
                  />
                  {field.state.meta.errors?.[0]?.message && (
                    <span className="text-xs text-red-500">
                      {field.state.meta.errors[0].message}
                    </span>
                  )}
                </>
              )}
            </form.Field>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full">
            <form.Field name="email">
              {(field) => (
                <>
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
                    onChange={(event_) =>
                      field.handleChange(event_.target.value)
                    }
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
                </>
              )}
            </form.Field>
          </div>
          <div className="w-full">
            <form.Field name="phoneNumber">
              {(field) => (
                <>
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
                    onBlur={field.handleBlur}
                    onChange={(event_) =>
                      field.handleChange(event_.target.value)
                    }
                    placeholder="+234 500 600 7000"
                    type="tel"
                    value={field.state.value}
                  />
                </>
              )}
            </form.Field>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <form.Field name="subject">
              {(field) => (
                <>
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
                    onBlur={field.handleBlur}
                    onChange={(event_) =>
                      field.handleChange(event_.target.value)
                    }
                    placeholder="e.g., I want more information about you"
                    required
                    type="text"
                    value={field.state.value}
                  />
                  {field.state.meta.errors?.[0]?.message && (
                    <span className="text-xs text-red-500">
                      {field.state.meta.errors[0].message}
                    </span>
                  )}
                </>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="message">
              {(field) => (
                <>
                  <label
                    className="block max-w-max leading-6 font-medium"
                    htmlFor="message"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="mt-2 block w-full resize-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-slate-900"
                    id="message"
                    name="message"
                    onBlur={field.handleBlur}
                    onChange={(event_) =>
                      field.handleChange(event_.target.value)
                    }
                    placeholder="Describe your message here..."
                    rows={10}
                    value={field.state.value}
                  ></textarea>
                  {field.state.meta.errors?.[0]?.message && (
                    <span className="text-xs text-red-500">
                      {field.state.meta.errors[0].message}
                    </span>
                  )}
                </>
              )}
            </form.Field>
          </div>
        </div>
        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) =>
            isSubmitting ? (
              <button
                className="cursor-not-allowed rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
                disabled
              >
                Sending
                <span className="animate-blink">.</span>
                <span className="animate-[blink_1.5s_.2s_infinite_both]">
                  .
                </span>
                <span className="animate-[blink_1.5s_.4s_infinite_both]">
                  .
                </span>
              </button>
            ) : (
              <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
                Send
              </button>
            )
          }
        </form.Subscribe>
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
      {showSuccess && (
        <div className="flex items-start justify-between gap-2 rounded-lg border border-green-400 bg-green-50 p-5 dark:border-green-600 dark:bg-green-950">
          <p>Your information has been submitted successfully.</p>
          <button onClick={() => setShowSuccess(false)}>
            <IoClose className="text-green-400 dark:text-green-600" size={25} />
          </button>
        </div>
      )}
    </form>
  );
}
