


import { useEffect } from "react";
import { useParams } from "react-router-dom";

const categoryData = {
  dairy: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "subcategories/cheese.JPEG",
      "subcategories/cheese_icon.JPEG",
      "subcategories/foodenhancer.JPEG",
      "subcategories/milkshakeicon.JPEG",
      "subcategories/weightloss.JPEG",
      "subcategories/yoghurt.JPEG",
      "subcategories/yogurticon.JPEG",
      "subcategories/cheese.JPEG",
    

    ],
  },

  beverage: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "subcategories/cheese.JPEG",
      "subcategories/cheese_icon.JPEG",
      "subcategories/foodenhancer.JPEG",
      "subcategories/milkshakeicon.JPEG",
      "subcategories/weightloss.JPEG",
      "subcategories/yoghurt.JPEG",
      "subcategories/yogurticon.JPEG",
      "subcategories/cheese.JPEG",
    

    ],
  },
  meatfish: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "subcategories/cheese.JPEG",
      "subcategories/cheese_icon.JPEG",
      "subcategories/foodenhancer.JPEG",
      "subcategories/milkshakeicon.JPEG",
      "subcategories/weightloss.JPEG",
      "subcategories/yoghurt.JPEG",
      "subcategories/yogurticon.JPEG",
      "subcategories/cheese.JPEG",
    

    ],
  },
  jamsouce: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      // "subcategories/cheese.JPEG",
      "subcategories/cheese_icon.JPEG",
      "subcategories/foodenhancer.JPEG",
      "subcategories/milkshakeicon.JPEG",
      "subcategories/weightloss.JPEG",
      "subcategories/yoghurt.JPEG",
      "subcategories/yogurticon.JPEG",
      "subcategories/cheese.JPEG",
    

    ],
  },
  bakery: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "subcategories/cheese.JPEG",
      "subcategories/cheese_icon.JPEG",
      "subcategories/foodenhancer.JPEG",
      "subcategories/milkshakeicon.JPEG",
      "subcategories/weightloss.JPEG",
      "subcategories/yoghurt.JPEG",
      "subcategories/yogurticon.JPEG",
      "subcategories/cheese.JPEG",
    

    ],
  },
  functionaladditives: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "subcategories/cheese.JPEG",
      "subcategories/cheese_icon.JPEG",
      "subcategories/foodenhancer.JPEG",
      "subcategories/milkshakeicon.JPEG",
      "subcategories/weightloss.JPEG",
      "subcategories/yoghurt.JPEG",
      "subcategories/yogurticon.JPEG",
      "subcategories/cheese.JPEG",
    

    ],
  },
  confictionary: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "subcategories/cheese.JPEG",
      "subcategories/cheese_icon.JPEG",
      "subcategories/foodenhancer.JPEG",
      "subcategories/milkshakeicon.JPEG",
      "subcategories/weightloss.JPEG",
      "subcategories/yoghurt.JPEG",
      "subcategories/yogurticon.JPEG",
      "subcategories/cheese.JPEG",
    

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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
  {data.images.map((img, index) => (
    <div key={index}>
      <img
        className="w-full h-auto rounded-lg"
        src={img}
        alt={`Category ${category} Image ${index}`}
      />
    </div>
  ))}
</div>

    </>
  );
};

export default DairyDetails;
