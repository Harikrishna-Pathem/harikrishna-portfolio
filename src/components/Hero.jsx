import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";
import dev from "../assets/images/developer.png";
import { Typewriter } from "react-simple-typewriter";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div
          className="
            w-full
            sm:w-[90%]
            md:w-[70%]
            lg:w-[55%]
            xl:w-[50%]
            flex
            flex-col
            md:flex-row
            items-center
            gap-20
          "
        >
          {/* IMAGE BLOCK */}
          <motion.div
            className="relative flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="
                absolute -z-10
                w-32 h-32 md:w-40 md:h-40
                rounded-full
                bg-purple-500/80
                blur-xl
                -top-2 -left-2
              "
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.6, 0.85, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={dev}
              alt="Developer illustration"
              className="w-28 md:w-32 lg:w-36"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Harikrishna Pathem
            </h1>

            <p className="text-primary text-base md:text-lg mb-5">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React.js Specialist",
                  "ERP & Real-Time Systems Engineer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-7 leading-relaxed">
              Building scalable, real-world applications with modern UI
              architecture, real-time communication, and performance-focused
              design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
              <a
                href="#projects"
                className="bg-primary px-6 py-3 rounded-lg text-white text-center hover:scale-105 transition"
              >
                View Projects
              </a>

              {/* OPEN RESUME MODAL */}
              <button
                onClick={() => setOpenResume(true)}
                className="
                  border border-gray-300 dark:border-gray-700
                  px-6 py-3 rounded-lg
                  hover:bg-black/5 dark:hover:bg-white/5
                  transition
                "
              >
                View Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESUME MODAL */}
      <ResumeModal
        isOpen={openResume}
        onClose={() => setOpenResume(false)}
      />
    </>
  );
}
