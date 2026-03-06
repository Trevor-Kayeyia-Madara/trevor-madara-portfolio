import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Ruby',
    'SQL',
    'Java',
    'Kotlin',
    'Dart',
    'HTML',
    'CSS',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'Flask',
    'Ruby on Rails',
    'Flutter',
    'NestJS',
    'MongoDB',
    'MySQL',
    'Git',
    'GitHub',
    'Sage 200 Evolution',
    'SQL Server',
    'PostgreSQL',
    'RESTful APIs',
    'Responsive Design',
    'Agile/Scrum',
    'CI/CD',
    'Penetration Testing',
    'Vulnerability Scanning',
    'OWASP',
  ];

  return (
    <section
      id="skills"
      className="py-24 px-5 max-w-5xl mx-auto scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-indigo-500 before:rounded-full">
        Skills & Expertise
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg text-center font-medium cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}