import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const toggleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 10) {
      // Change 100 to whatever scroll position you prefer
      setNavbarColor("bg-black text-white"); // Change to your desired color
    } else {
      if (!isOpen) setNavbarColor("bg-transparent"); // Change to your default color
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (isOpen) {
      setNavbarColor("bg-black text-white");
    }
  }, [isOpen]);

  return (
    <div
      className={` ${navbarColor} ${className} duration-300  py-4 items-center font-poppins   px-3 fixed top-0 left-0 z-50 w-[100vw]`}
    >
      <div className="container  md:justify-between hidden md:flex">
        <h1 className=" font-poppins font-bold text-2xl">WayangKU</h1>

        <div className="flex  gap-x-10">
          <span>
            <Link to="/" className="font-poppins">
              Home
            </Link>
          </span>
          <span>
            <Link to="/sejarah" className="font-poppins">
              Sejarah
            </Link>
          </span>
          <span>
            <Link to="/tokoh" className="font-poppins">
              Tokoh
            </Link>
          </span>
        </div>
      </div>
      {isOpen && (
        <hr className="fixed top-[60px] border-gray-500 w-full left-0  " />
      )}
      <div className={`container flex items-center justify-between md:hidden `}>
        <h1 className=" font-poppins font-bold text-xl">WayangKU</h1>

        <button onClick={toggleOpenNav}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "h-[94vh]" : "h-0"
        }  duration-300 flex flex-col gap-y-10 items-center justify-center overflow-hidden`}
      >
        <Link to="/" className=" text-3xl">
          Home
        </Link>
        <Link to="/sejarah" className=" text-3xl">
          Sejarah
        </Link>
        <Link to="/" className=" text-3xl">
          Tokoh
        </Link>
      </div>
    </div>
  );
}
