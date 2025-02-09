import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { path: "/about-us", label: "About", subMenu: [] },
    {
      path: "#",
      label: "News",

      subMenu: [""],
    },
    {
      path: "#",
      label: "Partners",

      // subMenu: ["Web Development", "SEO", "Marketing"]
      subMenu: [""],
    },

    { path: "#", label: "Partners", subMenu: [""] },
    { path: "/contact", label: "Contact", subMenu: [] },
    { path: "/portfolio", label: "Packaging Industry", subMenu: [""] },
  ];

  return (
    <nav className="bg-black p-4 fixed border-b top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-10">
        {/* Left Menu - Items move away from the logo */}
        <div className="hidden md:flex flex-1 justify-start space-x-10">
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
          <img src="/twinlime-logo.png" className="w-[10rem]" alt="Logo" />
        </div>

        {/* Right Menu - Items move away from the logo */}
        <div className="hidden md:flex flex-1 justify-end space-x-10">
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
  );
};

export default Navbar;
