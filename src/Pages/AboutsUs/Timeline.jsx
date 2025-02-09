import { motion } from "framer-motion";
import {
  FaChessKnight,
  FaHandHoldingUsd,
  FaChartLine,
  FaBuilding,
  FaChartBar,
  FaGlobe,
} from "react-icons/fa";

const timelineData = [
  {
    year: "2012",
    title: "Option 01",
    description:
      "The Twinlime company was founded and began its activities in the market with the supply of citric acid.",
    color: "border-teal-700",
    icon: <FaChessKnight className="text-teal-700" />,
  },
  {
    year: "2015",
    title: "Option 02",
    description: "Our range has been expanded to 10 products.",
    color: "border-teal-500",
    icon: <FaHandHoldingUsd className="text-teal-500" />,
  },
  {
    year: "2018",
    title: "Option 03",
    description:
      "Twinlime has become the largest supplier in Turkmenistan for the food industry.",
    color: "border-green-500",
    icon: <FaChartLine className="text-green-500" />,
  },
  {
    year: "2021",
    title: "Option 04",
    description:
      "Company Twinlime signed a partnership agreement with ADM, leading supplements manufacturer in the USA.",
    color: "border-yellow-500",
    icon: <FaChartBar className="text-yellow-500" />,
  },
  {
    year: "2023",
    title: "Option 05",
    description:
      "Twinlime took part in international business exhibition 'Gulfood' in Dubai, displaying a wide range of raw materials for various industries.",
    color: "border-red-500",
    icon: <FaBuilding className="text-red-500" />,
  },
  {
    year: "2024",
    title: "Option 06",
    description:
      "Twinlime participated in international exhibition 'Gulfood' with a big assortment of final products, including various beverages and snack products.",
    color: "border-red-700",
    icon: <FaGlobe className="text-red-700" />,
  },
];

const Timeline = () => {
  return (
    <>
      <h2 className="text-3xl md:text-6xl font-extrabold mt-14 text-center text-[#A7AD5C]">
        Our Experience & Achievement
      </h2>

      <div className="flex justify-center items-center min-h-[60vh] px-6">
        <div className="relative w-full max-w-6xl">
          {/* Center Timeline Line */}
          <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-teal-700 via-green-500 via-yellow-500 via-red-500 to-red-700 rounded-full top-1/2"></div>

          {/* Timeline Items */}
          <div className="relative flex justify-between items-center w-full">
            {timelineData.map((event, index) => {
              const isAbove = index % 2 === 0; // Alternate top/bottom positions

              return (
                <motion.div
                  key={index}
                  className="relative w-40 text-center flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Positioning with Spacing */}
                  <div
                    className={`flex flex-col ${
                      isAbove ? "items-center" : "items-center flex-col-reverse"
                    } space-y-0`}
                  >
                    {/* Title & Description */}
                    <div className=" w-72 border-3 border-red-800">
                      {/* <h3 className="text-md font-semibold">{event.title}</h3> */}
                      <p className="text-md text-gray-600">
                        {event.description}
                      </p>
                    </div>

                    {/* Increased Gap Between Icon and Text */}
                    <div className="h-[150px]"></div>

                    {/* Circular Icon with More Gap */}
                    <div
                      className={`w-20 h-20 rounded-full border-4 ${event.color} bg-white flex items-center justify-center text-3xl shadow-md`}
                    >
                      {event.icon}
                    </div>

                    {/* Increased Gap Between Year and Icon */}
                    <div className="h-30"></div>

                    {/* Small Year Circle on Timeline */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 p-5 rounded-full border-4 ${event.color} bg-white flex items-center justify-center text-md font-bold shadow-md`}
                    >
                      {event.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
