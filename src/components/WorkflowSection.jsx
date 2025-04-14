import { CheckCircle, CircleCheck } from "lucide-react";
import { GradientText } from "./GradientText";
import code from "../assets/code.jpg";
import { MainTitle } from "./MainTitle";
import { motion } from "framer-motion";

function WorkflowSection({ checklistItems }) {
  return (
    <>
      <div id="Workflow">
        <MainTitle
          defaultText={
            <>
              Accelerate your <GradientText>coding workflow</GradientText>
            </>
          }
          hoverText={
            <>
              <GradientText>Accelerate your</GradientText> coding workflow
            </>
          }
        />

        <div className="flex flex-wrap justify-center">
          <motion.div
            className="p-2 w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            }}
          >
            <img src={code} alt="code" />
          </motion.div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className="flex mb-10"
                  initial={{ opacity: 0, y: 50, x: isEven ? 50 : -50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: { duration: 1.5, ease: "easeOut" },
                  }}
                  whileHover="hoverCircleCheck"
                  viewport={{ once: false, amount: "0.5", margin: "-200px" }}
                >
                  <motion.div
                    className=" text-green-400 mx-6 w-10 h-10 p-2 bg-neutral-900 rounded-full flex justify-center items-center"
                    initial={{ rotateZ: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    variants={{
                      hoverCircleCheck: {
                        rotateZ: 360,
                        scale: 1.2,
                      },
                    }}
                  >
                    <CheckCircle />
                  </motion.div>
                  <div>
                    <h5 className="text-xl mt-1.5 mb-2">{item.title}</h5>
                    <p className="text-md text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkflowSection;
