import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Partners = ({ onNavigate }) => {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    track: "",
    message: "",
  });

  const tracks = [
    {
      number: "01",
      title: "Venture Co-Creation & Incubation",
      tag: "Zero-to-One",
      page: "projects",
      pageLabel: "View portfolio projects",
      description:
        "Partner directly with our five co-founders to architect, design, and build new digital ventures from the ground up with high-craft engineering and lean delivery.",
    },
    {
      number: "02",
      title: "Strategic Technology Partner",
      tag: "Long-Term Scale",
      page: "solutions",
      pageLabel: "Explore technology solutions",
      description:
        "Embed Azzmar as your dedicated engineering arm for mission-critical web platforms, custom ERP & CRM systems, resilient backend APIs, and cloud infrastructure.",
    },
    {
      number: "03",
      title: "Enterprise Modernization & Fintech Rails",
      tag: "Systems & Integration",
      page: "impact",
      pageLabel: "View enterprise impact & metrics",
      description:
        "Upgrade operational workflows, integrate mobile money (M-Pesa / Daraja) and banking protocols, and deploy dependable business software built for African connectivity realities.",
    },
    {
      number: "04",
      title: "Ecosystem & Developer Initiatives",
      tag: "Community & Impact",
      page: "archives",
      pageLabel: "Explore community milestones",
      description:
        "Collaborate on open digital public infrastructure, regional developer summits, technical training workshops, and ecosystem research across Nairobi, Kisumu, and East Africa.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Connect & Align",
      description:
        "Share your vision, current challenges, and desired timeline. We will meet, explore technical feasibility, and ensure our operating values and objectives align.",
    },
    {
      number: "02",
      title: "Shape the Architecture",
      description:
        "Together we define system architecture, data models, sprint milestones, and establish a transparent collaboration blueprint with direct founder access.",
    },
    {
      number: "03",
      title: "Build, Ship & Scale",
      description:
        "Direct sprint execution with our senior engineering team. Clean code, weekly demos, resilient deployments, and dependable long-term support as your product scales.",
    },
  ];

  const tickerItems = [
    "Shared Values",
    "Senior Co-Founder Attention",
    "Scalable Engineering",
    "Transparent Collaboration",
    "African Market Depth",
    "High-Craft Code",
    "Mutual Growth",
    "Production Dependability",
  ];

  const handleSelectTrack = (trackTitle) => {
    setSelectedTrack(trackTitle);
    setFormData((prev) => ({ ...prev, track: trackTitle }));
    const formElement = document.getElementById("partner-inquiry");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-view w-full overflow-hidden bg-white text-black">
      {/* 1. Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[820px] w-full border-b border-black/10 px-5 pt-12 pb-16 sm:px-8 lg:px-14 lg:pt-16 lg:pb-24">
        <div className="mx-auto grid max-w-[1440px] lg:min-h-[740px] lg:grid-cols-[56%_44%] gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="relative z-10 flex flex-col justify-center">
            {/* Eyebrow with decorative rule line */}
            <div className="viewport-animation mb-6 sm:mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-8 bg-[#6d001a]" />
              Better, together • Partnerships
            </div>

            {/* Giant Editorial Heading */}
            <h1 className="viewport-animation delay-100 font-display text-[clamp(2.3rem,6.5vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-black break-words">
              Let's build <br />
              something{" "}
              <span className="italic font-normal text-[#6d001a]">
                that matters.
              </span>
            </h1>

            {/* Narrative & Action Link */}
            <div className="viewport-animation delay-200 mt-8 sm:mt-10 flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between lg:pr-10">
              <p className="max-w-[480px] text-base sm:text-lg leading-relaxed text-[#454545]">
                We partner with ambitious enterprises, pioneering founders, and
                purpose-led organizations across Africa to engineer digital
                platforms that move industry, institutions, and communities
                forward.
              </p>

              <a
                href="#tracks"
                aria-label="Explore partnership opportunities"
                className="group inline-flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full border border-black/20 bg-white text-black shadow-sm transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 self-start md:self-auto"
              >
                <svg
                  className="size-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Signature Arch Placeholder & Visual */}
          <div className="viewport-animation delay-300 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[520px] aspect-[4/5] mx-auto">
              {/* Arch frame */}
              <div className="absolute inset-0 overflow-hidden rounded-t-[160px] sm:rounded-t-[240px] rounded-b-2xl bg-[#6d001a]/10 border border-black/10 shadow-2xl">
                {/* Visual using existing SVG asset */}
                <img
                  src="/hero/team.svg"
                  alt="Azzmar Technology Studio Architecture"
                  className="h-full w-full object-cover select-none transition-transform duration-700 ease-out hover:scale-105"
                  loading="eager"
                />
                {/* Ambient tint overlay */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Floating Pill Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-full bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-black shadow-lg border border-black/10">
                Studio Co-Founders • 20+ Products Shipped
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Ticker Band */}
      <section className="relative w-full bg-black py-5 text-white border-b border-black overflow-hidden">
        <div className="infinite-slider flex w-full">
          <div className="infinite-wrapper flex items-center gap-10 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            {tickerItems.concat(tickerItems).map((item, index) => (
              <div key={index} className="flex items-center gap-10 shrink-0">
                <span>{item}</span>
                <span className="text-white/40">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Opportunities / "Ways to work together" (id="tracks") */}
      <section id="tracks" className="relative w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          {/* Section Header */}
          <div className="mb-12 sm:mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="viewport-animation text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
                Ways to work together
              </p>
              <h2 className="viewport-animation delay-100 font-display mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-black break-words">
                Partnership, without the{" "}
                <span className="italic font-normal text-[#6d001a]">
                  playbook.
                </span>
              </h2>
            </div>
            <p className="viewport-animation delay-200 max-w-md text-base leading-relaxed text-[#454545] lg:ml-auto">
              The best initiatives rarely fit neatly into a rigid box. We stay
              curious, build collaboratively, and tailor every partnership around
              a shared thesis and measurable real-world outcomes.
            </p>
          </div>

          {/* Tracks Table */}
          <div className="border-t border-black/15">
            {tracks.map((track) => (
              <div
                key={track.number}
                className="group grid gap-5 border-b border-black/15 py-8 transition-colors duration-200 hover:bg-[#f5f5f5] md:grid-cols-[60px_1.1fr_1.4fr_auto] md:items-center md:px-6"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-[#6d001a]">
                  {track.number}
                </span>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-[#6d001a] transition-colors">
                    {track.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-block text-[11px] font-semibold text-[#6d001a] uppercase tracking-wider bg-[#6d001a]/10 px-2.5 py-0.5 rounded-full">
                      {track.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate(track.page)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6d001a] hover:text-black transition-colors cursor-pointer ml-1"
                    >
                      {track.pageLabel}
                      <span>→</span>
                    </button>
                  </div>
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-[#454545]">
                  {track.description}
                </p>

                <div className="flex items-center gap-3 justify-start md:justify-end">
                  <button
                    type="button"
                    onClick={() => handleSelectTrack(track.title)}
                    className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-xs font-bold text-black transition-all duration-300 hover:bg-black hover:text-white cursor-pointer shadow-xs"
                  >
                    <span>Inquire for track</span>
                    <span className="transition-transform group-hover:translate-x-0.5">↓</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Partner With Azzmar (Accent Band) */}
      <section className="relative w-full bg-[#f5f5f5] border-y border-black/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-32 text-black">
        <div className="mx-auto grid max-w-[1330px] gap-12 lg:gap-14 lg:grid-cols-[0.75fr_1.25fr] items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              Why Azzmar
            </p>
            <p className="mt-6 max-w-sm text-sm sm:text-base leading-relaxed text-[#454545]">
              We are an independent, founder-led software studio founded by five
              co-founders across Nairobi and Kisumu. That means direct access to
              senior engineers, honest communication, and the agility to adapt
              as your technology needs evolve.
            </p>
            <div className="mt-8 flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#6d001a]">
              <div>
                <span className="block text-2xl font-black text-black">
                  5
                </span>
                Co-Founders
              </div>
              <div className="h-8 w-px bg-black/15" />
              <div>
                <span className="block text-2xl font-black text-black">
                  20+
                </span>
                Shipped Systems
              </div>
            </div>
          </div>

          <div className="border-l-0 lg:border-l border-black/15 lg:pl-12">
            <blockquote className="font-display text-[clamp(1.5rem,3.5vw,3.2rem)] font-extrabold leading-[1.08] tracking-tight text-black">
              "Azzmar didn't just write code—they understood our operational
              realities on the ground and engineered software our team relies on
              every single day."
            </blockquote>

            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-black/20 bg-white font-display text-base font-bold text-[#6d001a] shadow-xs">
                EA
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-black">
                  East African Logistics &amp; Enterprise Partner
                </span>
                <span className="text-xs text-[#454545]">
                  Platform Co-Creation &amp; Daraja Integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works (Process Steps) */}
      <section className="relative w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
                How it works
              </p>
              <h2 className="font-display mt-5 text-[clamp(2.2rem,4.5vw,4.8rem)] font-extrabold leading-[0.95] tracking-tight text-black break-words">
                Simple by{" "}
                <span className="italic font-normal text-[#6d001a]">
                  design.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#454545] lg:ml-auto">
              We eliminate administrative friction. Direct engineering alignment,
              transparent sprints, and reliable delivery from kickoff to launch.
            </p>
          </div>

          <div className="border-t border-black/15">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-3 sm:gap-4 border-b border-black/15 py-8 sm:py-10 md:grid-cols-[80px_1fr_1.5fr] md:items-start"
              >
                <span className="font-display text-sm font-bold text-[#6d001a]">
                  {step.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-black">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#454545]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner Inquiry Section */}
      <section
        id="partner-inquiry"
        className="relative w-full px-5 pb-20 sm:px-8 sm:pb-24 lg:px-14"
      >
        <div className="mx-auto max-w-[1330px] rounded-3xl bg-black p-6 sm:p-12 lg:p-20 text-white border border-black/20 relative overflow-hidden shadow-2xl">
          {/* Subtle decorative circles */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-[440px] rounded-full border border-white/5 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-56 -left-20 size-[440px] rounded-full border border-white/5 pointer-events-none"
          />

          <div className="relative z-10 grid gap-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">
            {/* Left Column: Inquiry Header */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Let's talk
              </p>
              <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-white break-words">
                Have an idea in{" "}
                <span className="italic font-normal text-[#6d001a]">
                  mind?
                </span>
              </h2>
              <p className="mt-6 sm:mt-8 max-w-sm text-sm sm:text-base leading-relaxed text-white/70">
                Tell us where you'd like to go. We'll bring an open mind, deep
                engineering expertise, and a fresh perspective on African
                technology delivery.
              </p>

              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 space-y-4 text-xs text-white/60">
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-[#6d001a]" />
                  <span>Direct founder attention on every partnership</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-[#6d001a]" />
                  <span>Based in Nairobi &amp; Kisumu, open to remote worldwide</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Partner Inquiry Form */}
            <div className="bg-white/5 p-5 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#6d001a]/30 text-white mb-6">
                    <svg
                      className="size-8"
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
                  <h3 className="font-display text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                    Thank you, {formData.name || "partner"}! Our co-founders will
                    review your proposal and reach out within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        track: "",
                        message: "",
                      });
                    }}
                    className="mt-8 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white hover:text-black transition cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Your name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base sm:text-sm text-white placeholder-white/30 focus:border-[#6d001a] focus:outline-none focus:ring-1 focus:ring-[#6d001a] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Work email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base sm:text-sm text-white placeholder-white/30 focus:border-[#6d001a] focus:outline-none focus:ring-1 focus:ring-[#6d001a] transition"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        placeholder="Acme Ventures"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base sm:text-sm text-white placeholder-white/30 focus:border-[#6d001a] focus:outline-none focus:ring-1 focus:ring-[#6d001a] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                        I'm interested in
                      </label>
                      <select
                        value={formData.track || selectedTrack}
                        onChange={(e) => {
                          setSelectedTrack(e.target.value);
                          setFormData({ ...formData, track: e.target.value });
                        }}
                        className="w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-base sm:text-sm text-white focus:border-[#6d001a] focus:outline-none focus:ring-1 focus:ring-[#6d001a] transition"
                      >
                        <option value="">Select a partnership track</option>
                        {tracks.map((t) => (
                          <option key={t.number} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                        <option value="Custom Technical Advisory">
                          Technical Advisory &amp; Due Diligence
                        </option>
                        <option value="Other Collaboration">
                          Something else
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Tell us a little about your idea *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share what you are building, your audience, and what collaboration looks like..."
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base sm:text-sm text-white placeholder-white/30 focus:border-[#6d001a] focus:outline-none focus:ring-1 focus:ring-[#6d001a] transition resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <p className="text-[11px] leading-relaxed text-white/50 max-w-xs">
                      By submitting, you agree to our privacy standards. We'll
                      only use your details to respond.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#6d001a] px-8 py-3.5 text-xs font-bold text-white transition-all hover:bg-white hover:text-black hover:scale-102 cursor-pointer shadow-md w-full sm:w-auto shrink-0"
                    >
                      Send inquiry
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
