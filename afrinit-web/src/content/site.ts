export interface ProjectItem {
  slug: string;
  category: string;
  title: string;
  summary: string;
  visualTheme: "orange" | "brown-500" | "brown-800";
  challenge: string;
  solution: string;
  result: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initial: string;
  color: "orange" | "green";
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconBg: "orange-100" | "green-100";
  iconColor: "orange-700" | "green-700";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  accent: "orange" | "green";
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  meta: {
    name: "Afrinit",
    title: "Afrinit | Software built in Africa, for businesses that mean to grow",
    description:
      "Afrinit designs and builds web platforms, mobile apps and internal systems for companies across the continent. Small senior team, clear scope, software that ships.",
    url: "https://afrinit.com",
    locale: "en_US",
  },

  navigation: {
    brand: "Afrinit",
    links: [
      { label: "Services", href: "#services" },
      { label: "Our work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
    ] as NavLink[],
    cta: {
      label: "Start a project",
      href: "#contact",
    },
  },

  hero: {
    eyebrow: "Technology company, founded 2026",
    title: "Software built in Africa, for businesses that mean to grow.",
    paragraph:
      "Afrinit designs and builds web platforms, mobile apps and internal systems for companies across the continent. Small senior team, clear scope, software that ships.",
    primaryCta: {
      label: "Start a project",
      href: "#contact",
    },
    secondaryCta: {
      label: "See our work",
      href: "#work",
    },
  },

  capabilities: [
    "React and Next.js",
    "Go and Node.js backends",
    "Mobile apps",
    "Cloud and DevOps",
    "UI and UX design",
  ],

  services: {
    eyebrow: "What we do",
    heading: "Everything from first design to live product.",
    intro:
      "One team across design, engineering and launch, so nothing gets lost between hand-offs.",
    items: [
      {
        id: "web-platforms",
        title: "Web platforms",
        description:
          "Marketing sites, customer portals and web apps built with React and Next.js, fast on slow networks and easy to maintain.",
        iconBg: "orange-100",
        iconColor: "orange-700",
      },
      {
        id: "mobile-apps",
        title: "Mobile apps",
        description:
          "Android and iOS apps designed for real-world use: low data, patchy connectivity, and mobile money in mind.",
        iconBg: "orange-100",
        iconColor: "orange-700",
      },
      {
        id: "custom-business-systems",
        title: "Custom business systems",
        description:
          "Finance, operations and management tools tailored to how your organisation actually works, replacing spreadsheets and paperwork.",
        iconBg: "orange-100",
        iconColor: "orange-700",
      },
      {
        id: "apis-integrations",
        title: "APIs and integrations",
        description:
          "Backend services in Go and Node.js, payment and messaging integrations, and clean APIs your other systems can rely on.",
        iconBg: "orange-100",
        iconColor: "orange-700",
      },
      {
        id: "ui-ux-design",
        title: "UI and UX design",
        description:
          "Research, wireframes and polished interfaces, delivered as a working design system your developers can build from.",
        iconBg: "orange-100",
        iconColor: "orange-700",
      },
      {
        id: "cloud-support-maintenance",
        title: "Cloud, support and maintenance",
        description:
          "Hosting, monitoring and ongoing improvements after launch, so your product stays secure, fast and up to date.",
        iconBg: "green-100",
        iconColor: "green-700",
      },
    ] as ServiceItem[],
  },

  work: {
    eyebrow: "Selected work",
    heading: "Products we have built and shipped.",
    cta: {
      label: "Discuss yours",
      href: "#contact",
    },
    items: [
      {
        slug: "fintech-platform",
        category: "FINTECH · WEB PLATFORM",
        title: "[PROJECT NAME]",
        summary:
          "[One sentence on the client, the problem and the result you delivered.]",
        visualTheme: "orange",
        challenge:
          "[Describe the specific technical and operational challenge the client faced before this project began.]",
        solution:
          "[Detail the architecture, technology choices, and implementation Afrinit delivered to solve the challenge.]",
        result:
          "[Summarise the measurable impact, launch outcomes, and current status of the platform.]",
      },
      {
        slug: "mobility-mobile-app",
        category: "MOBILITY · MOBILE APP",
        title: "[PROJECT NAME]",
        summary:
          "[One sentence on the client, the problem and the result you delivered.]",
        visualTheme: "brown-500",
        challenge:
          "[Describe the specific technical and operational challenge the client faced before this project began.]",
        solution:
          "[Detail the architecture, technology choices, and implementation Afrinit delivered to solve the challenge.]",
        result:
          "[Summarise the measurable impact, launch outcomes, and current status of the platform.]",
      },
      {
        slug: "operations-business-system",
        category: "OPERATIONS · BUSINESS SYSTEM",
        title: "[PROJECT NAME]",
        summary:
          "[One sentence on the client, the problem and the result you delivered.]",
        visualTheme: "brown-800",
        challenge:
          "[Describe the specific technical and operational challenge the client faced before this project began.]",
        solution:
          "[Detail the architecture, technology choices, and implementation Afrinit delivered to solve the challenge.]",
        result:
          "[Summarise the measurable impact, launch outcomes, and current status of the platform.]",
      },
    ] as ProjectItem[],
  },

  process: {
    eyebrow: "How we work",
    heading: "A simple process with no surprises.",
    steps: [
      {
        step: "01",
        title: "Discover",
        description:
          "We learn your goals, users and constraints, then agree scope, timeline and cost in writing.",
        accent: "orange",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Wireframes and clickable prototypes you can react to before a line of production code is written.",
        accent: "orange",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Short development cycles with working demos at each step, so you see real progress every week.",
        accent: "orange",
      },
      {
        step: "04",
        title: "Launch and support",
        description:
          "We deploy, train your team and stay on to monitor, fix and improve after go-live.",
        accent: "green",
      },
    ] as ProcessStep[],
  },

  about: {
    eyebrow: "About Afrinit",
    heading: "A young company with serious engineering habits.",
    paragraph1:
      "Afrinit was co-founded in 2026 by developers and designers who want African businesses to have software as good as anything built elsewhere. We are small on purpose: the people you meet in the first call are the people who build your product.",
    paragraph2: "[Add one line about your founders' background.]",
    values: [
      {
        title: "Built for local reality",
        description:
          "Mobile-first, light on data, and ready for M-Pesa and other local payment rails.",
      },
      {
        title: "Senior attention",
        description:
          "Founders stay involved in every project from kickoff to launch.",
      },
      {
        title: "Honest scoping",
        description:
          "Fixed scope, clear milestones and plain-language updates throughout.",
      },
      {
        title: "Code you own",
        description:
          "Clean, documented repositories handed over in full, with no lock-in.",
      },
    ] as ValueItem[],
  },

  team: {
    eyebrow: "The team",
    heading: "The people behind Afrinit.",
    members: [
      {
        name: "[FOUNDER NAME]",
        role: "[Role]",
        initial: "A",
        color: "orange",
      },
      {
        name: "[FOUNDER NAME]",
        role: "[Role]",
        initial: "F",
        color: "green",
      },
      {
        name: "[TEAM MEMBER]",
        role: "[Role]",
        initial: "R",
        color: "orange",
      },
      {
        name: "[TEAM MEMBER]",
        role: "[Role]",
        initial: "I",
        color: "green",
      },
    ] as TeamMember[],
  },

  contact: {
    heading: "Have a product in mind? Let us talk.",
    paragraph:
      "Tell us what you want to build. We reply within [RESPONSE TIME] with next steps and a rough estimate.",
    info: {
      email: "[EMAIL]",
      phone: "[PHONE]",
      location: "[LOCATION]",
    },
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "jane@company.com",
      messageLabel: "About your project",
      messagePlaceholder: "Tell us what you are looking to build...",
      submitButton: "Send message",
      submittingButton: "Sending...",
      successTitle: "Message sent",
      successMessage:
        "Thank you for reaching out. We will get back to you shortly.",
    },
  },

  footer: {
    brand: "Afrinit",
    tagline: "Software built in Africa, for businesses that mean to grow.",
    links: [
      { label: "Services", href: "#services" },
      { label: "Our work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ] as NavLink[],
    copyright: "2026 Afrinit. All rights reserved.",
  },
};
