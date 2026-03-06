import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-5 max-w-5xl mx-auto scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-indigo-500 before:rounded-full">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex flex-col gap-6 text-gray-800 dark:text-gray-200"
        >
          <p className="text-lg">
            I’m always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out using the form or via email and LinkedIn below.
          </p>

          <div className="flex flex-col gap-4 text-lg">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" />{' '}
              <a href="mailto:trevormadarakayeyia@gmail.com" className="hover:underline">
                trevormadarakayeyia@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaLinkedin className="text-indigo-500" />{' '}
              <a href="https://www.linkedin.com/in/trevor-madara" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaGlobe className="text-indigo-500" />{' '}
              <a href="https://invodtechltd.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                invodtechltd.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium shadow-lg transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Trevor Madara Kayeyia. All rights reserved.</p>
      </footer>
    </section>
  );
}