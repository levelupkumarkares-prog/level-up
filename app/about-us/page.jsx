import AboutSection from "@/layouts/about/AboutSection";
import CapitalConsultingPhilosophy from "@/layouts/about/CapitalConsultingPhilosophy";
import MissionAndValues from "@/layouts/about/MissionAndValues";
import SelfSection from "@/layouts/about/SelfSection";
import SMESection from "@/layouts/about/SMESection";
import WhoWeServeSection from "@/layouts/about/WhoWeServeSection";
 

const page = () => {
  return (
    <>
      <AboutSection />
      <SelfSection />
      <SMESection />
      <WhoWeServeSection />
      <CapitalConsultingPhilosophy/>
      <MissionAndValues/>
    </>
  );
};

export default page;
