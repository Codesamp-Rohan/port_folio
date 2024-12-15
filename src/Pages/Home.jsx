import React, { useEffect, useState } from "react";
import hyperspace from "../assets/images/WebsiteDevelopment.png";
import mobile from "../assets/images/MobileDevelopment.png";
import p2p from "../assets/images/P2P.png";
import Flickering from "../Components/Flickering";
import ProjectBlockDesktop from "../Components/ProjectBlockDesktop";
import myPic from "../assets/images/mountain.jpeg";
import arrowImg from "../assets/images/arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import HomeProjectDesktop from "../Components/HomeProjectDesktop";
import HomeProjectMobile from "../Components/HomeProjectMobile";
import ProjectBlockMobile from "../Components/ProjectBlockMobile";

const Home = ({setLoading}) => {


  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
      console.log("Current Path:", currentPath);
      console.log("Target Path:", path);
      if (currentPath === path) return;
      setLoading(true);
      navigate(path);
      setLoading(false);
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 800);
      };  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll scale of myPic image
    const [scrollScale, setScrollScale] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scaleValue = 1 + scrollTop * 0.0005; // Adjust scaling factor as needed
        setScrollScale(scaleValue > 1.5 ? 1.5 : scaleValue); // Limit maximum scale to 1.5
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="w-full">
      {/* Home Section */}
      <div className="w-full h-[100vh] flex items-start">
        <div className="myPic">
        <img className="w-[100%] h-[100%] object-cover" src={myPic} alt="my-image"  style={{
            transform: `scale(${scrollScale})`,
            transition: "transform 0.1s ease-out",
          }} />
          </div>
        <p className="about-me-para">
          <b className="text-[14px] text-[#bbb]">About Me</b>
          <br />I am a passionate software developer with expertise in frontend
          development and peer-to-peer (P2P) technologies. My focus lies in
          creating intuitive and engaging user experiences, coupled with robust
          decentralized architectures. I am committed to continuous learning and
          growth in the tech domain. My technical interests include building
          user-friendly interfaces, decentralized systems, and collaborative
          tools that empower individuals and organizations alike.
        </p>
        <div className="z-[100] leading-tight text-[2rem] md:text-[3rem] xl:text-[4rem] absolute left-0 bottom-0 p-[1rem]">
          <h1>
            {/* <span className="main-font">I</span>nterested in{" "} */}
            <span className="main-font">F</span>rontend{" "}
            <Flickering
              initial={"D"}
              chars={["D", "$", "%"]}
              mainPause={"1200"}
              subPause={"200"}
            />
            evelopment,
          </h1>
          <h1>
            <span className="main-font">
              P2
              <Flickering
                initial={"P"}
                chars={["P", "*", "!"]}
                mainPause={"2200"}
                subPause={"400"}
              />
            </span>
            , <span className="main-font">W</span>ord
            <span className="main-font">P</span>ress,{" "}
            <Flickering
              initial={"&"}
              chars={["&", "$", "@"]}
              mainPause={"2200"}
              subPause={"600"}
            />{" "}
            <span className="main-font">T</span>echnology.
          </h1>
        </div>
      </div>
      {/* About and Project Section */}
      <div>
        <div className="px-[1rem] mb-[4rem]">
        <div className="z-[100] leading-tight text-[2rem] md:text-[3rem] my-[4rem] md:py-[1rem]">
          <h1>
            <span className="main-font">W</span>ebsite{" "}
            <span className="main-font"><Flickering   initial={"D"}
              chars={["D", "#", "^"]}
              mainPause={"1200"}
              subPause={"200"}/></span>evelopment,<br />
          </h1>
          <h1>
          <Flickering
              initial={"C"}
              chars={["C", "#", "^"]}
              mainPause={"1200"}
              subPause={"200"}
            />
            ode
            {" "}
            <span className="main-font">
              &
            </span>
              {" "}
            No-CODE{" "}<span className="main-font">S</span>olution.
          </h1>
          </div>
          <div className="flex justify-end">
            <span className="w-[100%] md:w-[50%]">
            <p className="text-[15px] text-[#777] text-justify px-2rem">I am a passionate software developer with expertise in frontend development and peer-to-peer (P2P) technologies. My focus lies in creating intuitive and engaging user experiences, coupled with robust decentralized architectures. I am committed to continuous learning and growth in the tech domain. My technical interests include building user-friendly interfaces, decentralized systems, and collaborative tools that empower individuals and organizations alike.</p>
            <span className="text-[10px] md:text-[14px] py-[1rem] md:p-[2rem] flex justify-start gap-[4rem]">
              <button type="button" className="uppercase flex items-center gap-2 button"><img src={arrowImg} className="w-[10px]" />Services</button>
              <button type="button" className="uppercase flex items-center gap-2 button"><img src={arrowImg} className="w-[10px]" />Book a free discovery call</button>
            </span>
            </span>
          </div>
        </div>
      </div>
      {/* Project Section */}
      {projectData.map((data, index) => {
        return(
          isMobile ? <ProjectBlockMobile key={index}
          blockNumber={data.blockNumber}
          title={data.title}
          flickeringChars={data.flickeringChars}
          description={data.description}
          buttonText={data.buttonText}
          imageSrc={data.imageSrc}
          buttonLink={data.buttonLink}/> : <ProjectBlockDesktop key={index}
          blockNumber={data.blockNumber}
          title={data.title}
          flickeringChars={data.flickeringChars}
          description={data.description}
          buttonText={data.buttonText}
          imageSrc={data.imageSrc}
          buttonLink={data.buttonLink}/>
        )
      })}
       <div className="">
        <div className="px-[1rem] mb-[4rem]">
        <div className="z-[100] leading-tight text-[2rem] md:text-[3rem] my-[4rem] md:p-[1rem]">
          <h1>
            <span className="main-font">S</span>ee my{" "}
            <span className="main-font"><Flickering   initial={"P"}
              chars={["P", "#", "^"]}
              mainPause={"1200"}
              subPause={"200"}/></span>rojects <span className="main-font">T</span>hat<br />
          </h1>
          <h1>
            impress both{" "}
          <Flickering
              initial={"C"}
              chars={["C", "#", "^"]}
              mainPause={"1200"}
              subPause={"200"}
            />
            lient
            {" "}
            <span className="main-font">
              &
            </span><br /><span className="main-font">C</span>ustomers.
          </h1>
          </div>
          <div className="flex justify-end">
            <span className="w-[100%] md:w-[50%]">
            <p className="text-[15px] text-[#777] text-justify px-2rem">My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of web design and Webflow development projects for various industries. </p>
            </span>
          </div>
          {
            isMobile ? <HomeProjectMobile handleNavigation={handleNavigation} /> : <HomeProjectDesktop handleNavigation={handleNavigation} />
          }
        </div>
      </div>
    </div>
  );
};

export default Home;

const projectData = [
  {
    blockNumber: "01",
    title: "ebsite Development",
    flickeringChars: ["W", "#", "^"],
    description: "Build high-quality websites with responsive design and user-friendly interfaces.Build high-quality websites with responsive design and user-friendly interfaces.Build high-quality websites with responsive design and user-friendly interfaces.",
    buttonText: "Web Development",
    imageSrc: hyperspace,
    buttonLink: "/web-development"
  },
  {
    blockNumber: "02",
    title: "obile Apps",
    flickeringChars: ["M", "*", "~"],
    description: "Develop seamless mobile applications for iOS and Android platforms. Develop seamless mobile applications for iOS and Android platforms. Develop seamless mobile applications for iOS and Android platforms. ",
    buttonText: "App Development",
    imageSrc: mobile,
    buttonLink: "/mobile-apps"
  },
  {
    blockNumber: "03",
    title: "2P Development",
    flickeringChars: ["P", "$", "!"],
    description: "I create innovative Peer-to-Peer (P2P) apps focusing on decentralization, privacy, and seamless user experiences. Using technologies like Hyperswarm and Hypercore, I build feature-rich platforms, blending functionality with visually appealing designs.",
    buttonText: "Graphic Design",
    imageSrc: p2p,
    buttonLink: "/graphic-design"
  }
];
