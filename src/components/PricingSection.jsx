import PropTypes from "prop-types";
import { GradientText } from "./GradientText";
import { CheckCircle } from "lucide-react";
import { Button } from "./Button";
import { MainTitle } from "./MainTitle";
import { hover, motion } from "framer-motion";

function PricingSection({ pricingOptions }) {
  return (
    <>
      <div id="Pricing" className="w-full">
        <MainTitle defaultText="Pricing" enableHover={false} />

        <div className="flex flex-wrap w-full">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              className="w-full lg:w-1/3 p-2"
              whileHover="hover"
              whileInView="inview"
              viewport={{ once: true }}
            >
              <motion.div
                className="p-10 border border-neutral-700 rounded-xl "
                initial={{
                  opacity: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                variants={{
                  hover: {
                    scale: 1.05,
                    borderColor: "#f97316", // orange-500
                    transition: {
                      duration: 0.3,
                      ease: "linear",
                    },
                  },
                  inview: {
                    opacity: 1,
                    rotateY: 360,
                    transition: {
                      duration: 1,
                      delay: index * 0.4,
                      ease: "easeIn",
                    },
                    viewPort: {
                      once: true,
                    },
                  },
                }}
              >
                <motion.p
                  className="text-4xl mb-8 "
                  variants={{
                    hover: {
                      color: "#f97316", // orange-500
                    },
                  }}
                >
                  {option.title}
                  {option.title == "Pro" && (
                    <GradientText className="text-xl ml-2 ">
                      (Most Popular)
                    </GradientText>
                  )}
                </motion.p>
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2 inline-block">
                    {option.price}
                  </span>
                  <span className="text-neutral-400 tracking-tight">
                    / Month
                  </span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <motion.span variants={{ hover: { color: "#f97316" } }}>
                        <CheckCircle />
                      </motion.span>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="inline-flex w-full h-12 p-5 mt-20 tracking-tight text-xl">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
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
