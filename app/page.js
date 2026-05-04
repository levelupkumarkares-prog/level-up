import FAQSection from "@/components/FAQSection";
import AboutSection from "@/layouts/homepage/AboutSection";
import ApproachSection from "@/layouts/homepage/ApproachSection";
import LandingSection from "@/layouts/homepage/LandingSection";
import RealEstateSection from "@/layouts/homepage/RealEstateSection";
import ServicesOverview from "@/layouts/homepage/ServicesOverview";
import WhyChooseUsHome from "@/layouts/homepage/WhyChooseUsHome";
 

const Page = () => {
  return (
    <>
      <LandingSection />
      <AboutSection />
      <ServicesOverview />
      <RealEstateSection />
      <ApproachSection />
      <WhyChooseUsHome />
      <FAQSection />
    </>
  );
};

export default Page;
