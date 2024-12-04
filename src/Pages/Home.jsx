import Flickering from "../Components/Flickering";
import ProjectBlock from "../Components/ProjectBlock";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[100vh] flex items-start">
        {/* <img className="myPic" src={myPic} alt="my-image" /> */}
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
      {/*  */}
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
              <button type="button" className="uppercase">Services</button>
              <button type="button" className="uppercase">Book a free discovery call</button>
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
    imageSrc: "https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg",
    buttonLink: "/web-development"
  },
  {
    blockNumber: "02",
    title: "obile Apps",
    flickeringChars: ["M", "*", "~"],
    description: "Develop seamless mobile applications for iOS and Android platforms. Develop seamless mobile applications for iOS and Android platforms. Develop seamless mobile applications for iOS and Android platforms. ",
    buttonText: "App Development",
    imageSrc: "https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg",
    buttonLink: "/mobile-apps"
  },
  {
    blockNumber: "03",
    title: "raphic Design",
    flickeringChars: ["G", "$", "!"],
    description: "Craft stunning visuals and designs to bring your ideas to life. Craft stunning visuals and designs to bring your ideas to life. Craft stunning visuals and designs to bring your ideas to life.Craft stunning visuals and designs to bring your ideas to life.",
    buttonText: "Graphic Design",
    imageSrc: "https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg",
    buttonLink: "/graphic-design"
  }
];
