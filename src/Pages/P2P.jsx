import { useLocation, useNavigate } from "react-router-dom";
import Flickering from "../Components/Flickering";
import holesail from "../assets/images/holesailMockup.png"
import swarmchat from "../assets/images/P2PTextMockup.png"
import peardeck from "../assets/images/peardeck.png";
import peardeckterminal from "../assets/images/peardeckterminal.png";
import swarmnote from "../assets/images/swarmnote.png";
import hyperspace from "../assets/images/GPUMockup.png";
import P2PTask from "../assets/images/P2PTask.png";
import mobile from "../assets/images/MobileDevelopment.png";
import PearProject from "../Components/PearProject";
import { useEffect, useState } from "react";

const P2P = ({setLoading}) => {

    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 800);
        };  
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  
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
            <h1 className="text-[1.6rem] lg:text-[2.8rem] text-[#fff] leading-[1.8rem] lg:leading-[3rem]"><Flickering initial={"P"} chars={["P", "#", "^"]} mainPause={"1200"} subPause={"200"}/>
                eer2<Flickering initial={"P"} chars={["P", "#", "^"]} mainPause={"1200"} subPause={"200"}/>eer — Immerse yourself in the world of decentralized innovation! Each P2P project I’ve worked on leverages cutting-edge technology to foster direct, peer-to-peer interactions and resource sharing.</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 mx-4 my-10">
          <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
            <h1 className="text-[2.4rem]">Frontend</h1>
            <p className="text-[14px] text-[#777]">HTML, CSS, JavaScript</p>
          </div>
          <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
            <h1 className="text-[2.4rem]">Backend</h1>
            <p className="text-[14px] text-[#777]">Hypercore, Hypercore-crypto, Hyperbee</p>
          </div>
          <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
            <h1 className="text-[2.4rem]">Networking</h1>
            <p className="text-[14px] text-[#777]">Hyperswarm</p>
          </div>
          <div className="bg-[#222] w-[100%] p-4 flex flex-col gap-10">
            <h1 className="text-[2.4rem]">Development</h1>
            <p className="text-[14px] text-[#777]">B4A, Terminal</p>
          </div>
        </div>
        {projectData.map((data, index) => {
        return(
        <PearProject key={index}
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
    )
}

export default P2P;

const projectData = [
    {
      blockNumber: "1",
      title: "olesail",
      flickeringChars: ["H", "#", "^"],
      description: "Holesail.io is a platform designed to simplify Peer-to-Peer (P2P) app development by leveraging cutting-edge technologies like Holepunch and Hyperswarm. It empowers developers to build decentralized applications with ease, enabling secure and efficient real-time communication without relying on central servers.",
      buttonText: "Explore Holesail",
      imageSrc: holesail,
      buttonLink: "https://holesail.io"
    },
    {
      blockNumber: "2",
      title: "olesail-go",
      flickeringChars: ["H", "*", "~"],
      description: "Holesail Go is a client for connecting to holesail servers. It supports scanning QR code and is available on the Apple store and Holesail Downloads Page. ",
      buttonText: "Explore Holesail-Go",
      imageSrc: mobile,
      buttonLink: "https://docs.holesail.io/installation-guide/holesail-go-mac-and-iphone"
    },
    {
      blockNumber: "03",
      title: "warmchat",
      flickeringChars: ["S", "$", "!"],
      description: "Swarmchat is a decentralized peer-to-peer (P2P) text application designed and developmed by me. The project offers multiple communication features, promoting secure and direct messaging without relying on centralized servers1. Developed primarily in JavaScript, Swarmchat exemplifies modern web development practices and aims to provide users with a seamless and private chat experience.",
      buttonText: "Explore Swarmchat",
      imageSrc: swarmchat,
      buttonLink: "https://github.com/Codesamp-Rohan/swarmchat"
    },
    {
        blockNumber: "04",
        title: "eardeck",
        flickeringChars: ["P", "$", "!"],
        description: "PearDeck is a lightweight and innovative peer-to-peer sharing app that allows users to collaborate seamlessly without relying on centralized servers. With real-time sharing and robust privacy features, it's perfect for teams, educators, and remote workers looking for an efficient and secure way to exchange slides.",
        buttonText: "Explore Peardeck",
        imageSrc: peardeck,
        buttonLink: "https://github.com/Codesamp-Rohan/peardeck"
    },
    {
        blockNumber: "05",
        title: "eardeckterminal",
        flickeringChars: ["P", "$", "!"],
        description: "PearDeckTerminal is a lightweight and innovative peer-to-peer presentation sharing app that allows users to collaborate seamlessly without relying on centralized servers on terminal. With real-time sharing and robust privacy features, it's perfect for teams, educators, and remote workers looking for an efficient and secure way to exchange files.",
        buttonText: "Explore Peardeckterminal",
        imageSrc: peardeckterminal,
        buttonLink: "https://github.com/Codesamp-Rohan/peardeckterminal"
    },
    {
        blockNumber: "06",
        title: "warmnote",
        flickeringChars: ["S", "$", "!"],
        description: "A decentralized, peer-to-peer application for seamless note-sharing and collaboration. Users can either create a new note session or join an existing one using a unique key. The app ensures real-time syncing, secure connections, and a lightweight, intuitive interface for hassle-free collaboration on notes. Perfect for brainstorming, sharing ideas, or collaborative writing!",
        buttonText: "Explore Swarmnote",
        imageSrc: swarmnote,
        buttonLink: "https://github.com/Codesamp-Rohan/swarmnote"
    },
    {
        blockNumber: "07",
        title: "yperspace",
        flickeringChars: ["H", "$", "!"],
        description: "Hyperspace is the world's first truly peer-to-peer GPU rental service. Use one simple client app to pay, provision and rent GPU globally. Hyperspace uses Lightning Bitcoin for Payment. You can use a node from thousands of providers or run one of your own, this gives you full control over your transactions.",
        buttonText: "Explore Hyperspace",
        imageSrc: hyperspace,
        buttonLink: "https://github.com/Codesamp-Rohan/hyperspace"
    },
    {
        blockNumber: "08",
        title: "2P Task",
        flickeringChars: ["P", "$", "!"],
        description: "P2P Task App is a peer-to-peer Task Managing App. Use one simple client app to pay, provision and rent GPU globally. P2P Task uses hyperswarm and hypercore for live tasking managing.",
        buttonText: "Explore P2P Task App",
        imageSrc: P2PTask,
        buttonLink: "https://github.com/Codesamp-Rohan/P2P-TaskManager"
    },
  ];
  