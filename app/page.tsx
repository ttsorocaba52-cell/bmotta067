import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Universe } from "./components/Universe";
import { Audience } from "./components/Audience";
import { Platforms } from "./components/Platforms";
import { Projects } from "./components/Projects";
import { Series } from "./components/Series";
import { Opportunity } from "./components/Opportunity";
import { Formats } from "./components/Formats";
import { Segments } from "./components/Segments";
import { Philosophy } from "./components/Philosophy";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Universe />
        <Audience />
        <Platforms />
        <Projects />
        <Series />
        <Opportunity />
        <Formats />
        <Segments />
        <Philosophy />
        <Partners />
        <Contact />
      </main>
    </>
  );
}
