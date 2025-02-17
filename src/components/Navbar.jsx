import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger menu and close icons

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing the menu drawer
const navigate = useNavigate()
  const menuItems = [
    { path: "/about-us", label: "About", subMenu: [] },
    {
      path: "#",
      label: "News",
      subMenu: [""],
    },
    {
      path: "#",
      label: "Products",
      subMenu: [""],
    },
    { path: "#", label: "Partners", subMenu: [""] },
    { path: "/contact", label: "Contact", subMenu: [] },
    { path: "#S", label: "Packaging Industry", subMenu: [""] },
  ];

  return (
    <>
    <nav className="bg-transparent p-4 fixed border-b top-0 left-0 w-full z-50 hidden md:block">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-10">
        {/* Left Menu - Items next to the logo */}
        <div className="flex items-center space-x-10">
          {menuItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={item.path} className="text-white">
                {item.label}
              </Link>
              {hovered === index && item.subMenu.length > 0 && (
                <div className="absolute left-0 mt-2 bg-white text-black p-2 shadow-lg">
                  {item.subMenu.map((sub, subIndex) => (
                    <div key={subIndex} className="py-1 px-3 hover:bg-gray-200">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3D Spinning Logo - Centered */}
        <div className="text-white font-bold spin3D">
          <img src="/twinlime-logo.png" className="w-[10rem] cursor-pointer" alt="Logo" onClick={()=> navigate('/') }/>
        </div>

        {/* Right Menu - Items next to the logo */}
        <div className="flex items-center space-x-10">
          {menuItems.slice(3).map((item, index) => (
            <div
              key={index + 2}
              className="relative"
              onMouseEnter={() => setHovered(index + 2)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={item.path} className="text-white">
                {item.label}
              </Link>
              {hovered === index + 2 && item.subMenu.length > 0 && (
                <div className="absolute left-0 mt-2 bg-white text-black p-2 shadow-lg">
                  {item.subMenu.map((sub, subIndex) => (
                    <div key={subIndex} className="py-1 px-3 hover:bg-gray-200">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>





    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50 block md:hidden">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-1">
        <div className="flex items-center">
          <img src="/twinlime-logo.png" className="w-[10rem]" alt="Logo" />
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={item.path} className="text-white">
                {item.label}
              </Link>
              {hovered === index && item.subMenu.length > 0 && (
                <div className="absolute left-0 mt-2 bg-white text-black p-2 shadow-lg">
                  {item.subMenu.map((sub, subIndex) => (
                    <div key={subIndex} className="py-1 px-3 hover:bg-gray-200">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <FaBars
            onClick={() => setIsMenuOpen(true)}
            className="text-white text-3xl cursor-pointer z-40"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40 flex flex-col items-center">
          <div className="w-full flex justify-end p-4">
            <FaTimes
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center space-y-6 text-white text-2xl">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} className="hover:text-gray-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
</>
  );
};

export default Navbar;
