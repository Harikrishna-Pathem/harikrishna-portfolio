import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function AboutIntro() {
  return (
    <section id="about" className="flex justify-center px-4 py-24 pt-0 scroll-mt-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          w-full
          sm:w-[90%]
          md:w-[70%]
          lg:w-[55%]
          xl:w-[50%]
          text-center
          md:text-left
        "
      >
        {/* SECTION TITLE */}
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-6">
          I’m a{" "}
          <span className="text-primary font-semibold">Frontend Developer</span>{" "}
          specializing in{" "}
          <span className="text-primary font-semibold">React.js</span>.
        </p>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
          Currently, I work as a Frontend Developer, where I focus on building
          scalable, high-performance web applications using React.js and modern
          frontend tooling. My work involves designing clean, reusable
          components, managing application state efficiently, and integrating
          frontend systems with REST APIs and real-time services.
          <br />
          <br />
          I have hands-on experience developing enterprise-level ERP modules,
          dashboards, and real-time communication features. I pay close
          attention to performance, accessibility, and responsive design,
          ensuring applications work smoothly across devices and environments.
          <br />
          <br />
          With a strong interest in UI/UX, I enjoy crafting interfaces that are
          not only visually appealing but also intuitive and user-friendly. I
          aim to create digital products that strike a balance between{" "}
          <span className="font-medium">user experience</span> and{" "}
          <span className="font-medium">business requirements</span>.
        </p>
      </motion.div>
    </section>
  );
}
