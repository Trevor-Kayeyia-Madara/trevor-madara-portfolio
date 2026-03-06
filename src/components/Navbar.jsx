import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => document.querySelector(l.href));
      const scrollY = window.scrollY + 100;
      sections.forEach((sec, idx) => {
        if (sec.offsetTop <= scrollY && sec.offsetTop + sec.offsetHeight > scrollY) {
          setActive(links[idx].href.slice(1));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-[#0F111A]/80 backdrop-blur-md px-5 py-4 flex justify-between items-center shadow-md">
      <div className="text-white text-2xl font-bold">Trevor M.</div>

      <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
        {links.map((link) => (
          <li key={link.name} className="relative">
            <a
              href={link.href}
              className={`transition-colors hover:text-[#00FFA3] ${active === link.href.slice(1) ? 'text-[#00FFA3]' : ''}`}
            >
              {link.name}
            </a>
            {/* Underline animation */}
            <motion.div
              layoutId="underline"
              className={`absolute bottom-0 left-0 h-1 bg-[#00FFA3] rounded-full`}
              style={{
                width: active === link.href.slice(1) ? '100%' : 0
              }}
            />
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-[#00FFA3] text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#1C1E2A] flex flex-col gap-4 p-5 md:hidden"
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-white text-lg hover:text-[#00FFA3] transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}