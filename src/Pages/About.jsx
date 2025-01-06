import { useLocation, useNavigate } from "react-router-dom";
import Flickering from "../Components/Flickering";
import arrowImg from "../assets/images/arrow.png";
import img1 from "../assets/images/myPic.jpeg";
import img2 from "../assets/images/temple.jpeg";

const About = ({setLoading}) => {

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

  return (
    <>
      <div>
            <div className="mt-[6rem] px-[1.4rem] lg:px-8">
                <h1 className="text-[1.6rem] lg:text-[2.8rem] text-[#fff] leading-[1.8rem] lg:leading-[3rem]"><Flickering initial={"A"} chars={["A", "#", "^"]} mainPause={"1200"} subPause={"200"}/>
                    bout Me — I’m Rohan, a Frontend developer passionate about building innovative, design-focused solutions. I enjoy blending creativity and technical expertise to create impactful applications.</h1>
                    <div className="flex flex-col items-end">
                    <p className="w-[100%] lg:w-[50%] text-[12px] lg:text-[16px] pt-10 text-[#777]">
                    Since my school days, I've been hooked on design, and now I specialise in crafting bespoke web and app experiences that I'm truly proud of. I'm passionate about recognising excellence in the digital design world and pushing the boundaries of creativity. <br /> <br />
                    In the past 3 years, I have worked on many projects — both small and large. My focus is on delivering tailored digital solutions, blending creativity with technical expertise to bring my clients' visions to life. With each project, I aim to exceed expectations and leave a lasting impression. 
                    </p>
                    <div className="w-[100%] lg:w-[50%] mt-10 flex gap-[4rem]">
                    <button type="button" onClick={() => handleNavigation("/projects")} className="uppercase flex items-center gap-2 button"><img src={arrowImg} className="w-[10px]" />Projects</button>
                    <a href="mailto:rohanchaudhary.bkbiet2022@gmail.com" type="button" className="uppercase flex items-center gap-2 button"><img src={arrowImg} className="w-[10px]" />Contact</a>
                    </div>
                    </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 mx-4 my-10">
              <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
                <h1 className="text-[2.4rem]">Holesail</h1>
                <p className="text-[14px] text-[#777]">P2P network tunneling software</p>
              </div>
              <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
                <h1 className="text-[2.4rem]">20+</h1>
                <p className="text-[14px] text-[#777]">Projects Completed</p>
              </div>
              <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
                <h1 className="text-[2.4rem]">3+</h1>
                <p className="text-[14px] text-[#777]">Years of Frontend experience</p>
              </div>
              <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
                <h1 className="text-[2.4rem]">❤️</h1>
                <p className="text-[14px] text-[#777]">to work on funny scale</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mx-4">
              <div className="overflow-hidden h-[70vh] w-full lg:w-1/2 relative">
              <img data-scroll src={img1} alt="image" className="h-[60vh] w-full object-cover  grayscale-[100%] blur-md hover:blur-0 transition-[300ms]" />
              </div>
              <div className="overflow-hidden h-[70vh] w-full lg:w-1/2 relative">
              <img data-scroll src={img2} alt="image" className="h-[60vh] w-full object-cover grayscale-[100%] blur-md hover:blur-0 transition-[300ms]" />
              </div>
            </div>
        </div>
    </>
  );
};

export default About;
