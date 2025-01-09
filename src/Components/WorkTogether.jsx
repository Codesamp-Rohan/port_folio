import Flickering from "./Flickering";
import logo from "../assets/images/myClone.png";
import cornerImg from "../assets/images/corner.png";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkTogether = () => {
  const [opacity, setOpacity] = useState(1);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Combine animations for smoother performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    tl.to(".scrollLeft", { left: "30%", top: "40%", opacity: 1, ease: "power1.inOut" })
      .to(".scrollUp", { left: "50%", top: "50%", opacity: 1, ease: "power1.inOut" }, "-=0.5")
      .to(".scrollRight", { left: "70%", top: "60%", opacity: 1, ease: "power1.inOut" }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const flickerEffect = () => {
      setOpacity(Math.random() * 0.5 + 0.5); // Generate opacity between 0.5 and 1
    };

    const interval = setInterval(flickerEffect, 300); // Fixed interval for consistent performance
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[96vh] m-[1rem] relative scroll-container">
      {/* Add will-change for performance optimization */}
      <img
        src={cornerImg}
        style={{ opacity, willChange: "opacity" }}
        className="w-[14px] h-[14px] absolute top-0 left-0 opacity-50"
      />
      <img
        src={cornerImg}
        style={{ opacity, willChange: "opacity" }}
        className="w-[14px] h-[14px] absolute bottom-0 left-0 rotate-[-90deg]"
      />
      <img
        src={cornerImg}
        style={{ opacity, willChange: "opacity" }}
        className="w-[14px] h-[14px] absolute top-0 right-0 rotate-90"
      />
      <img
        src={cornerImg}
        style={{ opacity, willChange: "opacity" }}
        className="w-[14px] h-[14px] absolute bottom-0 right-0 rotate-180"
      />
      <div className="text-[3rem] md:text-[4rem] flex justify-center items-center h-[90%]">
        <h1 className="scrollLeft absolute z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0">
          Let's{" "}
          <Flickering initial={"W"} chars={["W", "@", "%"]} mainPause={"1600"} subPause={"400"} />
          ork
        </h1>
        <img
          src={logo}
          className="scrollUp w-[60%] lg:w-[20%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0"
        />
        <h1 className="scrollRight absolute z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0">
          <Flickering initial={"T"} chars={["T", "@", "%"]} mainPause={"1600"} subPause={"400"} />
          ogether
        </h1>
      </div>
      <div className="flex justify-between mx-2 md:mx-[6rem]">
        <button type="button" className="button px-4 py-2">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default WorkTogether;
