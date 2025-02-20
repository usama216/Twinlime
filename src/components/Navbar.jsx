import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/about-us", label: "About" },
    { path: "/food-industry", label: "Food Industry", hasCustomDropdown: true },
    { path: "#", label: "Products" },
    { path: "#", label: "Partners" },
    { path: "/contact", label: "Contact" },
    { path: "#", label: "Packaging Industry" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 p-4 border-b transition-all duration-300 ${
          isScrolled ? "bg-black/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-5xl mx-auto px-10">
          {/* Left Menu */}
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

                {/* Custom Dropdown Layout for Food Industry */}
                {hovered === index && item.hasCustomDropdown && (
                  <div className="absolute left-0  bg-white text-black shadow-lg flex w-[700px] border rounded-lg">
                    {/* Video Section */}
                    <div className="w-1/2 p-2 border-r">
                      <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                      >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    {/* Content Section */}

                    <div className="w-1/2 p-2">
                      <ul className="text-sm space-y-2">
                        <li className="font-bold text-xl">
                          <Typewriter
                            options={{
                              strings: ["• Rich tapestry of flavours"],
                              autoStart: true,
                              delay: 50,
                              cursor: "",
                            }}
                            onInit={(typewriter) => {
                              typewriter.callFunction(() => setStep(1)).start();
                            }}
                          />
                        </li>

                        {step >= 1 && (
                          <li className="font-bold text-xl">
                            <Typewriter
                              options={{
                                strings: ["• High quality"],
                                autoStart: true,
                                delay: 50,
                                cursor: "",
                              }}
                              onInit={(typewriter) => {
                                typewriter
                                  .callFunction(() => setStep(2))
                                  .start();
                              }}
                            />
                          </li>
                        )}

                        {step >= 2 && (
                          <li className="font-bold text-xl">
                            <Typewriter
                              options={{
                                strings: ["• Case-by-case approach"],
                                autoStart: true,
                                delay: 50,
                                cursor: "",
                              }}
                            />
                          </li>
                        )}
                      </ul>
                    </div>
                    {/* <div className="w-1/2 p-2">
                      <ul className="text-sm space-y-2">
                        <li className="font-bold text-xl">• Rich tapestry of flavours</li>
                        <li className="font-bold text-xl">• High quality</li>
                        <li className="font-bold text-xl">• Case-by-case approach</li>
                      </ul>
                    </div> */}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="text-white font-bold spin3D">
            <img
              src="/twinlime-logo.png"
              className="w-[10rem] cursor-pointer"
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Right Menu */}
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
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
