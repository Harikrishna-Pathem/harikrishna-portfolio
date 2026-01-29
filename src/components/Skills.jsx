import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiVite,
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiPostman,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { VscTools } from "react-icons/vsc";

const skillCards = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and high-performance user interfaces with modern frameworks.",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-cyan-500" },
      { name: "JavaScript (ES6+)", icon: <FaJs />, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Chakra UI", icon: <SiChakraui />, color: "text-teal-500" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-400" },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-gray-900 dark:text-gray-100",
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Designing secure, scalable APIs and services to power real-world applications.",
    skills: [
      { name: "Java", icon: <FaJava />, color: "text-red-600" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
      {
        name: "Spring Frameworks",
        icon: <SiSpringboot />,
        color: "text-green-600",
      },
      { name: "Microservices", icon: <VscTools />, color: "text-indigo-500" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "text-gray-700 dark:text-gray-300",
      },
    ],
  },
  {
    title: "Databases",
    description:
      "Working with relational databases to design efficient schemas and queries.",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-indigo-600" },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Building cross-platform mobile experiences with a focus on performance and usability.",
    skills: [
      { name: "React Native", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Flutter", icon: <SiFlutter />, color: "text-sky-500" },
      { name: "Dart", icon: <SiDart />, color: "text-blue-500" },
    ],
  },
  {
    title: "Testing & Tools",
    description:
      "Using modern tools and workflows to build, test, and deploy applications reliably.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      {
        name: "GitHub",
        icon: <FaGithub />,
        color: "text-gray-900 dark:text-gray-100",
      },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "VS Code", icon: <VscTools />, color: "text-blue-500" },
      {
        name: "CI/CD (GitHub Actions)",
        icon: <VscTools />,
        color: "text-purple-500",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-[#4F228D]/10 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* SECTION HEADER */}
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>

        {/* VALUES / DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
          I’m currently looking to join a cross-functional team that values
          building meaningful products through clean, accessible, and
          user-focused design. I enjoy collaborating with designers, backend
          engineers, and product teams to create interfaces that improve
          people’s everyday experiences while meeting real business needs.
        </p>

        {/* SPECIALIZATION GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((card) => (
            <div
              key={card.title}
              className="
                bg-[#4F228D]/20 dark:bg-[#4F228D]/20
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {card.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="
                      inline-flex items-center gap-2
                      px-3 py-1.5
                      bg-[#4F228D]/30 dark:bg-[#4F228D]/40
                      rounded-lg
                      text-sm
                    "
                  >
                    <span className={`text-base ${skill.color}`}>
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
