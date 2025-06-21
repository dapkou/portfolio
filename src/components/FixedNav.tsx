const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};


const FixedNav = () => (
  <>
    {/* ─── 左上 Logo ─────────────────────────── */}
    <div className="fixed top-4 left-6 z-50 select-none text-xl font-extrabold text-[#aaa263]">
        <span
        className="relative z-10 px-4 py-2 text-[#aaa263] font-semibold rounded-full 
                    before:content-[''] before:absolute before:inset-0 before:rounded-full
                    before:bg-white/10 before:backdrop-blur-md
                    before:border before:border-[#aaa263]/20 before:z-[-1]"
        >
            Runa's Portfolio
        </span>
    </div>
    {/* 左下連結圖示 */}
    <div className="fixed bottom-6 left-6 z-50 flex gap-4">
        {/* CodePen */}
        <a
            href="https://codepen.io/collection/yyNZdE"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-2 font-semibold text-[#aaa263] rounded-full overflow-hidden
                        hover:shadow-[0_0_12px_rgba(175,95,60,0.35)]
                        before:absolute before:inset-0 before:rounded-full
                        before:bg-white/10 before:backdrop-blur-md
                        before:border before:border-[#aaa263/20]
                        before:transition-all before:duration-300 before:z-[-1]
                        hover:before:bg-[#AF5F3C]/15
                        hover:before:border-[#AF5F3C]/60
                        hover:text-[#AF5F3C]
                        transition-all duration-300"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16V8a1 1 0 0 0-.469-.844l-8-5a1 1 0 0 0-1.062 0l-8 5A1 1 0 0 0 3 8v8a1 1 0 0 0 .469.844l8 5a1 1 0 0 0 1.062 0l8-5A1 1 0 0 0 21 16zM12 22v-6.5M12 2v6.5M3.27 6.96l8.23 5.54M20.73 6.96l-8.23 5.54M3.27 17.04l8.23-5.54M20.73 17.04l-8.23-5.54"
                />
            </svg>
            CodePen
        </a>
    </div>

    {/* ─── 右上 ─────────────────────────── */}
    {/* <div className="fixed top-4 right-6 z-50 px-3 py-1 text-[10px] text-[#AF5F3C] bg-white/10 border border-[#AF5F3C]/30 rounded-full backdrop-blur-md shadow-sm font-mono select-none">
    </div> */}
    {/* ─── 右下導覽 ───────────────────────────── */}
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="relative px-4 py-2 text-base font-medium font-semibold text-[#aaa263] rounded-full
                  overflow-hidden transition-all duration-300 z-10
                  hover:shadow-[0_0_12px_rgba(175,95,60,0.35)]
                  before:absolute before:inset-0 before:rounded-full
                  before:bg-white/10 before:backdrop-blur-md
                  before:border before:border-[#aaa263/20]
                  before:transition-all before:duration-300 before:z-[-1]
                  hover:before:bg-[#AF5F3C]/15
                  hover:before:border-[#AF5F3C]/60
                  hover:text-[#AF5F3C] cursor-pointer"
        >
          {s.label}
        </button>
      ))}
    </div>
  </>
);

export default FixedNav;