import holesailImg from "../assets/images/holesail.png";
import deployImg from "../assets/images/deployClone.png";
import blogImg from "../assets/images/blog.png";
import sibiroImg from "../assets/images/sibiro.png";
import P2PImg from "../assets/images/P2PClip.png";

import cornerImg from "../assets/images/corner.png";

const HomeProjectDesktop = ({handleNavigation}) => {
    return(
        <div className="flex flex-col md:flex-row justify-between md:h-[90vh] my-[6rem] gap-4">
        {/* P1 */}
        <div className="w-full relative h-full flex md:flex-col">
        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
            <p className="text-[#777] md:text-[10px] xl:text-[12px]">Website Development</p>
            <img className="h-[20vh] object-cover" src={holesailImg} alt="project-img" />
            <h1 className="text-[14px] xl:text-[18px] text-[#ddd]">Holesail.io</h1>
            <p className="md:text-[8px] xl:text-[11px] md:text-[#bbb] xl:text-[#666] text-left">Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.</p>
          </div>
          <div className="flex items-center justify-center h-1/2 relative mt-10">
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 left-0" />
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 left-0 rotate-[-90deg]" />
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] top-0 right-0 rotate-90" />
               <img src={cornerImg} className="w-[14px] h-[14px] absolute animation-[300ms] bottom-0 right-0 rotate-180" />
            <button type="button" onClick={() => handleNavigation("/projects")} className="text-[2rem] flex items-center justify-center button w-[100%] h-[100%]"><span className="main-font">V</span>iew All</button>
          </div>
        </div>
        {/* P2 */}
        <div className="md:w-full relative h-full pb-[4rem] flex flex-col justify-end">
          <div data-scroll data-scroll-speed="0.2" className="bg-[#141414] p-[1rem] flex flex-col gap-2 absolute">
            <p className="text-[#777] md:text-[10px] xl:text-[12px]">Website Development</p>
            <img className="h-[20vh] object-cover" src={deployImg} alt="project-img" />
            <h1 className="md:text-[14px] xl:text-[18px] text-[#ddd]">Deploy Clone</h1>
            <p className="md:text-[8px] xl:text-[11px] md:text-[#bbb] xl:text-[#666] text-left">This deploy-clone website is a blend of my ideas and skills, showcasing projects you can explore and replicate. It’s built to share, inspire, and make collaboration seamless. Let’s connect and create something amazing!</p>
          </div>
        </div>
        {/* P3 */}
        <div className="w-full relative h-full pt-[4rem]">
        <div data-scroll data-scroll-speed="-0.2" className="bg-[#141414] p-[1rem] flex flex-col gap-2 absolute">
            <p className="text-[#777] md:text-[10px] xl:text-[12px]">Website Development</p>
            <img className="h-[20vh] object-cover" src={blogImg} alt="project-img" />
            <h1 className="md:text-[14px] xl:text-[18px] text-[#ddd]">Blog Portfolio</h1>
            <p className="md:text-[8px] xl:text-[11px] md:text-[#bbb] xl:text-[#666] text-left"> This blog-portfolio is a mix of my personal blog, where I share insights and ideas, and my portfolio, showcasing the projects I’ve worked on. It’s a space to explore my journey in tech and design. Let’s connect and create something amazing!</p>
          </div>
        </div>
        {/* P4 */}
        <div className="w-full relative h-full flex flex-col gap-10">
        <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
            <p className="text-[#777] md:text-[10px] xl:text-[12px]">Frontend Development, Website Design</p>
            <img className="h-[20vh] object-cover" src={sibiroImg} alt="project-img" />
            <h1 className="md:text-[14px] xl:text-[18px] text-[#ddd]">Sibiro.ru</h1>
            <p className="md:text-[8px] xl:text-[11px] md:text-[#bbb] xl:text-[#666] text-left">Sibiro.ru is a Russian-based furniture business specializing in high-quality, stylish, and functional furniture. They focus on delivering exceptional craftsmanship and innovative designs to enhance living and working spaces.</p>
          </div>
          <div className="bg-[#141414] p-[1rem] flex flex-col gap-2">
            <p className="text-[#777] text-[12px]">Pear App Development</p>
            <img className="h-[20vh] object-cover" src={P2PImg} alt="project-img" />
            <h1 className="md:text-[14px] xl:text-[18px] text-[#ddd]">PearClip</h1>
            <p className="md:text-[8px] xl:text-[11px] md:text-[#bbb] xl:text-[#666] text-left">The P2P Clip App is a lightweight, decentralized solution for seamless clipboard sharing between devices. Built using Hyperswarm, Hypercore, and Holepunch, it ensures fast, secure data exchange without relying on central servers, offering a private and efficient way to share text, links, and files across platforms.</p>
          </div>
        </div>
      </div>
    )
}

export default HomeProjectDesktop;