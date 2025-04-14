import { hover, motion } from "framer-motion";
import { GradientText } from "./GradientText";
import { MainTitle } from "./MainTitle";

function TestimonialSection({ testimonials }) {
  return (
    <>
      <div id="Testimonials" className="">
        {/* <MainTitle className="mb-20">What People are saying</MainTitle> */}
        <MainTitle
          defaultText={
            <>
              What People <GradientText>are saying</GradientText>
            </>
          }
          hoverText={
            <>
              <GradientText>What People</GradientText> are saying
            </>
          }
          className="mb-20"
        />

        <div className="flex flex-wrap">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={index}
                className="p-2 w-full md:w-1/2 lg:w-1/3"
                whileInView="inView"
                whileHover="hover"
                viewport={{ once: false, amount: 0.2 }}
                initial={{ opacity: 0, y: 50 }}
                variants={{
                  inView: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.2 },
                  },
                  hover: {
                    scale: 1.05,
                  },
                }}
              >
                <motion.div
                  className="bg-neutral border border-neutral-700 p-10 rounded-lg h-full"
                  variants={{ hover: { borderColor: "#f97316" } }}
                >
                  <div className="flex flex-col justify-between space-y-8 h-full font-light">
                    <motion.p
                      className="text-md text-neutral-400"
                      variants={{ hover: { color: "white" } }}
                    >
                      {testimonial.text}
                    </motion.p>
                    <div className="flex flex-col justify-start items-start">
                      <motion.span
                        className="h-0.25 w-full mb-4 mx-auto block bg-neutral-700 rounded-full"
                        initial={{ width: "100%" }}
                        variants={{
                          hover: {
                            width: "50%",
                            backgroundColor: "#f97316",
                          },
                        }}
                      />
                      <div className="flex flex-row justify-start">
                        <motion.img
                          className="w-10 h-10  rounded-full"
                          src={testimonial.image}
                          alt={testimonial.user}
                          initial={{ scale: 1, marginRight: "10px" }}
                          transition={{ duration: 0.3 }}
                          variants={{
                            hover: {
                              scale: 2.5,
                              size: "100px",
                              marginRight: "40px",
                            },
                          }}
                        />
                        <p className="flex flex-col ">
                          <motion.span
                            className="inline-block"
                            variants={{
                              hover: { color: "#f97316" },
                            }}
                          >
                            {testimonial.user}
                          </motion.span>
                          <span className="text-neutral-400 text-sm">
                            {testimonial.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TestimonialSection;
