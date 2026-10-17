export interface SkillItem {
  name: string;
  url: string;
  icon?: string;
  customSvg?: string;
  invertOnDark?: boolean;
}

export interface SkillCategory {
  title: string;
  type: "grid" | "pills";
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    type: "grid",
    items: [
      {
        name: "C",
        url: "https://devdocs.io/c/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      },
      {
        name: "C++",
        url: "https://en.cppreference.com/w/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Python",
        url: "https://docs.python.org/3/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Java",
        url: "https://docs.oracle.com/en/java/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
    ],
  },
  {
    title: "SKILLS - WEB DEVELOPMENT",
    type: "grid",
    items: [
      {
        name: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        url: "https://react.dev/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org/docs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        url: "https://nodejs.org/docs/latest/api/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Flask",
        url: "https://flask.palletsprojects.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        invertOnDark: true,
      },
      {
        name: "Django",
        url: "https://docs.djangoproject.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      },
      {
        name: "Spring Boot",
        url: "https://spring.io/projects/spring-boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        name: "REST APIs",
        url: "https://restfulapi.net/",
        customSvg: "rest-api",
      },
      {
        name: "GraphQL",
        url: "https://graphql.org/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      },
    ],
  },
  {
    title: "SKILLS - MACHINE LEARNING & AI",
    type: "grid",
    items: [
      {
        name: "PyTorch",
        url: "https://pytorch.org/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "TensorFlow",
        url: "https://www.tensorflow.org/api_docs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Scikit-learn",
        url: "https://scikit-learn.org/stable/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "OpenCV",
        url: "https://docs.opencv.org/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
      },
      {
        name: "NumPy",
        url: "https://numpy.org/doc/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        url: "https://pandas.pydata.org/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      },
      {
        name: "Matplotlib",
        url: "https://matplotlib.org/stable/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      },
      {
        name: "LangChain",
        url: "https://python.langchain.com/docs/",
        customSvg: "langchain",
      },
      {
        name: "LLMs & Agentic AI",
        url: "https://platform.openai.com/docs/",
        customSvg: "ai-agent",
      },
    ],
  },
  {
    title: "DATABASE",
    type: "grid",
    items: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "TimescaleDB",
        url: "https://docs.timescale.com/",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/timescale.svg",
        invertOnDark: true,
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        url: "https://dev.mysql.com/doc/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "CACHE & STREAMING",
    type: "grid",
    items: [
      {
        name: "Redis",
        url: "https://redis.io/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
      {
        name: "SQLite",
        url: "https://www.sqlite.org/docs.html",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "Apache Kafka",
        url: "https://kafka.apache.org/documentation/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
        invertOnDark: true,
      },
    ],
  },
  {
    title: "DEVELOPER TOOLS & INFRASTRUCTURE",
    type: "grid",
    items: [
      {
        name: "VS Code",
        url: "https://code.visualstudio.com/docs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "Cursor",
        url: "https://docs.cursor.com/",
        customSvg: "cursor",
      },
      {
        name: "Git",
        url: "https://git-scm.com/doc",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        url: "https://docs.github.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        invertOnDark: true,
      },
      {
        name: "Docker",
        url: "https://docs.docker.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        url: "https://kubernetes.io/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Temporal",
        url: "https://docs.temporal.io/",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/temporal.svg",
        invertOnDark: true,
      },
      {
        name: "Postman",
        url: "https://learning.postman.com/docs/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        name: "Jira",
        url: "https://support.atlassian.com/jira-software-cloud/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
      },
      {
        name: "Confluence",
        url: "https://support.atlassian.com/confluence-cloud/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg",
      },
      {
        name: "Bitbucket",
        url: "https://support.atlassian.com/bitbucket-cloud/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
      },
    ],
  },
  {
    title: "OTHER SKILLS",
    type: "pills",
    items: [
      { name: "Quantitative Finance & Modeling", url: "#" },
      { name: "Statistical Arbitrage & Algorithmic Trading", url: "#" },
      { name: "Time-Series Analysis & Volatility Modeling", url: "#" },
      { name: "Data Structures & Algorithms", url: "#" },
      { name: "Object Oriented Programming (OOP)", url: "#" },
      { name: "Database Management Systems (DBMS)", url: "#" },
      { name: "Operating Systems & Concurrency", url: "#" },
      { name: "Distributed Microservices Architecture", url: "#" },
    ],
  },
];
