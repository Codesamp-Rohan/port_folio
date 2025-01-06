import { useLocation, useNavigate } from "react-router-dom";
import Flickering from "../Components/Flickering";
import arrowImg from "../assets/images/arrow.png";
import ProjectList from "../Components/ProjectList";

const Project = ({setLoading}) => {

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

    return(
        <div>
            <div className="mt-[6rem] px-[1.4rem] lg:px-8">
                <h1 className="text-[1.6rem] lg:text-[2.8rem] text-[#fff] leading-[1.8rem] lg:leading-[3rem]">My <Flickering initial={"P"} chars={["P", "#", "^"]} mainPause={"1200"} subPause={"200"}/>
                    rojects — A curated collection of my most significant work. Each project demonstrates my skills, passion, and commitment to excellence and showcases my ability to bring ideas to life through dedication and innovation. </h1>
                    <div className="flex flex-col items-end">
                    <p className="w-[100%] lg:w-[50%] text-[12px] lg:text-[16px] pt-10 text-[#777]">
                    My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of projects for various industries. Most of my projects are under no disclosure agreements which means I can only share here a few. 
                    </p>
                    <div className="w-[100%] lg:w-[50%] mt-10 flex gap-[4rem]">
                    <button type="button" onClick={() => handleNavigation("/about")} className="uppercase flex items-center gap-2 button"><img src={arrowImg} className="w-[10px]" />About</button>
                    <a href="mailto:rohanchaudhary.bkbiet2022@gmail.com" type="button" className="uppercase flex items-center gap-2 button"><img src={arrowImg} className="w-[10px]" />Contact</a>

                    </div>
                    </div>
            </div>
            <ProjectList />
        </div>
    )
}

export default Project;