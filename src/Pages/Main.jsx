import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Technologies from "../Components/Technologies";
import Partners from "../Components/Partners";
export default function Main() {
  return (
    <section className="w-[95%] h-max mx-auto">
      <Experience />
      <Technologies />
      <Skills />
      <Projects />
      <Contact />
      <Partners />
    </section>
  );
}
