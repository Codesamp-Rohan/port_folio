import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`p-[1.4rem] fixed top-0 w-full flex justify-between text-[#acacac] bg-transparent text-[0.6em] duration-300 z-10 ${
        isHidden ? "translate-y-[-150%]" : "translate-y-0"
      }`}>
      <ul className="flex flex-col">
        <p>Quick links</p>
        <span className="flex gap-[4px]">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
