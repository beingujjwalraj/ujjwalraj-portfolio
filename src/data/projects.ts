export interface Project {
  id: string;
  title: string;
  category: "quant" | "aiml" | "systems";
  categoryLabel: string;
  subtitle: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  priority?: number;
}

export const projects: Project[] = [
  // =========================================================================
  // QUANT & FINTECH
  // =========================================================================
  {
    id: "payflow",
    title: "PayFlow — Distributed Payment & Ledger Platform",
    category: "quant",
    categoryLabel: "Fintech & Ledger",
    subtitle: "Fintech · Distributed Transactions · Financial Correctness",
    description:
      "API-first core banking engine with double-entry ledger bookkeeping, strict idempotency keys, distributed transaction locking, and automated multi-account reconciliation pipelines.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Docker"],
    image: "/assets/projects/payflow.png",
    priority: 1,
  },
  {
    id: "marketstream",
    title: "MarketStream — Real-Time Market Data Platform",
    category: "quant",
    categoryLabel: "Quant & Streaming",
    subtitle: "Quant · Streaming · High-Throughput Data Processing",
    description:
      "Ultra low-latency market data processing pipeline consuming CME futures feeds, parsing FIX/TT messages, and publishing real-time normalized order books to Kafka and TimescaleDB.",
    techStack: ["Python", "Kafka", "TimescaleDB", "Redis", "WebSockets", "C++"],
    image: "/assets/projects/marketstream.png",
    priority: 2,
  },
  {
    id: "quantforge",
    title: "QuantForge — Backtesting & Portfolio Risk Engine",
    category: "quant",
    categoryLabel: "Quantitative Finance",
    subtitle: "Quant Finance · Numerical Correctness · Performance",
    description:
      "Vectorized quantitative backtesting engine and dynamic portfolio risk calculator computing VaR, CVaR, Sharpe ratios, maximum drawdown, and transaction slippage modeling under dynamic market regimes.",
    techStack: ["Python", "NumPy", "Pandas", "TimescaleDB", "Scipy", "React"],
    image: "/assets/projects/quantforge.png",
    priority: 3,
  },
  {
    id: "exchangesim",
    title: "ExchangeSim — Order Management & Execution Simulator",
    category: "quant",
    categoryLabel: "Trading Infrastructure",
    subtitle: "Quant Development · State Machines · Concurrency",
    description:
      "High-performance central limit order book (CLOB) and order management simulator (OMS) enforcing price-time priority matching, deterministic fills, and concurrency-safe state transitions.",
    techStack: ["Python", "FastAPI", "Redis", "PostgreSQL", "WebSockets", "Docker"],
    image: "/assets/projects/exchangesim.png",
    priority: 4,
  },
  {
    id: "option-chain",
    title: "Option-Chain & Margin Calculator",
    category: "quant",
    categoryLabel: "Derivatives Trading",
    subtitle: "Automated Options Analysis & Greeks Calculation",
    description:
      "Python trading application integrating with the Upstox API that automates real-time option-chain analysis, contract strikes selection, Black-Scholes Greeks, premium pricing, and dynamic portfolio margin requirements.",
    techStack: ["Python", "Upstox API", "Pandas", "Options Greeks", "NumPy"],
    image: "/assets/projects/optionchain.png",
    githubUrl: "https://github.com/beingujjwalraj/Option-Chain-and-Margin-Calculator",
  },

  // =========================================================================
  // AI & MACHINE LEARNING
  // =========================================================================
  {
    id: "researchpilot",
    title: "ResearchPilot — AI Research & Document Intelligence SaaS",
    category: "aiml",
    categoryLabel: "AI Engineering & RAG",
    subtitle: "AI Engineering · RAG · Background Processing",
    description:
      "Autonomous financial research assistant parsing complex earnings call transcripts and 10-K regulatory filings with multi-stage RAG, hybrid semantic search, and streaming LLM synthesis.",
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI / Claude API", "pgvector", "Next.js"],
    image: "/assets/projects/researchpilot.png",
    priority: 9,
  },
  {
    id: "mlops-security",
    title: "MLOps Pipeline for Network Security",
    category: "aiml",
    categoryLabel: "MLOps & Security",
    subtitle: "Automated Phishing Detection & Continuous Deployment",
    description:
      "End-to-end production machine learning pipeline with automated CI/CD using GitHub Actions, FastAPI inference service, MongoDB Atlas storage, containerized with Docker, and deployed on AWS EC2 & S3.",
    techStack: ["FastAPI", "Scikit-learn", "MongoDB Atlas", "Docker", "AWS EC2", "GitHub Actions"],
    image: "/assets/projects/mlops.png",
    githubUrl: "https://github.com/beingujjwalraj/MLOps-Pipeline-for-Network-Security",
  },
  {
    id: "torque-allocation",
    title: "AI-Driven Adaptive Torque Allocation for EVs on Rough Terrain",
    category: "aiml",
    categoryLabel: "Robotics & Deep Learning",
    subtitle: "TECHgium® 8th Edition National Finalist Project",
    description:
      "AI-driven adaptive torque distribution system for electric vehicles operating on rough terrains, integrating Gazebo physics simulation, deep neural networks, IMU sensor telemetry, and real-time motor control via Raspberry Pi.",
    techStack: ["Python", "PyTorch", "ROS / Gazebo", "Raspberry Pi", "IMU Sensors", "Flask"],
    image: "/assets/projects/torque.png?v=2",
    githubUrl: "https://github.com/beingujjwalraj/AI-Driven-adaptive-torque-allocation-for-electric-vehicles-on-rough-terrain",
  },
  {
    id: "multiscale-modelling",
    title: "Multiscale Modelling of Material Using Machine Learning",
    category: "aiml",
    categoryLabel: "Computational Physics & ML",
    subtitle: "Deep Surrogate Models for Material Microstructures",
    description:
      "Deep surrogate machine learning models predicting non-linear constitutive material responses, stress-strain curves, and lattice deformities from atomic and microscopic physical simulations.",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Computational Physics", "Matplotlib"],
    image: "/assets/projects/multiscale.png?v=2",
    githubUrl: "https://github.com/beingujjwalraj/Multiscale-Modelling-of-Material-Using-Machine-Learning",
  },

  // =========================================================================
  // DISTRIBUTED & CLOUD SYSTEMS
  // =========================================================================
  {
    id: "dispatchos",
    title: "DispatchOS — Uber-Style Dispatch & Location Platform",
    category: "systems",
    categoryLabel: "Geospatial & Concurrency",
    subtitle: "Consumer Software · Geospatial Systems · Real-Time Events",
    description:
      "High-throughput dispatch platform tracking real-time geospatial coordinates with Redis GEO, streaming driver-rider pings over WebSockets, and resolving spatial proximity matching under high traffic.",
    techStack: ["Python", "FastAPI", "Redis GEO", "PostgreSQL / PostGIS", "WebSockets", "Docker"],
    image: "/assets/projects/dispatchos.png",
    priority: 5,
  },
  {
    id: "streamforge",
    title: "StreamForge — Video Processing & Streaming Backend",
    category: "systems",
    categoryLabel: "Media Infrastructure",
    subtitle: "Media Infrastructure · Object Storage · Async Workflows",
    description:
      "Distributed media infrastructure handling asynchronous video transcoding, adaptive HLS/DASH chunking, S3 presigned multipart uploads, and resilient Celery worker queue task orchestration.",
    techStack: ["Python", "Celery", "Redis", "FFmpeg", "AWS S3", "Docker"],
    image: "/assets/projects/streamforge.png",
    priority: 6,
  },
  {
    id: "saascore",
    title: "SaaSCore — Multi-Tenant SaaS Platform",
    category: "systems",
    categoryLabel: "B2B SaaS & Security",
    subtitle: "B2B Software · Authentication · Billing · API Design",
    description:
      "Enterprise multi-tenant SaaS foundation featuring PostgreSQL schema-level isolation, JWT role-based access control (RBAC), Stripe subscription billing webhooks, and rate-limited developer APIs.",
    techStack: ["FastAPI", "PostgreSQL", "Stripe API", "Redis", "Docker", "React"],
    image: "/assets/projects/saascore.png",
    priority: 7,
  },
  {
    id: "pulseops",
    title: "PulseOps — Distributed Job & Observability Platform",
    category: "systems",
    categoryLabel: "Infrastructure & Telemetry",
    subtitle: "Infrastructure · Reliability · Monitoring",
    description:
      "Resilient background task execution engine with dynamic retry budgets, dead-letter queues, real-time OpenTelemetry trace aggregation, and Prometheus/Grafana service level objective (SLO) dashboards.",
    techStack: ["Python", "Go", "Temporal / Celery", "OpenTelemetry", "Prometheus", "Grafana"],
    image: "/assets/projects/pulseops.png",
    priority: 8,
  },
  {
    id: "commerceos",
    title: "CommerceOS — E-Commerce Marketplace Backend",
    category: "systems",
    categoryLabel: "E-Commerce Systems",
    subtitle: "Commerce · Inventory · Orders · Integrations",
    description:
      "High-throughput marketplace backend architected for flash-sale inventory reservation with atomic Redis locks, distributed order state transitions, idempotent checkout, and event-driven fulfillment.",
    techStack: ["Python", "PostgreSQL", "Redis", "Kafka", "Docker", "FastAPI"],
    image: "/assets/projects/commerceos.png",
    priority: 10,
  },
];
