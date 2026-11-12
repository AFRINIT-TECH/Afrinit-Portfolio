import { siteConfig } from "@/content/site";

export const Contact = () => {
  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Get in touch
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.contact.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-[#5f5249]">
            {siteConfig.contact.description}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#231c17] p-10 text-white shadow-xl">
            <div>
              <h3 className="font-display text-2xl font-semibold">Let's build together</h3>
              <p className="mt-4 text-sm leading-6 text-[#d7c4ae]/80">
                Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you.
              </p>
            </div>
            <div className="mt-10 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#d7c4ae]/60">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1 inline-block text-lg font-semibold text-[#dcbf77] transition-colors hover:text-white"
                >
                  {siteConfig.contact.emailLabel}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#d7c4ae]/60">Social</p>
                <div className="mt-2 flex gap-4">
                  {siteConfig.footer.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold transition-all hover:bg-white hover:text-[#231c17]"
                      aria-label={social.label}
                    >
                      {social.label.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            className="flex flex-col gap-6 rounded-2xl border border-[#3d2d22]/15 bg-white/60 p-10 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message! We'll get back to you soon.");
            }}
          >
            {siteConfig.contact.formFields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="mb-2 block text-sm font-semibold text-[#231c17]"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows="5"
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-[#3d2d22]/20 bg-white px-4 py-3 text-sm text-[#231c17] placeholder:text-[#d7c4ae] transition-colors focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-[#3d2d22]/20 bg-white px-4 py-3 text-sm text-[#231c17] placeholder:text-[#d7c4ae] transition-colors focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
                    required
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#9c6849]/20 transition-all duration-300 hover:bg-[#825238]"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
