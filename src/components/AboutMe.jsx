import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  const [avatarUrl, setAvatarUrl] = useState('');

  // Fetch GitHub profile avatar dynamically
  useEffect(() => {
    fetch('https://api.github.com/users/Trevor-Kayeyia-Madara')
      .then((res) => res.json())
      .then((data) => setAvatarUrl(data.avatar_url));
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-5 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {/* Avatar / Image */}
      <motion.div
        className="md:w-1/3 flex justify-center"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-64 h-64 rounded-2xl bg-[#1C1E2A] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden hover:shadow-[0_0_30px_#00FFA3] transition duration-500">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="Trevor Madara"
              className="rounded-2xl w-full h-full object-cover"
            />
          )}
        </div>
      </motion.div>

      {/* About Text */}
      <motion.div
        className="md:w-2/3 text-gray-300"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white relative before:absolute before:-bottom-2 before:left-0 before:w-24 before:h-1 before:bg-[#00FFA3] before:rounded-full">
          About Me
        </h2>

        <p className="mb-4">
          I am a <span className="text-[#00FFA3] font-semibold">Full-Stack Software Engineer</span> and 
          <span className="text-[#DC1FFF] font-semibold"> Certified Software Consultant</span> with over 4 years of experience 
          designing, developing, and deploying robust web applications. I specialize in modern tech stacks like 
          <span className="text-[#00FFA3] font-medium"> MERN</span>, 
          <span className="text-[#DC1FFF] font-medium"> Python</span>, and 
          <span className="text-[#00FFA3] font-medium"> Flutter</span>, and have experience with ERP systems such as 
          <span className="text-[#DC1FFF] font-medium"> Sage 200 Evolution</span>.
        </p>

        <p className="mb-4">
          I am the founder of <a href="https://invodtechltd.com" className="text-[#00FFA3] hover:underline">Invodtech</a>, 
          where I lead SaaS development and cybersecurity initiatives, transforming corporate visions into 
          scalable digital solutions.
        </p>

        <p>
          Passionate about building products that combine <span className="text-[#00FFA3] font-medium">functionality</span>, 
          <span className="text-[#DC1FFF] font-medium"> security</span>, and 
          <span className="text-[#00FFA3] font-medium"> user experience</span>, I enjoy mentoring teams, automating workflows, 
          and exploring new technologies to solve real-world problems.
        </p>
      </motion.div>
    </section>
  );
}