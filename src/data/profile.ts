import type { Bi } from "../lib/LanguageContext";

/** Fields with no language of their own — a name, an email address, a URL. */
export const profile = {
  name: "Nossayba Abbara",
  email: "nossaybaabbara@gmail.com",
  phone: "+212 6 95 11 49 97",
  github: "https://github.com/Nossayba-dev",
  linkedin: "https://linkedin.com/in/nossayba-abbara",
};

export const role: Bi<string> = { en: ".NET Developer", fr: "Développeuse .NET" };
export const location: Bi<string> = { en: "Casablanca, Morocco", fr: "Casablanca, Maroc" };
export const tagline: Bi<string> = {
  en: "I build desktop and web applications with C#, .NET and SQL.",
  fr: "Je conçois des applications de bureau et web avec C#, .NET et SQL.",
};

export const bio: Bi<string[]> = {
  en: [
    "I’m a .NET developer in Casablanca, with a bachelor’s degree in Computer Development and a full-stack bootcamp behind me.",
    "Most of my work is in C# — .NET MAUI, Blazor and SQL — and right now I’m building with ASP.NET Core. I like the unglamorous parts: talking to hardware over a serial port, keeping data correct offline, and making sure an app still behaves when something it depends on disappears.",
    "On the web side I build with TypeScript, React and Tailwind. I’ve also worked with Java and Spring Boot.",
  ],
  fr: [
    "Je suis développeuse .NET à Casablanca, avec une licence en développement informatique et un bootcamp full-stack derrière moi.",
    "L’essentiel de mon travail se fait en C# — .NET MAUI, Blazor et SQL — et je travaille en ce moment avec ASP.NET Core. J’aime les aspects moins visibles : communiquer avec du matériel via un port série, garder des données cohérentes hors ligne, et faire en sorte qu’une application continue de fonctionner correctement même quand un élément dont elle dépend disparaît.",
    "Côté web, je développe avec TypeScript, React et Tailwind. J’ai aussi travaillé avec Java et Spring Boot.",
  ],
};

export type Service = {
  kind: Bi<string>;
  title: Bi<string>;
  body: Bi<string>;
};

export const services: Service[] = [
  {
    kind: { en: "Desktop", fr: "Bureau" },
    title: { en: "Application development", fr: "Développement d’applications" },
    body: {
      en: "Windows desktop applications built with C# and .NET, from the data layer up to the interface.",
      fr: "Applications de bureau Windows conçues avec C# et .NET, de la couche de données jusqu’à l’interface.",
    },
  },
  {
    kind: { en: "Cross-platform", fr: "Multiplateforme" },
    title: { en: ".NET MAUI & Blazor", fr: ".NET MAUI et Blazor" },
    body: {
      en: "One codebase delivered to Windows and Android using .NET MAUI with Blazor Hybrid interfaces.",
      fr: "Une seule base de code livrée sur Windows et Android grâce à .NET MAUI et des interfaces Blazor Hybrid.",
    },
  },
  {
    kind: { en: "Web", fr: "Web" },
    title: { en: "Front-end development", fr: "Développement front-end" },
    body: {
      en: "Responsive interfaces with React and Tailwind CSS — built to be readable and maintained.",
      fr: "Interfaces responsives avec React et Tailwind CSS — pensées pour rester lisibles et faciles à maintenir.",
    },
  },
  {
    kind: { en: "Data", fr: "Données" },
    title: { en: "Databases & modelling", fr: "Bases de données et modélisation" },
    body: {
      en: "Schema design and queries across SQL Server, PostgreSQL, MySQL and SQLite.",
      fr: "Conception de schémas et requêtes sur SQL Server, PostgreSQL, MySQL et SQLite.",
    },
  },
  {
    kind: { en: "Back-end", fr: "Back-end" },
    title: { en: "APIs & services", fr: "API et services" },
    body: {
      en: "REST APIs and server-side logic with ASP.NET Core, plus Java with Spring Boot and Node.js.",
      fr: "API REST et logique serveur avec ASP.NET Core, ainsi que Java avec Spring Boot et Node.js.",
    },
  },
];

export type SkillGroup = {
  label: Bi<string>;
  /** Technology names — identical in both languages, so no Bi<> needed. */
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: { en: "Core", fr: "Cœur de métier" },
    items: ["C#", ".NET", "ASP.NET Core", ".NET MAUI", "Blazor"],
  },
  {
    label: { en: "Web", fr: "Web" },
    items: ["TypeScript", "JavaScript", "React", "Tailwind CSS", "HTML", "CSS", "Bootstrap"],
  },
  {
    label: { en: "Back-end", fr: "Back-end" },
    items: ["Java", "Spring Boot", "Node.js", "REST APIs"],
  },
  {
    label: { en: "Databases", fr: "Bases de données" },
    items: ["SQL Server", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    label: { en: "Tools", fr: "Outils" },
    items: ["Git", "GitHub", "Visual Studio"],
  },
];

export type TimelineEntry = {
  kind: "work" | "education";
  title: Bi<string>;
  org: string;
  place: Bi<string>;
  period: string;
  description?: Bi<string>;
};

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: { en: "Software Development Intern", fr: "Stagiaire développement logiciel" },
    org: "Advanced Quantum Technology",
    place: location,
    period: "Feb 2026 — Apr 2026",
    description: {
      en: "Built a cross-platform .NET MAUI application for an industrial client: serial hardware communication, offline local storage, and role-based access.",
      fr: "Développement d’une application multiplateforme .NET MAUI pour un client industriel : communication série avec du matériel, stockage local hors ligne et accès par rôle.",
    },
  },
  {
    kind: "education",
    title: {
      en: "Bachelor’s Degree — Computer Development (MIP)",
      fr: "Licence — Développement informatique (MIP)",
    },
    org: "Faculté des Sciences Ben M’Sick",
    place: location,
    period: "2023 — 2026",
    description: { en: "Graduated 2026.", fr: "Diplômée en 2026." },
  },
  {
    kind: "education",
    title: { en: "Full-Stack Coding Bootcamp", fr: "Bootcamp de développement full-stack" },
    org: "Geeks Institute",
    place: { en: "Mohammedia, Morocco", fr: "Mohammedia, Maroc" },
    period: "May 2025 — Nov 2025",
  },
  {
    kind: "education",
    title: {
      en: "Baccalauréat — Mathematical Sciences B",
      fr: "Baccalauréat — Sciences mathématiques B",
    },
    org: "Lycée Khadija Oum Al Mouminine",
    place: location,
    period: "2022 — 2023",
  },
];

export const languages: { name: Bi<string>; level: Bi<string> }[] = [
  { name: { en: "Arabic", fr: "Arabe" }, level: { en: "Native", fr: "Langue maternelle" } },
  { name: { en: "French", fr: "Français" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "B1", fr: "B1" } },
];
