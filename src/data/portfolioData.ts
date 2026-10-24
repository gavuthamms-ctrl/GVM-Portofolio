import { Project, Certification, Hackathon, SkillCategory } from '../types';

export const personalInfo = {
  name: "Gavutham MS",
  headline: "Hi, I'm Gavutham MS.",
  tagline: "I build real software — from AI systems to optimized algorithms — and I'm looking for my first internship.",
  status: "Available for Internship & Freelance",
  email: "gavutham.ms@gmail.com",
  collegeEmail: "gavuthamms.pacet.cse@gmail.com",
  phone: "+91 81243 45737",
  github: "https://github.com/gavuthamms-ctrl",
  linkedin: "https://www.linkedin.com/in/gavuthamms",
  resumeFile: "/Gavutham_MS_Resume.pdf",
  quote: '"I build things to understand them."',
  cgpa: "8.8",
  college: "B.E. Computer Science, PACET",
  batch: "2025–2029",
};

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "AI Resume Analyser",
    oneLiner: "Gives your resume an honest, structured second opinion.",
    tags: ["Python", "AI", "NLP", "Streamlit"],
    description: "A machine-learning resume scanner designed to eliminate selection uncertainty. When users upload their profiles, the tool extracts, structures, and processes raw PDF text, benchmarking credentials against customized tech career keyword clusters. It calculates exact skill gap ratios, isolates core grammatical/composition improvements, and scores layout scannability so job applicants can bypass system filters successfully.",
    problem: "Most job applicants submit resumes without knowing what critical highlights are missing, leading to silent rejections.",
    outcome: "Returns a structured gap report in seconds — flagging missing keywords, weak sections, and role-specific improvements to help bypass ATS filters.",
    engineering: "Implemented custom NLP parsing engines to normalize complex resume tables and dual-column layouts into flat string models. Optimized semantic analysis using localized skill corpus dictionaries to bypass high-cost third-party API dependencies.",
    stripClass: "from-[#8B0000] to-[#4A0404]",
    github: "https://github.com/gavuthamms-ctrl/AI-Resume-Analyser",
  },
  {
    id: "p2",
    title: "Green Delivery Optimizer",
    oneLiner: "Smarter routing that saves fuel and the planet.",
    tags: ["Python", "Algorithm", "Optimization", "Maps API"],
    description: "Developed specifically as a sustainable transit dispatch solution, this platform tackles urban freight logistics issues. Instead of processing deliveries in chronological orders, the routing software clusters delivery targets into dense geospatial neighborhoods. By introducing an eco-friendly 'Green Delivery' tier, the platform batches routes together, lowering truck engine runtimes, reducing exhaust gas footprints, and saving operational fleet fuel costs.",
    problem: "E-commerce delivery routes are highly scattered, generating massive unnecessary transit fuel waste.",
    outcome: "Clusters nearby deliveries by zone, cutting average route distance by ~30–40% per batch — reducing fuel use and delivery vehicle idle time.",
    engineering: "Designed a localized spatial clustering algorithm grouping delivery coordinates by geographic proximity before route optimization, optimizing batch routes and reducing total distance traveled per vehicle.",
    badge: {
      icon: "fa-trophy",
      text: "TNIMPACT Hackathon",
    },
    stripClass: "from-[#8B0000] to-[#4A0404]",
    github: "https://github.com/gavuthamms-ctrl/Green_Delivery_optimization_system",
  },
  {
    id: "p3",
    title: "Smart Resource Allocator",
    oneLiner: "The right volunteer for the right task — automatically.",
    tags: ["Python", "ML", "Matching", "Algorithm"],
    description: "Built to streamline resource mobilization for community relief groups. Disaster response coordinators face extreme chaos allocating hundreds of general volunteers to urgent medical, structural, and transport tasks. This ML-driven application maps incoming distress tickets, scores volunteer profiles on skill compatibility, availability timelines, and real-time transit distance, and automatically outputs optimal task assignments.",
    problem: "Disaster response logistics assign helper tasks completely randomly, failing to match volunteers with actual core skills.",
    outcome: "Automated 3-criteria matching engine (skill, proximity, response rate) — eliminates manual volunteer-task coordination for disaster response teams.",
    engineering: "Created an advanced matching scoring model weighting structural skill alignment, geographic proximity, and helper response ratings, effectively reducing disaster task misallocation.",
    badge: {
      icon: "fa-lightbulb",
      text: "Google & Hack2Skill",
    },
    stripClass: "from-[#4A0404] to-[#8B0000]",
    github: "https://github.com/gavuthamms-ctrl/Smart-Resource-Allocation",
  },
];

export const languagesData = [
  {
    name: "Python",
    icon: "🐍",
    description: "Primary language. Used extensively for AI, machine learning, clustering algorithms, NLP, and scripting.",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "Frontend structure, UI micro-interactions, DOM scripting, and responsive application logic.",
  },
  {
    name: "HTML / CSS",
    icon: "🌐",
    description: "Clean semantic layouts, CSS flex/grid grids, modern glassmorphism design, and custom animations.",
  },
  {
    name: "C / C++",
    icon: "🔷",
    description: "Systems programming, foundation concepts, high performance, and core Data Structures & Algorithms.",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    description: "Relational database management, optimized data schema structures, and transaction query scripts.",
  },
];

export const focusAreas: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: "fa-brain",
    description: "Building intelligent processing models — from resume text gap analyzers to resource matching systems.",
  },
  {
    title: "Web Development",
    icon: "fa-laptop-code",
    description: "Developing robust dynamic layouts and highly interactive frontend interfaces with clean usability design.",
  },
  {
    title: "Algorithm Design",
    icon: "fa-route",
    description: "Engineering complex matching models, location batched clustering, and optimized delivery routing paths.",
  },
  {
    title: "Cybersecurity",
    icon: "fa-shield-halved",
    description: "IBM-certified in Cybersecurity Fundamentals. Actively studying ethical hacking, network security, and applying knowledge through CTF challenges.",
  },
];

export const marqueeTopics = [
  "Cybersecurity",
  "Ethical Hacking",
  "Network Security",
  "CTF Challenges",
  "Automated Threat Defense",
  "Penetration Testing",
];

export const certificationsData: Certification[] = [
  {
    id: "cert1",
    title: "Python Programming Fundamentals",
    issuer: "Microsoft Corporation",
    icon: "fa-certificate",
    link: "https://coursera.org/verify/4L3ANC8RMJSS",
    linkText: "View Certificate",
    verified: true,
  },
  {
    id: "cert2",
    title: "Data Analysis & Visualization in Python",
    issuer: "Microsoft Corporation",
    icon: "fa-chart-line",
    link: "https://www.coursera.org/account/accomplishments/records/X41JCY052MEF",
    linkText: "View Certificate",
    verified: true,
  },
  {
    id: "cert3",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    icon: "fa-shield-halved",
    link: "https://www.credly.com/badges/fc89cce4-68f2-4ed4-a1bd-b4aec0414d4c",
    linkText: "View Badge",
    verified: true,
  },
];

export const hackathonsData: Hackathon[] = [
  {
    id: "hack1",
    org: "Government of Tamil Nadu",
    type: "National Hackathon",
    title: "TNIMPACT Hackathon",
    highlight: "Green Delivery Optimization",
    project: "Built a geographic batching system for",
    details: "— reducing average route distance by ~35% per delivery zone. Selected for recognition at this state-level government event.",
  },
  {
    id: "hack2",
    org: "Google × Hack2Skill",
    type: "AI Hackathon",
    title: "Build With AI Hackathon",
    highlight: "Smart Resource Allocation",
    project: "Built a 3-criteria ML matching engine for",
    details: "— auto-assigning volunteers by skill, proximity, and response history. Built during Google × Hack2Skill's AI Hackathon.",
  },
  {
    id: "hack3",
    org: "Samsung India",
    type: "Innovation Challenge",
    title: "Samsung For Tomorrow",
    highlight: "social and environmental impact",
    project: "Participated in Samsung's national innovation challenge — building a technology-driven solution aimed at creating meaningful",
    details: "for tomorrow's communities.",
  },
];
