import type { Bi } from "../lib/LanguageContext";

export type Project = {
  slug: string;
  name: Bi<string>;
  tagline: Bi<string>;
  year: string;
  role: Bi<string>;
  /** Tech/stack tags stay in English in both languages, same as library names. */
  stack: string[];
  repo?: string;
  confidential?: boolean;
  summary: Bi<string>;
  overview: Bi<string[]>;
  highlights: { title: Bi<string>; body: Bi<string> }[];
};

export const projects: Project[] = [
  {
    slug: "industrial-weighing-app",
    name: { en: "Industrial Weighing Application", fr: "Application de pesée industrielle" },
    tagline: {
      en: "A cross-platform .NET MAUI app for an industrial site, built around live hardware input.",
      fr: "Une application multiplateforme .NET MAUI pour un site industriel, conçue autour de données matérielles en temps réel.",
    },
    year: "2026",
    role: { en: "Developer — internship project", fr: "Développeuse — projet de stage" },
    stack: [".NET MAUI", "Blazor Hybrid", "C#", "SQLite", "Serial / USB", "Windows", "Android"],
    confidential: true,
    summary: {
      en: "Client software built during my internship at Advanced Quantum Technology. The application itself is private, so what follows is about the engineering behind it rather than the product.",
      fr: "Un logiciel client développé pendant mon stage chez Advanced Quantum Technology. L’application elle-même reste privée : ce qui suit porte donc sur l’ingénierie derrière le projet plutôt que sur le produit.",
    },
    overview: {
      en: [
        "The brief involved a piece of physical measuring equipment and the people who use it all day. That combination sets the constraints: the reading has to be live and correct, the interface has to be fast to operate, and nothing can break because a cable was unplugged.",
        "I split the system into two independent parts — one responsible only for talking to the hardware, one responsible for the interface and the data. They communicate through a small, well-defined contract rather than sharing a process. That decoupling meant I could develop, test and debug the fragile hardware layer without ever blocking the part people interact with, and either side could fail without taking the other down.",
        "The rest was C# fundamentals applied carefully: parsing untrusted input, writing to disk safely, storing data locally so the app works with no network, and gating features by user role.",
      ],
      fr: [
        "Le cahier des charges impliquait un équipement de mesure physique et les personnes qui l’utilisent toute la journée. Cette combinaison impose les contraintes : la lecture doit être en temps réel et fiable, l’interface doit être rapide à utiliser, et rien ne doit tomber en panne parce qu’un câble a été débranché.",
        "J’ai découpé le système en deux parties indépendantes : l’une chargée uniquement de communiquer avec le matériel, l’autre responsable de l’interface et des données. Elles communiquent via un contrat simple et bien défini plutôt que de partager un même processus. Ce découplage m’a permis de développer, tester et déboguer la couche matérielle, plus fragile, sans jamais bloquer la partie avec laquelle les utilisateurs interagissent — et chaque côté pouvait tomber en panne sans entraîner l’autre.",
        "Le reste relevait des fondamentaux du C# appliqués avec soin : analyser des entrées non fiables, écrire sur le disque de façon sûre, stocker les données localement pour que l’application fonctionne sans réseau, et restreindre les fonctionnalités selon le rôle de l’utilisateur.",
      ],
    },
    highlights: [
      {
        title: { en: "Serial hardware communication", fr: "Communication série avec le matériel" },
        body: {
          en: "Reading a live data stream from measuring equipment over a serial connection on Windows and USB on Android, event-driven rather than polled, with parsing that tolerates inconsistent device output and regional number formats.",
          fr: "Lecture d’un flux de données en direct depuis l’équipement de mesure via une connexion série sous Windows et USB sous Android, pilotée par événements plutôt que par sondage, avec une analyse tolérante aux sorties incohérentes de l’appareil et aux formats numériques régionaux.",
        },
      },
      {
        title: { en: "Decoupled two-process design", fr: "Architecture à deux processus découplés" },
        body: {
          en: "The hardware layer and the interface are separate applications sharing a single agreed data contract, so neither can crash or hang the other — and the interface always shows the operator the true connection state.",
          fr: "La couche matérielle et l’interface sont deux applications distinctes partageant un contrat de données commun, de sorte qu’aucune ne peut faire planter ou bloquer l’autre — et l’interface indique toujours à l’opérateur l’état réel de la connexion.",
        },
      },
      {
        title: { en: "Offline-first local storage", fr: "Stockage local hors ligne par défaut" },
        body: {
          en: "All records persist to a local SQLite database, so the application is fully usable with no network connection and no server dependency.",
          fr: "Tous les enregistrements sont conservés dans une base SQLite locale, ce qui rend l’application pleinement utilisable sans connexion réseau ni dépendance à un serveur.",
        },
      },
      {
        title: { en: "Role-based access", fr: "Accès basé sur les rôles" },
        body: {
          en: "Two permission levels gate the interface at the route level, with hashed credentials — everyday users see only what they need, administrators get management and history.",
          fr: "Deux niveaux de permission filtrent l’interface au niveau des routes, avec des identifiants hachés : les utilisateurs classiques ne voient que ce dont ils ont besoin, les administrateurs accèdent à la gestion et à l’historique.",
        },
      },
    ],
  },
  {
    slug: "serial-device-reader",
    name: { en: "Serial Device Reader", fr: "Lecteur de périphérique série" },
    tagline: {
      en: "A small C# utility for reading and parsing live data from equipment over a serial port.",
      fr: "Un petit utilitaire C# pour lire et analyser des données en direct depuis un équipement via un port série.",
    },
    year: "2025",
    role: { en: "Sole developer", fr: "Développeuse unique" },
    stack: ["C#", "System.IO.Ports", "Serial Communication"],
    repo: "https://github.com/Nossayba-dev/lecteurBalance",
    summary: {
      en: "A focused utility that answers one question properly: can I open a serial connection to a physical device and turn its raw output into a value I trust?",
      fr: "Un utilitaire ciblé qui répond correctement à une seule question : puis-je ouvrir une connexion série vers un appareil physique et transformer sa sortie brute en une valeur fiable ?",
    },
    overview: {
      en: [
        "Industrial equipment is rarely tidy about what it sends — padding, sign characters, inconsistent decimal separators, partial lines. Rather than discover all of that inside a larger application, I built the reader on its own first.",
        "Solving it in isolation meant that by the time this logic was needed in a real project, the edge cases were already known and handled.",
      ],
      fr: [
        "Les équipements industriels sont rarement soignés dans ce qu’ils envoient : espaces de remplissage, caractères de signe, séparateurs décimaux incohérents, lignes incomplètes. Plutôt que de découvrir tout cela au sein d’une application plus large, j’ai d’abord construit le lecteur seul.",
        "En le résolvant isolément, les cas limites étaient déjà identifiés et gérés le jour où cette logique a été nécessaire dans un vrai projet.",
      ],
    },
    highlights: [
      {
        title: { en: "Event-driven serial port handling", fr: "Gestion du port série pilotée par événements" },
        body: {
          en: "Opens and manages a COM-port connection using System.IO.Ports, reacting to incoming data events instead of polling on a timer.",
          fr: "Ouvre et gère une connexion sur port COM avec System.IO.Ports, en réagissant aux événements de réception de données plutôt qu’en sondant à intervalles réguliers.",
        },
      },
      {
        title: { en: "Defensive parsing", fr: "Analyse défensive" },
        body: {
          en: "Normalizes raw device strings — stripping padding and sign characters, handling regional decimal formats — into reliable numeric values.",
          fr: "Normalise les chaînes brutes de l’appareil — suppression des espaces de remplissage et des caractères de signe, gestion des formats décimaux régionaux — pour obtenir des valeurs numériques fiables.",
        },
      },
    ],
  },
  {
    slug: "print-module",
    name: { en: "Print Module", fr: "Module d’impression" },
    tagline: {
      en: "A standalone printing component for generating and printing receipts from a C# application.",
      fr: "Un composant d’impression autonome pour générer et imprimer des reçus depuis une application C#.",
    },
    year: "2025",
    role: { en: "Sole developer", fr: "Développeuse unique" },
    stack: ["C#", "HTML", "CSS"],
    repo: "https://github.com/Nossayba-dev/builtInPrintSystem",
    summary: {
      en: "A printing component built to close the loop on a records workflow: once something is recorded, someone usually needs it on paper.",
      fr: "Un composant d’impression conçu pour boucler un flux d’enregistrement : une fois qu’une donnée est enregistrée, quelqu’un a généralement besoin de l’avoir sur papier.",
    },
    overview: {
      en: [
        "The idea was to keep the document layout in HTML and CSS, and the printing behaviour in C#. Restyling a receipt then means editing a template, not recompiling an application.",
        "Built as a separate module so the print pipeline could be tested on its own before being used anywhere real.",
      ],
      fr: [
        "L’idée était de garder la mise en page du document en HTML et CSS, et le comportement d’impression en C#. Modifier le style d’un reçu revient alors à éditer un gabarit, pas à recompiler une application.",
        "Conçu comme un module séparé afin que le circuit d’impression puisse être testé isolément avant d’être utilisé dans un contexte réel.",
      ],
    },
    highlights: [
      {
        title: { en: "Template-driven layout", fr: "Mise en page pilotée par gabarit" },
        body: {
          en: "Receipt design lives in HTML/CSS, keeping presentation changes independent from the print logic.",
          fr: "La conception du reçu vit en HTML/CSS, ce qui garde les changements de présentation indépendants de la logique d’impression.",
        },
      },
      {
        title: { en: "Isolated and testable", fr: "Isolé et testable" },
        body: {
          en: "Developed standalone rather than embedded, so the printing flow could be iterated on without touching a larger codebase.",
          fr: "Développé de façon autonome plutôt qu’intégré, pour pouvoir itérer sur le flux d’impression sans toucher à une base de code plus large.",
        },
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
