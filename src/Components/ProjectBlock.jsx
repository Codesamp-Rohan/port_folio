import Flickering from "./Flickering";
import arrowImg from "../assets/images/arrow.png";
import cornerImg from "../assets/images/corner.png";
import { useEffect, useState } from "react";

const ProjectBlock = ({blockNumber, title, flickeringChars, description, buttonText, imageSrc, buttonLink}) => {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const flickerEffect = () => {
            const randomOpacity = Math.random() * 0.5 + 0.5; // Generate opacity between 0.5 and 1
            setOpacity(randomOpacity);
          };
      
          const interval = setInterval(flickerEffect, Math.random() * 300 + 200); // Change every 200-500ms
          return () => clearInterval(interval);
    }, [])

    return(
        <>
        <div className="h-[50vh] m-[1rem] p-[2rem] flex justify-between relative">
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0 opacity-50" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
            <div className="w-[20vw]">
                <p className="text-[#777] text-[14px]">[<span className="main-font">{blockNumber}</span>]</p>
            </div>
            <div className="w-[30vw] flex flex-col justify-around">
                <h1 className="text-[2.8rem]"><Flickering initial={"D"}
              chars={flickeringChars}
              mainPause={"1600"}
              subPause={"400"}/>{title}</h1>
                <span className="flex flex-col items-start gap-[1rem]">
                <p className="text-[12px] text-[#777] w-[80%]">{description}</p>
                <button type="button" className="flex gap-1 items-center text-[14px]" to={buttonLink}><img src={arrowImg} className="w-[10px]" />{buttonText}</button>
                </span>
            </div>
            <div className="w-[35vw] overflow-hidden flex items-center justify-center">
                <img data-scroll data-scroll-speed="0.1" src={imageSrc} alt="img" className="w-[35vw] overflow-hidden object-cover" />
                </div>
        </div>
            <div className="w-full h-[0.5px] bg-[#333]"></div>
            </>
    )
}

export default ProjectBlock;