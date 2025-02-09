import { FaCheckCircle } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>

<h2 className="text-3xl md:text-6xl font-extrabold mt-14 text-center text-[#A7AD5C]">ABOUT US</h2>
       

        <div className="grid md:grid-cols-2 gap-10 items-center py-2 px-6 md:px-20 bg-white">
      {/* Left Section - Image with Design */}
      <div className="relative flex justify-center items-center">
        
      <p className="text-xl text-[#A7AD5C] font-bold leading-relaxed">
          Twinlime is the leading distributor of high-quality food additives for various industries. 
          We provide a wide range of supplements that will become an inseparable part of your products, 
          winning the hearts of your clients.
        </p>
        {/* Yellow Decorative Pattern */}
      </div>

      {/* Right Section - Text Content */}
      <div className="text-gray-800">
    
      </div>
    </div>



    <div className="grid md:grid-cols-2 gap-10 items-center py-2 px-6 md:px-20 bg-white">
      {/* Left Section - Image with Design */}
      <div className="relative flex justify-center items-center">
        <div className="w-60 h-60 md:w-80 md:h-80 relative">
          {/* Circular Image */}
          <img
            src="/About/About.png" // Replace with your actual image path
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        
        {/* Yellow Decorative Pattern */}
      </div>

      {/* Right Section - Text Content */}
      <div className="text-gray-800">
      

        {/* Bullet Points */}
        <ul className="space-y-3">
          {[
            "Rich tapestry of supplements",
            "High quality",
            "Lesser cost of production",
            "Tactful approach",
            "Affordable prices",
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3 text-2xl text-[#A7AD5C] ">
              <FaCheckCircle className="text-[#A7AD5C] text-3xl" />
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
