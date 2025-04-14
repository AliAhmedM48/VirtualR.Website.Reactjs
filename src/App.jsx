import { useEffect, useState } from "react";

import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import WorkflowSection from "./components/WorkflowSection";
import brainSymbol from "./brain.svg";
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
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // useEffect(() => {
  //   document.body.classList.add("overflow-hidden");

  //   const timer1 = setTimeout(() => {
  //     setFadeOut(true); // Start fade out
  //   }, 4000); // 4s animation done

  //   const timer2 = setTimeout(() => {
  //     setIsLoading(false); // Remove after fade
  //     document.body.classList.remove("overflow-hidden");
  //   }, 4500);

  //   return () => {
  //     clearTimeout(timer1);
  //     clearTimeout(timer2);
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, []);

  return (
    <>
      {/* {isLoading && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center bg-black transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={brainSymbol}
            className="w-[300px] h-auto animate-fade-in"
            alt="Splash Logo"
          />
        </div>
      )} */}

      <>
        <Navbar />
        <div className="max-w-7xl pb-10 mx-auto px-6 flex flex-col items-center jucstify-center space-y-20">
          <img
            src={brainSymbol}
            className="w-7xl h-auto animate-fade-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 -z-20 opacity-10"
            alt="Splash Logo"
          />
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
    </>
  );
}

export default App;
