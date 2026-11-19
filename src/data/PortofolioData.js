export const PortofolioData = {
  name: "Bagus Artandyo Witjaksono",
  roles: ["Project Manager", "System Analyst", "Mobile Developer", "Backend Developer", "Machine Learning Engineer"],
  tagline: "Mahasiswa Sarjana Informatika ITSK RS dr. Soepraoen Malang.",
  bio: "Try not to become a man of success, but rather try to become a man of value. — Albert Einstein",
  avatar: "/avatar.jpeg",
  resumeLink: "#contact",

  languages: [
    { name: "Python", category: "Backend / Data", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", category: "Enterprise", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Dart", category: "Mobile Dev", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Flutter", category: "Mobile Dev", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "JavaScript", category: "Front-End", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "HTML5", category: "Front-End", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", category: "Front-End", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "PHP", category: "Web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "React", category: "Front-End", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "MySQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Laravel", category: "Web Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
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
    non_it: ["Music", "Travel", "Run", "Swimming", "Game"]
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
    },
    {
      id: 2,
      title: "RESIQ",
      category: "Mobile Developer",
      subtitle: "Aplikasi Android deteksi sampah berbasis AI",
      desc: "Aplikasi Android yang menggunakan AI untuk mengidentifikasi jenis sampah dan memberikan poin berdasarkan hasil pemindaian.",
      tags: ["Android", "AI", "Waste Detection"],
      liveUrl: "",
      githubUrl: ""
    },
    {
      id: 3,
      title: "CareVisitMonitor",
      category: "Backend Developer",
      subtitle: "Pemantauan layanan kesehatan",
      desc: "Mengimplementasikan rute REST API, model database, dan integrasi frontend untuk pemantauan layanan kesehatan.",
      tags: ["REST API", "Database", "Frontend", "Healthcare"],
      liveUrl: "",
      githubUrl: ""
    },
    {
      id: 4,
      title: "LimbahLoka",
      category: "System Analyst",
      subtitle: "PLAY IT! 2026 Hackathon",
      desc: "Merumuskan arsitektur teknis aplikasi yang mengubah limbah organik pasar menjadi kompos dan pakan.",
      tags: ["Hackathon", "System Architecture", "Waste Management"],
      liveUrl: "",
      githubUrl: ""
    },
    {
      id: 5,
      title: "MakanYuk!",
      category: "Project Manager",
      subtitle: "Aplikasi mobile pemesanan makanan & minuman siap saji",
      desc: "Proyek UAS Semester 5 — aplikasi mobile pemesanan makanan dan minuman siap saji berbasis Flutter dengan REST API Laravel + MySQL: katalog, keranjang dengan varian porsi dan tingkat pedas, checkout kurir internal, login Google, dan pembayaran Xendit. Sebagai ketua kelompok saya memimpin 6 anggota tim sekaligus membangun fondasi backend, Flutter, dan integrasinya.",
      tags: ["Flutter", "Laravel", "REST API", "MySQL", "Google Auth", "Xendit"],
      liveUrl: "",
      githubUrl: "https://github.com/bagus-26/ProjectUTS-PAPB"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Python for Data Science & AI: Hands-On Development",
      issuer: "IBM · Coursera",
      date: "19 Mei 2026",
      credential: "0YAQDB9VEIVN",
      desc: "Kursus resmi IBM melalui Coursera dengan latihan langsung menggunakan Python untuk data science dan AI — menulis kode Python, mengolah data, dan menerapkan dasar alur kerja AI. Sertifikat dapat diverifikasi publik melalui Coursera.",
      tags: ["Python", "Data Science", "AI"],
      image: "/sertifikat/sertifikat-coursera-ibm-python.jpg",
      pdf: "/sertifikat/sertifikat-coursera-ibm-python.pdf",
      verifyUrl: "https://coursera.org/verify/0YAQDB9VEIVN"
    },
    {
      id: 2,
      title: "Sertifikat Kompetensi — Internet of Things & 3D Printing untuk Alat Kesehatan",
      issuer: "LSPM ITSK RS dr. Soepraoen Malang",
      date: "12 Desember 2025",
      credential: "LSPM / S / 16 / XI / 2026",
      desc: "Sertifikasi kompetensi bidang IoT dan 3D printing untuk pengembangan alat kesehatan, dengan studi kasus Thermo Gun. Mencakup 8 unit kompetensi: perencanaan dan desain sistem alat kesehatan, rangkaian elektronik, pengujian dan kalibrasi sensor, integrasi sistem elektronik, desain mekanikal dan casing 3D, proses manufaktur 3D printing, assembly, pengujian dan troubleshooting, serta pelaporan dan presentasi proyek. Sertifikat dan daftar kompetensinya tergabung dalam satu dokumen.",
      tags: ["IoT", "3D Printing", "Sensor", "Alat Kesehatan"],
      image: "/sertifikat/sertifikat-kompetensi-iot-3d-printing.jpg",
      pdf: "/sertifikat/sertifikat-kompetensi-iot-3d-printing.pdf",
      verifyUrl: ""
    }
  ]
};
