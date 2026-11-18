export const siteConfig = {
  meta: {
    name: "Afrinit",
    title: "Afrinit | Software Team",
    description:
      "Afrinit is a software team founded by five co-founders based in Nairobi and Kisumu, Kenya, open to remote work. We build custom web applications, business systems, backend APIs, and UI/UX design.",
    locale: "en_US",
  },

  navigation: {
    brand: "afrinit",
    links: [
      { label: "About", page: "about" },
      { label: "What We Do", page: "solutions" },
      { label: "Work", page: "projects" },
      { label: "Impact", page: "impact" },
      { label: "Our Team", page: "team" },
      { label: "Archives", page: "archives" },
      { label: "FAQ", page: "faq" },
    ],
    cta: {
      label: "Partner with us",
      page: "contact",
    },
  },

  hero: {
    eyebrow: "Nairobi / Kisumu / Remote",
    titleLine1: "Five co-founders building software",
    titleLine2: "crafted for real-world impact",
    paragraph:
      "Afrinit is a software team founded by five co-founders based in Nairobi and Kisumu, Kenya, and open to remote work. We build custom web applications, business systems, and backend infrastructure.",
    primaryCta: {
      label: "Check our work",
      page: "projects",
    },
    secondaryCta: {
      label: "Get in touch",
      page: "contact",
    },
    image: {
      // Expected path: public/hero/team.jpg (4:5 aspect ratio)
      src: "",
      alt: "Afrinit team or workspace",
    },
    stats: [
      { value: "20+", label: "Products shipped by our team" },
      { value: "5", label: "Co-founders" },
      { value: "2", label: "Kenyan cities, plus remote" },
    ],
  },

  corePillars: [
    {
      title: "Custom Web Applications",
      subheading: "Responsive, accessible, and fast web software tailored to your workflow",
      description:
        "We build bespoke web applications from requirements to deployment. Designed to fit your operational processes, user expectations, and infrastructure realities.",
      badge: "Web Applications",
      page: "solutions",
    },
    {
      title: "Business & Management Systems",
      subheading: "Streamlined operational tools, internal portals, and dashboards",
      description:
        "We develop management platforms that consolidate data, eliminate manual paperwork, and provide clear operational visibility.",
      badge: "Business Systems",
      page: "solutions",
    },
    {
      title: "Backend, APIs & Maintenance",
      subheading: "Reliable service architectures, database design, and ongoing updates",
      description:
        "We architect robust APIs and data layers, connect third-party services, and maintain your platforms so they stay fast, secure, and dependable.",
      badge: "APIs & Support",
      page: "solutions",
    },
  ],

  // Real partner logos will be added when confirmed; empty for now
  partnerLogos: [],

  howWeWorkStatement: {
    heading: "How we work",
    quote:
      "We work directly as co-founders with our clients. We take the time to understand your operational context, communicate plainly, and ship software iteratively.",
    cta: "About our approach",
  },

  preFooterCta: {
    eyebrow: "Ready to build something reliable?",
    heading: "Curious how we can help your organization?",
    buttonText: "Get in touch",
  },

  about: {
    title: "Who we are",
    description:
      "Afrinit is a software team founded by five co-founders: Michael Clay, Valentine Awili, Mercy Moraa, Millicent Adhiambo, and Grace Nyaboke. We are based in Nairobi and Kisumu, Kenya, and we are open to remote work. Collectively, our team has shipped more than 20 products.",
    image: {
      // Expected path: public/about/workspace.jpg (16:9 aspect ratio)
      src: "",
      alt: "Our workspace in Nairobi or Kisumu",
    },
    points: [
      {
        title: "Local context & craft",
        description:
          "We build practical software informed by hands-on experience with regional infrastructure, user workflows, and connectivity constraints.",
      },
      {
        title: "Direct co-founder collaboration",
        description:
          "When you partner with Afrinit, you collaborate directly with the five co-founders building your product—no layers of middlemen or bureaucracy.",
      },
      {
        title: "Long-term ownership & clean code",
        description:
          "We deliver clean, fully documented repositories with complete client intellectual property ownership and transparent communication.",
      },
    ],
    pillars: [
      {
        title: "Practical Engineering",
        description:
          "We build applications that perform well, handle real-world network conditions, and remain straightforward to maintain.",
      },
      {
        title: "Direct Collaboration",
        description:
          "Work directly with the co-founders from discovery to launch, ensuring your business goals are reflected in every line of code.",
      },
      {
        title: "Modern, Proven Tooling",
        description:
          "We rely on battle-tested frameworks, secure architectures, and automated testing to produce dependable software.",
      },
      {
        title: "Complete Client Ownership",
        description:
          "You retain 100% ownership of your source code, repositories, configurations, and database assets with zero vendor lock-in.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Requirements",
        description:
          "We sit down with you to understand your operational bottlenecks, business objectives, and user needs, defining a clear scope before writing code.",
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description:
          "We create intuitive user flows and wireframes, validating interfaces and interactions early so the end product feels right.",
      },
      {
        step: "03",
        title: "Iterative Development",
        description:
          "We build in iterative milestones with regular demos, giving you hands-on visibility into progress and room for feedback as features take shape.",
      },
      {
        step: "04",
        title: "Deployment & Maintenance",
        description:
          "We launch on stable cloud environments, verify performance, and provide continuous support and updates as your system grows.",
      },
    ],
    mission: {
      title: "Our Mission",
      heading: "Building dependable software that solves everyday problems",
      description:
        "We exist to build well-crafted digital tools that address genuine operational needs for businesses, organizations, and teams.",
    },
    vision: {
      title: "Our Vision",
      heading: "A trusted engineering collective from Kenya to the world",
      description:
        "We strive to grow sustainably as an honest, technically rigorous software team known for quality code, plain communication, and long-term partnerships.",
    },
  },

  solutions: {
    title: "What we build & solve",
    description:
      "We build custom web applications, business and management systems, backend and APIs, UI/UX design, and provide ongoing maintenance.",
    services: [
      {
        title: "Custom Web Applications",
        description:
          "Responsive, accessible, and fast web applications built with modern frontend and backend frameworks.",
        icon: "code",
        details:
          "We engineer custom web apps tailored to your operational workflows, customer portals, and internal tools with clean, maintainable architectures.",
      },
      {
        title: "Business & Management Systems",
        description:
          "Bespoke operational tools, administrative dashboards, inventory, and record systems.",
        icon: "transform",
        details:
          "Streamline operations with purpose-built systems that consolidate data, eliminate manual paperwork, and provide clear management reporting.",
      },
      {
        title: "Backend & APIs",
        description:
          "Robust REST and service APIs, relational databases, and secure system integrations.",
        icon: "cloud",
        details:
          "We architect scalable backend services, structured database models, authentication, and third-party service integrations engineered for high data integrity.",
      },
      {
        title: "UI/UX Design",
        description:
          "User-centered interface design, interactive prototypes, and practical design systems.",
        icon: "design",
        details:
          "We design clean, intuitive digital experiences with clear navigation and consistent visual components that make complex workflows feel effortless.",
      },
      {
        title: "Ongoing Maintenance",
        description:
          "Reliable system updates, performance optimizations, bug fixes, and continuous technical evolution.",
        icon: "growth",
        details:
          "Software needs care after launch. We provide ongoing support, monitoring, security patching, and feature additions to keep your platforms running smoothly.",
      },
    ],
    sectors: [
      {
        title: "Commerce & Retail",
        description:
          "Order management, product catalogs, customer checkouts, and inventory sync systems.",
        badge: "Commerce",
      },
      {
        title: "Healthcare & Operations",
        description:
          "Patient appointment scheduling, clinic records management, and administrative tracking portals.",
        badge: "Healthcare",
      },
      {
        title: "Education & Learning",
        description:
          "Student information systems, curriculum portals, and course administration tools.",
        badge: "Education",
      },
      {
        title: "Logistics & Administration",
        description:
          "Fleet scheduling, operational dashboards, workflow management, and reporting engines.",
        badge: "Operations",
      },
    ],
    techStack: [
      {
        category: "Web & Frontend",
        technologies: ["React 19", "Vite", "Tailwind CSS v4", "JavaScript", "HTML5 & CSS3"],
      },
      {
        category: "Backend & APIs",
        technologies: ["Node.js", "Express", "Go", "Python", "REST APIs"],
      },
      {
        category: "Databases & Storage",
        technologies: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
      },
      {
        category: "DevOps & Cloud",
        technologies: ["Docker", "Linux", "GitHub Actions", "Cloud Hosting"],
      },
    ],
  },

  capabilities: {
    title: "Our Disciplines & Capabilities",
    subtitle: "Services & Capabilities",
    description:
      "A multidisciplinary team covering product strategy, user experience design, and software engineering.",
    groups: [
      {
        name: "Research & Strategy",
        badge: "Discovery",
        description: "Domain discovery, technical scoping, and workflow mapping.",
        items: [
          { name: "Requirements Scoping", desc: "Technical roadmaps and architecture advisory" },
          { name: "UX Research", desc: "User research, wireframing, and interaction flows" },
          { name: "Workflow Mapping", desc: "Analyzing operational bottlenecks and data flows" },
        ],
      },
      {
        name: "Design & Prototyping",
        badge: "UI/UX",
        description: "Practical interfaces and consistent component designs.",
        items: [
          { name: "UI Design", desc: "Component libraries and user interfaces" },
          { name: "Interactive Prototyping", desc: "Clickable prototypes for early user validation" },
          { name: "Design Systems", desc: "Reusable components and style guidelines" },
        ],
      },
      {
        name: "Engineering & Maintenance",
        badge: "Engineering",
        description: "Clean code, robust APIs, and dependable ongoing maintenance.",
        items: [
          { name: "Web Applications", desc: "Modern, responsive client web applications" },
          { name: "Backend Services", desc: "RESTful APIs and secure database integrations" },
          { name: "Ongoing Support", desc: "Monitoring, performance updates, and bug fixes" },
        ],
      },
    ],
  },

  projects: {
    title: "Our work & products",
    description:
      "Explore the products and software platforms built by our team.",
    // Starts empty; populated when case studies are ready.
    items: [],
    perPage: 6,
  },

  impact: {
    title: "Our impact & milestones",
    description:
      "We measure our impact through the products we deliver, the challenges we solve, and our growth as an engineering team.",
    stats: [
      { value: "20+", label: "Products shipped by our team" },
      { value: "5", label: "Co-founders" },
      { value: "2", label: "Kenyan cities, plus remote" },
    ],
    // Testimonials start empty and will only render when real entries exist
    testimonials: [],
  },

  team: {
    title: "Our Team",
    description:
      "Afrinit is a software team founded by five co-founders based in Nairobi and Kisumu, Kenya, and open to remote work.",
    members: [
      {
        name: "Michael Clay",
        role: "Co-founder",
        // Expected path: public/team/michael-clay.jpg (4:3 aspect ratio)
        image: "",
        title: "", // TODO: add title
        bio: "", // TODO: add bio
        links: {
          github: "", // TODO: add GitHub URL
          linkedin: "", // TODO: add LinkedIn URL
          email: "", // TODO: add email
        },
      },
      {
        name: "Valentine Awili",
        role: "Co-founder",
        // Expected path: public/team/valentine-awili.jpg (4:3 aspect ratio)
        image: "",
        title: "", // TODO: add title
        bio: "", // TODO: add bio
        links: {
          github: "", // TODO: add GitHub URL
          linkedin: "", // TODO: add LinkedIn URL
          email: "", // TODO: add email
        },
      },
      {
        name: "Mercy Moraa",
        role: "Co-founder",
        // Expected path: public/team/mercy-moraa.jpg (4:3 aspect ratio)
        image: "",
        title: "", // TODO: add title
        bio: "", // TODO: add bio
        links: {
          github: "", // TODO: add GitHub URL
          linkedin: "", // TODO: add LinkedIn URL
          email: "", // TODO: add email
        },
      },
      {
        name: "Millicent Adhiambo",
        role: "Co-founder",
        // Expected path: public/team/millicent-adhiambo.jpg (4:3 aspect ratio)
        image: "",
        title: "", // TODO: add title
        bio: "", // TODO: add bio
        links: {
          github: "", // TODO: add GitHub URL
          linkedin: "", // TODO: add LinkedIn URL
          email: "", // TODO: add email
        },
      },
      {
        name: "Grace Nyaboke",
        role: "Co-founder",
        // Expected path: public/team/grace-nyaboke.jpg (4:3 aspect ratio)
        image: "",
        title: "", // TODO: add title
        bio: "", // TODO: add bio
        links: {
          github: "", // TODO: add GitHub URL
          linkedin: "", // TODO: add LinkedIn URL
          email: "", // TODO: add email
        },
      },
    ],
    values: [
      {
        title: "Ownership",
        description:
          "We take direct responsibility for our code, architectures, and delivery. When we build something, we stand behind it.",
      },
      {
        title: "Local context",
        description:
          "We understand Kenyan and regional market realities, device constraints, and practical user needs.",
      },
      {
        title: "Learning together",
        description:
          "We continuously sharpen our technical craft, share knowledge across the team, and grow through every product we ship.",
      },
      {
        title: "Plain communication",
        description:
          "We speak clearly, set realistic expectations, and collaborate openly without technical jargon or pretense.",
      },
    ],
  },

  archives: {
    title: "Archives",
    description:
      "A running record of events we have attended, products we have built, and milestones in our journey.",
    stat: "20+ products shipped by our team",
    /*
    Archive Entry Template:
    {
      type: "event", // "event" | "product" | "milestone"
      title: "Entry Title",
      date: "YYYY-MM", // "YYYY-MM", "YYYY-MM-DD", or "" if undated
      location: "City, Country", // optional
      description: "Description of the event, product, or milestone.",
      tags: ["Tag1", "Tag2"],
      image: "", // Expected path: public/archives/<slug>.jpg (16:9 aspect ratio)
      link: "", // optional external URL
      linkLabel: "", // optional, e.g. "View Product" or "Read Recap"
    }
    */
    items: [
      {
        type: "milestone",
        title: "20+ products shipped",
        date: "",
        location: "Kenya",
        description:
          "Our co-founders and team have collectively built and shipped more than 20 software products across web, mobile, and enterprise platforms.",
        tags: ["Milestone", "Products", "Software"],
        image: "", // Expected path: public/archives/20-products-shipped.jpg (16:9 aspect ratio)
        link: "",
        linkLabel: "",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "Clear answers to common questions about who we are, what we build, and how we work.",
    questions: [
      {
        question: "Who is Afrinit?",
        answer:
          "Afrinit is a software team founded by five co-founders: Michael Clay, Valentine Awili, Mercy Moraa, Millicent Adhiambo, and Grace Nyaboke. We are based in Nairobi and Kisumu, Kenya, and are open to remote work.",
      },
      {
        question: "What kinds of software do you build?",
        answer:
          "We build custom web applications, business and management systems, backend services, and APIs, as well as UI/UX design and ongoing maintenance.",
      },
      {
        question: "How many products has the team shipped?",
        answer:
          "Collectively, our co-founders and team have shipped more than 20 software products.",
      },
      {
        question: "Do we own the intellectual property and code you develop?",
        answer:
          "Yes, 100%. You retain full ownership of all source code, architecture designs, repositories, and technical assets with zero vendor lock-in.",
      },
      {
        question: "How do you work with clients?",
        answer:
          "We work directly with you as co-founders from discovery to launch. We prioritize clear communication, rapid prototyping, iterative development, and thorough testing.",
      },
      {
        question: "Where are you located and do you work remotely?",
        answer:
          "We are based in Nairobi and Kisumu, Kenya, and we work with clients both locally and remotely across time zones.",
      },
    ],
  },

  contact: {
    title: "Get in touch",
    description:
      "Have a software project, operational challenge, or idea you'd like to discuss? Reach out and we will get back to you promptly.",
    email: "", // TODO: add contact email
    emailLabel: "",
    responseTime: "We reply promptly on business days",
    formFields: [
      { name: "name", label: "Your name", type: "text", placeholder: "e.g. Jane Doe" },
      { name: "email", label: "Email address", type: "email", placeholder: "jane@company.com" },
      {
        name: "organization",
        label: "Company / Organization",
        type: "text",
        placeholder: "e.g. Acme Ltd",
      },
      {
        name: "inquiryType",
        label: "Project Category",
        type: "select",
        options: [
          "Custom Web Applications",
          "Business & Management Systems",
          "Backend & APIs",
          "UI/UX Design",
          "Ongoing Maintenance",
          "General Inquiry",
        ],
      },
      {
        name: "message",
        label: "Project overview & timeline",
        type: "textarea",
        placeholder: "Tell us about your project goals, key requirements, or expected timeline...",
      },
    ],
    submitLabel: "Send inquiry",
    hubs: [
      {
        city: "Nairobi",
        region: "Kenya",
        description: "Available for meetings and collaboration in Nairobi.",
      },
      {
        city: "Kisumu",
        region: "Kenya",
        description: "Available for meetings and collaboration in Kisumu.",
      },
      {
        city: "Remote",
        region: "Worldwide",
        description: "Fully set up for remote collaboration across time zones.",
      },
    ],
  },

  footer: {
    brand: "afrinit",
    tagline: "Software engineered by five co-founders in Kenya.",
    email: "", // TODO: add footer email
    quickLinks: [
      { label: "About Afrinit", page: "about" },
      { label: "What We Do", page: "solutions" },
      { label: "Work", page: "projects" },
      { label: "Impact", page: "impact" },
      { label: "Our Team", page: "team" },
      { label: "Archives", page: "archives" },
      { label: "Frequently Asked Questions", page: "faq" },
      { label: "Contact", page: "contact" },
    ],
    servicesList: [
      "Custom Web Applications",
      "Business & Management Systems",
      "Backend & APIs",
      "UI/UX Design",
      "Ongoing Maintenance",
    ],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/AFRINIT-TECH" },
    ],
    copyright: "© 2026 Afrinit. All rights reserved.",
  },
};
