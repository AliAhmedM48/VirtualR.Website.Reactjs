import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Button } from "./Button";
import { GradientText } from "./GradientText";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR Build Tools <GradientText> for developers</GradientText>
      </h1>
      <p className="mt-10 text-sm md:text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center space-x-3 my-10 text-xs md:text-sm lg:text-base">
        <Button bg>Start for free</Button>
        <Button>Documentation</Button>
      </div>
      <div className="flex mt-10 justify-center space-x-3">
        <video
          className="shrink-0 rounded-lg w-1/2 border border-orange-700 shadow-orange-400 my-4"
          autoPlay
          loop
          muted
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="shrink-0 rounded-lg w-1/2 border border-orange-700 shadow-orange-400 my-4"
          autoPlay
          loop
          muted
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
