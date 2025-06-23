import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { useLocale } from "../contexts/LocaleContext";
import type { Locale } from "../i18n";
import { createPortal } from "react-dom";
type Project = (typeof projects)[number];
type TextCardsProps = {
  title: string;
  titleEn: string;
  list: Project[];
  tags: readonly string[];
  locale: Locale;
  onOpen: (imgs: string[]) => void;
};
const tagsMap = {
  side: {
    zh: ["Side Project", "React", "Next.js", "YouTube API", "Gemini API", "TypeScript", "Tailwind CSS"],
    en: ["Side Project", "React", "Next.js", "YouTube API", "Gemini API", "TypeScript", "Tailwind CSS"],
  },
  custom: {
    zh: ["Front-end Development", "ASP.NET Core", "MVC", "多語系（i18n）", "JS", "JQuery", "ASYNC/AWAIT", "bootstrap"],
    en: ["Front-end Development", "ASP.NET Core", "MVC", "Multilingual Support (i18n)", "JS", "JQuery", "ASYNC/AWAIT", "bootstrap"],
  },
} as const;

export default function Projects({ onOpen }: { onOpen: (imgs: string[]) => void }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [gallery, setGallery] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);

  /* ─────────── categories ─────────── */
  const side   = projects.filter(p => p.category === "side");
  const custom = projects.filter(p => p.category === "custom");
  const design = projects.filter(p => p.category === "design");

  /* ─────────── lightbox ─────────── */
  const open = (imgs: string[]) => {
    setGallery(imgs);
    setIdx(0);
    setLightboxOpen(true);
  };
  const close = () => setLightboxOpen(false);
  const next = () =>
    setIdx(i => (i + 1) % gallery.length);
  const prev = () =>
    setIdx(i => (i - 1 + gallery.length) % gallery.length);

  /* ─────────── keydown (Esc / ← →) ─────────── */
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      close();
      if (e.key === "ArrowRight")  next();
      if (e.key === "ArrowLeft")   prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, gallery.length]);

  /* ─────────── SIDE PROJECTS & CUSTOM SITES ─────────── */
  const TextCards: React.FC<TextCardsProps & { onOpen: (imgs: string[]) => void }> = ({
  title,
  titleEn,
  list,
  tags,
  locale,
  onOpen,
  }) => (
    <section className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-[#AAA263]">
        {locale === "zh" ? title : titleEn}
        <small className="font-normal text-sm text-gray-500 mx-3">
          {tags.map((tag, i) => (
            <span key={i}>#{tag}{i < tags.length - 1 ? ", " : ""}</span>
          ))}
        </small>
      </h3>

        {list.length === 0 ? (
          <div className="bg-white rounded-xl p-6">incoming…</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {list.map((p, i) => {
              const imgs = p.images ?? [];
              const isSideProject = p.category === "side";

              return (
                <div key={i} className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition group">
                  <div className="aspect-[16/9] overflow-hidden">
                    {isSideProject && p.video ? (
                      <video
                        src={p.video}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                    ) : (
                      imgs.length > 0 && (
                        <img
                          src={imgs[0]}
                          alt={`${p.title} preview`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onClick={() => onOpen(imgs)}
                        />
                      )
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-semibold">
                      {locale === "zh" ? p.title : p.titleEn}
                    </h4>
                    <p className="text-gray-600 mt-2">
                      {locale === "zh" ? p.description : p.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {(locale === "zh" ? p.tags : p.tagsEn ?? p.tags).map((t, k) => (
                        <span
                          key={k}
                          className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-500"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </section>
  );

  /* ─────────── Design ─────────── */
  const DesignCards = (locale: Locale) => (
  <section className="mb-16">
    <h3 className="text-2xl font-bold mb-6 text-[#AAA263]">
      {locale === "zh" ? "網頁設計" : "Web Design"}
      <small className="font-normal text-sm text-gray-500 mx-3">
        #Web UI/UX、#RWD、#Adobe XD、#Figma、#UI Kit
      </small>
    </h3>

    {design.length === 0 ? (
      <div className="bg-white rounded-xl p-6">incoming…</div>
    ) : (
      <div className="grid gap-8 md:grid-cols-2">
        {design.map((p, i) => {
          const imgs = p.images ?? [];
          return (
            <div
              key={i}
              className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition group cursor-pointer"
              onClick={() => onOpen(imgs)}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={imgs[0] ?? "/imgs/river.jpg"}
                  alt={locale === "zh" ? p.title : p.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold">
                  {locale === "zh" ? p.title : p.titleEn}
                </h4>
                <p className="text-gray-600 mt-2">
                  {locale === "zh" ? p.description : p.descriptionEn}
                </p>
                <span className="text-sm text-gray-500 block mt-2">
                  {imgs.length > 1 ? `${imgs.length} images` : "1 image"}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:underline text-sm font-medium mt-2"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    )}
  </section>
  );


  const { locale, t } = useLocale();
  return (
    <section id="projects" className="relative z-10 py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">{t.projects}</h2>
      <div className="max-w-6xl mx-auto">
        <TextCards
          title={t.sideProjects}
          titleEn="Side Projects"
          list={side}
          tags={tagsMap.side[locale]}
          locale={locale}
          onOpen={open}
        />
        <TextCards
          title={t.customSites}
          titleEn="Custom Sites"
          list={custom}
          tags={tagsMap.custom[locale]}
          locale={locale}
          onOpen={open}
        />
        
        {DesignCards(locale)}
      </div>
      {/* Lightbox... */}
      {lightboxOpen &&
      createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 text-4xl font-semibold transition-transform hover:scale-110 hover:text-white"
          >
            ←
          </button>
          <img
            src={gallery[idx]}
            alt={`image ${idx + 1}`}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 text-4xl font-semibold transition-transform hover:scale-110 hover:text-white"
          >
            →
          </button>
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white text-xl"
          >
            ✕
          </button>
        </div>,
        document.body
      )}
    </section>
  );
}