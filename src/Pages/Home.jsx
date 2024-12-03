import Flickering from "../Components/Flickering";

const Home = () => {
  return (
    <div className="w-full h-[200vh]">
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
            <span className="main-font">I</span>nterested in{" "}
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
    </div>
  );
};

export default Home;
