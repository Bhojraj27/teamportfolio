import { Contact } from "@/components/Contact";
import { EngagementModels } from "@/components/EngagementModels";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProductLifecycle } from "@/components/ProductLifecycle";
import { Projects } from "@/components/Projects";
import { RemoteWork } from "@/components/RemoteWork";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { TechStack } from "@/components/TechStack";
import { TrustBar } from "@/components/TrustBar";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <TechStack />
      <ProductLifecycle />
      <Projects />
      <Team />
      <WhyUs />
      <RemoteWork />
      <Process />
      <EngagementModels />
      <FAQ />
      <Contact />
    </>
  );
}
