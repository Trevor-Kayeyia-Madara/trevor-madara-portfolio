import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Fetch GitHub repos
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
            topics: repo.topics || [],
          }));
        setProjects(featured);
      });
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section
      id="projects"
      className="py-20 px-5 max-w-6xl mx-auto scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-[#00FFA3] before:rounded-full">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {currentProjects.map((project) => (
            <motion.div
              key={project.githubUrl}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 0 30px #00FFA3' }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-[#1C1E2A] border border-gray-700 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:shadow-[0_0_30px_#00FFA3] transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description || 'No description provided'}
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FFA3] hover:underline font-medium"
                >
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC1FFF] hover:underline font-medium"
                  >
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-5 py-2 bg-[#1C1E2A] text-white rounded-lg hover:bg-[#00FFA3] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="text-white font-medium self-center">{currentPage} / {totalPages}</span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-5 py-2 bg-[#1C1E2A] text-white rounded-lg hover:bg-[#00FFA3] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}