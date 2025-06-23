import { useLocale } from "../contexts/LocaleContext";

const Hero: React.FC = () => {
  const { t } = useLocale();
  const scrollToProjects = () => {
    document.getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return(
    <section
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
  >
    {/* 最底：漸層遮罩（z-0） */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1f0e04]/80 via-[#1f0e04]/60 to-black/80 z-0" />

    {/* 中層：置中的霓虹圈圈 (z-10) */}
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
      <div className="w-70 h-70 bg-[#AF5F3C]/80 rounded-full blur-2xl opacity-30 animate-pulse" />
    </div>

    {/* 最上：主要內容 (z-20) */}
    <div className="relative z-20 text-white max-w-2xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t.heroTitle}</h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-200">{t.heroDescription}</p>
      <a 
        onClick={scrollToProjects}
        className="relative inline-block mt-10 px-10 py-3 font-semibold text-[#aaa263] rounded-full
                   overflow-hidden transition-all duration-300
                   hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]
                   before:absolute before:inset-0 before:rounded-full
                   before:bg-white/10 before:backdrop-blur-md
                   before:border before:border-white/20
                   before:transition-all before:duration-300 before:z-[-1]
                   hover:before:bg-white/20 hover:before:border-white/40 hover:text-[#f3eac2]"
      >
        View Projects
      </a>
    </div>
  </section>
  )
};

export default Hero;