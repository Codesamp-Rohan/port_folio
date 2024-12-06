import Flickering from "./Flickering"
import logo from "../assets/images/myClone.png";
import cornerImg from "../assets/images/corner.png";
import { useEffect, useState } from "react";


const WorkTogether = () => {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const flickerEffect = () => {
            const randomOpacity = Math.random() * 0.5 + 0.5; // Generate opacity between 0.5 and 1
            setOpacity(randomOpacity);
          };
      
          const interval = setInterval(flickerEffect, Math.random() * 300 + 200); // Change every 200-500ms
          return () => clearInterval(interval);
    }, [])

    return (
        <div className="h-[80vh] m-[1rem] relative">
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0 opacity-50" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
            <div className="text-[4rem] flex justify-center items-center">
            <h1>Let's {" "}
                <Flickering initial={"W"}
              chars={["W", "@", "%"]}
              mainPause={"1600"}
              subPause={"400"}/>
                ork</h1>
                <img src={logo} className="w-[20%]" />
            <h1>
            <Flickering initial={"T"}
              chars={["T", "@", "%"]}
              mainPause={"1600"}
              subPause={"400"} />
            ogether
            </h1>
            </div>
            <div>
                <button type="button"></button>
                <button type="button"></button>
            </div>
        </div>
    )
}

export default WorkTogether;