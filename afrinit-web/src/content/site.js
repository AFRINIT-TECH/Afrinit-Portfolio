export const siteConfig = {
  meta: {
    name: "Afrinit",
    title: "Afrinit | Technology for African progress",
    description:
      "We design and develop software for companies and organizations, grow talent, and back bold ideas—turning Africa's digital potential into progress that reaches everyone.",
    url: "https://afrinit.africa",
    locale: "en_US",
  },

  navigation: {
    brand: "afrinit",
    links: [
      { label: "About", page: "about" },
      { label: "Solutions", page: "solutions" },
      { label: "Work", page: "projects" },
      { label: "Impact", page: "impact" },
      { label: "People & Culture", page: "people" },
      { label: "FAQ", page: "faq" },
    ],
    cta: {
      label: "Partner with us",
      page: "contact",
    },
  },

  hero: {
    eyebrow: "Technology for African progress",
    titleLine1: "Tailor-made software",
    titleLine2: "100% powered by Afrinit",
    paragraph:
      "Our people use their engineering and design superpowers to deliver high-reliability software for businesses, financial institutions, and public organizations across Africa. Just a trustworthy partnership built for continental progress.",
    primaryCta: {
      label: "Check our work",
      page: "projects",
    },
    secondaryCta: {
      label: "Get in touch",
      page: "contact",
    },
    image: {
      src: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
      alt: "African technology professionals collaborating around a laptop",
    },
    stats: {
      label: "Active across",
      value: "14 countries",
    },
    goal: {
      year: "2030",
      description: "One million digital opportunities created",
    },
  },

  corePillars: [
    {
      title: "Software Development",
      subheading: "Aan de slag met de juiste maatwerk oplossing",
      description:
        "We design and engineer bespoke web, mobile, and cloud platforms from zero to production. Tailored precisely to your operational workflow, user behavior, and African infrastructure realities.",
      badge: "Maatwerk software",
      page: "solutions",
    },
    {
      title: "Continuous Scaling & Evolution",
      subheading: "Vanuit een roadmap verder bouwen aan jouw doelen",
      description:
        "Software is never 'finished.' We partner on an agile roadmap—continuously shipping high-impact features, optimizing performance, upgrading infrastructure, and hardening security.",
      badge: "Doorontwikkeling",
      page: "solutions",
    },
    {
      title: "Integrations & African Rails",
      subheading: "We laten systemen met elkaar communiceren",
      description:
        "We make complex systems talk to each other. Connecting modern web apps with legacy core databases, ERPs, M-Pesa Daraja 2.0, bank switches, USSD gateways, and third-party APIs.",
      badge: "Koppelingen & API's",
      page: "solutions",
    },
  ],

  partnerLogos: [
    { name: "HealthBridge Africa", sector: "Healthcare" },
    { name: "AgriConnect B2B", sector: "Agriculture" },
    { name: "EduLearn Pan-Africa", sector: "EdTech" },
    { name: "FinTrack Banking", sector: "FinTech" },
    { name: "TradeBridge Clearing", sector: "Cross-Border" },
    { name: "CityPulse Transit", sector: "Smart City" },
    { name: "SolarGrid PAYG", sector: "Clean Energy" },
    { name: "MedSupply Verified", sector: "Pharma" },
    { name: "WaterWatch IoT", sector: "Environment" },
  ],

  howWeWorkStatement: {
    heading: "How we work",
    quote:
      "How do we work? There is no one-size-fits-all formula. It depends entirely on your market reality, connectivity constraints, and growth goals. We look together at your goals and chart the fastest, safest path to production.",
    cta: "About us & our approach",
  },

  preFooterCta: {
    eyebrow: "Ready to build something extraordinary?",
    heading: "Curious how we can help your organization?",
    buttonText: "Hell yeah! Let's talk",
  },

  about: {
    title: "Who we are",
    description:
      "Afrinit is an engineering-first technology company headquartered in Nairobi, Lagos, and Accra. We build durable, secure digital infrastructure that accounts for African connectivity realities, diverse payment rails, and high-growth consumer needs.",
    points: [
      {
        title: "Local insight, global engineering bars",
        description:
          "We understand the nuances of intermittent connectivity, USSD and mobile money payment flows, and diverse device ecosystems—while engineering to the most stringent international reliability and security benchmarks.",
      },
      {
        title: "Talent-first continental engine",
        description:
          "We invest heavily in African engineering talent through our internal apprenticeship programs, technical masterclasses, and hands-on production mentoring that shape Africa's next generation of senior builders.",
      },
      {
        title: "Long-term partnership & ownership",
        description:
          "We don't drop black-box code and leave. We deliver clean, fully documented repositories, train internal engineering teams, and partner strategically to ensure lasting operational sovereignty.",
      },
    ],
    pillars: [
      {
        title: "Built for Connectivity Realities",
        description:
          "Our web and mobile architectures employ smart caching, offline-first sync (SQLite/WatermelonDB), and lightweight payloads that run smoothly on 3G and patchy cellular networks.",
      },
      {
        title: "Senior Hands-On Attention",
        description:
          "Direct collaboration with principal engineers and product strategists from day one. No junior hand-off roulette; your vision is guided by veterans.",
      },
      {
        title: "African Financial Rails Ready",
        description:
          "Native integrations with M-Pesa (Daraja 2.0), Flutterwave, Paystack, bank switches, and mobile network operator USSD gateways are built into our architectural DNA.",
      },
      {
        title: "Zero Vendor Lock-In",
        description:
          "Clean code, comprehensive automated tests, Dockerized containers, and Terraform-managed cloud setups ensure your organization owns every single asset completely.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Context Architecture",
        description:
          "We unpack your business objectives, operational bottlenecks, regulatory landscape, and user environments—producing actionable technical specifications and architecture blueprints before a single line of code is written.",
      },
      {
        step: "02",
        title: "Human-Centric Prototyping",
        description:
          "We construct clickable, high-fidelity prototypes in Figma and validate them through live usability testing with target end-users across different literacy levels and device formats.",
      },
      {
        step: "03",
        title: "Agile Engineering & Continuous Testing",
        description:
          "We build in rapid two-week sprint cycles with live demo environments. Automated unit and end-to-end tests, strict linting, and continuous security scanning ensure predictable code quality.",
      },
      {
        step: "04",
        title: "Deployment, Knowledge Transfer & Scaling",
        description:
          "We deploy using modern CI/CD pipelines to hardened cloud infrastructure, provide runbooks, conduct comprehensive training sessions for your technical staff, and provide continuous SLA monitoring.",
      },
    ],
  },

  solutions: {
    title: "What we build & solve",
    description:
      "From bespoke fintech platforms to decentralized public sector systems, we deliver end-to-end digital solutions that help organizations modernize, scale, and thrive across Africa.",
    services: [
      {
        title: "Custom Software Engineering",
        description:
          "Tailored enterprise platforms, customer portals, and internal workflows built with resilient web and mobile architectures.",
        icon: "code",
        details:
          "Our engineering teams work alongside your organization to understand your unique business logic and build software that fits perfectly. From initial discovery through high-concurrency deployment and ongoing operational support, we deliver solutions engineered to scale smoothly as user volume surges.",
      },
      {
        title: "Enterprise Digital Transformation",
        description:
          "Modernize legacy core systems, eliminate manual paperwork, and establish automated data pipelines.",
        icon: "transform",
        details:
          "We help financial institutions, healthcare providers, and logistics firms transition away from fragmented spreadsheets and brittle legacy mainframes to cloud-native microservices, automated ledger systems, and auditable operational workflows.",
      },
      {
        title: "Cloud & Resilient Infrastructure",
        description:
          "Scalable, highly available cloud deployments on AWS, GCP, and Azure with automated failover and cost optimization.",
        icon: "cloud",
        details:
          "From multi-region cloud migrations to infrastructure-as-code with Terraform and Kubernetes, we design environments that withstand traffic spikes, comply with local data sovereignty mandates, and keep latency low across African internet exchange points.",
      },
      {
        title: "Product Design & Design Systems",
        description:
          "Accessible, user-centered design that bridges cultural nuance with international UX standards.",
        icon: "design",
        details:
          "Our design studio conducts ethnographic user research, accessibility audits, and design system creation. We design interfaces that are culturally intuitive, optimized for low-end Android smartphones, and fully accessible in multilingual contexts.",
      },
      {
        title: "AI, Predictive Analytics & Data Engineering",
        description:
          "Turn unstructured operational data into real-time forecasting, credit scoring, and automated decision engines.",
        icon: "ai",
        details:
          "We design production data lakes and train machine learning models for fraud prevention, agricultural yield prediction, alternative credit scoring for unbanked populations, and voice-assisted customer service in indigenous African languages.",
      },
      {
        title: "Engineering Capacity & Institutional Training",
        description:
          "Intensive technical bootcamps, architectural mentorship, and DevOps upskilling for internal engineering teams.",
        icon: "growth",
        details:
          "Technology thrives only when organizations can independently sustain it. Our capacity building programs include hands-on pair programming, secure coding workshops, and architecture reviews that level up your internal development teams permanently.",
      },
    ],
    sectors: [
      {
        title: "FinTech & Financial Inclusion",
        description:
          "Digital wallets, agent banking networks, agency float management, cross-border remittances, and automated micro-lending algorithms.",
        badge: "Banking & Payments",
      },
      {
        title: "HealthTech & Public Health",
        description:
          "Unified patient health registries, cold-chain pharmaceutical tracking, laboratory information systems, and rural tele-health portals.",
        badge: "Healthcare",
      },
      {
        title: "AgriTech & Food Security",
        description:
          "Smallholder aggregation marketplaces, satellite weather index insurance tools, and supply chain tracing from farm gate to export hub.",
        badge: "Agriculture",
      },
      {
        title: "EdTech & Digital Literacy",
        description:
          "Offline-capable learning management systems, interactive curriculum delivery, and verifiable digital credentialing platforms.",
        badge: "Education",
      },
      {
        title: "Clean Energy & Smart Utilities",
        description:
          "Pay-as-you-go (PAYG) solar IoT telemetry, rural micro-grid energy distribution monitors, and smart water point management dashboards.",
        badge: "Energy & Utilities",
      },
      {
        title: "GovTech & Civic Infrastructure",
        description:
          "Automated municipal revenue collection, digital land record registries, and real-time urban telemetry dashboards for metropolitan councils.",
        badge: "Public Sector",
      },
    ],
    techStack: [
      {
        category: "Web & Frontend",
        technologies: ["React 19", "Vite", "Next.js", "Tailwind CSS v4", "TypeScript", "Vue.js"],
      },
      {
        category: "Mobile & Offline-First",
        technologies: ["Flutter", "React Native", "SQLite", "WatermelonDB", "Background Sync", "USSD Gateway"],
      },
      {
        category: "Backend & Distributed Systems",
        technologies: ["Go (Fiber/Gin)", "Node.js / Express", "Python (FastAPI)", "Rust", "gRPC", "GraphQL"],
      },
      {
        category: "Data & Event Streaming",
        technologies: ["PostgreSQL", "TimescaleDB", "Redis", "Apache Kafka", "InfluxDB", "Elasticsearch"],
      },
      {
        category: "African Rails & Integrations",
        technologies: ["M-Pesa Daraja API", "Paystack", "Flutterwave", "Africa's Talking", "Interswitch", "NIBSS"],
      },
      {
        category: "Cloud & DevSecOps",
        technologies: ["Docker", "Kubernetes", "AWS & GCP", "Terraform", "GitHub Actions CI/CD", "Prometheus & Grafana"],
      },
    ],
  },

  projects: {
    title: "Our work",
    description: "Selected projects that demonstrate our commitment to building technology for African progress.",
    items: [
      {
        title: "National Health Data Platform",
        category: "Healthcare",
        description: "A unified health data system connecting clinics across 6 countries, enabling real-time disease tracking and resource allocation.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "AgriConnect Marketplace",
        category: "Agriculture",
        description: "Digital marketplace connecting smallholder farmers directly with buyers, reducing post-harvest losses by 40%.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React Native", "Firebase", "Stripe"],
      },
      {
        title: "EduLearn LMS",
        category: "Education",
        description: "Learning management system serving 50,000+ students across East Africa with offline-first capabilities.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Vue.js", "Python", "AWS"],
      },
      {
        title: "FinTrack Mobile Banking",
        category: "FinTech",
        description: "Mobile banking application enabling unbanked populations to access financial services via basic phones.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Flutter", "Go", "MongoDB"],
      },
      {
        title: "CityPulse Smart City Dashboard",
        category: "Government",
        description: "Real-time urban monitoring dashboard for Lagos city planning, integrating IoT sensors and citizen feedback.",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "D3.js", "Kafka"],
      },
      {
        title: "TradeBridge Cross-Border Payments",
        category: "FinTech",
        description: "Cross-border payment infrastructure enabling seamless transactions between 12 African economies.",
        image: "https://images.unsplash.com/photo-1533313056863-c593ba5a1792?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["TypeScript", "Rust", "gRPC"],
      },
      {
        title: "WaterWatch Monitoring System",
        category: "Environment",
        description: "IoT-based water quality monitoring system deployed across 200+ water points in rural communities.",
        image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Python", "MQTT", "InfluxDB"],
      },
      {
        title: "TalentHub Recruitment Platform",
        category: "HR Tech",
        description: "AI-powered recruitment platform connecting African tech talent with global opportunities.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Next.js", "TensorFlow", "PostgreSQL"],
      },
      {
        title: "SolarGrid Energy Management",
        category: "Energy",
        description: "Solar energy distribution management system optimizing power allocation across micro-grids.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Go", "TimescaleDB"],
      },
      {
        title: "MedSupply Chain Tracker",
        category: "Healthcare",
        description: "Blockchain-based pharmaceutical supply chain tracking preventing counterfeit medications.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Solidity", "React", "IPFS"],
      },
      {
        title: "VoiceFirst Accessibility Suite",
        category: "Accessibility",
        description: "Voice-enabled interface suite for low-literacy users, supporting 15 African languages.",
        image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Python", "TensorFlow", "WebRTC"],
      },
      {
        title: "MarketPulse Analytics",
        category: "Commerce",
        description: "Real-time market analytics platform for informal traders, providing pricing insights and demand forecasts.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Python", "Redis"],
      },
    ],
    perPage: 6,
  },

  impact: {
    title: "Our impact",
    description:
      "We measure success not just in code shipped, but in lives touched and systems transformed across Africa.",
    stats: [
      { value: "14", label: "Countries reached" },
      { value: "50+", label: "Projects delivered" },
      { value: "200+", label: "Talent trained" },
      { value: "1M+", label: "Lives impacted by 2030" },
    ],
    testimonials: [
      {
        quote: "Afrinit didn't just build us a platform — they transformed how we operate across the continent.",
        author: "Dr. Amara Osei",
        role: "CEO, HealthBridge Africa",
      },
      {
        quote: "Their understanding of the African market is unmatched. Every solution feels built for us.",
        author: "Kwame Asante",
        role: "CTO, AgriConnect",
      },
      {
        quote: "The capacity building program grew our engineering team from 5 to 50 in two years.",
        author: "Fatima Ndiaye",
        role: "Director of Tech, EduLearn",
      },
    ],
  },

  people: {
    title: "People & Work",
    description:
      "Our team is the heart of everything we do. We foster a culture of curiosity, collaboration, and continuous growth.",
    values: [
      {
        title: "Collaboration",
        description:
          "We work together — across borders, disciplines, and time zones — to build better solutions.",
      },
      {
        title: "Innovation",
        description:
          "We challenge the status quo and explore new ways to solve old problems.",
      },
      {
        title: "Inclusion",
        description:
          "We believe diverse perspectives create stronger products and a stronger company.",
      },
      {
        title: "Growth",
        description:
          "We invest in our people's development because their growth is our growth.",
      },
    ],
    team: [
      {
        name: "Amina Diallo",
        role: "Founder & CEO",
        bio: "15 years building technology for emerging markets.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Chidi Okonkwo",
        role: "CTO",
        bio: "Former Google engineer passionate about African tech.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Zawadi Mwangi",
        role: "Head of Design",
        bio: "Designing for accessibility and impact across Africa.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Kofi Mensah",
        role: "Head of Engineering",
        bio: "Building scalable systems for millions of users.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    description: "Everything you need to know about working with Afrinit.",
    questions: [
      {
        question: "What regions do you operate in?",
        answer: "We operate across 14 African countries, with our main offices in Lagos, Nairobi, and Accra. Our remote-first culture allows us to serve clients across the continent and beyond.",
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity. A typical custom software project ranges from 3-6 months from discovery to launch. We provide detailed timelines during our initial consultation.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes. Every project includes a post-launch support period. We offer flexible maintenance and support packages to ensure your solution continues to perform optimally.",
      },
      {
        question: "What is your approach to capacity building?",
        answer: "We believe in knowledge transfer as a core part of every engagement. Our capacity building programs include hands-on training, mentorship, and documentation to ensure your team can maintain and evolve solutions.",
      },
      {
        question: "How do you handle data privacy and security?",
        answer: "Security is built into every layer of our development process. We follow international best practices, including GDPR compliance, end-to-end encryption, and regular security audits.",
      },
      {
        question: "Can you work with our existing team?",
        answer: "Absolutely. We frequently embed within existing teams, augmenting your capabilities with our expertise. Our flexible engagement models adapt to your workflow and preferences.",
      },
    ],
  },

  contact: {
    title: "Partner with us",
    description:
      "Ready to build something meaningful? Let's talk about how we can work together to drive progress.",
    email: "hello@afrinit.africa",
    emailLabel: "hello@afrinit.africa",
    formFields: [
      { name: "name", label: "Your name", type: "text", placeholder: "Enter your name" },
      { name: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
      { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your project..." },
    ],
    submitLabel: "Send message",
  },

  footer: {
    brand: "afrinit",
    email: "hello@afrinit.africa",
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Instagram", href: "https://www.instagram.com" },
    ],
    copyright: "© 2025 Afrinit. Built for possibility.",
  },
};
