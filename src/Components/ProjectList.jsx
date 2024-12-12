import cornerImg from "../assets/images/corner.png";

import holesailImg from "../assets/images/holesail.png";
import deployImg from "../assets/images/deployClone.png";
import blogImg from "../assets/images/blog.png";
import sibiroImg from "../assets/images/sibiro.png";
import P2PImg from "../assets/images/P2PClip.png";

import blogMockupImg from "../assets/images/blogMockup.png";
import holesailMockupImg from "../assets/images/holesailMockup.png";
import sibiroMockupImg from "../assets/images/sibiroMockup.png";
import docyardMockupImg from "../assets/images/docyardMockup.png";
import deployMockupImg from "../assets/images/deployMockup.png";

const ProjectList = () => {
    return(
        <div className="flex flex-col gap-[10rem] my-[10rem]">
            <div className="w-[100%] flex justify-between gap-10">
                <div className="flex flex-col">
                    <div className="relative w-[50%] m-3">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development, Website Design</p>
                            <img className="h-[30vh] object-cover" src={sibiroMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Sibiro.ru</h1>
                            <p className="text-[11px] text-[#666] text-left">Sibiro.ru is a Russian-based furniture business specializing in high-quality, stylish, and functional furniture. They focus on delivering exceptional craftsmanship and innovative designs to enhance living and working spaces.</p>
                        </div>
                    </div>
                    <div className="relative w-[100%] m-3 flex justify-end">
                        <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] w-[50%] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Frontend Development</p>
                            <img className="h-[30vh] object-cover" src={docyardMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Docyard.co.in</h1>
                            <p className="text-[11px] text-[#666] text-left">Docyard is a leading agency specializing in efficient document management and collaboration. It offers secure, user-friendly tools for storing, editing, and sharing documents, streamlining workflows for teams. Tailored for various industries, Docyard enhances productivity and ensures seamless teamwork.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative w-[90%] h-[100%] m-3">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development</p>
                            <img className="h-[60vh] object-cover" src={holesailMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Holesail.io</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[98%] flex flex-row-reverse justify-between gap-10">
                <div className="flex flex-col">
                    <div className="relative w-[50%] m-3">
                        <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development</p>
                            <img className="h-[30vh] object-cover" src={holesailImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Holesail.io</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </div>
                    <div className="relative w-[100%] m-3 flex justify-end">
                        <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] w-[50%] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Website Development</p>
                            <img className="h-[30vh] object-cover" src={blogMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Holesail.io</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative h-[100%] m-3">
                        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
                            <p className="text-[#777] text-[12px]">Awwwards Clone</p>
                            <img className="h-[60vh] object-cover" src={deployMockupImg} alt="project-img" />
                            <h1 className="text-[18px] text-[#ddd]">Deply Clone</h1>
                            <p className="text-[11px] text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;