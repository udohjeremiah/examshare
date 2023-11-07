"use client";

import { useState, useRef, useEffect } from "react";
import nigerianUniversities from "@/utils/nigerianUniversities";

export default function SubmitPastQuestionForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nameOfInstitution: "",
    statusAtInstitution: "",
    department: "",
    level: "",
    session: "",
    semester: "",
    pastQuestion: null,
  });

  const [formError, setFormError] = useState({});

  const formRef = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    phoneNumber: useRef(null),
    nameOfInstitution: useRef(null),
    statusAtInstitution: useRef(null),
    department: useRef(null),
    level: useRef(null),
    session: useRef(null),
    semester: useRef(null),
    pastQuestion: useRef(null),
  };

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  useEffect(() => {
    // Find the first input field with an error and focus on it
    for (const fieldName in formError) {
      if (formError[fieldName] && formRef[fieldName].current) {
        formRef[fieldName].current.focus();
        break; // Focus the first input with an error and exit the loop
      }
    }
  }, [formError]);

  const showSuccessMessageWithTimeout = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const showFailureMessageWithTimeout = () => {
    setShowFailureMessage(true);
    setTimeout(() => {
      setShowFailureMessage(false);
    }, 5000);
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (form.firstName.trim().length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }

    if (form.lastName.trim().length <= 0) {
      tempErrors["lastName"] = true;
      isValid = false;
    }

    if (form.email.trim().length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (form.nameOfInstitution.trim().length <= 0) {
      tempErrors["nameOfInstitution"] = true;
      isValid = false;
    }

    if (form.statusAtInstitution.trim().length <= 0) {
      tempErrors["statusAtInstitution"] = true;
      isValid = false;
    }

    if (form.department.trim().length <= 0) {
      tempErrors["department"] = true;
      isValid = false;
    }

    if (form.level.trim().length <= 0) {
      tempErrors["level"] = true;
      isValid = false;
    }

    if (form.session.trim().length <= 0) {
      tempErrors["session"] = true;
      isValid = false;
    }

    if (form.semester.trim().length <= 0) {
      tempErrors["semester"] = true;
      isValid = false;
    }

    if (!form.pastQuestion) {
      tempErrors["pastQuestion"] = true;
      isValid = false;
    }

    setFormError({ ...tempErrors });
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValidForm = handleValidation();

    if (!isValidForm) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("nameOfInstitution", form.nameOfInstitution);
      formData.append("statusAtInstitution", form.statusAtInstitution);
      formData.append("department", form.department);
      formData.append("level", form.level);
      formData.append("session", form.session);
      formData.append("semester", form.semester);
      formData.append("pastQuestion", form.pastQuestion);

      setFormError({});
      setIsFormSubmitting(true);

      const response = await fetch("/api/submit-past-question", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setIsFormSubmitting(false);
        showFailureMessageWithTimeout();
        return;
      }

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        nameOfInstitution: "",
        statusAtInstitution: "",
        department: "",
        level: "",
        session: "",
        semester: "",
        pastQuestion: null,
      });

      // Clear the file input by setting its value to an empty string
      if (formRef.pastQuestion.current) {
        formRef.pastQuestion.current.value = "";
      }

      setIsFormSubmitting(false);
      showSuccessMessageWithTimeout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 rounded-md border px-5 py-10 shadow-md sm:px-10"
    >
      <h3 className="mb-2 text-2xl font-medium">
        Become a pioneer of open-source education
      </h3>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-sm font-semibold text-sky-500">
          Fields marked with <span className="text-red-500">*</span> are
          required.
        </p>
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-5">Personal Information</legend>
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
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
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
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full">
              <label
                htmlFor="name-of-institution"
                className="block max-w-max font-medium leading-6"
              >
                Name of Institution <span className="text-red-500">*</span>
              </label>
              <select
                ref={formRef.nameOfInstitution}
                id="name-of-institution"
                name="name-of-institution"
                required
                value={form.nameOfInstitution}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nameOfInstitution: e.target.value,
                  })
                }
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">--Please choose an option--</option>
                {Object.keys(nigerianUniversities).map((header) => (
                  <optgroup key={header} label={header.toUpperCase()}>
                    {nigerianUniversities[header].map((item, index) => (
                      <option key={index} value={item?.name}>
                        {item?.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>

              {formError.nameOfInstitution && (
                <span className="text-xs text-red-500">
                  Name of institution cannot be empty
                </span>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="status-at-institution"
                className="block max-w-max font-medium leading-6"
              >
                Status at Institution <span className="text-red-500">*</span>
              </label>
              <input
                ref={formRef.statusAtInstitution}
                id="status-at-institution"
                name="status-at-institution"
                type="tel"
                autoComplete="tel"
                placeholder="e.g., Student"
                value={form.statusAtInstitution}
                onChange={(e) =>
                  setForm({
                    ...form,
                    statusAtInstitution: e.target.value,
                  })
                }
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formError.statusAtInstitution && (
                <span className="text-xs text-red-500">
                  Status at institution cannot be empty
                </span>
              )}
            </div>
          </div>
        </fieldset>
        <fieldset className="mt-2 flex flex-col gap-4">
          <legend className="mb-5">Past Question Information</legend>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full">
              <label
                htmlFor="department"
                className="block max-w-max font-medium leading-6"
              >
                Department <span className="text-red-500">*</span>
              </label>
              <input
                ref={formRef.department}
                id="department"
                name="department"
                type="text"
                required
                placeholder="e.g., Computer Science"
                value={form.department}
                onChange={(e) =>
                  setForm({ ...form, department: e.target.value })
                }
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formError.department && (
                <span className="text-xs text-red-500">
                  Department cannot be empty
                </span>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="level"
                className="block max-w-max font-medium leading-6"
              >
                Level <span className="text-red-500">*</span>
              </label>
              <input
                ref={formRef.level}
                id="level"
                name="level"
                type="number"
                min="100"
                max="600"
                step="100"
                placeholder="e.g., 300"
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value })}
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formError.level && (
                <span className="text-xs text-red-500">
                  Level cannot be empty
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full">
              <label
                htmlFor="session"
                className="block max-w-max font-medium leading-6"
              >
                Session <span className="text-red-500">*</span>
              </label>
              <input
                ref={formRef.session}
                id="session"
                name="session"
                type="text"
                required
                placeholder="e.g., 2022/2023"
                value={form.session}
                onChange={(e) => setForm({ ...form, session: e.target.value })}
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formError.session && (
                <span className="text-xs text-red-500">
                  Session cannot be empty
                </span>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="semester"
                className="block max-w-max font-medium leading-6"
              >
                Semester <span className="text-red-500">*</span>
              </label>
              <input
                ref={formRef.semester}
                id="semester"
                name="semester"
                type="number"
                min="1"
                max="2"
                step="1"
                placeholder="e.g., 1"
                value={form.semester}
                onChange={(e) => setForm({ ...form, semester: e.target.value })}
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formError.semester && (
                <span className="text-xs text-red-500">
                  Semester cannot be empty
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label
                htmlFor="past-question"
                className="block max-w-max font-medium leading-6"
              >
                Upload Past Question <span className="text-red-500">*</span>
              </label>
              <input
                ref={formRef.pastQuestion}
                id="past-question"
                name="past-question"
                type="file"
                capture="environment"
                accept="image/*"
                required
                onChange={(e) =>
                  setForm({
                    ...form,
                    pastQuestion: e.target.files?.[0],
                  })
                }
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-gray-100 sm:text-sm sm:leading-6"
              />
              {formError.pastQuestion && (
                <span className="text-xs text-red-500">
                  Past question cannot be empty
                </span>
              )}
            </div>
          </div>
        </fieldset>
        {isFormSubmitting ? (
          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
          >
            Submitting
            <span className="animate-blink">.</span>
            <span className="animate-[blink_1.5s_.2s_infinite_both]">.</span>
            <span className="animate-[blink_1.5s_.4s_infinite_both]">.</span>
          </button>
        ) : (
          <button className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500">
            Submit
          </button>
        )}
      </div>
      {showFailureMessage && (
        <div className="text-red-500">
          There was an error submitting the form. Please try again later.
        </div>
      )}
      {showSuccessMessage && (
        <div className="text-green-500">
          Your past question has been submitted successfully.
        </div>
      )}
    </form>
  );
}
