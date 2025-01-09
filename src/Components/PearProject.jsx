import Flickering from "./Flickering";
import arrowImg from "../assets/images/arrow.png";
import cornerImg from "../assets/images/corner.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PearProject = ({blockNumber, title, flickeringChars, description, buttonText, imageSrc, buttonLink}) => {

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
        <div className={`h-[90vh] md:h-[70vh] m-[1rem] py-[2rem] flex justify-between flex-col ${blockNumber % 2 === 0 ? `md:flex-row` : `md:flex-row-reverse`} relative gap-10`}>
            <div className="w-full md:w-[50vw] flex flex-col justify-around relative px-[2rem]">
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0 opacity-50" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
                <h1 className="text-[1.6rem] lg:text-[2rem]"><Flickering initial={"D"}
              chars={flickeringChars}
              mainPause={"1600"}
              subPause={"400"}/>{title}</h1>
                <span className="flex flex-col items-start gap-[1rem]">
                <p className="text-[16px] 2xl:text-[20px] text-[#777] w-[100%] text-justify">{description}</p>
                <Link target="_blank" type="button" className="flex gap-1 items-center text-[18px] button" to={buttonLink}><img src={arrowImg} className="w-[10px]" />{buttonText}</Link>
                </span>
            </div>
            <div className="w-full md:w-[50vw] overflow-hidden flex items-center justify-center">
                <img data-scroll data-scroll-speed="0.1" src={imageSrc} alt="img" className="w-[100%] md:w-[50vw] overflow-hidden object-cover" />
            </div>
        </div>
            <div className="w-full h-[0.5px] bg-[#333]"></div>
            </>
    )
}

export default PearProject;