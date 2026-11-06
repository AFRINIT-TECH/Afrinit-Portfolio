import {
  Hero,
  CapabilityStrip,
  Services,
  Work,
  Process,
  About,
  Team,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <CapabilityStrip />
      <Services />
      <Work />
      <Process />
      <About />
      <Team />
      <Contact />
    </main>
  );
}
