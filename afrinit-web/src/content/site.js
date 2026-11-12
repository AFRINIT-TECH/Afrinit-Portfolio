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
      { label: "Impact", page: "impact" },
      { label: "People & Work", page: "people" },
    ],
    cta: {
      label: "Partner with us",
      page: "contact",
    },
  },

  hero: {
    eyebrow: "Technology for African progress",
    titleLine1: "Built in Africa.",
    titleLine2: "Built for more.",
    paragraph:
      "We design and develop software for companies and organizations, grow talent, and back bold ideas—turning Africa's digital potential into progress that reaches everyone.",
    primaryCta: {
      label: "Explore what we do",
      page: "solutions",
    },
    secondaryCta: {
      label: "Our impact",
      page: "impact",
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

  about: {
    title: "Who we are",
    description:
      "Afrinit is a technology company rooted in Africa, building software that serves the continent and the world. We combine local insight with global standards to deliver products that last.",
    points: [
      {
        title: "Local insight, global standards",
        description:
          "We understand the African market deeply, and we build to the highest international quality bars.",
      },
      {
        title: "Talent-first approach",
        description:
          "We invest in people — growing engineers, designers, and leaders who shape Africa's digital future.",
      },
      {
        title: "Long-term partnerships",
        description:
          "We don't just deliver projects; we build relationships that drive sustained progress.",
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

  solutions: {
    title: "What we do",
    description:
      "From custom software to digital transformation, we offer end-to-end solutions that help organizations scale and thrive.",
    services: [
      {
        title: "Custom Software Development",
        description:
          "Tailored applications built for your unique challenges — from concept to deployment and beyond.",
        icon: "code",
        details: "Our engineering teams work alongside your organization to understand your unique challenges and build software that fits perfectly. From initial discovery through deployment and ongoing support, we deliver solutions that scale with your growth.",
      },
      {
        title: "Digital Transformation",
        description:
          "Modernize legacy systems, automate workflows, and unlock data-driven decision making.",
        icon: "transform",
        details: "We help organizations navigate the journey from legacy systems to modern, cloud-native architectures. Our approach combines process optimization with technology implementation to ensure lasting transformation.",
      },
      {
        title: "Cloud & Infrastructure",
        description:
          "Scalable, secure cloud architectures designed for performance and reliability.",
        icon: "cloud",
        details: "From cloud migration to infrastructure-as-code, we design and implement cloud solutions that are secure, scalable, and cost-effective. We work with AWS, GCP, and Azure to find the right fit for your needs.",
      },
      {
        title: "Product Design",
        description:
          "User-centered design that bridges aesthetics with functionality for real-world impact.",
        icon: "design",
        details: "Our design process puts users at the center. Through research, prototyping, and testing, we create interfaces that are intuitive, accessible, and beautiful — designed for the African context and beyond.",
      },
      {
        title: "AI & Data Solutions",
        description:
          "Leverage machine learning and analytics to extract insights and automate intelligence.",
        icon: "ai",
        details: "From predictive analytics to natural language processing, we build AI solutions that solve real problems. Our data science team works with your data to uncover insights and automate decisions.",
      },
      {
        title: "Capacity Building",
        description:
          "Training and mentorship programs that grow technical talent across organizations.",
        icon: "growth",
        details: "We believe in growing talent from within. Our training programs, mentorship initiatives, and knowledge transfer processes ensure your team is equipped to maintain and evolve the solutions we build together.",
      },
    ],
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
