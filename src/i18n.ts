export const translations = {
  zh: {
    /* ───── hero ───── */
    heroTitle: "Hi, I'm Runa.",
    heroDescription: "致力於開發美觀、穩健的網頁應用程式的前端開發者",

    /* ───── UI ───── */
    viewProjects: "查看作品",
    projects: "作品集",
    sideProjects: "Side Projects",
    customSites: "網站開發",
    design: "網頁設計",
    view: "查看",

    /* ───── plural ───── */
    images: (n: number) => `${n} 張圖片`,
    image: "1 張圖片",

    /* ───── tag dictionary ───── */
    tags: {
      react: "React",
      next: "Next.js",
      youtube: "YouTube API",
      gemini: "Gemini API",
      ts: "TypeScript",
      tailwind: "Tailwind CSS",
      aspnet: "ASP.NET Core",
      mvc: "MVC",
      i18n: "多語系（i18n）",
      js: "JS",
      jquery: "jQuery",
      async: "ASYNC/AWAIT",
      bootstrap: "Bootstrap",
    },
  },

  en: {
    /* ───── hero ───── */
    heroTitle: "Hi, I'm Runa.",
    heroDescription: "A Front-End Developer crafting clean UIs and robust web applications.",

    /* ───── UI ───── */
    viewProjects: "View Projects",
    projects: "Projects",
    sideProjects: "Side Projects",
    customSites: "Custom Sites",
    design: "Web Design",
    view: "View",

    /* ───── plural ───── */
    images: (n: number) => `${n} images`,
    image: "1 image",

    /* ───── tag dictionary ───── */
    tags: {
      react: "React",
      next: "Next.js",
      youtube: "YouTube API",
      gemini: "Gemini API",
      ts: "TypeScript",
      tailwind: "Tailwind CSS",
      aspnet: "ASP.NET Core",
      mvc: "MVC",
      i18n: "Multilingual Support (i18n)",
      js: "JS",
      jquery: "jQuery",
      async: "ASYNC/AWAIT",
      bootstrap: "Bootstrap",
    },
  },
} as const;

/* ──────────────────── types & helpers ──────────────────── */
export type Locale = keyof typeof translations;
export type TagKey = keyof typeof translations["zh"]["tags"];
export type TKey = Exclude<keyof typeof translations["zh"], "tags">;

// 通用字串
export const t = (locale: Locale, key: TKey, arg?: any) => {
  const value = translations[locale][key];
  return typeof value === "function" ? value(arg) : value;
};

// tag 專用：保證 key 型別安全
export const getTag = (locale: Locale, key: TagKey) =>
  translations[locale].tags[key];

export type Translations = typeof translations["zh"];