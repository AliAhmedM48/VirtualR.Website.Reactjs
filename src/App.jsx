import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import WorkflowSection from "./components/WorkflowSection";
import {
  checklistItems,
  communityLinks,
  features,
  platformLinks,
  pricingOptions,
  resourcesLinks,
  testimonials,
} from "./constants";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl pb-10 mx-auto px-6 flex flex-col items-center jucstify-center space-y-20">
        <HeroSection />
        <FeatureSection features={features} />
        <WorkflowSection checklistItems={checklistItems} />
        <PricingSection pricingOptions={pricingOptions} />
        <TestimonialSection testimonials={testimonials} />
        <FooterSection
          resourcesLinks={resourcesLinks}
          platformLinks={platformLinks}
          communityLinks={communityLinks}
        />
      </div>
    </>
  );
}

export default App;
