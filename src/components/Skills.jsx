import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Ruby', 'SQL', 'Java', 'Kotlin', 'Dart', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Ruby on Rails', 'Flutter', 'NestJS'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Sage 200 Evolution', 'SQL Server'],
  },
  {
    title: 'Cybersecurity',
    skills: ['Penetration Testing', 'Vulnerability Scanning', 'OWASP', 'DMARC Policies', 'Audit Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 max-w-6xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-[#00FFA3] before:rounded-full">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#00FFA3]">{category.title}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, j) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(0,255,163,0.6)' }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 bg-[#1C1E2A] text-white rounded-xl text-center font-medium cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}