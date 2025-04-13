import { CircleCheck } from "lucide-react";
import { GradientText } from "./GradientText";
import code from "../assets/code.jpg";
import { MainTitle } from "./MainTitle";

function WorkflowSection({ checklistItems }) {
  return (
    <>
      <MainTitle>
        Accelerate your <GradientText>coding workflow</GradientText>
      </MainTitle>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-10">
              <div className=" text-green-400 mx-6 w-10 h-10 p-2 bg-neutral-900 rounded-full flex justify-center items-center">
                <CircleCheck />
              </div>
              <div>
                <h5 className="text-xl mt-1.5 mb-2">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkflowSection;
