import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      {/* HEADER — UNCHANGED */}
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      {/* WRAPPER FOR GRID + GLOW */}
      <div className="relative">
        {/* SINGLE CENTERED GLOW */}
        <div
          className="
            absolute -z-10
            w-40 h-40
            rounded-full
            bg-purple-500/25
            blur-2xl
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
          "
        />

        {/* PROJECTS GRID — UNCHANGED */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#4F228D]/10 dark:bg-[#4F228D]/10 p-6 rounded-xl hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>

              <p className="text-sm text-gray-500 mb-1">{project.duration}</p>

              <p className="text-primary text-sm mb-3">{project.stack}</p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <ul className="list-disc ml-6 space-y-2">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
