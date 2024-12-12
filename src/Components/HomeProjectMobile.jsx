import holesailImg from "../assets/images/holesailMockup.png";
import deployImg from "../assets/images/deployMockup.png";
import blogImg from "../assets/images/blogMockup.png";
import goImg from "../assets/images/goMockup.png";
import sibiroImg from "../assets/images/sibiro.png";
import P2PImg from "../assets/images/P2PMockup.png";

import cornerImg from "../assets/images/corner.png";

const HomeProjectMobile = ({handleNavigation}) => {
    return(
        <div className="flex flex-col mt-10 gap-4">
            <div className="flex flex-col sm:flex-row justify-around gap-4">
               <div className="bg-[#141414] p-[1rem] flex flex-col gap-2 sm:w-[48%]">
                <p className="text-[#777] text-[12px]">Website Development, P2P</p>
                <img className="h-[30vh] object-cover" src={holesailImg} alt="project-img" />
                <h1 className="text-[18px] text-[#ddd]">Holesail.io</h1>
                <p className="text-[14px] text-[#bbb] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm.</p>
                </div>
                <div className="bg-[#141414] p-[1rem] flex flex-col gap-2 sm:w-[48%]">
                    <p className="text-[#777] text-[12px]">Website Development</p>
                    <img className="h-[30vh] object-cover" src={deployImg} alt="project-img" />
                    <h1 className="text-[18px] text-[#ddd]">Deploy Clone</h1>
                    <p className="text-[14px] text-[#bbb] text-left">This deploy-clone website is a blend of my ideas and skills, showcasing projects you can explore and replicate. It’s built to share, inspire, and make collaboration seamless.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-around gap-4">
            <div className="flex items-center justify-center my-10 sm:my-0 sm:w-1/2 relative">
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0" />
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
            <button type="button" onClick={() => handleNavigation("/projects")} className="text-[2rem] flex items-center justify-center button w-[100%] h-[100%]"><span className="main-font">V</span>iew All</button>
          </div>
                <div className="bg-[#141414] p-[1rem] flex flex-col gap-2 sm:w-[48%]">
                    <p className="text-[#777] text-[12px]">Website Development, Design</p>
                    <img className="h-[30vh] object-cover" src={blogImg} alt="project-img" />
                    <h1 className="text-[18px] text-[#ddd]">Blog Portfolio</h1>
                    <p className="text-[14px] text-[#bbb] text-left">This blog-portfolio is a mix of my personal blog, where I share insights and ideas, and my portfolio, showcasing the projects I’ve worked on.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-around gap-4">
               <div className="bg-[#141414] p-[1rem] flex flex-col gap-2 sm:w-[48%]">
                <p className="text-[#777] text-[12px]">App Development, P2P, Designing</p>
                <img className="h-[30vh] object-cover" src={goImg} alt="project-img" />
                <h1 className="text-[18px] text-[#ddd]">Holesail-go</h1>
                <p className="text-[14px] text-[#bbb] text-left">Holesail-go is a platform app designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm.</p>
                </div>
                <div className="bg-[#141414] p-[1rem] flex flex-col gap-2 sm:w-[48%]">
                    <p className="text-[#777] text-[12px]">Website Development</p>
                    <img className="h-[30vh] object-cover" src={P2PImg} alt="project-img" />
                    <h1 className="text-[18px] text-[#ddd]">P2P Clip</h1>
                    <p className="text-[14px] text-[#bbb] text-left">The P2P Clip App is a lightweight, decentralized solution for seamless clipboard sharing between devices. Built using Hyperswarm, Hypercore, and Holepunch.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeProjectMobile;