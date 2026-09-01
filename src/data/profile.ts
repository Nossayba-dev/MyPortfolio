export const profile = {
  name: "Nossayba Abbara",
  role: ".NET Developer",
  location: "Casablanca, Morocco",
  email: "nossaybaabbara@gmail.com",
  phone: "+212 6 95 11 49 97",
  github: "https://github.com/Nossayba-dev",
  linkedin: "https://linkedin.com/in/nossayba-abbara",
  tagline: "I build desktop and web applications with C#, .NET and SQL.",
  bio: [
    "I’m a .NET developer in Casablanca, with a bachelor’s degree in Computer Development and a full-stack bootcamp behind me.",
    "Most of my work is in C# — .NET MAUI, Blazor and SQL — and right now I’m building with ASP.NET Core. I like the unglamorous parts: talking to hardware over a serial port, keeping data correct offline, and making sure an app still behaves when something it depends on disappears.",
    "On the web side I build with TypeScript, React, Next.js and Tailwind. I’ve also worked with Java and Spring Boot, and with PHP.",
  ],
};

export type Service = {
  title: string;
  kind: string;
  body: string;
};

export const services: Service[] = [
  {
    kind: "Desktop",
    title: "Application development",
    body: "Windows desktop applications built with C# and .NET, from the data layer up to the interface.",
  },
  {
    kind: "Cross-platform",
    title: ".NET MAUI & Blazor",
    body: "One codebase delivered to Windows and Android using .NET MAUI with Blazor Hybrid interfaces.",
  },
  {
    kind: "Web",
    title: "Front-end development",
    body: "Responsive interfaces with React, Next.js and Tailwind CSS — built to be readable and maintained.",
  },
  {
    kind: "Data",
    title: "Databases & modelling",
    body: "Schema design and queries across SQL Server, PostgreSQL, MySQL and SQLite.",
  },
  {
    kind: "Back-end",
    title: "APIs & services",
    body: "REST APIs and server-side logic with ASP.NET Core, plus Java with Spring Boot, PHP and Node.js.",
  },
  {
    kind: "Systems",
    title: "Hardware integration",
    body: "Reading live data from physical equipment over serial and USB, and parsing it safely.",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Core", items: ["C#", ".NET", "ASP.NET Core", ".NET MAUI", "Blazor"] },
  {
    label: "Web",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Bootstrap"],
  },
  { label: "Back-end", items: ["Java", "Spring Boot", "PHP", "Node.js", "REST APIs"] },
  { label: "Databases", items: ["SQL Server", "PostgreSQL", "MySQL", "SQLite"] },
  { label: "Tools", items: ["Git", "GitHub", "Visual Studio"] },
];

export type TimelineEntry = {
  kind: "work" | "education";
  title: string;
  org: string;
  place: string;
  period: string;
  description?: string;
};

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Software Development Intern",
    org: "Advanced Quantum Technology",
    place: "Casablanca, Morocco",
    period: "Feb 2026 — Apr 2026",
    description:
      "Built a cross-platform .NET MAUI application for an industrial client: serial hardware communication, offline local storage, and role-based access.",
  },
  {
    kind: "education",
    title: "Bachelor’s Degree — Computer Development (MIP)",
    org: "Faculté des Sciences Ben M’Sick",
    place: "Casablanca, Morocco",
    period: "2023 — 2026",
    description: "Graduated 2026.",
  },
  {
    kind: "education",
    title: "Full-Stack Coding Bootcamp",
    org: "Geeks Institute",
    place: "Mohammedia, Morocco",
    period: "May 2025 — Nov 2025",
  },
  {
    kind: "education",
    title: "Baccalauréat — Mathematical Sciences B",
    org: "Lycée Khadija Oum Al Mouminine",
    place: "Casablanca, Morocco",
    period: "2022 — 2023",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
  { name: "English", level: "B1" },
];
