import Intro from "./(components)/intro/intro.comp";
import AboutMe from "./(components)/aboutme/aboutme.comp";
import Projects from "./(components)/projects/projects.comp";

export default function App() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Projects />
    </div>
  );
}
