"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    // Client-side validation with zod
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      // Focus first error field
      const firstField = Object.keys(fieldErrors)[0];
      const element = document.getElementById(firstField);
      element?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setSubmitError(data.message || "Failed to submit form. Please try again.");
        return;
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitError("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 text-ink-900 shadow-xl flex flex-col items-center text-center space-y-4"
      >
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-ink-900">
          {siteConfig.contact.form.successTitle}
        </h3>
        <p className="text-ink-700 max-w-sm text-[16px] leading-[1.6]">
          {siteConfig.contact.form.successMessage}
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-4 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-xl bg-brown-950 text-sand-100 font-bold hover:bg-brown-900 focus-visible:outline-2 focus-visible:outline-brown-950 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 md:p-10 text-ink-900 shadow-xl space-y-6"
    >
      {submitError && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-orange-100 text-orange-700 border border-orange-700/20 text-sm font-medium"
        >
          {submitError}
        </div>
      )}

      {/* Your Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-[15px] font-bold text-ink-900"
        >
          {siteConfig.contact.form.nameLabel}{" "}
          <span className="text-orange-700" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder={siteConfig.contact.form.namePlaceholder}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border bg-white text-ink-900 placeholder:text-ink-700/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-500 ${
            errors.name
              ? "border-orange-700 focus:border-orange-700"
              : "border-neutral-200 focus:border-orange-500"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-sm font-medium text-orange-700">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-[15px] font-bold text-ink-900"
        >
          {siteConfig.contact.form.emailLabel}{" "}
          <span className="text-orange-700" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={siteConfig.contact.form.emailPlaceholder}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border bg-white text-ink-900 placeholder:text-ink-700/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-500 ${
            errors.email
              ? "border-orange-700 focus:border-orange-700"
              : "border-neutral-200 focus:border-orange-500"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-sm font-medium text-orange-700">
            {errors.email}
          </p>
        )}
      </div>

      {/* About your project */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-[15px] font-bold text-ink-900"
        >
          {siteConfig.contact.form.messageLabel}{" "}
          <span className="text-orange-700" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder={siteConfig.contact.form.messagePlaceholder}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full min-h-[120px] px-4 py-3 rounded-xl border bg-white text-ink-900 placeholder:text-ink-700/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-orange-500 resize-y ${
            errors.message
              ? "border-orange-700 focus:border-orange-700"
              : "border-neutral-200 focus:border-orange-500"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-sm font-medium text-orange-700">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] px-8 py-3 rounded-xl bg-brown-950 text-sand-100 font-bold text-[16px] hover:bg-brown-900 active:bg-brown-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-950 transition-colors duration-150 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed shadow-md"
      >
        {isSubmitting
          ? siteConfig.contact.form.submittingButton
          : siteConfig.contact.form.submitButton}
      </button>
    </form>
  );
};
