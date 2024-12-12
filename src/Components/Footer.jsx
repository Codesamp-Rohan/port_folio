import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = ({setLoading}) => {

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
        <>
        <div className="flex flex-row justify-between items-start mx-6 py-14 my-10 border-y-[0.1px] border-y-[#333]">
            <div className="flex flex-col">
                <p className="text-[14px] mb-[16px] text-[#777]">Site Links</p>
                <ul className="text-[12px] text-[#777]">
                <li className={currentPath === "/" ? "active" : ""}>
            <button onClick={() => handleNavigation("/")}>Home,</button>
          </li>
          <li className={currentPath === "/about" ? "active" : ""}>
            <button onClick={() => handleNavigation("/about")}>About,</button>
          </li>
          <li className={currentPath === "/services" ? "active" : ""}>
            <button onClick={() => handleNavigation("/services")}>
              Services,
            </button>
          </li>
          <li className={currentPath === "/projects" ? "active" : ""}>
            <button onClick={() => handleNavigation("/projects")}>
              Projects
            </button>
          </li>
                    <li className="text-[#fff]">Free discovery call</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <p className="text-[14px] mb-[16px] text-[#777]">Services Links</p>
                <ul className="text-[12px] text-[#777]">
                    <li>Home</li>
                    <li>About me</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <p className="text-[14px] mb-[16px] text-[#777]">Other Links</p>
                <ul className="text-[12px] text-[#fff]">
                    <li>Linkedin</li>
                    <li>About me</li>
                    <li>Services</li>
                    <li>Instagram</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <p className="text-[14px] mb-[16px] text-[#777]">Site Links</p>
                <button className="main-font text-[3rem]">About Me</button>
            </div>
        </div>
        <div className="flex justify-between text-[12px] mx-6 mb-6">
            <h1>@2024 Rohan Chaudhary. No rights reserved.😀</h1>
            <p className="text-[#777]">Neither Privacy nor Terms & Conditions</p>
        </div>
        </>
    )
}

export default Footer;