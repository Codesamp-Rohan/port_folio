import cornerImg from "../assets/images/corner.png";

import blogMockupImg from "../assets/images/blogMockup.png";
import holesailMockupImg from "../assets/images/holesailMockup.png";
import sibiroMockupImg from "../assets/images/sibiroMockup.png";
import docyardMockupImg from "../assets/images/docyardMockup.png";
import deployMockupImg from "../assets/images/deployMockup.png";
import gpuMockupImg from "../assets/images/GPUMockup.png";
import P2PTextMockupImg from "../assets/images/P2PTextMockup.png";
import P2PTaskMockupImg from "../assets/images/P2PTask.png";
import holesailGoImg from "../assets/images/goMockup.png";
import P2PImg from "../assets/images/P2P.png";
import { Link } from "react-router-dom";

const ProjectList = () => {
    return(
        <div className="flex flex-col items-center md:items-none gap-4 lg:gap-[10rem] my-[10rem]">
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-10 mx-3">
                <div className="flex flex-col gap-4 lg:gap-0">
                    <Link to={`https://sibiro.ru`} target="_blank" className="relative w-[100%] md:w-[48%]">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development, Website Design</p>
                            <img className="h-[30vh] lg:h-[20vh] xl:h-[30vh] object-cover" src={sibiroMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Sibiro.ru</h1>
                            <p className="text-[11px] text-[#666] text-left">Sibiro.ru is a Russian-based furniture business specializing in high-quality, stylish, and functional furniture. They focus on delivering exceptional craftsmanship and innovative designs to enhance living and working spaces.</p>
                        </div>
                    </Link>
                    <Link to={`https://codesamp-rohan.github.io/blog-portfolio`} target="_blank" className="relative w-[100%] flex justify-end">
                        <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] w-[100%] md:w-[48%] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development</p>
                            <img className="h-[30vh] lg:h-[20vh] xl:h-[30vh] object-cover" src={blogMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Personal Blog Portfolio</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link to={`https://holesail.io`} target="_blank" className="relative w-[100%] h-[100%]">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development</p>
                            <img className="h-[30vh] md:h-[60vh] object-cover" src={holesailMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Holesail.io</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-[98%] flex flex-col lg:flex-row-reverse justify-between gap-4 lg:gap-10 mx-3">
                <div className="flex flex-col gap-4">
                    <Link to={`https://codesamp-rohan.github.io/deploy-clone/`} target="_blank"  className="relative w-[100%] md:w-[48%]">
                        <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Awwwards Clone</p>
                            <img className="h-[30vh] lg:h-[20vh] xl:h-[30vh] object-cover" src={deployMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Deploy Clone</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </Link>
                    <Link to={`https://docyard.co.in`} target="_blank" className="relative w-[100%] flex justify-end">
                    <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] w-[100%] md:w-[48%] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Frontend Development</p>
                            <img className="h-[30vh] lg:h-[20vh] xl:h-[30vh] object-cover" src={docyardMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Docyard.co.in</h1>
                            <p className="text-[11px] text-[#666] text-left">Docyard is a leading agency specializing in efficient document management and collaboration. It offers secure, user-friendly tools for storing, editing, and sharing documents, streamlining workflows for teams. Tailored for various industries, Docyard enhances productivity and ensures seamless teamwork.</p>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link to={`https://codesamp-rohan.github.io/hyperspace`} target="_blank" className="relative h-[100%]">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development, Design</p>
                            <img className="h-[30vh] md:h-[60vh] object-cover" src={gpuMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Hyperspace</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-[98%] flex flex-col lg:flex-row-reverse justify-between gap-4 lg:gap-10 mx-3">
                <div className="flex flex-col gap-4">
                    <Link to={`https://github.com/codesamp-rohan/swarmchat`} target="_blank" data-scroll data-scroll-speed="0.1" className="relative w-[100%] flex justify-end">
                        <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] w-[100%] md:w-[68%] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">P2P App Development</p>
                            <img className="h-[30vh] lg:h-[20vh] xl:h-[40vh] object-cover" src={P2PTextMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">swarmchat</h1>
                            <p className="text-[11px] text-[#666] text-left">P2P Text App is a decentralized chat platform built using Holepunch, Hyperswarm, and web technologies. It goes beyond messaging with features like audio sharing, polls, a whiteboard, and weather updates. Designed for seamless and secure peer-to-peer interaction, it showcases Rohan's innovative approach to P2P networking.</p>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link to={`https://github.com/Codesamp-Rohan/P2P-TaskManager`} target="_blank" className="relative h-[100%]">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">P2P App Development</p>
                            <img className="h-[30vh] md:h-[60vh] object-cover" src={P2PTaskMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">P2P Task Manager</h1>
                            <p className="text-[11px] text-[#666] text-left">P2P Task Manager is a decentralized platform built using Holepunch, Hyperswarm, and web technologies. It enables users to create, assign, and track tasks in a secure peer-to-peer environment. With innovative features and seamless functionality, it reflects my expertise in building efficient P2P solutions.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-[98%] flex flex-col lg:flex-row justify-between gap-4 lg:gap-10 mx-3">
                <div className="flex flex-col gap-4">
                    <Link to={`https://github.com/Codesamp-Rohan/P2PClip`} target="_blank" data-scroll data-scroll-speed="0.1" className="relative w-[100%] flex justify-end">
                        <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] w-[100%] md:w-[68%] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">P2P App Development</p>
                            <img className="h-[30vh] lg:h-[20vh] xl:h-[40vh] object-cover" src={P2PImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">P2P Clip App</h1>
                            <p className="text-[11px] text-[#666] text-left">P2P Clip App is a decentralized clipboard-sharing platform built using Holepunch, Hyperswarm, and web technologies. It allows users to share text and data across devices securely and efficiently in a peer-to-peer environment, showcasing my innovative approach to practical P2P solutions.</p>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link to={`https://holesail.io/download/`} target="_blank" className="relative h-[100%]">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">P2P App Development</p>
                            <img className="h-[30vh] md:h-[60vh] object-cover" src={holesailGoImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Holesail-go</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail Go is a client for connecting to holesail servers. It supports scanning QR code and is available on the Play Store. Simply download the app from the Play Store, and you are good to go.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;