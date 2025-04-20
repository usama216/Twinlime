import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Dairy",
    videoUrl: "/FoodIndustry/dairy.mp4",
    imageUrl: "/FoodIndustry/new/dairy.jpeg",
pageUrl: "/food-industry/dairy",

  },
  {
    id: 2,
    title: "Beverage",
    videoUrl: "/FoodIndustry/beverage.mp4",
    imageUrl: "/FoodIndustry/new/beverage.jpeg",
pageUrl: "/food-industry/beverage",

  },
  {
    id: 3,
    title: "Meat and Fish",
    videoUrl: "/video.mp4",
    imageUrl: "/FoodIndustry/new/meatfish.jpeg",
pageUrl: "/food-industry/meatfish",

  },
  {
    id: 4,
    title: "Jam and Sauces",
    videoUrl: "/About/About-Video.mp4",
    imageUrl: "/FoodIndustry/new/jamsauces.jpeg",
pageUrl: "/food-industry/jamsouce",

  },
  {
    id: 5,
    title: "Bakery",
    // videoUrl: "/video.mp4",
    videoUrl: "/FoodIndustry/bakery.mp4",
pageUrl: "/food-industry/bakery",

    imageUrl: "/FoodIndustry/new/bakery.jpeg",
  },
  {
    id: 6,
    title: "Functional Additives",
    videoUrl: "/About/About-Video.mp4",
    imageUrl: "/FoodIndustry/new/functional_additives.jpeg",
pageUrl: "/food-industry/functionaladditives",

  },
  {
    id: 7,
    title: "Confectionery",
    videoUrl: "/FoodIndustry/confictionary.mp4",
    imageUrl: "/FoodIndustry/confectionery.jpeg",
pageUrl: "/food-industry/confictionary",

  },
];

const FoodIndustryCategories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
const navigate = useNavigate()
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // const handleNavigate = (category)=>{
  //   navigate(`${category}`)
  // }

  return (
    <>
      <h2
        className="text-3xl md:text-6xl font-extrabold mt-14 text-center text-[#614533]"
        data-aos="fade-up"
      >
        Categories
      </h2>

      {/* <div className="grid grid-cols-3 gap-3 px-[10%] py-10"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 md:px-[10%] py-10">
        {cardData.map((card, index) => (
          <article
            key={card.id}
            className={`relative border-2 isolate text-black hover:text-white flex flex-col justify-end overflow-hidden w-full px-2 pb-8 pt-40 mx-auto mt-5 cursor-pointer 
      ${
        index === 1
          ? "row-span-3 flex justify-center items-center"
          : "row-span-1"
      }
      group`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            // onClick={() => handleNavigate(card.pageUrl)}
          >
            {/* Image with Full Down to Up Animation */}
            <img
              src={card.imageUrl}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 transform translate-y-full group-hover:translate-y-0"
            />

            {/* Black Overlay (Only appears on hover) */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Title */}
            <h3
              className={`z-10 text-3xl font-bold transition-all duration-500 
        ${
          index === 1
            ? "md:absolute md:text-center md:text-5xl"
            : "ml-5 mt-3 text-center md:text-start"
        }`}
            >
              {card.title}
            </h3>
          </article>
        ))}
      </div>
{/* 
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-5 right-5 text-white text-4xl font-bold l p-2 z-50"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-[105vh] shadow-lg rounded-lg"
              ></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default FoodIndustryCategories;
