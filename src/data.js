export const portfolio = {
  name: "Tarachand",
  githubUsername: "tarachand-dotcom",
  githubUrl: "https://github.com/tarachand-dotcom",
  linkedinUrl: "",
  email: "",
  resumeUrl: "",
  intro:
    "I’m a software engineer in the making, drawn to the space where thoughtful engineering meets intelligent products. I like turning ambitious ideas into useful, carefully crafted software.",
  education: {
    title: "Software engineering",
    detail: "Learning, building, and growing one project at a time.",
    status: "In progress",
  },
};

export const projects = [
  {
    number: "01",
    title: "DocuPlus",
    category: "AI · Document intelligence",
    description:
      "An AI document-processing project exploring retrieval-augmented generation—making information in documents easier to find and work with.",
    technologies: ["AI / ML", "RAG", "Document processing"],
    visual: "documents",
    repoUrl: "",
    demoUrl: "",
  },
  {
    number: "02",
    title: "Intelligent Personal AI Assistant",
    category: "AI · Personal productivity",
    description:
      "A chat-based assistant built with Python, Streamlit, and Ollama. It brings together task management, event planning, and email understanding, with local SQLite storage.",
    technologies: ["Python", "Streamlit", "Ollama", "SQLite"],
    visual: "assistant",
    repoUrl: "https://github.com/tarachand-dotcom/AIASSISTENT",
    demoUrl: "",
  },
  {
    number: "03",
    title: "Smart Banking Terminal System",
    category: "Web · Banking simulation",
    description:
      "A Flask-powered banking experience for account access, deposits, withdrawals, PIN management, and transaction history, with JSON-backed persistence.",
    technologies: ["Python", "Flask", "HTML / CSS", "JSON"],
    visual: "banking",
    repoUrl:
      "https://github.com/tarachand-dotcom/Smart-Banking-Terminal-System",
    demoUrl: "",
  },
  {
    number: "04",
    title: "C++ DSA Problem-Solving",
    category: "Computer science · Practice",
    description:
      "A continuing problem-solving journey with C++ and data structures—building a stronger foundation through deliberate practice.",
    technologies: ["C++", "Data structures", "Algorithms"],
    visual: "code",
    repoUrl: "",
    demoUrl: "",
  },
];

export const skillGroups = [
  {
    title: "Programming languages",
    icon: "code",
    skills: ["C++", "Python"],
  },
  {
    title: "AI / machine learning",
    icon: "brain",
    skills: ["LLM applications", "RAG", "Ollama"],
  },
  {
    title: "Web development",
    icon: "web",
    skills: ["React", "Streamlit", "Flask", "HTML & CSS"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["SQLite", "JSON storage"],
  },
  {
    title: "Developer tools",
    icon: "tools",
    skills: ["GitHub", "Ollama"],
  },
  {
    title: "Computer science",
    icon: "binary",
    skills: ["Data structures", "Algorithms", "Problem-solving"],
  },
];

export const journey = [
  {
    icon: "graduation",
    eyebrow: "Education",
    title: "Software engineering",
    detail: "Learning, building, and growing one project at a time.",
    date: "In progress",
  },
  {
    icon: "binary",
    eyebrow: "Foundations",
    title: "C++ & problem-solving",
    detail: "Developing a stronger computer science foundation through DSA practice.",
    date: "Ongoing",
  },
  {
    icon: "brain",
    eyebrow: "AI / ML",
    title: "Building with LLMs",
    detail: "Exploring local models, assistant workflows, and retrieval-augmented generation.",
    date: "Project work",
  },
  {
    icon: "layers",
    eyebrow: "Product engineering",
    title: "From idea to application",
    detail: "Bringing AI and web technologies together in practical, end-to-end projects.",
    date: "In progress",
  },
];
