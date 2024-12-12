import Flickering from "./Flickering";
import arrowImg from "../assets/images/arrow.png";
import cornerImg from "../assets/images/corner.png";

import { useEffect, useState } from "react";

const ProjectBlockMobile = ({blockNumber, title, flickeringChars, description, buttonText, imageSrc, buttonLink}) => {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const flickerEffect = () => {
            const randomOpacity = Math.random() * 0.5 + 0.5;
            setOpacity(randomOpacity);
          };
      
          const interval = setInterval(flickerEffect, Math.random() * 300 + 200);
          return () => clearInterval(interval);
    }, [])

    return(
        <div className="m-[1rem] p-[1rem] flex flex-col justify-between relative">
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0 opacity-50" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
            <div className="flex justify-between py-4">
                <p className="text-[#bbb] text-[14px]">[<span className="main-font">{blockNumber}</span>]</p>
                <h1 className="text-[1rem]"><Flickering initial={"D"}
              chars={flickeringChars}
              mainPause={"1600"}
              subPause={"400"}/>{title}</h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col items-start gap-[1rem]">
                <p className="text-[12px] text-[#777] text-justify sm:w-[80%]">{description}</p>
                <button type="button" className="flex gap-1 items-center text-[14px] button" to={buttonLink}><img src={arrowImg} className="w-[10px]" />{buttonText}</button>
                </div>
                <div className="w-[100%] overflow-hidden flex items-center justify-center">
                <img data-scroll data-scroll-speed="0.1" src={imageSrc} alt="img" className="overflow-hidden object-cover" />
                </div>
            </div>
        </div>
    )
}

export default ProjectBlockMobile;