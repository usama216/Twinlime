import { FaCheckCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const Aboutus = () => {
  const colors = [
    "bg-[#c8a27c]",
    "bg-[#a37854]",
    "bg-[#855d3b]",
    "bg-[#614533]",
    "bg-[#3f2b1c]",
  ];

  return (
    <>
     

      <div className="grid md:grid-cols-2 gap-10 items-center py-10 px-6 md:px-20 bg-white">
        {/* Left Section - Image with Design */}
      
        <div className="text-gray-800">

        <h2 className="text-3xl md:text-6xl font-extrabold mt-14 text-center text-[#614533]">
        ABOUT US
      </h2>

        </div>

        <div className="relative flex justify-center items-center">
          <p className="text-xl text-[#614533] font-bold leading-relaxed">
            Twinlime is the leading distributor of high-quality food additives
            for various industries. We provide a wide range of supplements that
            will become an inseparable part of your products, winning the hearts
            of your clients.
          </p>
          {/* Yellow Decorative Pattern */}
        </div>

        {/* Right Section - Text Content */}
      
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center py-12 px-6 md:px-20 bg-white">
        {/* Left Section - Image with Design */}
        <img
          src="/twinlime-logo.png" // Replace with your actual image path
          alt="About Us"
          layout="fill"
          objectFit="cover"
          // className="w-[300px] h-[300px]"
        />

        {/* Right Section - Text Content */}
        <div className="">
          {/* Bullet Points */}
          <ul className="space-y-3">
            {[
              "Rich tapestry of supplements",
              "High quality",
              "Lesser cost of production",
              "Tactful approach",
              "Affordable prices",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-2xl text-[#614533] "
              >
                <span
                  className={`p-1 rounded-full flex items-center justify-center ${
                    colors[index % colors.length]
                  }`}
                >
                  <IoMdCheckmark className="text-white text-2xl bg-transparent" />
                </span>
                {/* <FaCheckCircle className="text-red-500 text-3xl" /> */}

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
