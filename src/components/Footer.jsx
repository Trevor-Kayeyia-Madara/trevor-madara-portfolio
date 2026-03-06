import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Trevor-Kayeyia-Madara', color: '#00FFA3' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/trevor-madara', color: '#0A66C2' },
    { name: 'Website', url: 'https://invodtechltd.com', color: '#DC1FFF' },
  ];

  return (
    <footer className="bg-[#0F111A] py-8 mt-12">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Trevor Madara Kayeyia. All rights reserved.</p>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, textShadow: `0 0 10px ${link.color}` }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 font-medium hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}