import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;