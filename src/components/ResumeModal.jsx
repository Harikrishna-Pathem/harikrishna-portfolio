import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import resume from "../assets/resume/Harikrishna_Frontend_Resume.pdf"

export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed inset-0 z-50
            bg-black/70
            backdrop-blur-sm
            flex items-center justify-center
            px-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* MODAL CONTAINER */}
          <motion.div
            className="
              relative
              w-full
              max-w-7xl
              h-[95vh]
              bg-white dark:bg-gray-900
              rounded-xl
              overflow-hidden
            "
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-10
                p-2 rounded-full
                bg-gray-200 dark:bg-gray-800
                hover:shadow-md
                transition
              "
            >
              <FaTimes />
            </button>

            {/* PDF VIEWER */}
            <iframe
              src={resume}
              title="Resume"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
