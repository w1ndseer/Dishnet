import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { SpecialistDivision } from '../components/SpecialistDivision';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Stats } from '../components/Stats';
import { Contact } from '../components/Contact';
import { HomeSeo } from '../seo/HomeSeo';

export function Home() {
  return (
    <>
      <HomeSeo />
      <Hero />
      <Services />
      <SpecialistDivision />
      <About />
      <Projects />
      <Stats />
      <Contact />
    </>
  );
}
