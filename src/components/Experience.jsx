import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-20">
      {/* HEADER — UNCHANGED */}
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      {/* CARD WRAPPER */}
      <div className="relative">
        {/* CENTERED CIRCULAR GLOW */}
        <div
          className="
            absolute -z-10
            w-72 h-48
            rounded-full
            bg-purple-500/15
            blur-2xl
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
          "
        />

        {/* CARD — UNCHANGED */}
        <div className="bg-[#4F228D]/10 dark:bg-[#4F228D]/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold">
            {experience.role} – {experience.company}
          </h3>

          <p className="text-gray-500 mb-4">{experience.duration}</p>

          <ul className="list-disc ml-6 space-y-2">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
