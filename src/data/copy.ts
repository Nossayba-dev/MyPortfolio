import type { Bi } from "../lib/LanguageContext";

export const meta = {
  title: { en: "Nossayba Abbara — .NET Developer", fr: "Nossayba Abbara — Développeuse .NET" },
  description: {
    en: "Nossayba Abbara — .NET developer in Casablanca. Desktop and web applications built with C#, .NET and SQL.",
    fr: "Nossayba Abbara — développeuse .NET à Casablanca. Applications de bureau et web conçues avec C#, .NET et SQL.",
  },
} satisfies Record<string, Bi<string>>;

export const nav = {
  services: { en: "Services", fr: "Services" },
  about: { en: "About", fr: "À propos" },
  resume: { en: "Resume", fr: "CV" },
  portfolio: { en: "Portfolio", fr: "Portfolio" },
  talk: { en: "Let’s talk", fr: "Discutons" },
  toggleMenu: { en: "Toggle menu", fr: "Basculer le menu" },
} satisfies Record<string, Bi<string>>;

export const theme = {
  toLight: { en: "Switch to light theme", fr: "Passer au thème clair" },
  toDark: { en: "Switch to dark theme", fr: "Passer au thème sombre" },
} satisfies Record<string, Bi<string>>;

export const hero = {
  hello: { en: "Hello, I’m", fr: "Bonjour, je suis" },
  basedIn: { en: "Based in", fr: "Basée à" },
  talk: { en: "Let’s talk", fr: "Discutons" },
  myWork: { en: "My work", fr: "Mon travail" },
  badgeText: { en: "CONTACT ME · CONTACT ME ·", fr: "CONTACTEZ-MOI · CONTACTEZ-MOI ·" },
  badgeAriaLabel: { en: "Go to the contact form", fr: "Aller au formulaire de contact" },
} satisfies Record<string, Bi<string>>;

export const about = {
  basedIn: { en: "based in", fr: "basée à" },
} satisfies Record<string, Bi<string>>;

export const services = {
  title: { en: "My specialties", fr: "Mes spécialités" },
} satisfies Record<string, Bi<string>>;

export const resume = {
  title: { en: "All my details, here", fr: "Tous mes détails, ici" },
  tablistAriaLabel: { en: "Resume sections", fr: "Sections du CV" },
  tabExperience: { en: "Experience", fr: "Expérience" },
  tabEducation: { en: "Education", fr: "Formation" },
  tabSkills: { en: "Skills", fr: "Compétences" },
  languagesHeading: { en: "Languages", fr: "Langues" },
} satisfies Record<string, Bi<string>>;

export const portfolio = {
  title: { en: "My recent work", fr: "Mes réalisations récentes" },
  private: { en: "Private", fr: "Privé" },
  viewProject: { en: "View project", fr: "Voir le projet" },
} satisfies Record<string, Bi<string>>;

export const projectDetail = {
  back: { en: "← Back to portfolio", fr: "← Retour au portfolio" },
  confidentialNotice: {
    en: "This was client work. The application and its source stay private — the write-up below covers the engineering, not the product.",
    fr: "Il s’agissait d’un projet client. L’application et son code source restent privés — le texte ci-dessous porte sur l’ingénierie, pas sur le produit.",
  },
  viewSource: { en: "View source", fr: "Voir le code source" },
  viewLarger: { en: "View larger", fr: "Agrandir" },
} satisfies Record<string, Bi<string>>;

export const contactPage = {
  back: { en: "← Back", fr: "← Retour" },
  titleBefore: { en: "Let’s", fr: "" },
  titleWord: { en: "talk", fr: "Discutons" },
  subtitle: {
    en: "Tell me about your project or role and I’ll get back to you. You can also email me directly at",
    fr: "Parlez-moi de votre projet ou du poste et je vous répondrai rapidement. Vous pouvez aussi m’écrire directement à",
  },
  firstNameLabel: { en: "First name", fr: "Prénom" },
  firstNamePlaceholder: { en: "Nossayba…", fr: "Nossayba…" },
  firstNameError: { en: "Please enter your first name.", fr: "Veuillez indiquer votre prénom." },
  lastNameLabel: { en: "Last name", fr: "Nom" },
  lastNamePlaceholder: { en: "Abbara…", fr: "Abbara…" },
  lastNameError: { en: "Please enter your last name.", fr: "Veuillez indiquer votre nom." },
  emailLabel: { en: "Email", fr: "E-mail" },
  emailPlaceholder: { en: "you@company.com…", fr: "vous@entreprise.com…" },
  emailEmptyError: {
    en: "Please enter your email address.",
    fr: "Veuillez indiquer votre adresse e-mail.",
  },
  emailInvalidError: {
    en: "That doesn’t look like a valid email address.",
    fr: "Cette adresse e-mail ne semble pas valide.",
  },
  phoneLabel: { en: "Phone", fr: "Téléphone" },
  phoneOptional: { en: "Optional", fr: "Facultatif" },
  phonePlaceholder: { en: "+212…", fr: "+212…" },
  phoneError: {
    en: "Please enter a valid phone number, or leave this empty.",
    fr: "Veuillez indiquer un numéro de téléphone valide, ou laisser ce champ vide.",
  },
  messageLabel: { en: "Message", fr: "Message" },
  messagePlaceholder: {
    en: "Tell me what you’re working on…",
    fr: "Dites-moi sur quoi vous travaillez…",
  },
  messageEmptyError: { en: "Please write a message.", fr: "Veuillez écrire un message." },
  messageShortError: {
    en: "Please write a little more — at least 10 characters.",
    fr: "Merci d’écrire un peu plus — au moins 10 caractères.",
  },
  submit: { en: "Send message", fr: "Envoyer le message" },
  sentThanks: { en: "Thanks,", fr: "Merci," },
  sentBody: {
    en: "Your email app should have opened with the message ready to send. If nothing happened, email me directly at",
    fr: "Votre application e-mail a dû s’ouvrir avec le message prêt à être envoyé. Si rien ne s’est passé, écrivez-moi directement à",
  },
  writeAnother: { en: "Write another message", fr: "Écrire un autre message" },
  mailSubject: {
    en: "Portfolio enquiry from",
    fr: "Demande de contact depuis le portfolio —",
  },
  mailNameLabel: { en: "Name", fr: "Nom" },
  mailEmailLabel: { en: "Email", fr: "E-mail" },
  mailPhoneLabel: { en: "Phone", fr: "Téléphone" },
} satisfies Record<string, Bi<string>>;

export const contact = {
  titleBefore: { en: "Let’s work", fr: "Travaillons" },
  titleWord: { en: "together", fr: "ensemble" },
  subtitleSuffix: {
    en: "open to opportunities and freelance work.",
    fr: "ouverte aux opportunités et aux missions freelance.",
  },
  emailLabel: { en: "Email me", fr: "Par e-mail" },
  phoneLabel: { en: "Call me", fr: "Par téléphone" },
  findLabel: { en: "Find me", fr: "Ailleurs" },
  rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
  backToTop: { en: "Back to top", fr: "Retour en haut" },
} satisfies Record<string, Bi<string>>;

export const notFound = {
  title: { en: "Page not found.", fr: "Page introuvable." },
  backHome: { en: "Back home", fr: "Retour à l’accueil" },
} satisfies Record<string, Bi<string>>;
