// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const cardData = [
//   { id: 1, title: "Dairy", description: "City of love", imageUrl: "/All/Dairy.jpg" },
//   { id: 2, title: "Confectionery", description: "The Big Apple", imageUrl: "/All/chocolate.jpg" },
//   { id: 3, title: "Meat and Fish", description: "City of technology", imageUrl: "/All/meat.jpg" },
//   { id: 4, title: "Jam and Sauces", description: "The city of history", imageUrl: "/All/Veg.jpg" },
//   { id: 5, title: "Bakery", description: "The Eternal City", imageUrl: "/All/cake.jpg" },
//   { id: 6, title: "Functional Additives", description: "The city of art", imageUrl: "/All/functional.png" },
// ];

// const Categories = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);
//   return (
//     <>
//       {/* <h1 className="text-4xl font-bold text-center underline" data-aos="fade-up">
//         Categories
//       </h1> */}
//       <h2 className="text-3xl md:text-6xl font-extrabold mt-14 text-center text-[#614533]"
//              data-aos="fade-up"

// >
//             Categories
//           </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 px-[10%] py-10">
//         {/* Map through the cardData array to render the cards */}
//         {cardData.map((card, index) => (
//           <article
//             key={card.id}
//             className="relative isolate flex flex-col justify-end overflow-hidden w-full px-2 pb-8 pt-40 max-w-sm mx-auto mt-5"
//             data-aos="fade-up"
//             data-aos-delay={index * 100} // Staggered animation
//           >
//             <img src={card.imageUrl} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
//             <h3 className="z-10 mt-3 text-3xl ml-5 font-bold text-white">{card.title}</h3>
//             <div className="z-10 mt-1 gap-y-1 ml-5 overflow-hidden text-sm leading-6 text-gray-300">
//               <button className="border px-4 py-1 font-bold text-lg">Read more</button>
//             </div>
//           </article>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Categories;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardData = [
  { id: 1, title: "Dairy", videoUrl: "/video.mp4", imageUrl: "/All/Dairy.jpg" },
  {
    id: 2,
    title: "Confectionery",
    videoUrl: "/About/About-Video.mp4",
    imageUrl: "/All/chocolate.jpg",
  },
  {
    id: 3,
    title: "Meat and Fish",
    videoUrl: "/video.mp4",
    imageUrl: "/All/meat.jpg",
  },
  {
    id: 4,
    title: "Jam and Sauces",
    videoUrl: "/About/About-Video.mp4",
    imageUrl: "/All/Veg.jpg",
  },
  {
    id: 5,
    title: "Bakery",
    videoUrl: "/video.mp4",
    imageUrl: "/All/cake.jpg",
  },
  {
    id: 6,
    title: "Functional Additives",
    videoUrl: "/About/About-Video.mp4",
    imageUrl: "/All/functional.png",
  },
];

const Categories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <h2
        className="text-3xl md:text-6xl font-extrabold mt-14 text-center text-[#614533]"
        data-aos="fade-up"
      >
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 px-[10%] py-10">
        {cardData.map((card, index) => (
          <article
            key={card.id}
            className="relative isolate flex flex-col justify-end overflow-hidden w-full px-2 pb-8 pt-40 max-w-sm mx-auto mt-5 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedVideo(card.videoUrl)} // Set selected video on click
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl ml-5 font-bold text-white">
              {card.title}
            </h3>
          </article>
        ))}
      </div>

      {/* Full-screen Video Modal */}
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
                className="w-full h-auto shadow-lg rounded-lg"
              ></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Categories;
