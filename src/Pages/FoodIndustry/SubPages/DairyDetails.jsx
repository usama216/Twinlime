


import { useEffect } from "react";
import { useParams } from "react-router-dom";

const categoryData = {
  dairy: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    ],
  },

  beverage: {
    videoUrl: "/FoodIndustry/beverage.mp4",
    images: [
      "/images/beverage1.jpg",
      "/images/beverage2.jpg",
      "/images/beverage3.jpg",
    ],
  },
  meatfish: {
    videoUrl: "/FoodIndustry/meat-fish.mp4",
    images: ["/images/meat1.jpg", "/images/meat2.jpg", "/images/meat3.jpg"],
  },
  jamsouce: {
    videoUrl: "/FoodIndustry/meat-fish.mp4",
    images: ["/images/meat1.jpg", "/images/meat2.jpg", "/images/meat3.jpg"],
  },
  bakery: {
    videoUrl: "/FoodIndustry/bakery.mp4",
    images: [
      "/images/bakery1.jpg",
      "/images/bakery2.jpg",
      "/images/bakery3.jpg",
    ],
  },
  functionaladditives: {
    videoUrl: "/FoodIndustry/functional.mp4",
    images: [
      "/images/functional1.jpg",
      "/images/functional2.jpg",
      "/images/functional3.jpg",
    ],
  },
  confictionary: {
    videoUrl: "/FoodIndustry/confectionery.mp4",
    images: [
      "/images/confectionery1.jpg",
      "/images/confectionery2.jpg",
      "/images/confectionery3.jpg",
    ],
  },
  // Add other categories...
};

const DairyDetails = () => {
  const { category } = useParams();
  const sanitizedCategory = category.replace(/-/g, "_"); // Replace hyphens with underscores
  useEffect(() => window.scrollTo(0, 0), []);
  const data = categoryData[sanitizedCategory]; // Access the modified key

  if (!data) {
    return <h1 className="text-center text-red-500">Category Not Found</h1>;
  }

  return (
    <>
      <section className="h-[100vh] flex flex-col items-center justify-center text-center text-white px-[10%]">
        {/* Background Video */}
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={data.videoUrl}
            type="video/mp4"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
      </section>

      {/* Image Gallery with Masonry Structure */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {data.images
              .slice(colIndex * 3, colIndex * 3 + 3) // Get 3 images per column
              .map((img, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={img}
                    alt={`Category ${category} Image ${imgIndex}`}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DairyDetails;
