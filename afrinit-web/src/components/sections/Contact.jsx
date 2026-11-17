import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="viewport-animation mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Get in touch
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#231c17]">
            {siteConfig.contact.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.contact.description}
          </p>
        </div>

        {/* Regional Hubs Strip */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.contact.hubs.map((hub, index) => (
            <div
              key={index}
              className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-white/70 p-7 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <span className="inline-block rounded-full bg-[#9c6849]/10 px-3 py-1 text-xs font-semibold text-[#9c6849]">
                  {hub.region}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold text-[#231c17]">
                  {hub.city}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5f5249]">
                  {hub.address}
                </p>
              </div>
              <div className="mt-4 space-y-1 border-t border-[#3d2d22]/10 pt-4 text-xs font-medium">
                <div>
                  <a
                    href={`mailto:${hub.email}`}
                    className="text-[#9c6849] hover:underline"
                  >
                    {hub.email}
                  </a>
                </div>
                <div className="text-[#5f5249]">{hub.phone}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info side panel */}
          <div className="viewport-animation delay-100 flex flex-col justify-between rounded-3xl bg-[#231c17] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#dcbf77]/10 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dcbf77]">
                <span className="h-2 w-2 rounded-full bg-[#dcbf77]" />
                Direct Communication
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                Let's engineer solutions together
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#d7c4ae]/80">
                Whether scoping a new mission-critical platform, modernizing existing infrastructure, or discussing long-term engineering capacity, our senior team is ready.
              </p>

              <div className="mt-8 rounded-xl bg-white/10 p-4 border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#dcbf77]">
                  Response Guarantee
                </p>
                <p className="mt-1 text-xs text-[#d7c4ae]">
                  {siteConfig.contact.responseTime}
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#d7c4ae]/60">
                  General Inquiries
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1 inline-block text-lg font-semibold text-[#dcbf77] transition-colors hover:text-white"
                >
                  {siteConfig.contact.emailLabel}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#d7c4ae]/60">
                  Follow Our Progress
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {siteConfig.footer.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-medium text-[#d7c4ae] transition-all hover:bg-white hover:text-[#231c17]"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="viewport-animation delay-200 rounded-3xl border border-[#3d2d22]/15 bg-white/70 p-10 shadow-sm">
            {formSubmitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#231c17]">
                  Thank you for reaching out!
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-[#5f5249]">
                  We have received your project details. A senior engineering director will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 rounded-full border border-[#3d2d22]/20 px-6 py-2.5 text-xs font-semibold text-[#231c17] hover:bg-[#d7c4ae]/30 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold text-[#231c17]"
                    >
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Jane Mwangi"
                      className="w-full rounded-xl border border-[#3d2d22]/20 bg-white px-4 py-2.5 text-sm text-[#231c17] placeholder:text-[#d7c4ae] transition-colors focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold text-[#231c17]"
                    >
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-[#3d2d22]/20 bg-white px-4 py-2.5 text-sm text-[#231c17] placeholder:text-[#d7c4ae] transition-colors focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="organization"
                      className="mb-1.5 block text-xs font-semibold text-[#231c17]"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="e.g. Acme Health Africa"
                      className="w-full rounded-xl border border-[#3d2d22]/20 bg-white px-4 py-2.5 text-sm text-[#231c17] placeholder:text-[#d7c4ae] transition-colors focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="mb-1.5 block text-xs font-semibold text-[#231c17]"
                    >
                      Project Category
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      className="w-full rounded-xl border border-[#3d2d22]/20 bg-white px-4 py-2.5 text-sm text-[#231c17] transition-colors focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20 cursor-pointer"
                    >
                      {siteConfig.contact.formFields
                        .find((f) => f.name === "inquiryType")
                        ?.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold text-[#231c17]"
                  >
                    Project overview & timeline *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project goals, target users, and expected timeline..."
                    className="w-full rounded-xl border border-[#3d2d22]/20 bg-white px-4 py-2.5 text-sm text-[#231c17] placeholder:text-[#d7c4ae] transition-colors focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#9c6849] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#9c6849]/20 transition-all duration-300 hover:bg-[#825238] cursor-pointer"
                >
                  {siteConfig.contact.submitLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-5-5 5 5-5 5"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
