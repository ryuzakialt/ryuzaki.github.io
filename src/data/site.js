// All site content lives here. Edit this file to make the site yours.
// Social links with an empty `href` are hidden automatically, so nothing ships half-working.

export const site = {
  name: "Ryuzaki",
  role: "Product designer and front-end engineer",
  email: "hello@ryuzaki.dev", // replace with your real address
  links: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
  ],
};

export const nav = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const facts = [
  { label: "Focus", value: "Design systems, product UI" },
  { label: "Stack", value: "React, TypeScript, Tailwind" },
  { label: "Working", value: "Remote, flexible hours" },
];

export const about = {
  paragraphs: [
    "I design and build interfaces for software teams. Most of my work sits between a Figma file and a production codebase: turning loose visual direction into components, tokens and patterns that engineers can reuse without asking.",
    "I care about the unglamorous parts of a product: empty states, loading states, keyboard behaviour and the spacing rules that make a screen feel settled. When those are right, the rest of the interface gets easier to build and easier to trust.",
  ],
  skills: [
    { group: "Design", items: ["Interface design", "Design systems", "Prototyping", "Accessibility reviews"] },
    { group: "Engineering", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Testing Library"] },
    { group: "Process", items: ["Design tokens", "Component documentation", "Design critique", "Pairing with engineers"] },
  ],
};

export const categories = ["All", "Design systems", "Product", "Open source"];

// Sample projects. Replace with your own; add `href` to show a link on the card.
export const projects = [
  {
    title: "Tokenised design system",
    category: "Design systems",
    year: "2026",
    summary:
      "A component library built on a single spacing and type scale, with tokens shared between design files and code so both stay in step.",
    tags: ["React", "Tailwind", "Tokens"],
  },
  {
    title: "Analytics workspace",
    category: "Product",
    year: "2025",
    summary:
      "Dashboard redesign focused on scanning speed: clearer hierarchy, skeleton loading for every data panel and keyboard-first filtering.",
    tags: ["Product design", "React", "Data UI"],
  },
  {
    title: "Accessible form kit",
    category: "Open source",
    year: "2025",
    summary:
      "Inputs, selects and validation patterns with focus management and screen reader announcements tested across major browsers.",
    tags: ["Accessibility", "TypeScript"],
  },
  {
    title: "Onboarding flow rebuild",
    category: "Product",
    year: "2024",
    summary:
      "Reworked a five-step sign-up into a shorter flow with inline validation and explicit loading states on every submit.",
    tags: ["UX", "Prototyping"],
  },
  {
    title: "Icon and illustration set",
    category: "Design systems",
    year: "2024",
    summary:
      "A small, consistent icon family on a 24px grid with matching stroke weights, exported as optimised SVG components.",
    tags: ["Iconography", "SVG"],
  },
  {
    title: "Docs site generator",
    category: "Open source",
    year: "2023",
    summary:
      "A lightweight tool that turns component source and annotations into a searchable documentation site.",
    tags: ["Vite", "MDX", "Tooling"],
  },
];

export const experience = [
  {
    role: "Senior Product Designer, Design Systems",
    org: "Independent",
    period: "2024 — Present",
    points: [
      "Lead design system engagements for product teams, from audit to shipped component library.",
      "Define spacing, type and colour tokens and document usage rules for designers and engineers.",
      "Run accessibility reviews and fix issues in code rather than handing over a report.",
    ],
  },
  {
    role: "Front-end Engineer",
    org: "Product studio",
    period: "2022 — 2024",
    points: [
      "Built customer-facing React applications with a shared component layer.",
      "Introduced skeleton loading and consistent error states across data-heavy screens.",
      "Worked directly with designers to close the gap between mockups and production.",
    ],
  },
  {
    role: "Interface Designer",
    org: "Software agency",
    period: "2020 — 2022",
    points: [
      "Designed web and mobile interfaces for early-stage products.",
      "Prepared handoff files with annotated states, spacing and responsive behaviour.",
    ],
  },
];
