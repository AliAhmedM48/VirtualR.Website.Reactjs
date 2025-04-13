import { MainTitle } from "./MainTitle";

function TestimonialSection({ testimonials }) {
  return (
    <>
      <MainTitle className="mb-20">What People are saying</MainTitle>
      <div className="flex flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-2 w-full md:w-1/2 lg:w-1/3">
            <div className="bg-neutral border border-neutral-800 p-10 rounded-lg h-full">
              <div className="flex flex-col justify-between space-y-8 h-full font-light">
                <p className="text-md text-neutral-400">{testimonial.text}</p>
                <div>
                  <span className="inline-block h-0.25 w-full mb-4 bg-neutral-800 rounded-full"></span>
                  <div className="flex flex-row justify-start">
                    <img
                      className="w-10 h-10 mr-4 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.user}
                    />
                    <p className="flex flex-col ">
                      <span>{testimonial.user}</span>
                      <span className="text-neutral-400 text-sm">
                        {testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TestimonialSection;
