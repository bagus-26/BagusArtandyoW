export const PortofolioData = {
  name: "Bagus Artandyo Witjaksono",
  roles: ["Project Manager", "System Analyst", "Front-End Developer"],
  tagline: "Mahasiswa Sarjana Informatika ITSK RS dr. Soepraoen Malang.",
  bio: "Try not to become a man of success, but rather try to become a man of value. — Albert Einstein",
  avatar: "/avatar.jpeg",
  resumeLink: "#contact",

  languages: [
    { name: "Python",     category: "Backend / Data", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java",       category: "Enterprise",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Dart",       category: "Mobile Dev",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Flutter",    category: "Mobile Dev",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "JavaScript", category: "Front-End",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "HTML5",      category: "Front-End",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3",       category: "Front-End",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "PHP",        category: "Web",            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "React",      category: "Front-End",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "MySQL",      category: "Database",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Laravel",    category: "Web Framework",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  ],

  platforms: [
    { name: "Windows", category: "Platform Utama", isMain: true, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" },
    { name: "macOS", category: "Ecosystem / OS", isMain: false, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
    { name: "Linux", category: "Ecosystem / OS", isMain: false, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "NVIDIA", category: "Hardware & GPU", isMain: false, logo: "https://cdn.simpleicons.org/nvidia/76B900" }
  ],

  skills: {
    management: ["Agile & Scrum", "Requirements Gathering", "UML & Flowcharting", "System Architecture", "Software Testing & QA"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5 / CSS3", "UI/UX Prototyping"],
    tools: ["Git & GitHub", "Figma", "Jira & Trello", "Postman", "VS Code", "MySQL / PostgreSQL"]
  },

  interest: {
    it: ["Artificial Intelligence (AI)", "Web Development", "Mobile Development", "Machine Learning", "UI/UX Design"],
    non_it: ["Music", "Travel", "Run", "Swimming"]
  },

  socials: {
    github: "https://github.com/bagus-26",
    linkedin: "https://www.linkedin.com/in/bagusartandyowitjaksono",
    instagram: "https://www.instagram.com/artndyobgs/",
    email: "artandyob@gmail.com"
  },

  projects: [
    {
      id: 1,
      title: "E-INVENT NOC",
      category: "Project Manager",
      subtitle: "Sistem Informasi ERP Network Operation Center SMKN 4 Malang",
      desc: "Sistem Informasi Enterprise Resource Planning berbasis web yang dirancang untuk mengoptimalkan pengelolaan Network Operation Center di SMKN 4 Malang. Dikembangkan bersama tim Kelompok 1 sebagai Tugas Mata Kuliah Sistem Informasi, Sarjana Informatika ITSK Soepraoen, dengan peran saya sebagai Project Manager.",
      team: ["Fichri", "Auril", "Anggun", "Arya", "Bagus (Project Manager)", "Sandy"],
      tags: ["Project Management", "System Analysis", "PHP", "MySQL", "ERP", "Web"],
      image: "/erp.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      institution: "ITSK RS dr. Soepraoen Malang",
      program: "Tugas Mata Kuliah Sistem Informasi - Sarjana Informatika"
    }
  ]
};