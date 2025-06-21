import { projects } from "../data/projects";
const Projects = () => {
  const sideProjects  = projects.filter(p => p.category === "side");
  const customSites   = projects.filter(p => p.category === "custom");

  const renderGroup = (title: string, list: typeof projects) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-[#AAA263]">{title}</h3>

      {list.length === 0 ? (
        /* ★ 無資料 ★ */
        <div className="grid gap-8 md:grid-cols-1">
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-xl font-semibold">incoming...</h4>
            </div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {list.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="text-gray-600 mt-2">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
              >
                View →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" className="relative z-10 py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-5xl mx-auto">
        {renderGroup("Side Projects", sideProjects)}
        {renderGroup("網站開發",    customSites)}
      </div>
    </section>
  );
};

export default Projects;