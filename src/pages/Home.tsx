import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { About } from "../sections/About";
import { Resume } from "../sections/Resume";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
