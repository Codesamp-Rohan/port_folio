import { Link, useLocation, useNavigate } from "react-router-dom";
import cornerImg from "../assets/images/corner.png";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = ({setLoading}) => {

    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const [nextPath, setNextPath] = useState("/about");
    const [nextText, setNextText] = useState("About Me");

    useEffect(() => {
      switch (currentPath) {
        case "/":
          setNextPath("/about");
          setNextText("About Me");
          break;
        case "/about":
          setNextPath("/services");
          setNextText("Services");
          break;
        case "/services":
          setNextPath("/projects");
          setNextText("Projects");
          break;
        case "/projects":
          setNextPath("/contact");
          setNextText("Contact");
          break;
        default:
          setNextPath("/");
          setNextText("Home");
      }
    }, [currentPath])

    const handleNavigation = (path) => {
        console.log("Current Path:", currentPath);
        console.log("Target Path:", path);
        if (currentPath === path) return;
        setLoading(true);
        navigate(path);
        setLoading(false);
      };

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
    
      

    return(
        <>
        <div className="flex flex-col lg:flex-row justify-between items-start mx-6 py-14 my-10 border-y-[0.1px] border-y-[#333]">
          <div className="flex flex-row justify-between items-start w-[100%] lg:w-[60%]">
            <div className="flex flex-col">
                <p className="text-[14px] mb-[16px] text-[#777]">Site Links</p>
                <ul className="text-[12px] text-[#777]">
                <li className={currentPath === "/" ? "active" : "button"}>
            <button onClick={() => handleNavigation("/")}>Home,</button>
          </li>
          <li className={currentPath === "/about" ? "active" : "button"}>
            <button onClick={() => handleNavigation("/about")}>About,</button>
          </li>
          <li className={currentPath === "/services" ? "active" : "button"}>
            <button onClick={() => handleNavigation("/services")}>
              Services,
            </button>
          </li>
          <li className={currentPath === "/projects" ? "active" : "button"}>
            <button onClick={() => handleNavigation("/projects")}> Projects </button>
          </li>
          <li className={currentPath === "/contact" ? "active" : "button"}>
            {/* <button onClick={() => handleNavigation("/contact")}> Contact </button> */}
            <a href={`mailto:rohanchaudhary.bkbiet2022@gmail.com`}> Contact </a>
          </li>
                    <li className="text-[#fff]">Free discovery call</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <p className="text-[14px] mb-[16px] text-[#777]">Services Links</p>
                <ul className="text-[12px] text-[#777]">
                    <li className="button">Website Development</li>
                    <li className="button">P2P App Development</li>
                    <li className="button">App Development</li>
                    <li className="button">Designing</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <p className="text-[14px] mb-[16px] text-[#777]">Other Links</p>
                <ul className="text-[12px] text-[#fff]">
                    <li className="button">Linkedin</li>
                    <li className="button">Twitter</li>
                    <li className="button">Instagram</li>
                    <li className="button" mailto="rohanchaudhary.bkbiet2022@gmail.com">Mail</li>
                </ul>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[100%] lg:w-[30%] my-4 lg:my-0 relative button rounded-md">
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0 opacity-50" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
            <img src={cornerImg} style={{opacity}} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
                <p className="text-[14px] mb-[16px] text-[#777]">Site Links</p>
                <button className="main-font text-[3rem]" onClick={() => handleNavigation(nextPath)}>{nextText}</button>
            </div>
        </div>
        <div className="flex justify-between text-[12px] mx-6 mb-6">
            <h1>@2024 Rohan Chaudhary. No rights reserved.😀</h1>
            <p className="text-[#777]">Neither Privacy nor Terms & Conditions</p>
        </div>
        </>
    )
}

export default Footer;