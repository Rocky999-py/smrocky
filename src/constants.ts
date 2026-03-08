import { 
  Code2, 
  Globe, 
  Cpu, 
  Database, 
  Layout, 
  Server, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  GraduationCap,
  Briefcase,
  User,
  ExternalLink
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Shah Md Rakybujjaman Rocky",
  initials: "ROCKY",
  heroImage: "https://picsum.photos/seed/rocky-hero/1920/1080",
  tagline: "Aspiring Computer Science Engineer | Innovator in Software Solutions",
  intro: "Shah Md Rakybujjaman Rocky is a passionate 28-year-old graduate from Pundra University of Science and Technology, specializing in Computer Science Engineering. With a strong foundation in algorithms, data structures, and emerging technologies, he is eager to contribute to innovative projects in software development, web technologies, and AI.",
  bio: "Born on August 25, 1998, in Bangladesh, I pursued my passion for technology from a young age. This journey led me to earn my Bachelor's degree in Computer Science Engineering from Pundra University of Science and Technology. I am a dedicated individual, a quick learner, and a team player who thrives on solving complex problems and building efficient software solutions.",
  dob: "August 25, 1998",
  location: "Rangpur, Bangladesh",
  email: "rocky@example.com",
  phone: "+880 1XXX-XXXXXX",
  aboutImages: [
    "https://picsum.photos/seed/tech1/400/400",
    "https://picsum.photos/seed/tech2/400/533",
    "https://picsum.photos/seed/tech3/400/533",
    "https://picsum.photos/seed/tech4/400/400"
  ],
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/rocky", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com/rocky", icon: "Github" },
    { name: "Twitter", url: "https://twitter.com/rocky", icon: "Twitter" }
  ]
};

export const TIMELINE = [
  { year: "1998", event: "Born in Bangladesh" },
  { year: "2016", event: "High School Completion" },
  { year: "2017", event: "Enrolled in Pundra University of Science and Technology" },
  { year: "2022", event: "Graduated with B.Sc. in Computer Science Engineering" },
  { year: "2026", event: "Current Age: 28 (Active Developer)" }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Science Engineering",
    institution: "Pundra University of Science and Technology",
    location: "Bogura, Bangladesh",
    period: "2017 - 2022",
    gpa: "3.5/4.0",
    coursework: [
      "Data Structures", "Algorithms", "Database Management", 
      "Web Development", "Machine Learning", "Software Engineering",
      "Operating Systems", "Computer Networks"
    ],
    achievements: [
      "Developed a web-based inventory system using PHP and MySQL for capstone project.",
      "Participated in university-level programming contests."
    ]
  }
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 85, icon: "Code2" },
      { name: "Java", level: 80, icon: "Code2" },
      { name: "C++", level: 75, icon: "Code2" },
      { name: "JavaScript", level: 90, icon: "Code2" }
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML5/CSS3", level: 95, icon: "Globe" },
      { name: "React.js", level: 85, icon: "Layout" },
      { name: "Node.js", level: 75, icon: "Server" },
      { name: "Tailwind CSS", level: 90, icon: "Layout" }
    ]
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "Git", level: 90, icon: "Github" },
      { name: "Docker", level: 65, icon: "Cpu" },
      { name: "AWS Basics", level: 60, icon: "Globe" },
      { name: "PostgreSQL", level: 75, icon: "Database" }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem-Solving", level: 95, icon: "Cpu" },
      { name: "Team Collaboration", level: 90, icon: "User" },
      { name: "Communication", level: 85, icon: "User" }
    ]
  }
];

export const PROJECTS = [
  {
    title: "Personal Blog Website",
    description: "A full-featured blog platform with markdown support and user authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    category: "Web Dev",
    image: "https://picsum.photos/seed/blog/600/400",
    github: "#",
    demo: "#"
  },
  {
    title: "ML Image Classifier",
    description: "A machine learning model trained to classify various objects using deep learning techniques.",
    tech: ["Python", "TensorFlow", "Keras"],
    category: "AI",
    image: "https://picsum.photos/seed/ai/600/400",
    github: "#",
    demo: "#"
  },
  {
    title: "E-commerce App Prototype",
    description: "A robust backend system for an e-commerce application with inventory management.",
    tech: ["Java", "Spring Boot", "MySQL"],
    category: "Web Dev",
    image: "https://picsum.photos/seed/shop/600/400",
    github: "#",
    demo: "#"
  },
  {
    title: "Inventory System",
    description: "University capstone project focusing on efficient stock tracking and reporting.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    category: "Web Dev",
    image: "https://picsum.photos/seed/inventory/600/400",
    github: "#",
    demo: "#"
  }
];

export const EXPERIENCE = [
  {
    role: "Software Development Intern",
    company: "Tech Solutions Ltd.",
    period: "2021 - 2022",
    description: "Contributed to backend API development and assisted in UI/UX improvements for client projects.",
    type: "Internship"
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2022 - Present",
    description: "Building responsive websites for local businesses using modern web stacks.",
    type: "Freelance"
  }
];
