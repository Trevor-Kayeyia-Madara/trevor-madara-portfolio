import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just show success
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-20 px-5 max-w-4xl mx-auto scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-[#00FFA3] before:rounded-full">
        Contact
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="px-4 py-3 bg-[#1C1E2A] border border-[#2A2C38] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00FFA3] transition"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="px-4 py-3 bg-[#1C1E2A] border border-[#2A2C38] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00FFA3] transition"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          className="px-4 py-3 bg-[#1C1E2A] border border-[#2A2C38] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00FFA3] transition"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-br from-[#00FFA3] to-[#DC1FFF] text-white rounded-xl shadow-[0_0_20px_rgba(0,255,163,0.45)] hover:scale-105 animate-pulse-button transition font-medium"
        >
          Send Message
        </button>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 font-medium mt-2"
          >
            Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}