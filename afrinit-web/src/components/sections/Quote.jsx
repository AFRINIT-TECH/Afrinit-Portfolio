import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/content/site";

const DRAFT_STORAGE_KEY = "azzmar_quote_draft";
const SAVED_CONTACT_KEY = "azzmar_saved_contact_details";

const SERVICE_OPTIONS = [
  "Web Applications",
  "Mobile Applications",
  "UI/UX Design",
  "Data & Analytics",
  "Social Media Management",
  "Digital Marketing & SEO",
  "Branding & Graphic Design",
  "Cloud, Hosting & Domains",
  "Cybersecurity",
  "IT Support & Maintenance",
  "Not sure yet",
];

const QUICK_NEED_CHIPS = [
  "A new website",
  "A mobile app",
  "Help with social media",
  "A logo and branding",
  "I'm not sure yet, I need advice",
];

const BUDGET_OPTIONS = [
  "Under KES 100,000",
  "KES 100,000–300,000",
  "KES 300,000–750,000",
  "KES 750,000–2,000,000",
  "Over KES 2,000,000",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–2 months",
  "3–6 months",
  "Flexible / just exploring",
];

const CONTACT_METHODS = ["WhatsApp", "Phone call", "Email"];

const NEXT_STEPS = [
  "You send this form and get a confirmation straight away.",
  "We follow up right away, the way you chose.",
  "A short call, then a written proposal with scope, timeline and price.",
];

const createInitialFormState = () => {
  let savedContact = { name: "", phone: "", email: "" };
  let rememberDetails = false;

  try {
    const rawSaved = localStorage.getItem(SAVED_CONTACT_KEY);
    if (rawSaved) {
      const parsed = JSON.parse(rawSaved);
      savedContact = {
        name: parsed?.name || "",
        phone: parsed?.phone || "",
        email: parsed?.email || "",
      };
      rememberDetails = Boolean(
        savedContact.name || savedContact.phone || savedContact.email
      );
    }

    const rawDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (rawDraft) {
      const draft = JSON.parse(rawDraft);
      return {
        services: Array.isArray(draft.services) ? draft.services : [],
        description: draft.description || "",
        budget: draft.budget || "",
        company: draft.company || "",
        website: draft.website || "",
        timeline: draft.timeline || "",
        goals: draft.goals || "",
        files: [],
        name: draft.name || savedContact.name,
        phone: draft.phone || savedContact.phone,
        email: draft.email || savedContact.email,
        rememberDetails:
          typeof draft.rememberDetails === "boolean"
            ? draft.rememberDetails
            : rememberDetails,
        contactMethod: CONTACT_METHODS.includes(draft.contactMethod)
          ? draft.contactMethod
          : "WhatsApp",
        agreePrivacy: Boolean(draft.agreePrivacy),
        marketingOptIn: Boolean(draft.marketingOptIn),
      };
    }
  } catch {
    // Ignore storage read errors in restricted environments
  }

  return {
    services: [],
    description: "",
    budget: "",
    company: "",
    website: "",
    timeline: "",
    goals: "",
    files: [],
    name: savedContact.name,
    phone: savedContact.phone,
    email: savedContact.email,
    rememberDetails,
    contactMethod: "WhatsApp",
    agreePrivacy: false,
    marketingOptIn: false,
  };
};

export const Quote = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(createInitialFormState);
  const [showMoreDetails, setShowMoreDetails] = useState(() =>
    Boolean(form.company || form.website || form.timeline || form.goals)
  );
  const [errors, setErrors] = useState({});
  const [submittedQuote, setSubmittedQuote] = useState(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const formTopRef = useRef(null);

  // Auto-save draft answers as the user progresses
  useEffect(() => {
    if (submittedQuote) return;
    try {
      const { files: _files, ...serializable } = form;
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(serializable));
    } catch {
      // Ignore storage quota errors
    }
  }, [form, submittedQuote]);

  // Keep or clear remembered contact details on this device
  useEffect(() => {
    try {
      if (form.rememberDetails) {
        localStorage.setItem(
          SAVED_CONTACT_KEY,
          JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
          })
        );
      } else {
        localStorage.removeItem(SAVED_CONTACT_KEY);
      }
    } catch {
      // Ignore storage errors
    }
  }, [form.rememberDetails, form.name, form.phone, form.email]);

  const scrollToFormTop = () => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleService = (service) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);
      const services = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: "" }));
    }
  };

  const handleQuickChipClick = (chip) => {
    setForm((prev) => {
      const lines = prev.description
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      const alreadyAdded = lines.some(
        (line) => line.toLowerCase() === chip.toLowerCase()
      );
      const nextLines = alreadyAdded
        ? lines.filter((line) => line.toLowerCase() !== chip.toLowerCase())
        : [...lines, chip];
      return { ...prev, description: nextLines.join("\n") };
    });
    if (errors.description) {
      setErrors((prev) => ({ ...prev, description: "" }));
    }
  };

  const isChipSelected = (chip) =>
    form.description
      .split("\n")
      .some((line) => line.trim().toLowerCase() === chip.toLowerCase());

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || []).map((file) => ({
      name: file.name,
      size: file.size,
    }));
    if (selected.length > 0) {
      setForm((prev) => ({
        ...prev,
        files: [...prev.files, ...selected].slice(0, 5),
      }));
    }
    e.target.value = "";
  };

  const removeFile = (index) => {
    setForm((prev) => ({
      ...prev,
      files: prev.files.filter((_, idx) => idx !== index),
    }));
  };

  const validateStep1 = () => {
    const nextErrors = {};
    if (form.services.length === 0) {
      nextErrors.services = "Please select at least one service.";
    }
    if (!form.description.trim()) {
      nextErrors.description = "Please describe what you need in your own words.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep2 = () => {
    const nextErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }
    if (form.contactMethod === "Email" && !form.email.trim()) {
      nextErrors.email =
        "Please add your email address so we can reach you by email.";
    } else if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.agreePrivacy) {
      nextErrors.agreePrivacy =
        "Please agree to our data storage and response terms to continue.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!validateStep1()) return;
    setStep(2);
    scrollToFormTop();
  };

  const handleBackToStep1 = () => {
    setErrors({});
    setStep(1);
    scrollToFormTop();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const referenceId = `QT-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const snapshot = {
      ...form,
      referenceId,
      submittedAt: new Date().toLocaleString(),
    };

    try {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }

    setSubmittedQuote(snapshot);
    scrollToFormTop();
  };

  const handleStartAnother = () => {
    setSubmittedQuote(null);
    setStep(1);
    setErrors({});
    setShowMoreDetails(false);
    setForm(createInitialFormState());
    scrollToFormTop();
  };

  const descriptionLines = form.description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="page-view w-full overflow-hidden bg-white text-black">
      {/* 1. Quote Hero Section (matches portfolio light editorial header) */}
      <section className="relative min-h-[38vh] w-full px-5 pt-16 pb-10 sm:px-8 lg:px-14 lg:pt-24 lg:pb-14">
        <div className="w-full">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            <span className="h-px w-9 bg-[#6d001a]" />
            Start a Project • Request Quotation
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-black max-w-5xl">
            Tell us what{" "}
            <span className="text-[#6d001a]">you need.</span>
          </h1>
          <p className="viewport-animation delay-200 mt-6 sm:mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#454545]">
            Two quick steps, about a minute. You don't need to know the details
            yet, and there is no obligation.
          </p>
        </div>
      </section>

      {/* 2. Main Quotation Form & Dark Info Sidebar (matches Contact.jsx layout) */}
      <section
        ref={formTopRef}
        className="relative w-full scroll-mt-28 px-5 pt-4 pb-24 sm:px-8 lg:px-14"
      >
        <div className="w-full">
          {submittedQuote ? (
            <div className="solution-panel mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
                Confirmation • {submittedQuote.referenceId}
              </p>
              <h2 className="font-display mt-2 text-3xl font-extrabold text-black sm:text-4xl">
                We've got your request, {submittedQuote.name}.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#454545] sm:text-base">
                Thank you for sharing your project details with Azzmar. Our team
                will follow up promptly via{" "}
                <span className="font-bold text-black">
                  {submittedQuote.contactMethod}
                </span>{" "}
                (
                {submittedQuote.contactMethod === "Email"
                  ? submittedQuote.email
                  : submittedQuote.phone}
                ) to schedule a short call and prepare a written proposal with
                scope, timeline, and price.
              </p>

              <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <h3 className="font-display text-base font-bold text-black">
                  Request summary
                </h3>
                <dl className="mt-4 divide-y divide-black/10 text-sm">
                  <div className="py-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-[#454545]">
                      Services
                    </dt>
                    <dd className="mt-1 font-medium text-black">
                      {submittedQuote.services.join(", ")}
                    </dd>
                  </div>
                  <div className="py-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-[#454545]">
                      What you need
                    </dt>
                    <dd className="mt-1 whitespace-pre-line text-black">
                      {submittedQuote.description}
                    </dd>
                  </div>
                  {submittedQuote.budget && (
                    <div className="py-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-[#454545]">
                        Rough budget
                      </dt>
                      <dd className="mt-1 font-medium text-black">
                        {submittedQuote.budget}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleStartAnother}
                  className="cursor-pointer rounded-full border border-black/20 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
                >
                  Send another quote request
                </button>
                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate("home")}
                    className="cursor-pointer rounded-full bg-black px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#6d001a]"
                  >
                    Back to home →
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-[1.35fr_0.85fr]">
              {/* Left Column: Step Progress + Form Card */}
              <div>
                {/* Step Progress Header */}
                <div className="mb-5">
                  <div className="mb-2.5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-[#454545]">
                    <span className="text-[#6d001a]">Step {step} of 2</span>
                    <span>
                      {step === 1 ? "What you need" : "How to reach you"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="h-1.5 rounded-full bg-[#6d001a] transition-colors" />
                    <div
                      className={`h-1.5 rounded-full transition-colors ${
                        step === 2 ? "bg-[#6d001a]" : "bg-black/10"
                      }`}
                    />
                  </div>
                </div>

                {/* Form Card */}
                <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
                  {step === 1 ? (
                    <form
                      onSubmit={handleContinue}
                      noValidate
                      className="solution-panel"
                    >
                      <h2 className="font-display text-2xl font-extrabold text-black sm:text-3xl">
                        What do you need?
                      </h2>

                      {/* Services Checklist */}
                      <div className="mt-6">
                        <p className="text-xs font-bold text-black">
                          Services <span className="text-[#6d001a]">*</span>
                        </p>
                        <p className="mt-1 text-xs text-[#454545]">
                          Choose all that apply.
                        </p>

                        <div className="mt-3.5 grid gap-3 sm:grid-cols-2">
                          {SERVICE_OPTIONS.map((service) => {
                            const checked = form.services.includes(service);
                            return (
                              <label
                                key={service}
                                className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-sm transition ${
                                  checked
                                    ? "border-[#6d001a] bg-[#6d001a]/[0.04] font-semibold text-black"
                                    : "border-black/15 bg-white text-black hover:border-black/40"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleService(service)}
                                  className="sr-only"
                                />
                                <span
                                  aria-hidden="true"
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition ${
                                    checked
                                      ? "border-[#6d001a] bg-[#6d001a] text-white"
                                      : "border-black/35 bg-white"
                                  }`}
                                >
                                  {checked && (
                                    <svg
                                      className="h-3 w-3"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  )}
                                </span>
                                <span className="leading-snug">{service}</span>
                              </label>
                            );
                          })}
                        </div>
                        {errors.services && (
                          <p
                            role="alert"
                            className="mt-2 text-xs font-semibold text-[#6d001a]"
                          >
                            {errors.services}
                          </p>
                        )}
                      </div>

                      {/* Quick-add Prompt Chips */}
                      <div className="mt-7">
                        <p className="text-xs font-bold text-[#454545]">
                          Tap to add what you need
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {QUICK_NEED_CHIPS.map((chip) => {
                            const active = isChipSelected(chip);
                            return (
                              <button
                                key={chip}
                                type="button"
                                onClick={() => handleQuickChipClick(chip)}
                                className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                                  active
                                    ? "border-[#6d001a] bg-[#6d001a] text-white"
                                    : "border-black/15 bg-white text-[#454545] hover:bg-black/[0.05] hover:text-black"
                                }`}
                              >
                                {active ? `✓ ${chip}` : `+ ${chip}`}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* In Your Own Words */}
                      <div className="mt-7">
                        <label
                          htmlFor="quote-description"
                          className="block text-xs font-bold text-black"
                        >
                          In your own words{" "}
                          <span className="text-[#6d001a]">*</span>
                        </label>
                        <textarea
                          id="quote-description"
                          rows={4}
                          value={form.description}
                          onChange={(e) => {
                            setForm((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }));
                            if (errors.description) {
                              setErrors((prev) => ({
                                ...prev,
                                description: "",
                              }));
                            }
                          }}
                          placeholder="e.g. A website for my salon where clients can book online"
                          className="mt-2 w-full rounded-2xl border border-black/20 bg-white p-5 text-base text-black placeholder:text-black/40 focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20 sm:text-sm"
                        />
                        {errors.description && (
                          <p
                            role="alert"
                            className="mt-1.5 text-xs font-semibold text-[#6d001a]"
                          >
                            {errors.description}
                          </p>
                        )}
                      </div>

                      {/* Rough Budget */}
                      <div className="mt-7">
                        <p className="text-xs font-bold text-black">
                          Rough budget (KES, optional)
                        </p>
                        <p className="mt-1 text-xs text-[#454545]">
                          A rough range helps us suggest the right approach.
                          It's fine to say you're not sure.
                        </p>

                        <div className="mt-3.5 grid gap-3 sm:grid-cols-2">
                          {BUDGET_OPTIONS.map((option) => {
                            const selected = form.budget === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() =>
                                  setForm((prev) => ({
                                    ...prev,
                                    budget:
                                      prev.budget === option ? "" : option,
                                  }))
                                }
                                aria-pressed={selected}
                                className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm transition ${
                                  selected
                                    ? "border-[#6d001a] bg-[#6d001a]/[0.04] font-semibold text-black"
                                    : "border-black/15 bg-white text-black hover:border-black/40"
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                    selected
                                      ? "border-[#6d001a]"
                                      : "border-black/35"
                                  }`}
                                >
                                  {selected && (
                                    <span className="h-2 w-2 rounded-full bg-[#6d001a]" />
                                  )}
                                </span>
                                <span>{option}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Expandable Optional Details */}
                      <div className="mt-7 border-t border-black/10 pt-6">
                        <button
                          type="button"
                          onClick={() => setShowMoreDetails((prev) => !prev)}
                          aria-expanded={showMoreDetails}
                          className="cursor-pointer text-xs font-bold text-[#6d001a] underline underline-offset-4 hover:text-black"
                        >
                          {showMoreDetails
                            ? "Hide extra details"
                            : "Add more details (optional)"}
                        </button>
                        <p className="mt-1.5 text-xs text-[#454545]">
                          Company, current website, timeline, goals, examples
                          you like, or files.
                        </p>

                        {showMoreDetails && (
                          <div className="mt-5 space-y-4 rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label
                                  htmlFor="quote-company"
                                  className="block text-xs font-bold text-black"
                                >
                                  Company / Organization
                                </label>
                                <input
                                  id="quote-company"
                                  type="text"
                                  value={form.company}
                                  onChange={(e) =>
                                    setForm((prev) => ({
                                      ...prev,
                                      company: e.target.value,
                                    }))
                                  }
                                  placeholder="e.g. Acme Ltd"
                                  className="mt-1.5 w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="quote-website"
                                  className="block text-xs font-bold text-black"
                                >
                                  Current website
                                </label>
                                <input
                                  id="quote-website"
                                  type="url"
                                  value={form.website}
                                  onChange={(e) =>
                                    setForm((prev) => ({
                                      ...prev,
                                      website: e.target.value,
                                    }))
                                  }
                                  placeholder="https://example.com"
                                  className="mt-1.5 w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="quote-timeline"
                                className="block text-xs font-bold text-black"
                              >
                                Target timeline
                              </label>
                              <select
                                id="quote-timeline"
                                value={form.timeline}
                                onChange={(e) =>
                                  setForm((prev) => ({
                                    ...prev,
                                    timeline: e.target.value,
                                  }))
                                }
                                className="mt-1.5 w-full rounded-2xl border border-black/20 bg-white px-4 py-3 text-sm text-black focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20"
                              >
                                <option value="">Select a timeline</option>
                                {TIMELINE_OPTIONS.map((t) => (
                                  <option key={t} value={t}>
                                    {t}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label
                                htmlFor="quote-goals"
                                className="block text-xs font-bold text-black"
                              >
                                Goals or examples you like
                              </label>
                              <textarea
                                id="quote-goals"
                                rows={2}
                                value={form.goals}
                                onChange={(e) =>
                                  setForm((prev) => ({
                                    ...prev,
                                    goals: e.target.value,
                                  }))
                                }
                                placeholder="Links to sites/apps you admire or key business outcomes..."
                                className="mt-1.5 w-full rounded-2xl border border-black/20 bg-white p-4 text-sm text-black placeholder:text-black/40 focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="quote-files"
                                className="block text-xs font-bold text-black"
                              >
                                Files (brief, specs, or sketches)
                              </label>
                              <input
                                id="quote-files"
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="mt-1.5 block w-full text-xs text-[#454545] file:mr-3 file:cursor-pointer file:rounded-full file:border file:border-black/20 file:bg-white file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-black hover:file:bg-black hover:file:text-white"
                              />
                              {form.files.length > 0 && (
                                <ul className="mt-2 space-y-1">
                                  {form.files.map((file, idx) => (
                                    <li
                                      key={`${file.name}-${idx}`}
                                      className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-1.5 text-xs"
                                    >
                                      <span className="truncate pr-2 text-black">
                                        {file.name}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => removeFile(idx)}
                                        className="cursor-pointer font-semibold text-[#6d001a] hover:underline"
                                      >
                                        Remove
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Step 1 Footer CTA */}
                      <div className="mt-8 flex justify-end">
                        <button
                          type="submit"
                          className="group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#6d001a] hover:shadow-xl sm:w-auto sm:text-base"
                        >
                          Continue
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="solution-panel"
                    >
                      <h2 className="font-display text-2xl font-extrabold text-black sm:text-3xl">
                        How do we reach you?
                      </h2>
                      <p className="mt-2 text-xs leading-relaxed text-[#454545]">
                        We save your answers as you go, so we can still get back
                        to you if you don't get to send your request.
                      </p>

                      {/* Contact Inputs */}
                      <div className="mt-6 space-y-5">
                        <div>
                          <label
                            htmlFor="quote-name"
                            className="mb-2 block text-xs font-bold text-black"
                          >
                            Your name <span className="text-[#6d001a]">*</span>
                          </label>
                          <input
                            id="quote-name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => {
                              setForm((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }));
                              if (errors.name) {
                                setErrors((prev) => ({ ...prev, name: "" }));
                              }
                            }}
                            className="w-full rounded-2xl border border-black/20 bg-white px-5 py-3.5 text-base text-black placeholder:text-black/40 focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20 sm:text-sm"
                          />
                          {errors.name && (
                            <p
                              role="alert"
                              className="mt-1.5 text-xs font-semibold text-[#6d001a]"
                            >
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="quote-phone"
                            className="mb-2 block text-xs font-bold text-black"
                          >
                            Phone number{" "}
                            <span className="text-[#6d001a]">*</span>
                          </label>
                          <input
                            id="quote-phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => {
                              setForm((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }));
                              if (errors.phone) {
                                setErrors((prev) => ({ ...prev, phone: "" }));
                              }
                            }}
                            placeholder="0712 345 678"
                            className="w-full rounded-2xl border border-black/20 bg-white px-5 py-3.5 text-base text-black placeholder:text-black/40 focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20 sm:text-sm"
                          />
                          {errors.phone && (
                            <p
                              role="alert"
                              className="mt-1.5 text-xs font-semibold text-[#6d001a]"
                            >
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="quote-email"
                            className="mb-2 block text-xs font-bold text-black"
                          >
                            Email address{" "}
                            <span className="font-normal text-[#454545]">
                              {form.contactMethod === "Email"
                                ? "*"
                                : "(optional)"}
                            </span>
                          </label>
                          <input
                            id="quote-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => {
                              setForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }));
                              if (errors.email) {
                                setErrors((prev) => ({ ...prev, email: "" }));
                              }
                            }}
                            className="w-full rounded-2xl border border-black/20 bg-white px-5 py-3.5 text-base text-black placeholder:text-black/40 focus:border-[#6d001a] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/20 sm:text-sm"
                          />
                          <p className="mt-1.5 text-[11px] text-[#454545]">
                            Optional. If you add it, we send a copy of your
                            request there.
                          </p>
                          {errors.email && (
                            <p
                              role="alert"
                              className="mt-1.5 text-xs font-semibold text-[#6d001a]"
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Remember Details Checkbox */}
                        <div className="pt-1">
                          <label className="flex cursor-pointer items-start gap-3">
                            <input
                              type="checkbox"
                              checked={form.rememberDetails}
                              onChange={(e) =>
                                setForm((prev) => ({
                                  ...prev,
                                  rememberDetails: e.target.checked,
                                }))
                              }
                              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#6d001a]"
                            />
                            <span>
                              <span className="block text-sm font-medium text-black">
                                Remember my details on this device
                              </span>
                              <span className="mt-0.5 block text-[11px] leading-relaxed text-[#454545]">
                                Keeps your name, email and phone number in this
                                browser so forms fill themselves next time.
                                Nothing is sent to us.
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Preferred Contact Method */}
                      <div className="mt-7">
                        <p className="text-xs font-bold text-black">
                          How should we contact you?{" "}
                          <span className="text-[#6d001a]">*</span>
                        </p>
                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                          {CONTACT_METHODS.map((method) => {
                            const selected = form.contactMethod === method;
                            return (
                              <button
                                key={method}
                                type="button"
                                onClick={() => {
                                  setForm((prev) => ({
                                    ...prev,
                                    contactMethod: method,
                                  }));
                                  if (errors.email && method !== "Email") {
                                    setErrors((prev) => ({
                                      ...prev,
                                      email: "",
                                    }));
                                  }
                                }}
                                aria-pressed={selected}
                                className={`flex cursor-pointer items-center gap-2.5 rounded-2xl border px-4 py-3.5 text-sm transition ${
                                  selected
                                    ? "border-[#6d001a] bg-[#6d001a]/[0.04] font-semibold text-black"
                                    : "border-black/15 bg-white text-black hover:border-black/40"
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                    selected
                                      ? "border-[#6d001a]"
                                      : "border-black/35 bg-white"
                                  }`}
                                >
                                  {selected && (
                                    <span className="h-2 w-2 rounded-full bg-[#6d001a]" />
                                  )}
                                </span>
                                <span>{method}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Privacy & Optional Marketing Checkboxes */}
                      <div className="mt-7 space-y-3">
                        <div>
                          <label className="flex cursor-pointer items-start gap-3">
                            <input
                              type="checkbox"
                              checked={form.agreePrivacy}
                              onChange={(e) => {
                                setForm((prev) => ({
                                  ...prev,
                                  agreePrivacy: e.target.checked,
                                }));
                                if (errors.agreePrivacy) {
                                  setErrors((prev) => ({
                                    ...prev,
                                    agreePrivacy: "",
                                  }));
                                }
                              }}
                              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#6d001a]"
                            />
                            <span className="text-xs leading-relaxed text-black">
                              I agree to Azzmar storing and processing my
                              details to respond to this enquiry, as described
                              in the{" "}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setShowPrivacyModal(true);
                                }}
                                className="cursor-pointer font-semibold text-[#6d001a] underline underline-offset-2 hover:text-black"
                              >
                                Privacy Policy
                              </button>
                              .
                            </span>
                          </label>
                          {errors.agreePrivacy && (
                            <p
                              role="alert"
                              className="mt-1 pl-7 text-xs font-semibold text-[#6d001a]"
                            >
                              {errors.agreePrivacy}
                            </p>
                          )}
                        </div>

                        <label className="flex cursor-pointer items-start gap-3">
                          <input
                            type="checkbox"
                            checked={form.marketingOptIn}
                            onChange={(e) =>
                              setForm((prev) => ({
                                ...prev,
                                marketingOptIn: e.target.checked,
                              }))
                            }
                            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#6d001a]"
                          />
                          <span className="text-xs leading-relaxed text-[#454545]">
                            Also send me occasional tips and offers by email
                            (optional). You can unsubscribe at any time.
                          </span>
                        </label>
                      </div>

                      {/* Live Request Summary */}
                      <div className="mt-8 border-t border-black/10 pt-6">
                        <h3 className="font-display text-base font-bold text-black">
                          Your request
                        </h3>

                        <dl className="mt-3 divide-y divide-black/10 border-t border-black/10 text-sm">
                          <div className="py-3">
                            <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#454545]">
                              Services
                            </dt>
                            <dd className="mt-1 text-black">
                              {form.services.join(", ")}
                            </dd>
                          </div>

                          <div className="py-3">
                            <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#454545]">
                              What you need
                            </dt>
                            <dd className="mt-1 space-y-0.5 text-black">
                              {descriptionLines.map((line, idx) => (
                                <p key={idx}>{line}</p>
                              ))}
                            </dd>
                          </div>

                          {form.budget && (
                            <div className="py-3">
                              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#454545]">
                                Rough budget
                              </dt>
                              <dd className="mt-1 text-black">{form.budget}</dd>
                            </div>
                          )}

                          {(form.company ||
                            form.website ||
                            form.timeline ||
                            form.goals ||
                            form.files.length > 0) && (
                            <div className="py-3">
                              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#454545]">
                                Additional details
                              </dt>
                              <dd className="mt-1 space-y-0.5 text-xs text-[#454545]">
                                {form.company && <p>Company: {form.company}</p>}
                                {form.website && <p>Website: {form.website}</p>}
                                {form.timeline && (
                                  <p>Timeline: {form.timeline}</p>
                                )}
                                {form.goals && <p>Goals: {form.goals}</p>}
                                {form.files.length > 0 && (
                                  <p>
                                    Files:{" "}
                                    {form.files.map((f) => f.name).join(", ")}
                                  </p>
                                )}
                              </dd>
                            </div>
                          )}
                        </dl>

                        <div className="mt-3 border-t border-black/10 pt-3">
                          <button
                            type="button"
                            onClick={handleBackToStep1}
                            className="cursor-pointer text-xs font-bold text-[#6d001a] underline underline-offset-4 hover:text-black"
                          >
                            Edit
                          </button>
                        </div>
                      </div>

                      {/* Step 2 Bottom Actions */}
                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={handleBackToStep1}
                          className="cursor-pointer rounded-full border border-black/20 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="cursor-pointer rounded-full bg-[#6d001a] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-black hover:shadow-xl"
                        >
                          Send my request →
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Light Info Sidebar (matches portfolio card style) */}
              <aside className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-32">
                <span className="inline-block rounded-full bg-[#6d001a]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#6d001a]">
                  What Happens Next
                </span>

                <h2 className="font-display mt-4 text-xl font-extrabold text-black sm:text-2xl">
                  From request to clear proposal
                </h2>

                <ol className="mt-6 space-y-5">
                  {NEXT_STEPS.map((text, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6d001a] font-display text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[#454545]">
                        {text}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-7 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#6d001a]">
                    Direct Co-Founder Review
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#454545]">
                    {siteConfig.contact.responseTime} • Nairobi, Kisumu &amp;
                    Remote.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      {/* Privacy Policy Summary Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-privacy-title"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-black/10 bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="quote-privacy-title"
              className="font-display text-xl font-extrabold text-black"
            >
              Privacy &amp; Enquiry Data
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#454545]">
              Azzmar uses the details you provide on this form solely to review
              your project scope, respond via your chosen contact method, and
              prepare a quotation or proposal. We do not sell your personal
              information or share it with third-party advertisers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#454545]">
              If you enable "Remember my details on this device", your name,
              phone number, and email are stored only in your browser's local
              storage for your convenience.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="cursor-pointer rounded-full bg-black px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#6d001a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quote;
