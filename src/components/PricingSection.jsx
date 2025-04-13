import PropTypes from "prop-types";
import { GradientText } from "./GradientText";
import { CheckCircle } from "lucide-react";
import { Button } from "./Button";
import { MainTitle } from "./MainTitle";

function PricingSection({ pricingOptions }) {
  return (
    <>
      <MainTitle>Pricing</MainTitle>

      <div className="flex flex-wrap w-full">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title == "Pro" && (
                  <GradientText className="text-xl ml-2">
                    (Most Popular)
                  </GradientText>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/ Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="inline-flex w-full h-12 p-5 mt-20 tracking-tight text-xl">
                Subscribe
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PricingSection;

PricingSection.propTypes = {
  pricingOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
