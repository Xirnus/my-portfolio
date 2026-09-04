import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'; 

export default function App() {
  return (
    <main>
      <div>
        <Hero/>
      </div>
      <Projects/>
      <Skills/>
    </main>
  );
}