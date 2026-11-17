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
      subheading: "Architecting the right bespoke software solution for your operational goals",
      description:
        "We design and engineer bespoke web, mobile, and cloud platforms from zero to production. Tailored precisely to your operational workflow, user behavior, and African infrastructure realities.",
      badge: "Custom Software",
      page: "solutions",
    },
    {
      title: "Continuous Scaling & Evolution",
      subheading: "Executing roadmaps to continuously scale your software alongside business growth",
      description:
        "Software is never 'finished.' We partner on an agile roadmap—continuously shipping high-impact features, optimizing performance, upgrading infrastructure, and hardening security.",
      badge: "Continuous Evolution",
      page: "solutions",
    },
    {
      title: "Integrations & African Rails",
      subheading: "Connecting distributed systems, core banking engines, and regional payment rails",
      description:
        "We make complex systems talk to each other. Connecting modern web apps with legacy core databases, ERPs, M-Pesa Daraja 2.0, bank switches, USSD gateways, and third-party APIs.",
      badge: "Integrations & APIs",
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

  capabilities: {
    title: "Our Disciplines & Capabilities",
    subtitle: "Diensten & Expertise",
    description:
      "Multidisciplinary engineering and design teams that take projects from inception to continuous scaling.",
    groups: [
      {
        name: "Research & Strategy",
        dutchName: "Onderzoek",
        description: "Deep domain exploration, technical audits, and user journey discovery.",
        items: [
          { name: "IT Consultancy", desc: "Architecture roadmap & technology advisory" },
          { name: "UX Design", desc: "User research, wireframing & interaction flows" },
          { name: "Customer Journeys", desc: "Service blueprinting & multi-channel mapping" },
          { name: "Data Analyses", desc: "Metrics, funnel optimization & business insights" },
          { name: "Design Research", desc: "User validation & ethnographic testing" },
          { name: "UX Audits", desc: "Accessibility & usability benchmark evaluation" },
        ],
      },
      {
        name: "Design & Prototyping",
        dutchName: "Design",
        description: "Intuitive product design systems and interactive design sprints.",
        items: [
          { name: "UI Design", desc: "Brand-aligned design systems & micro-interactions" },
          { name: "Design Sprints", desc: "From problem statement to tested prototype in 5 days" },
          { name: "Interactive Prototyping", desc: "High-fidelity clickable user experiences" },
          { name: "User Testing", desc: "Rapid feedback loops with target audiences" },
          { name: "Design Systems", desc: "Tokens, reusable components & style guidelines" },
          { name: "Creative Direction", desc: "Brand expression tailored for global reach" },
        ],
      },
      {
        name: "Engineering & Evolution",
        dutchName: "Development",
        description: "Bespoke software development, API integrations, and continuous scaling.",
        items: [
          { name: "Bespoke Software", desc: "Custom platforms built for high volume & resilience" },
          { name: "Web Development", desc: "Fast, accessible, and search-optimized web apps" },
          { name: "App Development", desc: "Native iOS & Android, and cross-platform apps" },
          { name: "API & Integrations", desc: "African payment rails, ERPs, and legacy links" },
          { name: "Continuous Evolution", desc: "Roadmap delivery, doorontwikkeling & scaling" },
          { name: "Cloud & DevSecOps", desc: "Kubernetes, automated CI/CD & 99.99% uptime" },
        ],
      },
    ],
  },

  projects: {
    title: "Our work & case studies",
    description:
      "Explore selected production platforms that demonstrate how Afrinit designs, builds, and scales digital infrastructure across the continent.",
    items: [
      {
        title: "National Health Data Platform",
        category: "Healthcare",
        description:
          "A unified health records and epidemiological data system connecting 420+ clinics across 6 countries, enabling real-time outbreak detection and essential drug resource allocation.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Go", "PostgreSQL", "Docker"],
        metric: "420+ Clinics Connected",
        status: "Live in Production",
      },
      {
        title: "AgriConnect Marketplace",
        category: "Agriculture",
        description:
          "Digital B2B commodity trading platform linking over 85,000 smallholder farmers directly to urban bulk buyers, cutting post-harvest storage losses by 40% and shortening payout cycles.",
        image:
          "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React Native", "Node.js", "M-Pesa Daraja", "PostGIS"],
        metric: "40% Loss Reduction",
        status: "Live in Production",
      },
      {
        title: "EduLearn LMS",
        category: "Education",
        description:
          "Offline-first mobile and desktop learning management system serving 50,000+ secondary students and vocational trainees in regions with intermittent electrical and internet access.",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Python FastAPI", "SQLite Sync", "AWS"],
        metric: "50,000+ Active Students",
        status: "Live in Production",
      },
      {
        title: "FinTrack Mobile Banking & Float Engine",
        category: "FinTech",
        description:
          "Next-generation mobile banking and agent float distribution application enabling unbanked rural merchants to offer financial services over low-cost Android and USSD channels.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Flutter", "Go (Fiber)", "Redis", "Kafka"],
        metric: "$12M+ Monthly Volume",
        status: "Live in Production",
      },
      {
        title: "CityPulse Smart City Dashboard",
        category: "Government",
        description:
          "Real-time municipal operations cockpit for metropolitan transit authorities, aggregating environmental sensors, vehicular telemetry, and citizen road hazard reports.",
        image:
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "D3.js", "Apache Kafka", "PostgreSQL"],
        metric: "1.8M Citizens Covered",
        status: "Live in Production",
      },
      {
        title: "TradeBridge Cross-Border Clearing",
        category: "FinTech",
        description:
          "Multi-currency settlement and liquidity engine facilitating instant, compliant bilateral trade payments between commercial bank accounts across 12 African sovereign currencies.",
        image:
          "https://images.unsplash.com/photo-1533313056863-c593ba5a1792?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["TypeScript", "Go", "gRPC", "Docker"],
        metric: "12 Currencies Cleared",
        status: "Live in Production",
      },
      {
        title: "WaterWatch Rural IoT Monitoring",
        category: "Energy & Environment",
        description:
          "Solar-powered IoT sensor network monitoring borehole flow rates, pump motor health, and microbiological water quality across 200+ community water distribution points.",
        image:
          "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Python", "MQTT", "InfluxDB", "Grafana"],
        metric: "200+ Active Boreholes",
        status: "Live in Production",
      },
      {
        title: "TalentHub Continental Recruitment Engine",
        category: "HR & Accessibility",
        description:
          "Automated technical assessment and verified talent matching engine connecting over 15,000 vetted software engineers and product designers with high-growth African startups and global firms.",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Node.js", "PostgreSQL", "Elasticsearch"],
        metric: "15,000+ Vetted Engineers",
        status: "Live in Production",
      },
      {
        title: "SolarGrid Pay-As-You-Go Energy Manager",
        category: "Energy & Environment",
        description:
          "Telemetry and automated token generation platform managing pay-as-you-go micro-solar installations for 30,000 off-grid rural households and agricultural cold storage units.",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Go", "TimescaleDB", "M-Pesa API"],
        metric: "30,000 Homes Powered",
        status: "Live in Production",
      },
      {
        title: "MedSupply Anti-Counterfeit Verification",
        category: "Healthcare",
        description:
          "Cryptographically verified pharmaceutical serialization platform enabling pharmacists and patients to authenticate medications via simple smartphone scan or free SMS shortcode.",
        image:
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React Native", "Go", "PostgreSQL", "SMS Gateway"],
        metric: "4.5M Units Authenticated",
        status: "Live in Production",
      },
      {
        title: "VoiceFirst Multilingual Speech Interface",
        category: "HR & Accessibility",
        description:
          "A localized speech recognition engine supporting Swahili, Yoruba, Hausa, Igbo, and Amharic, allowing non-literate citizens to conduct financial and administrative tasks seamlessly.",
        image:
          "https://images.unsplash.com/photo-1589903308904-1010c2294adc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["Python", "PyTorch", "WebRTC", "FastAPI"],
        metric: "5 Languages Supported",
        status: "Live in Production",
      },
      {
        title: "MarketPulse Informal Trade Analytics",
        category: "Agriculture",
        description:
          "Predictive agricultural price intelligence and logistics aggregation platform used by wholesale market cooperatives across East and West Africa to balance seasonal supply shocks.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
        tags: ["React", "Python", "Redis", "Tailwind CSS"],
        metric: "180+ Market Hubs",
        status: "Live in Production",
      },
    ],
    perPage: 6,
  },

  impact: {
    title: "Our continental impact",
    description:
      "We quantify success not merely in lines of code deployed, but in economic efficiency created, livelihoods empowered, and institutions modernized across the continent.",
    stats: [
      { value: "14", label: "Countries with active systems" },
      { value: "50+", label: "Mission-critical platforms delivered" },
      { value: "1,200+", label: "Engineers mentored & certified" },
      { value: "1M+", label: "Projected lives reached by 2030" },
    ],
    milestones: [
      {
        year: "2024",
        title: "Foundation & Regional Expansion",
        description:
          "Established our engineering headquarters with permanent hubs in Nairobi, Lagos, and Accra, deploying the initial wave of fintech and agritech infrastructure.",
      },
      {
        year: "2025",
        title: "Public Sector & Health Tech Scale",
        description:
          "Launched the National Health Data Platform and expanded our capacity building program to partner with 8 leading pan-African universities.",
      },
      {
        year: "2026",
        title: "Cross-Border Settlement & AI Studio",
        description:
          "Engineered multi-currency settlement rails and localized speech recognition suites supporting indigenous African languages.",
      },
      {
        year: "2030",
        title: "The Million-Opportunity Horizon",
        description:
          "On track to facilitate one million direct and indirect economic opportunities for African youth through digital products, training, and open tooling.",
      },
    ],
    testimonials: [
      {
        quote:
          "Afrinit didn't just build us a healthcare data platform—they spent time in rural clinics to understand power outages and intermittent connectivity. The resulting software has delivered 99.98% uptime in conditions where every other tool failed.",
        author: "Dr. Amara Osei",
        role: "Chief Executive Officer, HealthBridge Africa",
        location: "Accra, Ghana",
      },
      {
        quote:
          "Their understanding of African payment rails and farmer cash flows is extraordinary. Integrating M-Pesa automated float balancing with our offline mobile app cut our agricultural loan default rate by 31%.",
        author: "Kwame Asante",
        role: "Chief Technology Officer, AgriConnect",
        location: "Nairobi, Kenya",
      },
      {
        quote:
          "The engineering capacity building academy run by Afrinit transformed our internal staff. Our software team evolved from struggling with basic maintenance to shipping production microservices independently in less than six months.",
        author: "Fatima Ndiaye",
        role: "Director of Digital Systems, EduLearn West Africa",
        location: "Dakar, Senegal",
      },
      {
        quote:
          "Afrinit represents the absolute highest standard of engineering rigor on this continent. Their architectural foresight saved us hundreds of thousands in cloud infrastructure costs during our Series A expansion.",
        author: "Tunde Balogun",
        role: "Head of Infrastructure, TradeBridge Technologies",
        location: "Lagos, Nigeria",
      },
    ],
  },

  people: {
    title: "People, culture & leadership",
    description:
      "We believe remarkable software is built by people who feel deeply invested in their craft. We are an inclusive, remote-first team distributed across 10 African tech ecosystems.",
    values: [
      {
        title: "Radical Technical Ownership",
        description:
          "We take full accountability for our code quality, architectural robustness, and delivery timelines. When something breaks, we fix it and publish post-mortems.",
      },
      {
        title: "Built with Local Empathy",
        description:
          "We design for real people navigating patchy networks, limited data bundles, and diverse languages. We never build Ivory Tower software.",
      },
      {
        title: "Inclusion & Continental Unity",
        description:
          "Our strength lies in geographic and cognitive diversity—bringing together perspectives from East, West, North, and Southern Africa to solve shared challenges.",
      },
      {
        title: "Continuous Apprenticeship",
        description:
          "Every senior engineer mentors junior teammates. We run weekly architecture tear-downs, write internal technical memos, and sponsor open-source contributions.",
      },
    ],
    team: [
      {
        name: "Amina Diallo",
        role: "Founder & Chief Executive Officer",
        bio: "15+ years engineering digital products across emerging markets; formerly principal systems lead at international fintech initiatives.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Chidi Okonkwo",
        role: "Chief Technology Officer",
        bio: "Former Google cloud systems engineer; distributed systems architect passionate about high-throughput Go services and fault tolerance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Zawadi Mwangi",
        role: "Head of Product & Design",
        bio: "Award-winning product designer dedicated to low-bandwidth UX, accessibility patterns, and multi-lingual design systems.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Kofi Mensah",
        role: "Head of Engineering",
        bio: "12 years managing engineering teams; specialist in high-reliability mobile applications and microservice orchestration.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Dr. Tariq Al-Mansoor",
        role: "Lead AI & Data Scientist",
        bio: "PhD in Natural Language Processing; architect of Afrinit's speech recognition engines for indigenous African languages.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Nia Adebayo",
        role: "VP of Partnerships & Capacity",
        bio: "Former tech policy advisor and developer ecosystem leader; coordinates university fellowships and enterprise client alliances.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "David Kiprop",
        role: "Principal Cloud & Security Architect",
        bio: "DevSecOps expert specializing in Terraform, zero-trust cloud architectures, and financial security compliance (PCI-DSS & ISO 27001).",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
      {
        name: "Blessing Eze",
        role: "Staff Mobile Systems Engineer",
        bio: "Flutter and React Native core contributor; pioneer of offline-first mobile synchronization protocols in low-bandwidth rural environments.",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=400",
      },
    ],
    cultureBenefits: [
      {
        title: "Work From Anywhere in Africa",
        description: "Full remote-first flexibility with home office stipends and memberships to premier regional coworking hubs.",
      },
      {
        title: "Continuous Learning Budget",
        description: "Annual individual budgets for books, conference tickets, specialized certifications, and hardware upgrades.",
      },
      {
        title: "Open Source Fridays",
        description: "Dedicated time during work hours to contribute to open-source tools, African data sets, and developer libraries.",
      },
      {
        title: "Comprehensive Health & Wellness",
        description: "Pan-African private health coverage including mental wellness support, parental leave, and gym subsidies.",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "Clear answers to common questions about our capabilities, engagement models, and delivery methodology.",
    questions: [
      {
        question: "What geographical markets and countries do you operate in?",
        answer:
          "We operate across 14 African nations, with physical engineering and client delivery hubs located in Nairobi (Kenya), Lagos (Nigeria), and Accra (Ghana). Our distributed teams routinely execute projects across East, West, Southern, and North Africa as well as for international diaspora organizations.",
      },
      {
        question: "How long does a typical custom software project take?",
        answer:
          "A production-ready MVP typically takes between 8 and 14 weeks from initial kickoff to launch. Complex enterprise transformations and multi-country platforms usually span 4 to 9 months in staged milestone releases. We deliver working demo builds every two weeks so you see constant momentum.",
      },
      {
        question: "How do your applications handle low-bandwidth and patchy internet?",
        answer:
          "We engineer with an offline-first mindset from the start. We utilize local client databases (such as SQLite and WatermelonDB), compress asset payloads aggressively, implement background sync queues, and optimize for 3G cellular speeds. Where appropriate, we also integrate USSD and SMS fallbacks.",
      },
      {
        question: "Do we own the intellectual property and code you develop?",
        answer:
          "Yes, 100%. You retain full, unencumbered ownership of all source code, architecture designs, Docker configurations, databases, and assets. Everything is delivered in clean, documented Git repositories with comprehensive documentation and zero vendor lock-in.",
      },
      {
        question: "What payment rails and telecommunications gateways can you integrate?",
        answer:
          "We have extensive production experience integrating M-Pesa (Safaricom Daraja API), MTN Mobile Money, Airtel Money, Paystack, Flutterwave, Interswitch, and direct bank switches (NIBSS, EFT), alongside telecom SMS and USSD gateways via Africa's Talking.",
      },
      {
        question: "Do you offer post-launch support and SLA guarantees?",
        answer:
          "Yes. Every build includes an initial 60-day warranty and stabilization period. Beyond launch, we offer flexible Managed Engineering and DevOps SLA retainers with 24/7 incident response, security patching, database optimization, and continuous feature evolution.",
      },
      {
        question: "Can Afrinit embed with or train our existing internal team?",
        answer:
          "Absolutely. Many of our most successful client engagements involve augmented engineering, where our staff engineers pair program with your developers, establish modern CI/CD pipelines, and conduct architecture review sessions that permanently elevate internal capabilities.",
      },
      {
        question: "How do you protect data privacy and ensure regulatory compliance?",
        answer:
          "We adhere strictly to international and continental data protection frameworks (such as Nigeria's NDPR, Kenya's Data Protection Act, and GDPR). We enforce end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), conduct automated vulnerability scans, and implement strict role-based access control.",
      },
    ],
  },

  contact: {
    title: "Partner with us",
    description:
      "Ready to build software that drives real-world progress? Share your goals with our senior engineering team.",
    email: "hello@afrinit.africa",
    emailLabel: "hello@afrinit.africa",
    responseTime: "We reply within 24 hours on business days",
    formFields: [
      { name: "name", label: "Your name", type: "text", placeholder: "e.g. Jane Mwangi" },
      { name: "email", label: "Email address", type: "email", placeholder: "jane@company.com" },
      {
        name: "organization",
        label: "Company / Organization",
        type: "text",
        placeholder: "e.g. Acme Health Africa",
      },
      {
        name: "inquiryType",
        label: "Project Category",
        type: "select",
        options: [
          "Custom Software & Web Platforms",
          "Mobile App & Offline-First Development",
          "Enterprise Cloud & DevOps",
          "AI, Data & Analytics",
          "Institutional Capacity Building",
          "General Partnership Inquiry",
        ],
      },
      {
        name: "message",
        label: "Project overview & timeline",
        type: "textarea",
        placeholder: "Tell us about your project goals, target users, and expected timeline...",
      },
    ],
    submitLabel: "Send project inquiry",
    hubs: [
      {
        city: "Nairobi, Kenya",
        region: "East Africa Headquarters",
        address: "The Mirage Towers, 7th Floor, Chiromo Road, Westlands",
        email: "nairobi@afrinit.africa",
        phone: "+254 700 123 456",
      },
      {
        city: "Lagos, Nigeria",
        region: "West Africa Hub",
        address: "Heritage Place, 4th Floor, Lugard Avenue, Ikoyi",
        email: "lagos@afrinit.africa",
        phone: "+234 802 345 6789",
      },
      {
        city: "Accra, Ghana",
        region: "West Africa Hub",
        address: "One Airport Square, Airport City",
        email: "accra@afrinit.africa",
        phone: "+233 30 298 7654",
      },
    ],
  },

  footer: {
    brand: "afrinit",
    tagline: "Software engineered in Africa, built for possibility.",
    email: "hello@afrinit.africa",
    quickLinks: [
      { label: "About Afrinit", page: "about" },
      { label: "Solutions & Services", page: "solutions" },
      { label: "Selected Portfolio", page: "projects" },
      { label: "Impact & Case Studies", page: "impact" },
      { label: "People & Culture", page: "people" },
      { label: "Frequently Asked Questions", page: "faq" },
      { label: "Contact & Hubs", page: "contact" },
    ],
    servicesList: [
      "Custom Software Engineering",
      "Mobile & Offline-First Systems",
      "Cloud Infrastructure & DevSecOps",
      "Human-Centered Product Design",
      "AI & Real-Time Data Pipelines",
      "Institutional Capacity Building",
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "GitHub", href: "https://github.com/AFRINIT-TECH" },
      { label: "X / Twitter", href: "https://twitter.com" },
      { label: "Instagram", href: "https://www.instagram.com" },
    ],
    copyright: "© 2026 Afrinit Technologies. Built for continental progress.",
  },
};
