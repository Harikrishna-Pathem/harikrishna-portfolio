import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
// import { SiNaukri } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 text-center flex justify-center"
    >
      <div className="max-w-3xl w-full">
        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-4">
          Let’s Work Together
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          I’m open to frontend and full-stack opportunities where I can
          contribute to building scalable, accessible, and user-focused
          applications. If you’d like to collaborate or discuss an opportunity,
          feel free to reach out through any of the platforms below.
        </p>

        {/* CONTACT ICONS */}
        <div className="flex justify-center flex-wrap gap-6">
          {/* EMAIL — Gmail Red */}
          <a
            href="mailto:harikrishnapathem0719@gmail.com"
            aria-label="Email"
            className="contact-icon text-red-500"
          >
            <FaEnvelope />
          </a>

          {/* LINKEDIN — LinkedIn Blue */}
          <a
            href="https://www.linkedin.com/in/harikrishna-pathem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="contact-icon text-blue-600"
          >
            <FaLinkedin />
          </a>

          {/* GITHUB — Neutral (Light/Dark aware) */}
          <a
            href="https://github.com/HarikrishnaPathem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="contact-icon text-gray-800 dark:text-gray-200"
          >
            <FaGithub />
          </a>

          {/* NAUKRI — Brand Blue */}
          {/* <a
            href="https://www.naukri.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Naukri"
            className="contact-icon text-blue-700"
          >
            <SiNaukri />
          </a> */}

          {/* PHONE — Green + Tooltip */}
          <div className="relative group">
            <div
              aria-label="Phone"
              className="contact-icon text-green-600 cursor-pointer"
            >
              <FaPhoneAlt />
            </div>

            {/* TOOLTIP */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2
                -top-10
                px-3 py-1
                text-sm
                bg-black text-white
                rounded-md
                opacity-0
                group-hover:opacity-100
                transition
                whitespace-nowrap
              "
            >
              +91 8247517346
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
