import { motion } from "framer-motion";
import { stagger, fadeUp } from "../utils/motion";

const tech = [
  "React.js",
  "Vite",
  "Tailwind CSS",
  "Socket.IO",
  "Spring Boot",
  "MySQL",
];

export default function TechStack() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {tech.map((item) => (
          <motion.span
            key={item}
            variants={fadeUp}
            className="bg-gray-900 px-4 py-2 rounded-lg"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
