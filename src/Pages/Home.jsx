import React from "react";
import hyperspace from "../assets/images/WebsiteDevelopment.png";
import mobile from "../assets/images/MobileDevelopment.png";
import p2p from "../assets/images/P2P.png";
import Flickering from "../Components/Flickering";
import ProjectBlock from "../Components/ProjectBlock";
import cornerImg from "../assets/images/corner.png";
import WorkTogether from "../Components/WorkTogether";
import myPic from "../assets/images/myPic.jpeg";
import arrowImg from "../assets/images/arrow.png";


const Home = () => {

  return (
    <div className="w-full">
      {/* Home Section */}
      <div className="w-full h-[100vh] flex items-start">
        <img data-scroll data-scroll-speed="0.5" className="myPic" src={myPic} alt="my-image" />
        <p className="about-me-para">
          <b className="text-[14px] text-[#777]">About Me</b>
          <br />I am a passionate software developer with expertise in frontend
          development and peer-to-peer (P2P) technologies. My focus lies in
          creating intuitive and engaging user experiences, coupled with robust
          decentralized architectures. I am committed to continuous learning and
          growth in the tech domain. My technical interests include building
          user-friendly interfaces, decentralized systems, and collaborative
          tools that empower individuals and organizations alike.
        </p>
        <div className="z-[100] leading-tight text-[4rem] absolute left-0 bottom-0 p-[1rem]">
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
      <div className="">
        <div className="pr-[4rem] mb-[4rem]">
        <div className="z-[100] leading-tight text-[3rem] my-[4rem] p-[1rem]">
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
            <span className="w-[50%]">
            <p className="text-[15px] text-[#777] text-justify px-2rem">I am a passionate software developer with expertise in frontend development and peer-to-peer (P2P) technologies. My focus lies in creating intuitive and engaging user experiences, coupled with robust decentralized architectures. I am committed to continuous learning and growth in the tech domain. My technical interests include building user-friendly interfaces, decentralized systems, and collaborative tools that empower individuals and organizations alike.</p>
            <span className="p-[2rem] flex justify-start gap-[4rem]">
              <button type="button" className="uppercase flex items-center gap-2"><img src={arrowImg} className="w-[10px]" />Services</button>
              <button type="button" className="uppercase flex items-center gap-2"><img src={arrowImg} className="w-[10px]" />Book a free discovery call</button>
            </span>
            </span>
          </div>
        </div>
      </div>
      {projectData.map((data, index) => {
        return(
      <ProjectBlock key={index}
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
        <div className="z-[100] leading-tight text-[3rem] my-[4rem] p-[1rem]">
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
            <span className="w-[50%]">
            <p className="text-[15px] text-[#777] text-justify px-2rem">My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of web design and Webflow development projects for various industries. </p>
            </span>
          </div>
          <div className="flex-1 flex justify-between h-[90vh] my-[6rem] gap-4">
            <div className="w-full relative h-full">
            <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                <p className="text-[#777] text-[12px]">Website Development</p>
                <img className="h-[20vh] object-cover" src="https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg" alt="project-img" />
                <h1 className="text-[18px] text-[#ddd]">Project Name</h1>
                <p className="text-[11px] text-[#666] text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus, eveniet ad eligendi accusantium nobis quis facilis modi. Distinctio unde neque dolorum incidunt cupiditate laudantium nihil odio facilis mollitia corrupti?</p>
              </div>
              <div className="flex items-center justify-center h-1/2 relative mt-10">
                   <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0" />
                   <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
                   <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
                   <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
                <button type="button" className="text-[2rem] flex items-center justify-center"><span className="main-font">V</span>iew All</button>
              </div>
            </div>
            <div className="w-full relative h-full pb-[4rem] flex flex-col justify-end">
              <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] p-[1rem] flex flex-col gap-2 absolute">
                <p className="text-[#777] text-[12px]">Website Development</p>
                <img className="h-[20vh] object-cover" src="https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg" alt="project-img" />
                <h1 className="text-[18px] text-[#ddd]">Project Name</h1>
                <p className="text-[11px] text-[#666] text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus, eveniet ad eligendi accusantium nobis quis facilis modi. Distinctio unde neque dolorum incidunt cupiditate laudantium nihil odio facilis mollitia corrupti?</p>
              </div>
            </div>
            <div className="w-full relative h-full pt-[4rem]">
            <div data-scroll data-scroll-speed="-0.2" className="bg-[#141414] p-[1rem] flex flex-col gap-2 absolute">
                <p className="text-[#777] text-[12px]">Website Development</p>
                <img className="h-[20vh] object-cover" src="https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg" alt="project-img" />
                <h1 className="text-[18px] text-[#ddd]">Project Name</h1>
                <p className="text-[11px] text-[#666] text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus, eveniet ad eligendi accusantium nobis quis facilis modi. Distinctio unde neque dolorum incidunt cupiditate laudantium nihil odio facilis mollitia corrupti?</p>
              </div>
            </div>
            <div className="w-full relative h-full flex flex-col gap-10">
            <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                <p className="text-[#777] text-[12px]">Website Development</p>
                <img className="h-[20vh] object-cover" src="https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg" alt="project-img" />
                <h1 className="text-[18px] text-[#ddd]">Project Name</h1>
                <p className="text-[11px] text-[#666] text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus, eveniet ad eligendi accusantium nobis quis facilis modi. Distinctio unde neque dolorum incidunt cupiditate laudantium nihil odio facilis mollitia corrupti?</p>
              </div>
              <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                <p className="text-[#777] text-[12px]">Website Development</p>
                <img className="h-[20vh] object-cover" src="https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg" alt="project-img" />
                <h1 className="text-[18px] text-[#ddd]">Project Name</h1>
                <p className="text-[11px] text-[#666] text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus, eveniet ad eligendi accusantium nobis quis facilis modi. Distinctio unde neque dolorum incidunt cupiditate laudantium nihil odio facilis mollitia corrupti?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkTogether />
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
    description: "Craft stunning visuals and designs to bring your ideas to life. Craft stunning visuals and designs to bring your ideas to life. Craft stunning visuals and designs to bring your ideas to life.Craft stunning visuals and designs to bring your ideas to life.",
    buttonText: "Graphic Design",
    imageSrc: p2p,
    buttonLink: "/graphic-design"
  }
];
