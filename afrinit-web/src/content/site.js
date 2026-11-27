export const siteConfig = {
  maintenanceBanner: {
    enabled: true,
    badge: "Under Maintenance",
    message:
      "Platform is currently under maintenance — Please do not mind the placeholders while updates are underway",
  },
  meta: {
    name: "Azzmar",
    title: "Azzmar | Software Team",
    description:
      "Azzmar is a software team founded by five co-founders based in Nairobi and Kisumu, Kenya, open to remote work. We build custom web applications, business systems, backend APIs, and UI/UX design.",
    locale: "en_US",
  },

  navigation: {
    brand: "azzmar",
    links: [
      { label: "About", page: "about" },
      { label: "What We Do", page: "solutions" },
      { label: "Work", page: "projects" },
      { label: "Partners", page: "partners" },
      { label: "Impact", page: "impact" },
      { label: "Our Team", page: "team" },
      { label: "FAQ", page: "faq" },
    ],
    cta: {
      label: "Partner with us",
      page: "partners",
    },
  },

  hero: {
    eyebrow: "Nairobi / Kisumu / Remote",
    titleLine1: "Five co-founders building software",
    titleLine2: "crafted for real-world impact",
    paragraph:
      "Azzmar is a software team founded by five co-founders based in Nairobi and Kisumu, Kenya, and open to remote work. We build custom web applications, business systems, and backend infrastructure.",
    primaryCta: {
      label: "Check our work",
      page: "projects",
    },
    secondaryCta: {
      label: "Explore partnerships",
      page: "partners",
    },
    image: {
      src: "/hero/team.svg",
      alt: "Azzmar Software Studio Architecture and Engineering",
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
      page: "projects",
      cta: "Explore web projects",
    },
    {
      title: "Business & Management Systems",
      subheading: "Streamlined operational tools, internal portals, and dashboards",
      description:
        "We develop management platforms that consolidate data, eliminate manual paperwork, and provide clear operational visibility.",
      badge: "Business Systems",
      page: "solutions",
      cta: "Explore business systems",
      navParams: { serviceIndex: 1 },
    },
    {
      title: "Backend, APIs & Maintenance",
      subheading: "Reliable service architectures, database design, and ongoing updates",
      description:
        "We architect robust APIs and data layers, connect third-party services, and maintain your platforms so they stay fast, secure, and dependable.",
      badge: "APIs & Support",
      page: "partners",
      cta: "Explore tech partnerships",
    },
  ],

  // Collaborating partners and ecosystem platforms
  partnerLogos: [
    { name: "Rift Freight Logistics", sector: "Supply Chain" },
    { name: "Western Agro Co-op", sector: "AgriTech" },
    { name: "CareLink Community Health", sector: "Healthcare" },
    { name: "Apex Commercial Realty", sector: "Real Estate" },
    { name: "Nexus Retail Network", sector: "Commerce" },
    { name: "East Africa Tech Ecosystem", sector: "Dev Network" },
  ],

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
      "Azzmar is a software team founded by five co-founders: Michael Clay, Mercy Moraa, Valentine Awili, Millicent Adhiambo, and Grace Nyaboke. We are based in Nairobi and Kisumu, Kenya, and we are open to remote work. Collectively, our team has shipped more than 20 products.",
    image: {
      src: "/about/workspace.svg",
      alt: "Azzmar workspace environment in Nairobi and Kisumu",
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
          "When you partner with Azzmar, you collaborate directly with the five co-founders building your product—no layers of middlemen or bureaucracy.",
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
    title: "Projects",
    description:
      "Explore the products and software platforms built by our team.",
    items: [
      {
        title: "Siwolo Law Advocates Website",
        category: "Legal & Professional Services",
        image: "/projects/siwolo-law-advocates.jpg",
        description:
          "Enables clients to explore specialized legal practice areas, review advocate credentials, and schedule confidential appointments online seamlessly.",
        link: "https://www.siwoloadvocates.com/",
      },
      {
        title: "LedgerMate",
        category: "Financial Systems & Inventory",
        image: "/projects/ledgermate.png",
        description:
          "A digital ledger for businesses to track payments, streamline inventory management, and reconcile customer orders with real-time audit visibility.",
        link: "https://ledgermate-sd5v.onrender.com/",
      },
      {
        title: "Linda Safeguarding App",
        category: "Safeguarding & Workplace Safety",
        image: "/projects/linda.png",
        description:
          "An anonymous safeguarding and workplace compliance platform that enables employees to report safety concerns securely to designated administrators with transparent review and status tracking.",
        link: "https://linda-app.onrender.com",
      },
      {
        title: "Queue Management System",
        category: "Queue Management & Operations",
        image: "/projects/qms.jpg",
        imageBg: "linear-gradient(to right, #f8f8f8, #dedede)",
        description:
          "A digital queue management and ticket dispatch system that enables organizations to streamline service counters, issue instant customer tokens, and provide real-time queue tracking.",
        link: "",
      },
      {
        title: "AgriBora Aggregation Portal",
        category: "Agriculture & Supply Chain",
        image: "/projects/agribora-produce-aggregation-portal.svg",
        description:
          "Digital aggregation and mobile payment disbursement platform connecting smallholder farming cooperatives with regional food processors.",
        link: "",
      },
      {
        title: "AfyaCare Clinical EMR Suite",
        category: "Healthcare & Operations",
        image: "/projects/afyacare-clinical-emr-suite.svg",
        description:
          "Offline-resilient electronic medical records and outpatient clinic management suite engineered for community health centers.",
        link: "",
      },
    ],
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
    testimonials: [
      {
        quote:
          "Azzmar transformed our chaotic spreadsheet dispatches into a rock-solid logistics system in under 10 weeks. Working directly with their co-founders in Nairobi and Kisumu made communication effortless and decisions immediate.",
        author: "David Kimani",
        role: "Operations Director",
        organization: "Rift Freight Logistics",
        metric: "60% Faster Dispatches",
      },
      {
        quote:
          "The engineering craft and direct transparency from Azzmar was exceptional. They didn't hide behind account managers—we worked directly with developers who delivered working features every two weeks and handed over complete IP ownership.",
        author: "Florence Otieno",
        role: "Managing Director",
        organization: "Western Agro Cooperatives",
        metric: "KSh 45M+ Disbursed",
      },
      {
        quote:
          "Their offline-first architecture for our clinic system exceeded all our expectations. Even when local connectivity drops in Western Kenya, our medical team can continue triage and patient records without disruption.",
        author: "Dr. Samuel Mwangi",
        role: "Lead Medical Officer",
        organization: "CareLink Community Health",
        metric: "12,000+ Patient Visits",
      },
    ],
  },

  team: {
    title: "Our Team",
    description:
      "Azzmar is a software team founded by five co-founders based in Nairobi and Kisumu, Kenya, and open to remote work.",
    members: [
      {
        name: "Michael Clay",
        role: "Co-founder",
        // Expected path: public/team/michael-clay.jpg (4:3 aspect ratio)
        image: "",
        title: "Full-Stack Engineer and DevOps Engineer",
        companyRole: "Backend systems and DevOps",
        skills: ["Go", "JavaScript", "DevOps", "Backend Systems"],
        bio: "Michael is a full-stack engineer and DevOps engineer at Azzmar who specializes in backend systems. He builds dependable server architectures using Go and JavaScript while managing automated deployment and infrastructure pipelines through DevOps. His focus on resilient backend systems ensures client platforms run smoothly and scale reliably in production.",
        links: {
          github: "https://github.com/AFRINIT-TECH",
          linkedin: "",
          email: "contact@afrinit.com",
        },
      },
      {
        name: "Mercy Moraa",
        role: "Co-founder",
        image: "/team/moraa.jpeg",
        title: "Full-Stack Developer and QA Engineer",
        companyRole: "Full-stack development and quality assurance",
        skills: ["Full-Stack Development", "Quality Assurance"],
        bio: "Mercy is a full-stack software developer and quality assurance engineer at Azzmar. She builds end-to-end application features and conducts thorough quality assurance to verify that every release meets rigorous functional standards. Her dual focus on development and quality assurance guarantees that clients receive robust, dependable software that performs reliably in production.",
        links: {
          github: "https://github.com/AFRINIT-TECH",
          linkedin: "",
          email: "contact@afrinit.com",
        },
      },
      {
        name: "Valentine Awili",
        role: "Co-founder",
        // Expected path: public/team/valentine-awili.jpg (4:3 aspect ratio)
        image: "",
        title: "Full-Stack Software Engineer",
        companyRole: "JavaScript, authentication, Ruby, and Go",
        skills: ["JavaScript", "Authentication", "Ruby", "Go"],
        bio: "Valentine is a full-stack software engineer at Azzmar specializing in JavaScript, authentication systems, and Ruby, with technical proficiency in Go. He builds secure, dependable web applications and user-access workflows that give clients robust access control.",
        links: {
          github: "https://github.com/AFRINIT-TECH",
          linkedin: "",
          email: "contact@afrinit.com",
        },
      },
      {
        name: "Millicent Adhiambo",
        role: "Co-founder",
        image: "/team/millie.jpeg",
        title: "Software Developer, Business Analyst and Project Manager",
        companyRole: "Business analysis, project management, marketing and branding",
        skills: ["Software Development", "Business Analysis", "Project Management", "Marketing & Branding"],
        bio: "Millie is a software developer at Azzmar who leads the company's business analysis, project management, marketing, and branding. Alongside her development work, she translates client goals into clear project scope and keeps delivery milestones organized and transparent from concept to launch. Her leadership in business analysis and branding ensures clients achieve well-positioned products that directly solve their operational needs.",
        links: {
          github: "https://github.com/AFRINIT-TECH",
          linkedin: "",
          email: "contact@afrinit.com",
        },
      },
      {
        name: "Grace Nyaboke",
        role: "Co-founder",
        // Expected path: public/team/grace-nyaboke.jpg (4:3 aspect ratio)
        image: "",
        title: "Software Developer and Frontend Lead",
        companyRole: "Frontend development and design",
        skills: ["Frontend Development", "Design", "Software Development", "Frontend Leadership"],
        bio: "Grace is a software developer focused on design and serves as the frontend lead developer at Azzmar. She directs the team's frontend architecture, translating interface design into responsive, accessible, and intuitive user experiences. Her design-led frontend leadership enables clients to provide polished, user-friendly digital products that engage their audiences effectively.",
        links: {
          github: "https://github.com/AFRINIT-TECH",
          linkedin: "",
          email: "contact@afrinit.com",
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
    items: [
      // Milestones
      {
        type: "milestone",
        title: "20+ Products Shipped Across East Africa",
        date: "2026-10",
        location: "Kenya",
        image: "/archives/20-products-shipped-across-east-africa.svg",
        description:
          "Our co-founders and engineering team celebrated surpassing 20 production software systems and digital platforms shipped across web, mobile, and enterprise environments.",
        tags: ["Milestone", "Products", "Engineering"],
        link: "",
        linkLabel: "",
      },
      {
        type: "milestone",
        title: "Dual-Hub Engineering Established in Nairobi & Kisumu",
        date: "2026-02",
        location: "Nairobi & Kisumu, Kenya",
        image: "/archives/dual-hub-engineering-established-in-nairobi-kisumu.svg",
        description:
          "Solidified our distributed dual-hub operational structure across Kenya, allowing us to serve urban enterprises in Nairobi while supporting regional and agro-logistics initiatives across Western Kenya.",
        tags: ["Milestone", "Operations", "Regional Growth"],
        link: "",
        linkLabel: "",
      },
      {
        type: "milestone",
        title: "Azzmar Founding Agreement & Studio Launch",
        date: "2025-03",
        location: "Nairobi, Kenya",
        image: "/archives/afrinit-founding-agreement-studio-launch.svg",
        description:
          "Five specialized engineers and digital builders came together to establish Azzmar, dedicated to engineering dependable, bespoke software with direct co-founder collaboration and complete client IP ownership.",
        tags: ["Milestone", "Foundation", "Co-Founders"],
        link: "",
        linkLabel: "",
      },

      // Products Shipped
      {
        type: "product",
        title: "JengaOps Freight Dispatch & Tracking Engine",
        date: "2026-09",
        location: "Kenya",
        image: "/archives/jengaops-freight-dispatch-tracking-engine.svg",
        description:
          "Architected and deployed a high-concurrency dispatch and freight waypoint management platform, replacing manual paper logs with real-time driver tracking and automated warehouse receipting.",
        tags: ["Product", "Go", "React", "PostgreSQL", "Logistics"],
        link: "",
        linkLabel: "View Work Details",
      },
      {
        type: "product",
        title: "AgriBora Produce Aggregator & Daraja Payouts",
        date: "2026-05",
        location: "Kisumu & Rift Valley",
        image: "/archives/agribora-produce-aggregator-daraja-payouts.svg",
        description:
          "Launched the agricultural collection portal connecting farmer cooperatives with bulk buyers, integrating automated M-Pesa bulk disbursements and weighing station logs.",
        tags: ["Product", "AgriTech", "M-Pesa Daraja", "Node.js"],
        link: "",
        linkLabel: "View Work Details",
      },
      {
        type: "product",
        title: "AfyaCare Offline-Resilient Clinic Records EMR",
        date: "2025-12",
        location: "Kenya",
        image: "/archives/afyacare-offline-resilient-clinic-records-emr.svg",
        description:
          "Delivered an offline-first outpatient records and pharmacy management system that operates smoothly in low-bandwidth environments with automatic background cloud synchronization.",
        tags: ["Product", "Healthcare", "FastAPI", "SQLite Sync"],
        link: "",
        linkLabel: "View Work Details",
      },
      {
        type: "product",
        title: "SomaHub Digital Technical Learning Portal",
        date: "2025-08",
        location: "Nairobi, Kenya",
        image: "/archives/somahub-digital-technical-learning-portal.svg",
        description:
          "Built a modular e-learning and interactive assessment platform for technical training institutes, supporting interactive coding tasks, quizzes, and automated certificate generation.",
        tags: ["Product", "EdTech", "WebSockets", "Go", "Docker"],
        link: "",
        linkLabel: "View Work Details",
      },

      // Events
      {
        type: "event",
        title: "Nairobi Tech Week & Engineering Summit",
        date: "2026-08",
        location: "Nairobi, Kenya",
        image: "/archives/nairobi-tech-week-engineering-summit.svg",
        description:
          "Azzmar co-founders participated in roundtable sessions on resilient cloud architecture, distributed systems, and real-time payment gateway integration patterns.",
        tags: ["Event", "Conference", "Nairobi", "Ecosystem"],
        link: "",
        linkLabel: "",
      },
      {
        type: "event",
        title: "Western Kenya Digital Innovation Expo",
        date: "2026-04",
        location: "Kisumu, Kenya",
        image: "/archives/western-kenya-digital-innovation-expo.svg",
        description:
          "Showcased custom enterprise management and supply chain software solutions to regional business leaders and agricultural cooperative directors.",
        tags: ["Event", "Innovation Expo", "Kisumu", "Enterprise"],
        link: "",
        linkLabel: "",
      },
      {
        type: "event",
        title: "African Open Finance & Developer Day",
        date: "2025-11",
        location: "Nairobi, Kenya",
        image: "/archives/african-open-finance-developer-day.svg",
        description:
          "Engaged with financial technology builders on M-Pesa Daraja 2.0 best practices, transaction reconciliation resilience, and data privacy safeguards.",
        tags: ["Event", "FinTech", "API Design", "Payments"],
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
        question: "Who is Azzmar?",
        answer:
          "Azzmar is a software team founded by five co-founders: Michael Clay, Mercy Moraa, Valentine Awili, Millicent Adhiambo, and Grace Nyaboke. We are based in Nairobi and Kisumu, Kenya, and are open to remote work.",
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
    email: "contact@afrinit.com",
    emailLabel: "contact@afrinit.com",
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
    brand: "azzmar",
    tagline: "Software engineered by five co-founders in Kenya.",
    email: "contact@afrinit.com",
    quickLinks: [
      { label: "About Azzmar", page: "about" },
      { label: "What We Do", page: "solutions" },
      { label: "Work", page: "projects" },
      { label: "Partners", page: "partners" },
      { label: "Impact", page: "impact" },
      { label: "Our Team", page: "team" },
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
    copyright: "© 2026 Azzmar. All rights reserved.",
  },
};
