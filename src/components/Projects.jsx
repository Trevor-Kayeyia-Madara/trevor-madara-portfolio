import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    fetch(
      'https://api.github.com/users/Trevor-Kayeyia-Madara/repos?sort=updated&direction=desc&per_page=100'
    )
      .then((res) => res.json())
      .then((data) => {
        const featured = data
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            name: repo.name,
            description: repo.description,
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || null,
          }));
        setProjects(featured);
      });
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <section id="projects" className="py-24 px-5 max-w-6xl mx-auto scroll-mt-20">
      <h2 className="text-4xl font-bold mb-12 text-center relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-indigo-500 before:rounded-full">
        Projects
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage} // Animate page changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.githubUrl}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col justify-between p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-5 min-h-[3rem]">
                  {project.description || 'No description provided'}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:bg-indigo-500 hover:text-white transition"
                >
                  <FaGithub /> GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:bg-green-500 hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === i + 1
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600'
              } hover:bg-indigo-600 hover:text-white transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}