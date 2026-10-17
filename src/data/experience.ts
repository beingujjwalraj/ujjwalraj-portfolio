export interface ResumeItem {
  title: string;
  subTitle?: string;
  period?: string;
  organization?: string;
  location?: string;
  companyLogo?: string;
  bullets?: string[];
  description?: string;
  badge?: string;
  skills?: string;
  credentialId?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period?: string;
  credentialId?: string;
  skills?: string;
  description?: string;
}

export const resumeData = {
  summary: {
    name: "Ujjwal Raj",
    title: "Quantitative Developer & Software Engineer",
    bio: "Quantitative Developer building statistical arbitrage and commodity analytics applications for derivative traders using Python, PostgreSQL, and microservices. Experienced in CME market data ingestion via FIX/TT, high-throughput Kafka streaming, TimescaleDB, and Redis caching. Beyond quantitative trading systems, I engineer AI-enabled applications, SaaS products, and resilient distributed architectures.",
    location: "Pune, Maharashtra, India",
    phone: "+91 9508686360",
    email: "ujjwalrajbgis@gmail.com",
  },

  education: [
    {
      title: "Bachelor of Technology (B.Tech) – Mechanical Engineering",
      organization: "Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Kancheepuram",
      period: "2022 – 2026",
      location: "Chennai, Tamil Nadu, India",
      description:
        "Core coursework in Systems Engineering, Computational Mathematics, Data Structures, Algorithms, and Object-Oriented Software Design.",
      bullets: [
        "Active core contributor and leader across campus technical societies including the CS Club, Training & Placement Cell, and E-Cell.",
        "National finalist in premier deep-tech engineering challenges, designing embedded AI and autonomous mobility solutions.",
      ],
    },
  ],

  experience: [
    {
      title: "Quantitative Developer",
      organization: "GemsCap Global Analyst Pvt. Ltd.",
      location: "Pune, Maharashtra, India",
      period: "Aug 2026 – Present",
      companyLogo: "💎",
      bullets: [
        "Developing statistical arbitrage applications. Built the FCA (Forward Curve Analytics) and HCM (Historical Curve Matching) apps end-to-end, enabling traders to inspect commodity term structure curves and match historical patterns across 40+ years of CME settlement data with sub-second response times.",
        "Engineered and deployed the Expired-Contracts Notification Service on live production servers, alerting derivative traders to critical commodity delivery and option expiry windows with 99.9% reliability.",
        "Architected backend microservices in Python & PostgreSQL, leveraging Apache Kafka for real-time event streaming, Redis and SQLite for caching, and TimescaleDB for time-series queries.",
        "Deployed containerized services with Docker on k3s clusters, instrumented with Prometheus metric exporters and Grafana observability dashboards.",
      ],
    },
    {
      title: "Quantitative Developer Intern",
      organization: "GemsCap Global Analyst Pvt. Ltd.",
      location: "Pune, Maharashtra, India",
      period: "Jan 2026 – Jul 2026",
      companyLogo: "💎",
      bullets: [
        "Constructed low-latency market-data ingestion pipelines connecting CME feeds over the FIX protocol with Trading Technologies (TT) connectivity into centralized databases.",
        "Assisted senior developers in building the Portfolio Management backend, computing Value at Risk (VaR), Conditional VaR (CVaR), and tracking trader open positions.",
        "Implemented daily settlement PnL calculation routines; actively collaborated in Agile sprints using Jira, Confluence, and Bitbucket.",
      ],
    },
  ],

  volunteering: [
    {
      title: "Joint Core",
      organization: "CS Club, IIITDM Kancheepuram",
      period: "Aug 2023 – Jul 2024",
      location: "Chennai, India",
      description:
        "Served on the IT core team managing technical operations and collaborative projects. Led technical coordination for 'Recode the Past,' a major web development competition, and managed version control and project repositories using Git and GitHub. Developed expertise in technical project management and cross-functional team collaboration.",
    },
    {
      title: "Volunteer",
      organization: "Training and Placement Cell, IIITDM Kancheepuram",
      period: "Aug 2023 – Jun 2024",
      location: "Chennai, India",
      badge: "Certificate of Appreciation",
      description:
        "Facilitated corporate outreach and networking initiatives by connecting with industry professionals and managing recruitment pipelines. Maintained structured databases to track engagement and invited top-tier companies for campus recruitment drives, developing strong stakeholder communication skills.",
    },
    {
      title: "Market Researcher",
      organization: "E-CELL, IIITDM Kancheepuram",
      period: "Apr 2023 – Dec 2023",
      location: "Chennai, India",
      description:
        "Conducted market research and lead generation to support entrepreneurship initiatives. Built contact databases by researching potential industry sponsors, guest speakers, and startup partners to secure collaborations. Analyzed student insights to help tailor club programming.",
    },
  ],

  achievements: [
    {
      title: "Finalist – TECHgium® 8th Edition (Top 36 out of 40,000+ Students Nationwide)",
      organization: "L&T Technology Services",
      period: "May 2025",
      badge: "National Finalist",
      description:
        "Selected as one of the top 36 finalist teams out of 40,000+ students across India in the 8th edition of TECHgium®. Presented an AI-driven adaptive torque allocation system for electric vehicles on rough terrain, integrating Gazebo simulation, deep learning, embedded systems, and real-time motor control using Raspberry Pi.",
    },
    {
      title: "Financial Mastermind – Portfolio Management (2nd Place)",
      organization: "IIITDM Kancheepuram",
      period: "Feb 2025",
      badge: "2nd Prize Winner",
      description:
        "Secured 2nd place for designing a comprehensive financial plan addressing emergency preparedness, education funding, retirement, and risk management for a single-parent client. Demonstrated strategic portfolio allocation and financial foresight.",
    },
    {
      title: "Altair Data Science Competition",
      organization: "Altair",
      period: "Jun 2024",
      badge: "Predictive AI Model",
      description:
        "Awarded by Altair for developing a high-accuracy predictive maintenance model using Random Forest. Recognized for significantly reducing industrial machine downtime by forecasting failures with a 99.25% accuracy rate (0.75% error rate).",
    },
    {
      title: "Business Plan Event — 1st Prize",
      organization: "E-Summit, IIITDM Kancheepuram",
      period: "Mar 2024",
      badge: "1st Prize Winner",
      description:
        "Won 1st prize at E-Summit for conceiving and presenting a comprehensive business plan to transform a traditional manufacturing facility into an automated smart factory.",
    },
    {
      title: "Marvista – Marketing Event (2nd Place)",
      organization: "Vashist, IIITDM Kancheepuram",
      period: "Mar 2024",
      badge: "2nd Place",
      description:
        "Secured 2nd place in MarkVista at Vashist by creating a data-driven marketing plan for inflatable outdoor loungers, focusing on consumer segmentation, competitive analysis, and strategic positioning.",
    },
  ],

  certifications: [
    {
      name: "The Complete Python Developer",
      issuer: "Udemy",
      period: "Issued Aug 2026",
      credentialId: "UC-a0d5d909-1a56-43a4-9222-b10099e3b050",
      skills: "Python (Programming Language), Data Structures, OOP",
      description: "Advanced Python engineering, concurrency patterns, and data structure implementations.",
    },
    {
      name: "Amazon ML Summer School",
      issuer: "Amazon",
      period: "Issued Aug 2025",
      skills: "Data Science, Applied Machine Learning, Deep Neural Networks",
      description: "Selected for Amazon's flagship mentorship program covering transformer models and deep learning architectures.",
    },
    {
      name: "Introduction to Large Language Models (LLMs)",
      issuer: "NPTEL",
      period: "Issued Nov 2025",
      credentialId: "NPTEL25CS161S1253902387",
      skills: "LLMs, Prompt Engineering, Transformer Architectures",
      description: "Comprehensive foundation in attention mechanisms, prompt engineering, and transformer models.",
    },
    {
      name: "Deep Learning For Computer Vision",
      issuer: "NPTEL",
      period: "Issued Nov 2025",
      credentialId: "NPTEL25CS93S353904351",
      skills: "Deep Learning, Vision Transformers, CNNs",
      description: "Advanced vision systems, convolutional networks, and vision transformer (ViT) architectures.",
    },
    {
      name: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      period: "Issued Nov 2024",
      credentialId: "NPTEL24CS113S1356300169",
      skills: "Python Algorithms, Problem Solving",
      description: "Practical computational logic, algorithmic problem solving, and scientific computing.",
    },
    {
      name: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
      issuer: "Udemy",
      period: "Issued Aug 2024 · Expires Mar 2035",
      credentialId: "UC-b3bb573a-4e50-4fbc-b1a2-68ee3f7f498d",
      skills: "Data Science, Machine Learning, Deep Learning, NLP",
      description: "Comprehensive end-to-end curriculum covering machine learning algorithms, deep neural networks, and NLP pipeline engineering.",
    },
  ],
};
