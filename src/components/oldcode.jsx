// import React, { useState, useRef } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function ImageUploadGrid() {
//   const GRID_SIZE = 30; // 100x100 grid
//   const PIXEL_SIZE = 40; // Each pixel is 50x50

//   const [selectedPixels, setSelectedPixels] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const [selectionBox, setSelectionBox] = useState(null);
//   const [uploadCard, setUploadCard] = useState(false);
//   const [websiteURL, setWebsiteURL] = useState("");
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [purchasedPixels, setPurchasedPixels] = useState([]); // Tracks purchased pixel areas
//   const [hoveredPixelInfo, setHoveredPixelInfo] = useState(null); // Info for hovered purchased pixel
//   const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

//   const gridRef = useRef();

//   const getMousePosition = (e) => {
//     const grid = gridRef.current.getBoundingClientRect();
//     return {
//       x: Math.floor((e.clientX - grid.left) / PIXEL_SIZE),
//       y: Math.floor((e.clientY - grid.top) / PIXEL_SIZE),
//     };
//   };

//   const handleMouseDown = (e) => {
//     const startPos = getMousePosition(e);
//     setSelectionBox({
//       startX: startPos.x,
//       startY: startPos.y,
//       endX: startPos.x,
//       endY: startPos.y,
//     });
//     setIsDragging(true);
//     setUploadCard(false);
//     setHoveredPixelInfo(null);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const currentPos = getMousePosition(e);
//     setSelectionBox((prev) => ({
//       ...prev,
//       endX: currentPos.x,
//       endY: currentPos.y,
//     }));
//   };

//   const handleMouseUp = () => {
//     if (!selectionBox) return;

//     const { startX, startY, endX, endY } = selectionBox;

//     const xMin = Math.min(startX, endX);
//     const xMax = Math.max(startX, endX);
//     const yMin = Math.min(startY, endY);
//     const yMax = Math.max(startY, endY);

//     // Check overlap with purchased pixels
//     for (let purchase of purchasedPixels) {
//       if (
//         xMin <= purchase.xMax &&
//         xMax >= purchase.xMin &&
//         yMin <= purchase.yMax &&
//         yMax >= purchase.yMin
//       ) {
//         setShowPopup(true); // Show the custom popup
//         setSelectionBox(null);
//         setIsDragging(false);
//         return;
//       }
//     }

//     // Add new selection to the existing selected pixels
//     setSelectedPixels((prev) => [...prev, { xMin, xMax, yMin, yMax }]);
//     setUploadCard(true);
//     setIsDragging(false);
//     setSelectionBox(null);
//   };

//   const handleUpload = () => {
//     if (!websiteURL || !uploadedImage) {
//       setShowPopup(true); // Show the custom popup for incomplete form
//       return;
//     }

//     setPurchasedPixels((prev) => [
//       ...prev,
//       ...selectedPixels.map((selection) => ({
//         ...selection,
//         websiteURL,
//         image: URL.createObjectURL(uploadedImage),
//       })),
//     ]);

//     // Show success toast message
//     toast.success("Pixels purchased successfully!");

//     setWebsiteURL("");
//     setUploadedImage(null);
//     setUploadCard(false);
//     setSelectedPixels([]);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setUploadedImage(file);
//   };

//   const handleMouseOver = (x, y) => {
//     const hovered = purchasedPixels.find(
//       (p) => x >= p.xMin && x <= p.xMax && y >= p.yMin && y <= p.yMax
//     );
//     if (hovered) setHoveredPixelInfo(hovered);
//     else setHoveredPixelInfo(null);
//   };

//   const handleMouseOut = () => {
//     setHoveredPixelInfo(null);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h2>Drag and Select Pixels, Then Upload</h2>

//       {/* Grid and pixel rendering */}
//       <div
//         className="relative grid"
//         style={{
//           gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
//           gridTemplateRows: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
//           gap: "1px",
//           backgroundColor: "#eee",
//           border: "1px solid #ccc",
//         }}
//         ref={gridRef}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       >
//         {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
//           const x = index % GRID_SIZE;
//           const y = Math.floor(index / GRID_SIZE);

//           const isSelected = selectedPixels.some(
//             (sel) =>
//               x >= sel.xMin && x <= sel.xMax && y >= sel.yMin && y <= sel.yMax
//           );
//           const isPurchased = purchasedPixels.some(
//             (p) => x >= p.xMin && x <= p.xMax && y >= p.yMin && y <= p.yMax
//           );

//           return (
//             <div
//               key={index}
//               className={`w-[${PIXEL_SIZE}px] h-[${PIXEL_SIZE}px] border border-gray-300 relative ${
//                 isPurchased
//                   ? "bg-white"
//                   : isSelected
//                   ? "bg-green-400/40"
//                   : "bg-white"
//               }`}
//               onMouseOver={() => handleMouseOver(x, y)}
//               onMouseOut={handleMouseOut}
//             />
//           );
//         })}

//         {purchasedPixels.map((purchase, idx) => (
//           <img
//             key={idx}
//             src={purchase.image}
//             alt="Uploaded"
//             className="absolute pointer-events-none"
//             style={{
//               left: purchase.xMin * PIXEL_SIZE,
//               top: purchase.yMin * PIXEL_SIZE,
//               width: (purchase.xMax - purchase.xMin + 1) * PIXEL_SIZE,
//               height: (purchase.yMax - purchase.yMin + 1) * PIXEL_SIZE,
//             }}
//           />
//         ))}

//         {/* Selection Box */}
//         {isDragging && selectionBox && (
//           <div
//             style={{
//               position: "absolute",
//               left: selectionBox.startX * PIXEL_SIZE,
//               top: selectionBox.startY * PIXEL_SIZE,
//               width:
//                 Math.abs(selectionBox.endX - selectionBox.startX) * PIXEL_SIZE,
//               height:
//                 Math.abs(selectionBox.endY - selectionBox.startY) * PIXEL_SIZE,
//             }}
//             className="border-2 border-blue-500 bg-blue-500/30"
//           />
//         )}

//         {hoveredPixelInfo && (
//           <div
//             className="absolute"
//             style={{
//               left: hoveredPixelInfo.xMin * PIXEL_SIZE,
//               top: hoveredPixelInfo.yMin * PIXEL_SIZE - 40,
//               backgroundColor: "#fff",
//               padding: "5px",
//               border: "1px solid #ccc",
//               boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
//               zIndex: 10,
//               fontSize: "12px",
//             }}
//           >
//             <strong>Website:</strong> {hoveredPixelInfo.websiteURL}
//           </div>
//         )}
//       </div>

//       {/* Upload Card */}
//       {uploadCard && (
//         <div className="absolute top-20 p-4 bg-white border border-gray-300 shadow-lg z-10 w-80">
//           {/* Close Button */}
//           <button
//             onClick={() => setUploadCard(false)}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
//           >
//             <span className="text-xl">&times;</span>
//           </button>
//           <div className="mb-4">
//             <label className="block mb-2">Website URL:</label>
//             <input
//               type="text"
//               value={websiteURL}
//               onChange={(e) => setWebsiteURL(e.target.value)}
//               className="w-full p-2 mb-3 border border-gray-300 rounded"
//               placeholder="Enter website URL"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Upload Image:</label>
//             <input type="file" onChange={handleFileChange} />
//           </div>
//           <button
//             onClick={handleUpload}
//             className="w-full p-3 bg-blue-500 text-white rounded cursor-pointer"
//           >
//             Upload
//           </button>
//         </div>
//       )}

//       {/* Custom Popup */}
//       {showPopup && (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 shadow-xl z-20 w-80">
//           <h4 className="text-red-500">Error!</h4>
//           <p>Please fill out all the fields correctly.</p>
//           <button
//             onClick={() => setShowPopup(false)}
//             className="mt-4 p-2 bg-gray-200 rounded"
//           >
//             Close
//           </button>
//         </div>
//       )}

//       {/* Toast Notifications Container */}
//       <ToastContainer />
//     </div>
//   );
// }

// export default ImageUploadGrid;
// import React, { useState, useRef } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function ImageUploadGrid() {
//   const GRID_SIZE = 30; // 100x100 grid
//   const PIXEL_SIZE = 40; // Each pixel is 50x50

//   const [selectedPixels, setSelectedPixels] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const [selectionBox, setSelectionBox] = useState(null);
//   const [uploadCard, setUploadCard] = useState(false);
//   const [websiteURL, setWebsiteURL] = useState("");
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [purchasedPixels, setPurchasedPixels] = useState([]); // Tracks purchased pixel areas
//   const [hoveredPixelInfo, setHoveredPixelInfo] = useState(null); // Info for hovered purchased pixel
//   const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

//   const gridRef = useRef();

//   const getMousePosition = (e) => {
//     const grid = gridRef.current.getBoundingClientRect();
//     return {
//       x: Math.floor((e.clientX - grid.left) / PIXEL_SIZE),
//       y: Math.floor((e.clientY - grid.top) / PIXEL_SIZE),
//     };
//   };

//   const handleMouseDown = (e) => {
//     const startPos = getMousePosition(e);
//     setSelectionBox({
//       startX: startPos.x,
//       startY: startPos.y,
//       endX: startPos.x,
//       endY: startPos.y,
//     });
//     setIsDragging(true);
//     setUploadCard(false);
//     setHoveredPixelInfo(null);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const currentPos = getMousePosition(e);
//     setSelectionBox((prev) => ({
//       ...prev,
//       endX: currentPos.x,
//       endY: currentPos.y,
//     }));
//   };

//   const handleMouseUp = () => {
//     if (!selectionBox) return;

//     const { startX, startY, endX, endY } = selectionBox;

//     const xMin = Math.min(startX, endX);
//     const xMax = Math.max(startX, endX);
//     const yMin = Math.min(startY, endY);
//     const yMax = Math.max(startY, endY);

//     // Check overlap with purchased pixels
//     for (let purchase of purchasedPixels) {
//       if (
//         xMin <= purchase.xMax &&
//         xMax >= purchase.xMin &&
//         yMin <= purchase.yMax &&
//         yMax >= purchase.yMin
//       ) {
//         setShowPopup(true); // Show the custom popup
//         setSelectionBox(null);
//         setIsDragging(false);
//         return;
//       }
//     }

//     // Add new selection to the existing selected pixels
//     setSelectedPixels((prev) => [...prev, { xMin, xMax, yMin, yMax }]);
//     setUploadCard(true);
//     setIsDragging(false);
//     setSelectionBox(null);
//   };

//   const handleUpload = () => {
//     if (!websiteURL || !uploadedImage) {
//       setShowPopup(true); // Show the custom popup for incomplete form
//       return;
//     }

//     setPurchasedPixels((prev) => [
//       ...prev,
//       ...selectedPixels.map((selection) => ({
//         ...selection,
//         websiteURL,
//         image: URL.createObjectURL(uploadedImage),
//       })),
//     ]);

//     // Show success toast message
//     toast.success("Pixels purchased successfully!");

//     setWebsiteURL("");
//     setUploadedImage(null);
//     setUploadCard(false);
//     setSelectedPixels([]);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setUploadedImage(file);
//   };

//   const handleMouseOver = (x, y) => {
//     const hovered = purchasedPixels.find(
//       (p) => x >= p.xMin && x <= p.xMax && y >= p.yMin && y <= p.yMax
//     );
//     if (hovered) setHoveredPixelInfo(hovered);
//     else setHoveredPixelInfo(null);
//   };

//   const handleMouseOut = () => {
//     setHoveredPixelInfo(null);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h2>Drag and Select Pixels, Then Upload</h2>

//       {/* Grid and pixel rendering */}
//       <div
//         className="relative grid"
//         style={{
//           gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
//           gridTemplateRows: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
//           gap: "1px",
//           backgroundColor: "#eee",
//           border: "1px solid #ccc",
//         }}
//         ref={gridRef}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       >
//         {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
//           const x = index % GRID_SIZE;
//           const y = Math.floor(index / GRID_SIZE);

//           const isSelected = selectedPixels.some(
//             (sel) =>
//               x >= sel.xMin && x <= sel.xMax && y >= sel.yMin && y <= sel.yMax
//           );
//           const isPurchased = purchasedPixels.some(
//             (p) => x >= p.xMin && x <= p.xMax && y >= p.yMin && y <= p.yMax
//           );

//           return (
//             <div
//               key={index}
//               className={`w-[${PIXEL_SIZE}px] h-[${PIXEL_SIZE}px] border border-gray-300 relative ${
//                 isPurchased
//                   ? "bg-white"
//                   : isSelected
//                   ? "bg-green-400/40"
//                   : "bg-white"
//               }`}
//               onMouseOver={() => handleMouseOver(x, y)}
//               onMouseOut={handleMouseOut}
//             />
//           );
//         })}

//         {purchasedPixels.map((purchase, idx) => (
//           <img
//             key={idx}
//             src={purchase.image}
//             alt="Uploaded"
//             className="absolute pointer-events-none"
//             style={{
//               left: purchase.xMin * PIXEL_SIZE,
//               top: purchase.yMin * PIXEL_SIZE,
//               width: (purchase.xMax - purchase.xMin + 1) * PIXEL_SIZE,
//               height: (purchase.yMax - purchase.yMin + 1) * PIXEL_SIZE,
//             }}
//           />
//         ))}

//         {/* Selection Box */}
//         {isDragging && selectionBox && (
//           <div
//             style={{
//               position: "absolute",
//               left: selectionBox.startX * PIXEL_SIZE,
//               top: selectionBox.startY * PIXEL_SIZE,
//               width:
//                 Math.abs(selectionBox.endX - selectionBox.startX) * PIXEL_SIZE,
//               height:
//                 Math.abs(selectionBox.endY - selectionBox.startY) * PIXEL_SIZE,
//             }}
//             className="border-2 border-blue-500 bg-blue-500/30"
//           />
//         )}

//         {hoveredPixelInfo && (
//           <div
//             className="absolute"
//             style={{
//               left: hoveredPixelInfo.xMin * PIXEL_SIZE,
//               top: hoveredPixelInfo.yMin * PIXEL_SIZE - 40,
//               backgroundColor: "#fff",
//               padding: "5px",
//               border: "1px solid #ccc",
//               boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
//               zIndex: 10,
//               fontSize: "12px",
//             }}
//           >
//             <strong>Website:</strong> {hoveredPixelInfo.websiteURL}
//           </div>
//         )}
//       </div>

//       {/* Upload Card */}
//       {uploadCard && (
//         <div className="absolute top-20 p-4 bg-white border border-gray-300 shadow-lg z-10 w-80">
//           {/* Close Button */}
//           <button
//             onClick={() => setUploadCard(false)}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
//           >
//             <span className="text-xl">&times;</span>
//           </button>
//           <div className="mb-4">
//             <label className="block mb-2">Website URL:</label>
//             <input
//               type="text"
//               value={websiteURL}
//               onChange={(e) => setWebsiteURL(e.target.value)}
//               className="w-full p-2 mb-3 border border-gray-300 rounded"
//               placeholder="Enter website URL"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Upload Image:</label>
//             <input type="file" onChange={handleFileChange} />
//           </div>
//           <button
//             onClick={handleUpload}
//             className="w-full p-3 bg-blue-500 text-white rounded cursor-pointer"
//           >
//             Upload
//           </button>
//         </div>
//       )}

//       {/* Custom Popup */}
//       {showPopup && (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 shadow-xl z-20 w-80">
//           <h4 className="text-red-500">Error!</h4>
//           <p>Please fill out all the fields correctly.</p>
//           <button
//             onClick={() => setShowPopup(false)}
//             className="mt-4 p-2 bg-gray-200 rounded"
//           >
//             Close
//           </button>
//         </div>
//       )}

//       {/* Toast Notifications Container */}
//       <ToastContainer />
//     </div>
//   );
// }

// export default ImageUploadGrid;
