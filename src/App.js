import React from "react";

const profile = {
  name: "Saurabh Kumar",
  phone: "+91-9693185995",
  email: "saurabhsinghalp@gmail.com",
  education: {
    university: "National Institute of Technology, Patna",
    degree: "B.Tech, Electronics and Communication Engineering",
    cgpa: "8.46",
    graduation: "2026"
  },
  experience: [
    {
      title: "Advanced Application Engineering Analyst - Intern",
      company: "Accenture",
      location: "Bengaluru, Karnataka",
      period: "May 2025 – July 2025",
      contributions: [
        "Developed secure role-based web application and integrated security scans with OWASP ZAP, achieving 100% code coverage through React Testing Library and Jest.",
        "Automated end-to-end deployment pipelines using Jenkins and Terraform, orchestrating infrastructure provisioning (VPC, Subnets, EC2, ECS).",
        "Built a Magnolia CMS POC with Docker and deployed it to AWS ECS Fargate, eliminating manual VM provisioning.",
        "Integrated enterprise platforms such as Cloud Foundry and Ping Identity."
      ]
    },
    {
      title: "Software Developer - Intern",
      company: "East Central Railways",
      location: "Hajipur, Bihar",
      period: "May 2024 – July 2024",
      contributions: [
        "Developed and implemented new features for the East Central Railways intranet website.",
        "Optimized website performance by reducing page load times through code refactoring.",
        "Collaborated with a team of 5 developers to improve overall website functionality."
      ]
    }
  ],
  projects: [
    {
      name: "EcoKart Android E-Commerce App",
      desc: [
        "Built an Android app to promote sustainable shopping (eco score, carbon tracking).",
        "Cart and checkout flows with Jetpack Compose & Kotlin.",
        "Modern UI, smooth navigation, real-time state updates."
      ]
    },
    {
      name: "ClassHub Application",
      desc: [
        "Notes, lab files, and assignments for over 200 pages; integrated with Firebase.",
        "UI and speed improvements, enhanced navigation structure."
      ]
    }
  ],
  skills: [
    "C, C++, Kotlin, Java, Python",
    "Android: Jetpack Compose, XML, Android Studio, Firebase (Realtime DB & Storage)",
    "Web: HTML, CSS, React, Git, GitHub, VS Code, Jenkins, Docker, Terraform",
    "Cloud: AWS (EC2, ECS, ECR), Cloud Foundry, Kubernetes (EKS)",
    "Soft: Teamwork, Management, Leadership, Communication"
  ],
  positions: [
    "Internship Coordinator, Training and Placement Cell, NIT Patna (Jan 2025 – Present)",
    "DSA Team, Event Team Co-Lead, HACKSLASH (Oct 2023 – May 2024)",
    "Event Lead, IEEE SB NITP (Sep 2023 – May 2024)",
    "Teacher/Volunteer, SANKALP- A Unit of NSS (Feb 2023 – Jan 2024)"
  ],
  achievements: [
    "Leetcode: 300+ problems solved; strong DSA foundation (2025)",
    "AWS Hackathon by PW IOI: Top 5 Finalist (2025)",
    "ByteVerse 2023: Top 5 team in annual IEEE hackathon (2024)",
    "DevFest 2023: Arranged Google devfest Patna (2023)"
  ]
};

function Section({ title, children }) {
  return (
    <section style={{ margin: "2rem 0" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: 'Inter, Arial, sans-serif' }}>
      <header style={{ borderBottom: "2px solid #eee", marginBottom: 32 }}>
        <h1 style={{ fontSize: 40 }}>{profile.name}</h1>
        <p>{profile.email} | {profile.phone}</p>
      </header>
      <Section title="Education">
        <p><strong>{profile.education.university}</strong> – {profile.education.degree} (CGPA: {profile.education.cgpa}, Graduating {profile.education.graduation})</p>
      </Section>
      <Section title="Experience">
        {profile.experience.map(exp => (
          <div key={exp.title} style={{ marginBottom: 16 }}>
            <h3>{exp.title} @ {exp.company}</h3>
            <em>{exp.location} | {exp.period}</em>
            <ul>{exp.contributions.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
        ))}
      </Section>
      <Section title="Projects">
        {profile.projects.map(proj => (
          <div key={proj.name} style={{ marginBottom: 12 }}>
            <strong>{proj.name}</strong>
            <ul>{proj.desc.map((d, i) => <li key={i}>{d}</li>)}</ul>
          </div>
        ))}
      </Section>
      <Section title="Technical Skills">
        <ul>{profile.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </Section>
      <Section title="Positions of Responsibility">
        <ul>{profile.positions.map((pos, i) => <li key={i}>{pos}</li>)}</ul>
      </Section>
      <Section title="Achievements">
        <ul>{profile.achievements.map((a, i) => <li key={i}>{a}</li>)}</ul>
      </Section>
    </div>
  );
}

export default App;