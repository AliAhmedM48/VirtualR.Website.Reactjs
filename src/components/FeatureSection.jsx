import { hover, motion } from "framer-motion";
import { GradientText } from "./GradientText";
import { MainTitle } from "./MainTitle";
import PropTypes from "prop-types";
import { useState } from "react";

function FeatureSection({ features }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        id="Features"
        className="relative border-b border-neutral-800 min-h-[800px]"
      >
        <div className="text-center flex flex-col justify-center items-center space-y-20 ">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            feature
          </span>

          <MainTitle
            defaultText={
              <>
                Easily build <GradientText>your code</GradientText>
              </>
            }
            hoverText={
              <>
                <GradientText>Easily build</GradientText> your code
              </>
            }
          />
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3"
                initial={{ opacity: 0, y: 50, x: index > 2 ? 50 : -50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: { duration: 1.5, ease: "easeOut" },
                }}
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
                whileHover={"hover"}
                viewport={{
                  once: false,
                  amount: "0.5",
                  margin: "-200px",
                }}
              >
                <div className="flex">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <motion.h5
                      className="mt-1 mb-6 text-xl"
                      variants={{
                        hover: { color: "#f97316" }, // orange-500
                      }}
                    >
                      {feature.text}
                    </motion.h5>
                    <motion.p
                      className="text-md p-2 mb-20 text-neutral-500"
                      variants={{
                        hover: { color: "white" }, // orange-500
                      }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FeatureSection;

FeatureSection.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      text: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
