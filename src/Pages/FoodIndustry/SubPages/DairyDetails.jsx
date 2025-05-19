


// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const categoryData = {
//   dairy: {
//     videoUrl: "/FoodIndustry/dairy.mp4",
//     images: [
//       "/FoodIndustry/new/cheese.jpeg",
//       "/FoodIndustry/new/cheese_icon.jpeg",
//       "/FoodIndustry/new/foodenhancer.jpeg",
//       "/FoodIndustry/new/milkshakeicon.jpeg",
//       "/FoodIndustry/new/weightloss.jpeg",
//       "/FoodIndustry/new/yoghurt.jpeg",
//       "/FoodIndustry/new/yogurticon.jpeg",
//       "/FoodIndustry/new/cheese.jpeg",
    

//     ],
//   },

//   beverage: {
//     videoUrl: "/FoodIndustry/dairy.mp4",
//     images: [
//       "/FoodIndustry/new/cheese.jpeg",
//       "/FoodIndustry/new/cheese_icon.jpeg",
//       "/FoodIndustry/new/foodenhancer.jpeg",
//       "/FoodIndustry/new/milkshakeicon.jpeg",
//       "/FoodIndustry/new/weightloss.jpeg",
//       "/FoodIndustry/new/yoghurt.jpeg",
//       "/FoodIndustry/new/yogurticon.jpeg",
//       "/FoodIndustry/new/cheese.jpeg",
    

//     ],
//   },
//   meatfish: {
//     videoUrl: "/FoodIndustry/dairy.mp4",
//     images: [
//       "/FoodIndustry/new/cheese.jpeg",
//       "/FoodIndustry/new/cheese_icon.jpeg",
//       "/FoodIndustry/new/foodenhancer.jpeg",
//       "/FoodIndustry/new/milkshakeicon.jpeg",
//       "/FoodIndustry/new/weightloss.jpeg",
//       "/FoodIndustry/new/yoghurt.jpeg",
//       "/FoodIndustry/new/yogurticon.jpeg",
//       "/FoodIndustry/new/cheese.jpeg",
    

//     ],
//   },
//   jamsouce: {
//     videoUrl: "/FoodIndustry/dairy.mp4",
//     images: [
//       // "/FoodIndustry/new/cheese.jpeg",
//       "/FoodIndustry/new/cheese_icon.jpeg",
//       "/FoodIndustry/new/foodenhancer.jpeg",
//       "/FoodIndustry/new/milkshakeicon.jpeg",
//       "/FoodIndustry/new/weightloss.jpeg",
//       "/FoodIndustry/new/yoghurt.jpeg",
//       "/FoodIndustry/new/yogurticon.jpeg",
//       "/FoodIndustry/new/cheese.jpeg",
    

//     ],
//   },
//   bakery: {
//     videoUrl: "/FoodIndustry/dairy.mp4",
//     images: [
//       "/FoodIndustry/new/cheese.jpeg",
//       "/FoodIndustry/new/cheese_icon.jpeg",
//       "/FoodIndustry/new/foodenhancer.jpeg",
//       "/FoodIndustry/new/milkshakeicon.jpeg",
//       "/FoodIndustry/new/weightloss.jpeg",
//       "/FoodIndustry/new/yoghurt.jpeg",
//       "/FoodIndustry/new/yogurticon.jpeg",
//       "/FoodIndustry/new/cheese.jpeg",
    

//     ],
//   },
//   functionaladditives: {
//     videoUrl: "/FoodIndustry/dairy.mp4",
//     images: [
//       "/FoodIndustry/new/cheese.jpeg",
//       "/FoodIndustry/new/cheese_icon.jpeg",
//       "/FoodIndustry/new/foodenhancer.jpeg",
//       "/FoodIndustry/new/milkshakeicon.jpeg",
//       "/FoodIndustry/new/weightloss.jpeg",
//       "/FoodIndustry/new/yoghurt.jpeg",
//       "/FoodIndustry/new/yogurticon.jpeg",
//       "/FoodIndustry/new/cheese.jpeg",
    

//     ],
//   },
//   confictionary: {
//     videoUrl: "/FoodIndustry/dairy.mp4",
//     images: [
//       "/FoodIndustry/new/cheese.jpeg",
//       "/FoodIndustry/new/cheese_icon.jpeg",
//       "/FoodIndustry/new/foodenhancer.jpeg",
//       "/FoodIndustry/new/milkshakeicon.jpeg",
//       "/FoodIndustry/new/weightloss.jpeg",
//       "/FoodIndustry/new/yoghurt.jpeg",
//       "/FoodIndustry/new/yogurticon.jpeg",
//       "/FoodIndustry/new/cheese.jpeg",
    

//     ],
//   },
//   // Add other categories...
// };

// const DairyDetails = () => {
//   const { category } = useParams();
//   const sanitizedCategory = category.replace(/-/g, "_"); // Replace hyphens with underscores
//   useEffect(() => window.scrollTo(0, 0), []);
//   const data = categoryData[sanitizedCategory]; // Access the modified key

//   if (!data) {
//     return <h1 className="text-center text-red-500">Category Not Found</h1>;
//   }

//   return (
//     <>
//       {/* <section className="h-[100vh] flex flex-col items-center justify-center text-center text-white px-[10%]">
//         <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
//           <video
//             className="min-w-full min-h-full absolute object-cover"
//             src={data.videoUrl}
//             type="video/mp4"
//             autoPlay
//             muted
//             loop
//           />
//         </div>
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
//       </section> */}

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 mt-16">
//   {data.images.map((img, index) => (
//     <div key={index}>
//       <img
//         className="w-full h-auto rounded-lg"
//         src={img}
//         alt={`Category ${category} Image ${index}`}
//       />
//     </div>
//   ))}
// </div>

//     </>
//   );
// };

// export default DairyDetails;

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const categoryData = {

  


  dairy: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "/FoodIndustry/new/cheese.jpeg",
      "/FoodIndustry/new/cheese_icon.jpeg",
      "/FoodIndustry/new/foodenhancer.jpeg",
      "/FoodIndustry/new/milkshakeicon.jpeg",
      "/FoodIndustry/new/weightloss.jpeg",
      "/FoodIndustry/new/yoghurt.jpeg",
      "/FoodIndustry/new/yogurticon.jpeg",
      "/FoodIndustry/new/cheese.jpeg",
    ],
  },
  beverage: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "/FoodIndustry/new/cheese.jpeg",
      "/FoodIndustry/new/cheese_icon.jpeg",
      "/FoodIndustry/new/foodenhancer.jpeg",
      "/FoodIndustry/new/milkshakeicon.jpeg",
      "/FoodIndustry/new/weightloss.jpeg",
      "/FoodIndustry/new/yoghurt.jpeg",
      "/FoodIndustry/new/yogurticon.jpeg",
      "/FoodIndustry/new/cheese.jpeg",
    ],
  },
  meatfish: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "/FoodIndustry/new/cheese.jpeg",
      "/FoodIndustry/new/cheese_icon.jpeg",
      "/FoodIndustry/new/foodenhancer.jpeg",
      "/FoodIndustry/new/milkshakeicon.jpeg",
      "/FoodIndustry/new/weightloss.jpeg",
      "/FoodIndustry/new/yoghurt.jpeg",
      "/FoodIndustry/new/yogurticon.jpeg",
      "/FoodIndustry/new/cheese.jpeg",
    ],
  },
  jamsouce: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "/FoodIndustry/new/cheese_icon.jpeg",
      "/FoodIndustry/new/foodenhancer.jpeg",
      "/FoodIndustry/new/milkshakeicon.jpeg",
      "/FoodIndustry/new/weightloss.jpeg",
      "/FoodIndustry/new/yoghurt.jpeg",
      "/FoodIndustry/new/yogurticon.jpeg",
      "/FoodIndustry/new/cheese.jpeg",
    ],
  },
  bakery: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "/FoodIndustry/new/cheese.jpeg",
      "/FoodIndustry/new/cheese_icon.jpeg",
      "/FoodIndustry/new/foodenhancer.jpeg",
      "/FoodIndustry/new/milkshakeicon.jpeg",
      "/FoodIndustry/new/weightloss.jpeg",
      "/FoodIndustry/new/yoghurt.jpeg",
      "/FoodIndustry/new/yogurticon.jpeg",
      "/FoodIndustry/new/cheese.jpeg",
    ],
  },
  functionaladditives: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "/FoodIndustry/new/cheese.jpeg",
      "/FoodIndustry/new/cheese_icon.jpeg",
      "/FoodIndustry/new/foodenhancer.jpeg",
      "/FoodIndustry/new/milkshakeicon.jpeg",
      "/FoodIndustry/new/weightloss.jpeg",
      "/FoodIndustry/new/yoghurt.jpeg",
      "/FoodIndustry/new/yogurticon.jpeg",
      "/FoodIndustry/new/cheese.jpeg",
    ],
  },
  confictionary: {
    videoUrl: "/FoodIndustry/dairy.mp4",
    images: [
      "/FoodIndustry/new/cheese.jpeg",
      "/FoodIndustry/new/cheese_icon.jpeg",
      "/FoodIndustry/new/foodenhancer.jpeg",
      "/FoodIndustry/new/milkshakeicon.jpeg",
      "/FoodIndustry/new/weightloss.jpeg",
      "/FoodIndustry/new/yoghurt.jpeg",
      "/FoodIndustry/new/yogurticon.jpeg",
      "/FoodIndustry/new/cheese.jpeg",
    ],
  },
};

const DairyDetails = () => {


    const dairyData = {
    Yogurt: [
      "TG",
      "Pectin",
      "Gelatin",
      "DATEM",
      "Compound Sweetener",
      "Ethyl Maltol",
      "Xanthan Gum",
      "Ethyl Maltol",
    ],
    "Weight Loss": [
      "Dehydrated Vegetable",
      "Konjac Gum",
      "L-Carnitine",
      "Agar Agar",
      "Xylitol",
    ],
    Cheese: [
      "Xanthan Gum",
      "Erythritol",
      "Lactic Acid",
      "Compound Sweetener",
      "Disodium Phosphate Anhydrous",
      "Trisodium Phosphate",
      "Maltodextrin",
      "Ethyl Maltol",
      "TG",
    ],
  };

  const { category } = useParams();
  const sanitizedCategory = category.replace(/-/g, "_");
  useEffect(() => window.scrollTo(0, 0), []);
  const data = categoryData[sanitizedCategory];

  if (!data) {
    return <h1 className="text-center text-red-500">Category Not Found</h1>;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 mt-16">
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

      {/* Custom Dairy Info Section */}
      {category === "dairy" && (
        <div className="bg-gray-50 py-16 px-4 md:px-10">
      <h2 className="text-6xl font-extrabold text-center mb-12 text-green-800 tracking-wider uppercase">
        Dairy
      </h2>

      {/* Top Two Boxes */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
        {["Yogurt", "Weight Loss"].map((category) => (
          <div
            key={category}
            className="border-2 border-green-800 rounded-2xl p-6 w-full md:w-1/2 bg-white shadow-sm"
          >
            <h3 className="text-3xl font-bold text-green-800 mb-2 text-center  pb-2">
              {category}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 font-semibold text-lg text-green-900 list-disc list-inside">
              {dairyData[category].map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Center Box */}
      <div className="flex justify-center">
        <div className="border-2 border-green-800 rounded-2xl p-6 w-full md:w-3/4 lg:w-1/2 bg-white shadow-sm">
          <h3 className="text-3xl font-bold text-green-800 mb-2 text-center  pb-2">
            Cheese
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-lg font-semibold text-green-900 list-disc list-inside">
            {dairyData["Cheese"].map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      )}
    </>
  );
};

export default DairyDetails;
