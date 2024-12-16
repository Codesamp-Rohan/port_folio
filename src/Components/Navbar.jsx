import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setLoading }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true); // Hide navbar on scroll down
      } else {
        setIsHidden(false); // Show navbar on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (currentPath === path) return; // Avoid unnecessary re-navigations
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate(path); // Navigate to the target path
      setLoading(false); // Stop loading after navigation
    }, 1000); // Simulate loading delay
  };

  return (
    <nav
      className={`p-[1.4rem] fixed top-0 w-full flex justify-between text-[#acacac] bg-transparent text-[0.6em] duration-300 z-10 ${
        isHidden ? "translate-y-[-150%]" : "translate-y-0"
      }`}
    >
      <ul className="flex flex-col">
        <p>Quick links</p>
        <span className="flex gap-[4px]">
          <li className={currentPath === "/" ? "active" : ""}>
            <button className="button" onClick={() => handleNavigation("/")}>Home,</button>
          </li>
          <li className={currentPath === "/about" ? "active" : ""}>
            <button className="button" onClick={() => handleNavigation("/about")}>About,</button>
          </li>
          <li className={currentPath === "/services" ? "active" : ""}>
            <button className="button" onClick={() => handleNavigation("/services")}>
              Services,
            </button>
          </li>
          <li className={currentPath === "/projects" ? "active" : ""}>
            <button className="button" onClick={() => handleNavigation("/projects")}>
              Projects
            </button>
          </li>
        </span>
      </ul>
      <div className="flex flex-col items-center">
        <p>Hello, My name is</p>
        <p className="active">Rohan Chaudhary</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="flex items-center gap-[4px]">
          <span className="w-[4px] h-[4px] bg-green-400 rounded-full"></span>
          Available for new projects
        </p>
        <p className="active">Contact, Book a meeting</p>
      </div>
    </nav>
  );
};

export default Navbar;