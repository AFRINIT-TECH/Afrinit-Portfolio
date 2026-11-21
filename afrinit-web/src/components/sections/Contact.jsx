import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const hasEmail = Boolean(siteConfig.contact.email && siteConfig.contact.email.trim());
  const hubs = siteConfig.contact.hubs || [];

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Contact Hero */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="w-full">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Contact • Get In Touch
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-[#231c17] max-w-5xl">
            {siteConfig.contact.title}
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {siteConfig.contact.description}
          </p>
        </div>
      </section>

      {/* 2. Main Contact Form & Direct Info Grid */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="w-full grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
          {/* Left: Project Request Form */}
          <div className="viewport-animation rounded-3xl border border-[#3d2d22]/15 bg-white/90 p-8 sm:p-12 shadow-sm">
            {formSubmitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6 shadow-sm">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-3xl font-extrabold text-[#231c17]">
                  Thank you for reaching out!
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#5f5249]">
                  We have received your message. Our team will review your inquiry and get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 rounded-full border border-[#3d2d22]/20 bg-white px-8 py-3 text-xs font-bold text-[#231c17] hover:bg-[#231c17] hover:text-white transition cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Text Inputs */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-bold text-[#231c17]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      className="w-full rounded-2xl border border-[#3d2d22]/20 bg-white px-5 py-3.5 text-sm text-[#231c17] placeholder:text-[#5f5249]/40 focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-bold text-[#231c17]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-2xl border border-[#3d2d22]/20 bg-white px-5 py-3.5 text-sm text-[#231c17] placeholder:text-[#5f5249]/40 focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className="mb-2 block text-xs font-bold text-[#231c17]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="org"
                    name="org"
                    placeholder="e.g. Acme Ltd"
                    className="w-full rounded-2xl border border-[#3d2d22]/20 bg-white px-5 py-3.5 text-sm text-[#231c17] placeholder:text-[#5f5249]/40 focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-bold text-[#231c17]">
                    Project Scope • What are you looking to build? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell us about your project goals, key requirements, or timeline..."
                    className="w-full rounded-2xl border border-[#3d2d22]/20 bg-white p-5 text-sm text-[#231c17] placeholder:text-[#5f5249]/40 focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#231c17] px-8 py-5 text-base font-bold text-white transition-all duration-300 hover:bg-[#9c6849] cursor-pointer shadow-lg hover:shadow-xl self-start"
                >
                  {siteConfig.contact.submitLabel || "Send inquiry"} →
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Information Panel */}
          <div className="viewport-animation delay-100 flex flex-col justify-between rounded-3xl bg-[#231c17] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#dcbf77]/10 blur-3xl" />
            <div className="relative z-10">
              <span className="inline-block rounded-full bg-[#dcbf77]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#dcbf77]">
                Direct Contact
              </span>
              <h2 className="font-display mt-5 text-2xl sm:text-3xl font-extrabold text-white">
                Afrinit Software Team
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#d7c4ae]/80">
                Founded by five co-founders based in Nairobi and Kisumu, Kenya, and open to remote work.
              </p>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 border border-white/10">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#dcbf77]">
                  Response Time
                </p>
                <p className="mt-1 text-xs text-[#d7c4ae]">
                  {siteConfig.contact.responseTime}
                </p>
              </div>

              {/* Email block - hidden while empty */}
              {hasEmail && (
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#d7c4ae]/60">
                      Email Inquiries
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="mt-1 block text-lg font-bold text-[#dcbf77] hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links (GitHub only) */}
            {siteConfig.footer.socialLinks && siteConfig.footer.socialLinks.length > 0 && (
              <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                <p className="text-xs uppercase tracking-wider text-[#d7c4ae]/60 mb-3">
                  Connect with us
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.footer.socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-3.5 py-1 text-xs text-[#d7c4ae] hover:bg-white hover:text-[#231c17] transition"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Three Simple Cards: Nairobi, Kisumu, Remote (NO addresses or phone numbers) */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40 mt-16">
        <div className="w-full">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Our Locations
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#231c17]">
              Where we are based
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {hubs.map((hub, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/90 p-8 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <span className="inline-block rounded-full bg-[#9c6849]/15 px-3 py-1 text-xs font-semibold text-[#9c6849]">
                    {hub.region}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-bold text-[#231c17]">
                    {hub.city}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5f5249]">
                    {hub.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
