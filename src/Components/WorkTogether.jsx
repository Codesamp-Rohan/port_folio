import Flickering from "./Flickering"
import logo from "../assets/images/myClone.png";
import cornerImg from "../assets/images/corner.png";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const WorkTogether = () => {

  const [opacity, setOpacity] = useState(1);

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scrollLeft", {
      scrollTrigger: {
        trigger: ".scroll-container", 
        start: "top center",          
        end: "center center",         
        scrub: true,                  
      },
      left: "30%",
      opacity: 1,
      top: "40%",
      ease: "power1.inOut",
    });
    gsap.to(".scrollUp", {
      scrollTrigger: {
        trigger: ".scroll-container", 
        start: "top center",          
        end: "center center",         
        scrub: true,                  
      },
      left: "50%",
      opacity: 1,
      top: "50%",
      ease: "power1.inOut",
    });
    gsap.to(".scrollRight", {
      scrollTrigger: {
        trigger: ".scroll-container", 
        start: "top center",          
        end: "center center",         
        scrub: true,                  
      },
      left: "70%",
      opacity: 1,
      top: "60%",
      ease: "power1.inOut",
    });


    useEffect(() => {
        const flickerEffect = () => {
            const randomOpacity = Math.random() * 0.5 + 0.5; // Generate opacity between 0.5 and 1
            setOpacity(randomOpacity);
          };
      
          const interval = setInterval(flickerEffect, Math.random() * 300 + 200); // Change every 200-500ms
          return () => clearInterval(interval);
    }, [])

    return (
        <div className="h-[96vh] m-[1rem] relative scroll-container">
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0 opacity-50" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
            <div className="text-[2rem] md:text-[4rem] flex justify-center items-center h-[90%]">
            <h1 className="scrollLeft absolute z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0">Let's {" "}
                <Flickering initial={"W"}
              chars={["W", "@", "%"]}
              mainPause={"1600"}
              subPause={"400"}/>
                ork</h1>
                <img src={logo} className="scrollUp w-[60%] lg:w-[20%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0" />
            <h1 className="scrollRight absolute z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0">
            <Flickering initial={"T"}
              chars={["T", "@", "%"]}
              mainPause={"1600"}
              subPause={"400"} />
            ogether
            </h1>
            </div>
            <div className="flex justify-between mx-2 md:mx-[6rem]">
                <button type="button" className="button">Book a free discovery call</button>
                <button type="button" className="button">Get in touch</button>
            </div>
        </div>
    )
}

export default WorkTogether;