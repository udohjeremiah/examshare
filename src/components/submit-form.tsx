"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import { apiClient } from "@/lib/api-client";
import { nigerianUniversities } from "@/utils/nigerian-universities";

export function SubmitForm() {
  const [form, setForm] = useState({
    department: "",
    email: "",
    firstName: "",
    lastName: "",
    level: "",
    nameOfInstitution: "",
    pastQuestion: undefined as File | undefined,
    phoneNumber: "",
    semester: "",
    session: "",
    statusAtInstitution: "",
  });
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const nameOfInstitutionRef = useRef<HTMLSelectElement>(null);
  const statusAtInstitutionRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const levelRef = useRef<HTMLInputElement>(null);
  const sessionRef = useRef<HTMLInputElement>(null);
  const semesterRef = useRef<HTMLInputElement>(null);
  const pastQuestionRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef: any = useMemo(
    () => ({
      department: departmentRef,
      email: emailRef,
      firstName: firstNameRef,
      lastName: lastNameRef,
      level: levelRef,
      nameOfInstitution: nameOfInstitutionRef,
      pastQuestion: pastQuestionRef,
      phoneNumber: phoneNumberRef,
      semester: semesterRef,
      session: sessionRef,
      statusAtInstitution: statusAtInstitutionRef,
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

    if (form.firstName.trim().length === 0) {
      temporaryErrors["firstName"] = true;
      isValid = false;
    }

    if (form.lastName.trim().length === 0) {
      temporaryErrors["lastName"] = true;
      isValid = false;
    }

    if (form.email.trim().length === 0) {
      temporaryErrors["email"] = true;
      isValid = false;
    }

    if (form.nameOfInstitution.trim().length === 0) {
      temporaryErrors["nameOfInstitution"] = true;
      isValid = false;
    }

    if (form.statusAtInstitution.trim().length === 0) {
      temporaryErrors["statusAtInstitution"] = true;
      isValid = false;
    }

    if (form.department.trim().length === 0) {
      temporaryErrors["department"] = true;
      isValid = false;
    }

    if (form.level.trim().length === 0) {
      temporaryErrors["level"] = true;
      isValid = false;
    }

    if (form.session.trim().length === 0) {
      temporaryErrors["session"] = true;
      isValid = false;
    }

    if (form.semester.trim().length === 0) {
      temporaryErrors["semester"] = true;
      isValid = false;
    }

    if (!form.pastQuestion) {
      temporaryErrors["pastQuestion"] = true;
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
      formData.append("pastQuestion", form.pastQuestion!);

      const response = await apiClient.post("submit-past-question", {
        body: formData,
      });

      if (!response.ok) {
        setIsFormSubmitting(false);
        setShowFailureMessage(true);
        return;
      }

      setForm({
        department: "",
        email: "",
        firstName: "",
        lastName: "",
        level: "",
        nameOfInstitution: "",
        pastQuestion: undefined,
        phoneNumber: "",
        semester: "",
        session: "",
        statusAtInstitution: "",
      });
      // Clear the file input by setting its value to an empty string
      if (formRef.pastQuestion.current) {
        formRef.pastQuestion.current.value = "";
      }
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
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full">
              <label
                className="block max-w-max leading-6 font-medium"
                htmlFor="name-of-institution"
              >
                Name of Institution <span className="text-red-500">*</span>
              </label>
              <select
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                id="name-of-institution"
                name="name-of-institution"
                onChange={(event_) =>
                  setForm({
                    ...form,
                    nameOfInstitution: event_.target.value,
                  })
                }
                ref={formRef.nameOfInstitution}
                required
                value={form.nameOfInstitution}
              >
                <option value="">--Please choose an option--</option>
                {Object.entries(nigerianUniversities).map(
                  ([header, universities]) => (
                    <optgroup key={header} label={header.toUpperCase()}>
                      {universities.map(
                        (
                          item: { name: string; route: string },
                          index: number,
                        ) => (
                          <option key={index} value={item?.name}>
                            {item?.name}
                          </option>
                        ),
                      )}
                    </optgroup>
                  ),
                )}
              </select>

              {formError.nameOfInstitution && (
                <span className="text-xs text-red-500">
                  Name of institution cannot be empty
                </span>
              )}
            </div>
            <div className="w-full">
              <label
                className="block max-w-max leading-6 font-medium"
                htmlFor="status-at-institution"
              >
                Status at Institution <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                id="status-at-institution"
                name="status-at-institution"
                onChange={(event_) =>
                  setForm({
                    ...form,
                    statusAtInstitution: event_.target.value,
                  })
                }
                placeholder="e.g., Student"
                ref={formRef.statusAtInstitution}
                value={form.statusAtInstitution}
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
                className="block max-w-max leading-6 font-medium"
                htmlFor="department"
              >
                Department <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                id="department"
                name="department"
                onChange={(event_) =>
                  setForm({ ...form, department: event_.target.value })
                }
                placeholder="e.g., Computer Science"
                ref={formRef.department}
                required
                type="text"
                value={form.department}
              />
              {formError.department && (
                <span className="text-xs text-red-500">
                  Department cannot be empty
                </span>
              )}
            </div>
            <div className="w-full">
              <label
                className="block max-w-max leading-6 font-medium"
                htmlFor="level"
              >
                Level <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                id="level"
                max="600"
                min="100"
                name="level"
                onChange={(event_) =>
                  setForm({ ...form, level: event_.target.value })
                }
                placeholder="e.g., 300"
                ref={formRef.level}
                step="100"
                type="number"
                value={form.level}
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
                className="block max-w-max leading-6 font-medium"
                htmlFor="session"
              >
                Session <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                id="session"
                name="session"
                onChange={(event_) =>
                  setForm({ ...form, session: event_.target.value })
                }
                placeholder="e.g., 2022/2023"
                ref={formRef.session}
                required
                type="text"
                value={form.session}
              />
              {formError.session && (
                <span className="text-xs text-red-500">
                  Session cannot be empty
                </span>
              )}
            </div>
            <div className="w-full">
              <label
                className="block max-w-max leading-6 font-medium"
                htmlFor="semester"
              >
                Semester <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                id="semester"
                max="2"
                min="1"
                name="semester"
                onChange={(event_) =>
                  setForm({ ...form, semester: event_.target.value })
                }
                placeholder="e.g., 1"
                ref={formRef.semester}
                step="1"
                type="number"
                value={form.semester}
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
                className="block max-w-max leading-6 font-medium"
                htmlFor="past-question"
              >
                Upload Past Question <span className="text-red-500">*</span>
              </label>
              <input
                accept=".pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, image/*"
                capture="environment"
                className="mt-2 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-gray-100"
                id="past-question"
                name="past-question"
                onChange={(event_) =>
                  setForm({
                    ...form,
                    pastQuestion: event_.target.files?.[0] ?? undefined,
                  })
                }
                ref={formRef.pastQuestion}
                required
                type="file"
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
            className="cursor-not-allowed rounded-xl bg-sky-200 p-3 text-center font-semibold text-sky-500 dark:bg-sky-800 dark:text-sky-100"
            disabled
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
          <p>Your past question has been submitted successfully.</p>
          <button onClick={() => setShowSuccessMessage(false)}>
            <IoClose className="text-green-400 dark:text-green-600" size={25} />
          </button>
        </div>
      )}
    </form>
  );
}
