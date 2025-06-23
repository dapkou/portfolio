import { ta } from "zod/v4/locales";

export const projects = [
    {
        title: "YT Vault 影片摘要",
        description: "本專案提供將 YouTube 影片內容透過 Gemini API 進行 AI 摘要分析，獲取影片的摘要、分類、關鍵字等資訊。",
        descriptionEn: "This project uses the Gemini API to analyze YouTube video content with AI, generating summaries, categories, keywords, and other metadata.",
        tags: ["React", "Next.js", "YouTube API", "Gemini API", "TypeScript", "Tailwind CSS"],
        link: "#",
        category: "side",
    },
    {
        title: "承鋒鑄造",
        titleEn: "CHENG FENG CASTING FACTORY",
        description: "負責品牌形象網站的整體視覺設計、響應式切版與互動效果開發，結合品牌識別與使用者體驗，打造具吸引力的網站介面。",
        descriptionEn: "Handled the full visual design, responsive layout, and interactive development of the brand's corporate website—aligning brand identity with user experience to create an engaging interface.",
        tags: [
        "ASP.NET Core 9",
        "MVC",
        "i18n",
        "Web UI/UX",
        "響應式設計",
        "前端互動開發"
        ],
        tagsEn: [
        "ASP.NET Core 9",
        "MVC",
        "i18n",
        "Web UI/UX",
        "Responsive Design",
        "Interactive Front-end"
        ],
        link: "https://www.chengfeng.com.tw/",
        category: "custom",
    },
    {
        title: "台灣鑄造學會(待更新)",
        titleEn: "Taiwan Foundry Society(Coming Soon)",
        description: "負責網站的響應式切版與前端互動開發，並整合購物車、結帳流程與會員系統，強化整體使用體驗。",
        descriptionEn: "Developed responsive layouts and interactive front-end features, integrating shopping cart, checkout flow, and membership system to enhance user experience.",
        tags: [
        "ASP.NET Core 8",
        "MVC",
        "i18n",
        "購物車與結帳流程",
        "會員功能"
        ],
        tagsEn: [
        "ASP.NET Core 8",
        "MVC",
        "i18n",
        "Cart & Checkout Flow",
        "Membership System"        
        ],
        link: "",
        category: "custom",
    },
    {
        title: "升學考試網站設計稿",
        titleEn: "Entrance Exam Website – Design Mockup",
        description: "針對升學考試品牌規劃官網視覺風格，設計響應式介面，提供清晰的資訊架構與視覺層次。",
        descriptionEn: "Designed a responsive mockup for an entrance exam brand website, emphasizing clear information architecture and visual hierarchy.",
        tags: ["Web UI/UX", "Design Mockup", "Adobe XD", "Responsive Design"],
        link: "",
        category: "design",
        images: [
        `${import.meta.env.BASE_URL}imgs/ui-1-pc-1.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-pc-2.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-pc-3.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-pc-4.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-pc-5.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-mobile-1.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-mobile-2.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-mobile-3.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-mobile-4.png`,
        `${import.meta.env.BASE_URL}imgs/ui-1-mobile-5.png`,
        ]
    },
    {
        title: "學術單位官網設計稿",
        titleEn: "Academic Institution Website – Design Mockup",
        description: "規劃學術機構品牌官網的視覺風格，設計簡潔且具延展性的 UI 版型，以利後續開發整合。",
        descriptionEn: "Created a clean, scalable UI mockup for an academic institution’s website to support future integration and development.",
        tags: ["Web UI/UX", "Design Mockup", "Figma", "Responsive Design"],
        link: "",
        category: "design",
        images: [
        `${import.meta.env.BASE_URL}imgs/ui-3-pc-1.png`,
        `${import.meta.env.BASE_URL}imgs/ui-3-pc-2.png`,
        `${import.meta.env.BASE_URL}imgs/ui-3-pc-3.png`,
        `${import.meta.env.BASE_URL}imgs/ui-3-mobile-1.png`,
        `${import.meta.env.BASE_URL}imgs/ui-3-mobile-2.png`,
        `${import.meta.env.BASE_URL}imgs/ui-3-mobile-3.png`,
        ]
    },
    {
        title: "形象網站設計與切版",
        titleEn: "Corporate Website Design & Front-end Development",
        description: "負責品牌形象網站的 UI 設計與前端實作，結合品牌定位與視覺語言，實作響應式網頁，強化品牌整體體驗。",
        descriptionEn: "Handled both UI design and front-end implementation for a corporate brand site, aligning design with brand identity and delivering a responsive user experience.",
        tags: ["Web UI/UX", "響應式設計", "前端切版"],
        tagsEn: ["Web UI/UX", "Responsive Design", "Front-end Implementation"],
        link: "http://www.juncheng.tw/",
        category: "design",
        images: [
            `${import.meta.env.BASE_URL}imgs/juncheng.webp`,
        ]
    },
];