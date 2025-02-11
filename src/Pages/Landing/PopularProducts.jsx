import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const products = [
  {
    title: "Cheese",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imgSrc: "/popular/img1.jpg",
    link: "#",
  },
  {
    title: "Yoghurt",
    description:
      "Exploring the next big thing in cloud computing, from edge to serverless.",
    imgSrc: "/popular/yogurt.png",
    link: "#",
  },
  {
    title: "Milk",
    description:
      "How artificial intelligence is transforming the healthcare industry.",
    imgSrc: "/popular/milk.png",
    link: "#",
  },
  {
    title: "Milkshake",
    description: "What 5G means for the future of mobile technology.",
    imgSrc: "/popular/img4.jpeg",
    link: "#",
  },
  {
    title: "Pizza",
    description:
      "Key cybersecurity trends and how to secure your digital presence.",
    imgSrc: "/popular/img5.jpg",
    link: "#",
  },
  {
    title: "Cup",

    description:
      "Exploring the applications of blockchain technology outside of cryptocurrency.",
    imgSrc: "/popular/img4.jpeg",
    link: "#",
  },
  {
    title: "Dumbbell",

    description:
      "Exploring the applications of blockchain technology outside of cryptocurrency.",
    imgSrc: "/popular/img6.jpeg",
    link: "#",
  },
  {
    title: "Milkshake",
    description:
      "Exploring the applications of blockchain technology outside of cryptocurrency.",
    imgSrc: "/popular/wine.png",
    link: "#",
  },
];



const PopularProducts = () => {
   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <>
    <div className="px-[5%] pb-10">
    {/* <h1 className="text-4xl text-bold text-center underline mt-10 ">
        Popular Products
      </h1> */}
      <h2 className="text-3xl md:text-6xl font-extrabold mt-14 text-center text-[#614533]"
             data-aos="fade-up"

>
Popular Products          </h2>
      <div className=" gap-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full py-1">
        {products.map((product, index) => (
          <div
          data-aos="fade-up"
          data-aos-delay={index * 100} 

            key={index}
            className=" bg-white border border-gray-200 mt-10 shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={product.link}>
              <img
                className="h-[200px] w-full"
                src={product.imgSrc}
                alt={product.title}
              />
            </a>
            <div className="p-5">
              <a href={product.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PopularProducts;
