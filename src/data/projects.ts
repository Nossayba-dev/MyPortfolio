export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  repo?: string;
  confidential?: boolean;
  summary: string;
  overview: string[];
  highlights: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "industrial-weighing-app",
    name: "Industrial Weighing Application",
    tagline: "A cross-platform .NET MAUI app for an industrial site, built around live hardware input.",
    year: "2026",
    role: "Developer — internship project",
    stack: [".NET MAUI", "Blazor Hybrid", "C#", "SQLite", "Serial / USB", "Windows", "Android"],
    confidential: true,
    summary:
      "Client software built during my internship at Advanced Quantum Technology. The application itself is private, so what follows is about the engineering behind it rather than the product.",
    overview: [
      "The brief involved a piece of physical measuring equipment and the people who use it all day. That combination sets the constraints: the reading has to be live and correct, the interface has to be fast to operate, and nothing can break because a cable was unplugged.",
      "I split the system into two independent parts — one responsible only for talking to the hardware, one responsible for the interface and the data. They communicate through a small, well-defined contract rather than sharing a process. That decoupling meant I could develop, test and debug the fragile hardware layer without ever blocking the part people interact with, and either side could fail without taking the other down.",
      "The rest was C# fundamentals applied carefully: parsing untrusted input, writing to disk safely, storing data locally so the app works with no network, and gating features by user role.",
    ],
    highlights: [
      {
        title: "Serial hardware communication",
        body:
          "Reading a live data stream from measuring equipment over a serial connection on Windows and USB on Android, event-driven rather than polled, with parsing that tolerates inconsistent device output and regional number formats.",
      },
      {
        title: "Decoupled two-process design",
        body:
          "The hardware layer and the interface are separate applications sharing a single agreed data contract, so neither can crash or hang the other — and the interface always shows the operator the true connection state.",
      },
      {
        title: "Offline-first local storage",
        body:
          "All records persist to a local SQLite database, so the application is fully usable with no network connection and no server dependency.",
      },
      {
        title: "Role-based access",
        body:
          "Two permission levels gate the interface at the route level, with hashed credentials — everyday users see only what they need, administrators get management and history.",
      },
    ],
  },
  {
    slug: "serial-device-reader",
    name: "Serial Device Reader",
    tagline: "A small C# utility for reading and parsing live data from equipment over a serial port.",
    year: "2025",
    role: "Sole developer",
    stack: ["C#", "System.IO.Ports", "Serial Communication"],
    repo: "https://github.com/Nossayba-dev/lecteurBalance",
    summary:
      "A focused utility that answers one question properly: can I open a serial connection to a physical device and turn its raw output into a value I trust?",
    overview: [
      "Industrial equipment is rarely tidy about what it sends — padding, sign characters, inconsistent decimal separators, partial lines. Rather than discover all of that inside a larger application, I built the reader on its own first.",
      "Solving it in isolation meant that by the time this logic was needed in a real project, the edge cases were already known and handled.",
    ],
    highlights: [
      {
        title: "Event-driven serial port handling",
        body: "Opens and manages a COM-port connection using System.IO.Ports, reacting to incoming data events instead of polling on a timer.",
      },
      {
        title: "Defensive parsing",
        body: "Normalizes raw device strings — stripping padding and sign characters, handling regional decimal formats — into reliable numeric values.",
      },
    ],
  },
  {
    slug: "print-module",
    name: "Print Module",
    tagline: "A standalone printing component for generating and printing receipts from a C# application.",
    year: "2025",
    role: "Sole developer",
    stack: ["C#", "HTML", "CSS"],
    repo: "https://github.com/Nossayba-dev/builtInPrintSystem",
    summary:
      "A printing component built to close the loop on a records workflow: once something is recorded, someone usually needs it on paper.",
    overview: [
      "The idea was to keep the document layout in HTML and CSS, and the printing behaviour in C#. Restyling a receipt then means editing a template, not recompiling an application.",
      "Built as a separate module so the print pipeline could be tested on its own before being used anywhere real.",
    ],
    highlights: [
      {
        title: "Template-driven layout",
        body: "Receipt design lives in HTML/CSS, keeping presentation changes independent from the print logic.",
      },
      {
        title: "Isolated and testable",
        body: "Developed standalone rather than embedded, so the printing flow could be iterated on without touching a larger codebase.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
