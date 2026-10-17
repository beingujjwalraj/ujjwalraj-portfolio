export interface OfferingItem {
  id: string;
  icon: string;
  category: string;
  title: string;
  summary: string;
  whatIBuild: string[];
  howIDeliver: string;
  toolsAndStack: string[];
}

export interface ProjectStage {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
}

export interface TrustPillar {
  id: string;
  number: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
}

export const availabilityBanner = {
  badgeTitle: "Software Architecture & Engineering",
  engagementModes: [
    { label: "Freelance Contracts", desc: "End-to-End Build" },
    { label: "Technical Advisory", desc: "System Design & Review" },
    { label: "Senior Engineering Roles", desc: "Backend & Systems" },
  ],
  headline: "From Architecture to Production-Ready Software",
  subheadline:
    "I design and build reliable software systems, from high-performance backends and full-stack applications to quantitative trading platforms and AI-powered solutions. I turn complex problems into scalable, production-ready products.",
  focusTags: [
    "E-Commerce & Online Marketplaces",
    "Web & Mobile Applications",
    "SaaS Products & Cloud Backends",
    "Fintech, Banking & Ledgers",
    "Quantitative & Trading Software",
    "AI-Powered Software & Automation",
    "Automotive, Robotics & Telemetry",
    "Raw Idea to Deployed MVP",
  ],
};

export const myOfferings: OfferingItem[] = [
  {
    id: "ecommerce-marketplaces",
    icon: "shopping-bag",
    category: "Commerce & Business",
    title: "E-Commerce Platforms & Online Marketplaces",
    summary:
      "Modern online stores, marketplaces, inventory reservation engines, and automated checkout systems designed to convert visitors and run without hiccups.",
    whatIBuild: [
      "Custom e-commerce storefronts with fast loading, smooth checkout, and mobile optimization",
      "Multi-vendor marketplace backends with inventory tracking and atomic stock reservation",
      "Payment gateway integrations with Stripe, Razorpay, or PayPal including automated refunds and webhooks",
      "Comprehensive merchant admin dashboards for order status, customer data, and automated PDF invoice generation",
    ],
    howIDeliver:
      "I structure the product around your business model: setting up product catalogs, real-time inventory locking so items never oversell, and integrating your preferred payment processors with automated email/SMS receipt confirmations.",
    toolsAndStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Redis Locks", "Stripe / Razorpay API", "Tailwind CSS"],
  },
  {
    id: "web-mobile-apps",
    icon: "smartphone",
    category: "Full-Stack Software",
    title: "Custom Web Applications & Mobile Solutions",
    summary:
      "Responsive, sleek web portals and cross-platform mobile apps for business workflows, internal company tools, or consumer-facing products.",
    whatIBuild: [
      "Fast, responsive web applications built with modern frontend frameworks and clean architecture",
      "Cross-platform mobile applications for iOS and Android with intuitive user interfaces",
      "Role-based employee and client portals with secure login, permissions, and session handling",
      "SEO-optimized business websites with interactive contact forms and analytics tracking",
    ],
    howIDeliver:
      "From user experience wireframing to frontend implementation and backend API connection. Every interface is tested across desktop, tablet, and mobile browsers for seamless responsiveness.",
    toolsAndStack: ["React", "Next.js", "TypeScript", "React Native / Flutter", "FastAPI / Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "saas-cloud-platforms",
    icon: "cloud",
    category: "B2B & Cloud",
    title: "SaaS Products & Multi-Tenant Cloud Platforms",
    summary:
      "End-to-end Software-as-a-Service (SaaS) systems built with schema-isolated multi-tenancy, subscription billing, and scalable microservices.",
    whatIBuild: [
      "Complete SaaS architectures with workspace isolation, team invitations, and role-based permissions",
      "Recurring subscription management, tiered pricing plans, and usage-based metering via Stripe",
      "High-throughput REST and GraphQL APIs with rate limiting, logging, and automated OpenAPI documentation",
      "Containerized deployment on AWS or DigitalOcean with automated continuous integration (CI/CD)",
    ],
    howIDeliver:
      "I architect the backend for multi-tenancy so that each customer's data remains strictly isolated and secure. I set up automated billing webhooks to handle upgrades, downgrades, and cancellations without manual work.",
    toolsAndStack: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker", "Stripe Billing", "AWS EC2 / S3", "Next.js"],
  },
  {
    id: "ai-agents-llm",
    icon: "bot",
    category: "Artificial Intelligence",
    title: "AI-Powered Software, Agentic Workflows & Document Intelligence",
    summary:
      "Practical AI integrations that eliminate repetitive manual labor: autonomous agents with tool-calling, document parsing, and factual RAG knowledge bases.",
    whatIBuild: [
      "Multi-step autonomous AI workflows capable of searching databases, executing actions, and generating reports",
      "Document intelligence pipelines parsing earnings calls, PDF contracts, receipts, and invoices with structured JSON outputs",
      "Private Retrieval-Augmented Generation (RAG) knowledge bases using vector embeddings and hybrid search",
      "Conversational customer support bots integrated directly into WhatsApp, Slack, or website widgets",
    ],
    howIDeliver:
      "I focus on practical business ROI rather than hype. Systems are engineered with strict verification layers, prompt guardrails, and deterministic outputs so the AI never fabricates facts or leaks confidential data.",
    toolsAndStack: ["Python", "FastAPI", "LangChain / LangGraph", "pgvector", "OpenAI / Claude API", "Docker", "LlamaIndex"],
  },
  {
    id: "fintech-ledgers",
    icon: "credit-card",
    category: "Fintech & Banking",
    title: "Fintech Core Banking, Wallets & Double-Entry Ledgers",
    summary:
      "Financial software engineered for strict balance correctness: double-entry bookkeeping ledgers, transaction locking, and automated multi-account reconciliation.",
    whatIBuild: [
      "Immutable double-entry ledger bookkeeping engines where total debits strictly equal total credits",
      "Distributed transaction locking and idempotency protection to prevent accidental duplicate charges",
      "Automated multi-account balance reconciliation pipelines flagging discrepancies across bank statements",
      "Digital wallet architectures with ledger audit logs, fee calculations, and transaction histories",
    ],
    howIDeliver:
      "Using transactional SQL isolation levels, distributed Redis locks, and immutable ledger tables, I build payment backends that guarantee zero double-spends and complete auditability.",
    toolsAndStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Docker", "Stripe / Banking APIs"],
  },
  {
    id: "quant-trading-systems",
    icon: "trending-up",
    category: "Quantitative Finance",
    title: "Quantitative Trading Platforms, Analytics & Risk Engines",
    summary:
      "Trading infrastructure, market data ingestion, derivatives analytics, and dynamic risk calculators built with low-latency and numerical correctness.",
    whatIBuild: [
      "Real-time CME, NSE, and broker market data streaming over FIX protocol and WebSockets",
      "Automated Options Chain analyzers, Black-Scholes Greeks calculation, and dynamic margin estimators",
      "Central Limit Order Book (CLOB) simulators and automated execution order routers",
      "Dynamic portfolio risk calculation engines computing VaR, CVaR, Sharpe ratios, and max drawdown",
    ],
    howIDeliver:
      "Leveraging hands-on quantitative developer experience from prop trading environments, I deliver vectorized calculation engines and tick pipelines that operate with microsecond-level efficiency.",
    toolsAndStack: ["Python", "C++", "TimescaleDB", "Kafka", "Redis", "NumPy / SciPy", "WebSockets", "Pandas"],
  },
  {
    id: "crm-automation",
    icon: "users",
    category: "Business Automation",
    title: "Custom CRM Solutions & Business Process Automation",
    summary:
      "Tailored CRM systems and background automation pipelines that streamline customer relationships, lead tracking, and internal team coordination.",
    whatIBuild: [
      "Custom CRM portals designed specifically around your sales pipeline and client onboarding process",
      "Automated email, SMS, and WhatsApp notification triggers for follow-ups and appointment booking",
      "Centralized client communication logs, notes, deal stages, and document attachments",
      "Automated data synchronization between external spreadsheets, accounting software, and internal databases",
    ],
    howIDeliver:
      "Instead of forcing your business into rigid, expensive off-the-shelf software, I create a streamlined CRM that fits your team's exact daily habits, eliminating clutter and saving hours of administrative overhead.",
    toolsAndStack: ["React", "Next.js", "FastAPI", "PostgreSQL", "Twilio / SendGrid API", "Celery", "Redis"],
  },
  {
    id: "ml-deep-learning",
    icon: "cpu",
    category: "Machine Learning & Vision",
    title: "Machine Learning, Deep Learning & Computer Vision",
    summary:
      "Production ML models, predictive analytics, image recognition, and end-to-end MLOps deployment on cloud infrastructure.",
    whatIBuild: [
      "Supervised predictive models for customer churn, price forecasting, and anomaly detection",
      "Computer vision pipelines for image classification, defect detection, and OCR text extraction",
      "Deep surrogate models approximating complex physical, materials, or chemical simulations",
      "Automated CI/CD MLOps pipelines with model artifact versioning and containerized inference APIs",
    ],
    howIDeliver:
      "I handle the full machine learning lifecycle: data cleaning, exploratory analysis, model training, evaluation with cross-validation, and packaging into a fast REST API for live production consumption.",
    toolsAndStack: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "FastAPI", "Docker", "AWS S3 / EC2"],
  },
  {
    id: "robotics-telemetry",
    icon: "activity",
    category: "Hardware & Telemetry",
    title: "Automotive Software, Robotics & Embedded Telemetry",
    summary:
      "Real-time sensor telemetry streaming, motor control logic, embedded Linux systems, and physical simulation modeling.",
    whatIBuild: [
      "Real-time sensor data acquisition from IMUs, wheel encoders, and microcontrollers",
      "Telemetry streaming dashboards monitoring vehicle or robot speed, slip ratios, and heading angles",
      "Physics-based simulation integration using ROS and Gazebo for automated algorithm validation",
      "Embedded computing software deployed on Raspberry Pi, NVIDIA Jetson, or industrial controllers",
    ],
    howIDeliver:
      "Drawing from national finalist engineering experience in EV rough-terrain torque allocation, I design resilient software that bridges physical hardware, sensor serial streams, and real-time operator dashboards.",
    toolsAndStack: ["Python", "C++", "ROS / Gazebo", "Raspberry Pi", "Flask / WebSockets", "IMU Telemetry", "Linux"],
  },
  {
    id: "innovative-ideas-mvp",
    icon: "sparkles",
    category: "Prototypes & Startups",
    title: "Have an Innovative Idea or Prototype? Let's Build & Launch It",
    summary:
      "Open to all innovative projects across any sector: turning raw concepts into working MVPs, deployed on the web, and ready for real users.",
    whatIBuild: [
      "Rapid prototype development: transforming sketches or whiteboard ideas into working software",
      "Minimal Viable Products (MVPs) built specifically for initial customer validation and pitch decks",
      "Interactive proof-of-concept demos with working authentication, database, and core features",
      "Collaborative technical exploration: brainstorming architecture and tech stack choices for new concepts",
    ],
    howIDeliver:
      "I enjoy collaborating with passionate creators, startup founders, and innovators. If you have an exciting concept in any domain, let's connect, map out the technical feasibility, and build a prototype that works.",
    toolsAndStack: ["Full-Stack Prototyping", "Rapid MVP Sprints", "Cloud Deployment", "Direct Collaboration"],
  },
];

export const projectStages: ProjectStage[] = [
  {
    id: "stage-1",
    stageNumber: "01",
    title: "Requirement Gathering & PRD Formulation",
    subtitle: "Clarifying the Vision & Defining the Scope",
    summary:
      "We discuss your exact goals, target users, and essential features to draft a clear, straightforward Product Requirement Document (PRD).",
    details: [
      "Initial discovery conversation to understand your business objectives, target audience, and key pain points",
      "Drafting a concise Product Requirement Document (PRD) detailing user stories, essential features, and out-of-scope boundaries",
      "Clarifying third-party integrations (payments, SMS/email, maps, external APIs) upfront to avoid delays later",
      "Aligning on project milestones, target delivery dates, and expected deliverables before touching any code",
    ],
  },
  {
    id: "stage-2",
    stageNumber: "02",
    title: "Technical Architecture & System Design Doc",
    subtitle: "Database Schema, API Contracts & Hosting Budget",
    summary:
      "Before building, I create a technical design document outlining the architecture, database models, and estimated cloud hosting costs.",
    details: [
      "Drafting a Technical Design Document detailing system architecture, data models, and API endpoints",
      "Selecting the most cost-effective and performant technology stack tailored to your expected user scale",
      "Finalizing an infrastructure cost estimate (AWS, Vercel, Supabase, or DigitalOcean) so there are no surprise monthly bills",
      "Presenting the architecture to you for final sign-off, ensuring total mutual confidence in the technical foundation",
    ],
  },
  {
    id: "stage-3",
    stageNumber: "03",
    title: "Milestone Implementation & Working Prototype",
    subtitle: "Hands-on Early Review & Interactive Demo",
    summary:
      "I develop the core system in structured milestones, presenting an early working prototype for your hands-on walkthrough.",
    details: [
      "Writing clean, modular, and type-safe code following industry best practices and security standards",
      "Setting up database tables, authentication flows, core business logic, and user interface components",
      "Delivering an early, interactive working prototype hosted on a private staging link for you to test",
      "Holding an async or live review walkthrough where you explore the system and suggest any initial adjustments",
    ],
  },
  {
    id: "stage-4",
    stageNumber: "04",
    title: "Client Review, Refinements & 5–7 Days Staging Testing",
    subtitle: "Incorporating Changes & Hardening for Edge Cases",
    summary:
      "I implement your feedback, polish the user experience, and run rigorous staging tests for 5 to 7 days to ensure total stability.",
    details: [
      "Iterating on your review feedback: tweaking layouts, refining copy, and adjusting workflows to your exact liking",
      "Testing the system across multiple devices, screen resolutions, and browsers (mobile, tablet, desktop)",
      "Conducting 5 to 7 days of continuous staging testing with sample data to verify edge cases, error handling, and performance",
      "Stress testing database queries and form validations to ensure zero unexpected crashes under load",
    ],
  },
  {
    id: "stage-5",
    stageNumber: "05",
    title: "Domain Setup, Production Hosting & Deployment",
    subtitle: "Custom Domain, SSL Encryption & Cloud Launch",
    summary:
      "I assist in configuring your client-approved domain name, setup SSL security certificates, and deploy the application live on the cloud.",
    details: [
      "Assisting you in purchasing or connecting your approved custom domain name (e.g., yourcompany.com)",
      "Configuring DNS records, SSL encryption certificates (HTTPS), and Cloudflare CDN protection",
      "Deploying the production application on AWS, Vercel, DigitalOcean, or your preferred cloud provider",
      "Setting up automated daily database backups, server monitoring, and error alerts to ensure uninterrupted uptime",
    ],
  },
  {
    id: "stage-6",
    stageNumber: "06",
    title: "Full Handover, Code Ownership & Post-Launch Support",
    subtitle: "100% Client Ownership, Docs & Peace of Mind",
    summary:
      "You receive 100% ownership of all source code, deployment keys, a recorded walkthrough, and dedicated post-launch support.",
    details: [
      "Transferring complete ownership of all Git repositories, hosting accounts, and third-party API credentials to you",
      "Providing clear, simple documentation and a recorded video walkthrough explaining how to manage the system and admin tools",
      "Included post-launch support period to monitor real-world traffic and resolve any minor questions immediately",
      "Available for ongoing feature expansions, maintenance retainers, or future version upgrades as your business grows",
    ],
  },
];

export const trustPillars: TrustPillar[] = [
  {
    id: "direct-access",
    number: "01",
    title: "Direct Access to the Builder (Zero Agency Overhead)",
    tag: "DIRECT PARTNERSHIP",
    summary:
      "You communicate directly with the engineer who architects and writes your code, eliminating miscommunication and agency markups.",
    description:
      "In traditional agencies, requirements get filtered through account managers, junior developers, and sales reps, leading to misunderstandings and ballooning timelines. When you collaborate with me, you speak directly with the builder. Every question, design adjustment, and technical decision is addressed promptly and accurately.",
  },
  {
    id: "end-to-end",
    number: "02",
    title: "True End-to-End Execution (From Whiteboard to Live Launch)",
    tag: "FULL OWNERSHIP",
    summary:
      "I take responsibility for the entire technical stack: architecture, databases, APIs, frontend UI, domain setup, and cloud hosting.",
    description:
      "You don't need to hire separate frontend developers, backend engineers, DevOps specialists, and database administrators. I handle the complete lifecycle: from setting up your PostgreSQL database and secure APIs to crafting responsive React interfaces, connecting your custom domain, and deploying to AWS. You receive a fully finished product that is ready to use.",
  },
  {
    id: "clean-code",
    number: "03",
    title: "100% Code Ownership & Maintainable Architecture",
    tag: "YOUR ASSET",
    summary:
      "Every line of code and every account belongs entirely to you, structured so any competent developer can easily maintain it.",
    description:
      "No proprietary vendor lock-in or messy spaghetti code. I write modular, type-safe TypeScript and Python with thorough comments and standard directory structures. You retain 100% legal ownership of the Git repositories, cloud accounts, and design assets, giving you complete peace of mind for the long term.",
  },
  {
    id: "transparent-milestones",
    number: "04",
    title: "Milestone-Based Progress & Clear Pricing",
    tag: "NO SURPRISES",
    summary:
      "Work is organized into clear, verifiable milestones. You review working progress at every step with transparent expectations.",
    description:
      "I believe in complete transparency. We define specific milestones and deliverables before starting. At each stage, you get a working preview to test. There are no surprise invoices, hidden fees, or mysterious delays. You always know exactly what is being built, when it will be delivered, and how much it costs.",
  },
  {
    id: "fast-learner",
    number: "05",
    title: "Adaptable Problem Solver & Fast Learner",
    tag: "SOLUTION-DRIVEN",
    summary:
      "Even if your project requires custom hardware, specialized third-party APIs, or novel tools, I quickly master the requirements and deliver.",
    description:
      "While I bring strong specialization in quantitative systems, high-performance backends, and AI pipelines, real-world engineering often requires integrating unique APIs, unusual hardware sensors, or domain-specific logic. I pride myself on rapid technical comprehension, digging into documentation, and delivering dependable solutions regardless of the tech stack.",
  },
];
