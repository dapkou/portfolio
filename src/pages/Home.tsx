
import { useState, useEffect } from "react";
import FixedNav from "../components/FixedNav";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [gallery, setGallery] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);

  const open = (imgs: string[]) => {
    setGallery(imgs);
    setIdx(0);
    setLightboxOpen(true);
  };
  const close = () => setLightboxOpen(false);
  const next = () => setIdx((i) => (i + 1) % gallery.length);
  const prev = () => setIdx((i) => (i - 1 + gallery.length) % gallery.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, gallery.length]);

  return (
    <>
      <FixedNav />
      <main className="flex flex-col scroll-smooth">
        <section id="hero"><Hero /></section>
        <section id="projects">
          <Projects onOpen={open} />
        </section>
      </main>

      {lightboxOpen && (
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
        </div>
      )}
    </>
  );
};

export default Home;