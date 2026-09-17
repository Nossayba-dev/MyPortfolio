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
  /** Own brand accent instead of the site's default violet/pink, scoped via a class. */
  accent?: "green" | "blue";
  logo?: string;
  /** Product screenshots — the first is cropped for the card; all of them show
   * as a gallery on the detail page. */
  screenshots?: string[];
  summary: Bi<string>;
  overview: Bi<string[]>;
  highlights: { title: Bi<string>; body: Bi<string> }[];
};

export const projects: Project[] = [
  {
    slug: "tolllga",
    name: { en: "Tolllga", fr: "Tolllga" },
    tagline: {
      en: "A weighing-station management system for a cross-platform .NET MAUI client, built around live hardware input.",
      fr: "Un système de gestion de pesées pour un client multiplateforme .NET MAUI, conçu autour de données matérielles en temps réel.",
    },
    year: "2026",
    role: { en: "Developer — internship project", fr: "Développeuse — projet de stage" },
    stack: [".NET MAUI", "Blazor Hybrid", "C#", "SQLite", "Serial / USB", "Windows", "Android"],
    confidential: true,
    accent: "green",
    logo: "/tolllga-logo.png",
    summary: {
      en: "Tolllga is a weighing-station management system I built during my internship at Advanced Quantum Technology. The application and its source stay private, so what follows is about the engineering behind it rather than the product.",
      fr: "Tolllga est un système de gestion de pesées que j’ai développé pendant mon stage chez Advanced Quantum Technology. L’application et son code source restent privés : ce qui suit porte donc sur l’ingénierie derrière le projet plutôt que sur le produit.",
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
    slug: "boutique",
    name: { en: "Boutique", fr: "Boutique" },
    tagline: {
      en: "A full-stack e-commerce demo — a React storefront and admin dashboard backed by a Spring Boot REST API.",
      fr: "Une démo e-commerce full-stack — une vitrine et un tableau de bord admin en React, adossés à une API REST Spring Boot.",
    },
    year: "2026",
    role: { en: "Sole developer", fr: "Développeuse unique" },
    stack: ["React", "Vite", "Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs"],
    repo: "https://github.com/Nossayba-dev/boutique-react-sbringboot",
    accent: "blue",
    screenshots: ["/boutique-screenshot.jpg", "/admin-screen.jpg"],
    summary: {
      en: "A personal full-stack project built to practice pairing a React front end with a Spring Boot back end: a storefront where customers browse and buy, and an admin dashboard to manage what they see.",
      fr: "Un projet personnel full-stack pour m’entraîner à associer un front-end React à un back-end Spring Boot : une vitrine où les clients naviguent et achètent, et un tableau de bord admin pour gérer ce qu’ils voient.",
    },
    overview: {
      en: [
        "I built this to practice the full split between a front end and a back end talking only over HTTP — a React storefront and admin dashboard on one side, a Spring Boot REST API on the other, each one runnable and deployable independently.",
        "The backend uses Spring Data JPA over MySQL for users, products, categories and the cart, with the schema recreated and reseeded with demo data on every restart — useful for a project meant to be cloned and tried, not a production database with real customers in it.",
        "The API is documented with springdoc-openapi, so anyone running it locally gets a working Swagger UI to explore the endpoints without reading the source first. CORS is configured to accept any localhost origin, so the frontend connects cleanly regardless of which port Vite happens to pick.",
      ],
      fr: [
        "J’ai construit ce projet pour m’entraîner à séparer complètement un front-end et un back-end qui ne communiquent que par HTTP — une vitrine et un tableau de bord admin en React d’un côté, une API REST Spring Boot de l’autre, chacun pouvant être lancé et déployé indépendamment.",
        "Le back-end utilise Spring Data JPA sur MySQL pour les utilisateurs, les produits, les catégories et le panier, avec un schéma recréé et réalimenté en données de démonstration à chaque redémarrage — pratique pour un projet destiné à être cloné et testé, pas une base de production avec de vrais clients.",
        "L’API est documentée avec springdoc-openapi, donc quiconque la lance en local obtient une interface Swagger fonctionnelle pour explorer les endpoints sans avoir à lire le code source. Le CORS est configuré pour accepter n’importe quelle origine localhost, afin que le frontend se connecte proprement quel que soit le port choisi par Vite.",
      ],
    },
    highlights: [
      {
        title: { en: "Decoupled front end and back end", fr: "Front-end et back-end découplés" },
        body: {
          en: "A React storefront and admin dashboard talk to a separate Spring Boot REST API over HTTP — the two sides can be developed, run and deployed independently.",
          fr: "Une vitrine et un tableau de bord admin en React communiquent avec une API REST Spring Boot séparée via HTTP — les deux côtés peuvent être développés, lancés et déployés indépendamment.",
        },
      },
      {
        title: { en: "Catalog, search and per-user cart", fr: "Catalogue, recherche et panier par utilisateur" },
        body: {
          en: "Customers browse products by category, search, and add or remove items from a cart with a running total — all backed by JPA entities over MySQL.",
          fr: "Les clients parcourent les produits par catégorie, effectuent des recherches et ajoutent ou retirent des articles d’un panier avec un total mis à jour en temps réel — le tout appuyé sur des entités JPA au-dessus de MySQL.",
        },
      },
      {
        title: { en: "Admin dashboard", fr: "Tableau de bord admin" },
        body: {
          en: "A separate /admin route for managing products, categories and users, built on the exact same REST API the storefront uses.",
          fr: "Une route /admin distincte pour gérer les produits, les catégories et les utilisateurs, construite sur la même API REST que celle utilisée par la vitrine.",
        },
      },
      {
        title: { en: "Documented, seedable API", fr: "API documentée et pré-remplie" },
        body: {
          en: "springdoc-openapi generates a working Swagger UI for every endpoint, and the database reseeds itself with demo data on every restart — clone it and there's something to click on immediately.",
          fr: "springdoc-openapi génère une interface Swagger fonctionnelle pour chaque endpoint, et la base de données se réalimente en données de démonstration à chaque redémarrage — il suffit de cloner le projet pour avoir immédiatement quelque chose à tester.",
        },
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
