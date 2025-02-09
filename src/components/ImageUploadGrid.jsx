import React, { useState, useRef } from "react";

const GRID_SIZE = 100;
const PIXEL_SIZE = 10;
const PRICE_PER_PIXEL = 1;

function ImageUploadGrid() {
  const [gridData, setGridData] = useState(
    Array(GRID_SIZE * GRID_SIZE).fill(null)
  );
  const [selectedPixels, setSelectedPixels] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [selectionBox, setSelectionBox] = useState(null);
  const [image, setImage] = useState(null);
  const [website, setWebsite] = useState("");
  const [hoveredPixel, setHoveredPixel] = useState(null);
  const gridRef = useRef(null);

  const calculateIndex = (x, y) => {
    const rect = gridRef.current.getBoundingClientRect();
    const col = Math.floor((x - rect.left) / PIXEL_SIZE);
    const row = Math.floor((y - rect.top) / PIXEL_SIZE);
    if (col < 0 || col >= GRID_SIZE || row < 0 || row >= GRID_SIZE) return -1;
    return row * GRID_SIZE + col;
  };

  const calculateRectangleSelection = (start, end) => {
    const startCol = Math.min(start.col, end.col);
    const endCol = Math.max(start.col, end.col);
    const startRow = Math.min(start.row, end.row);
    const endRow = Math.max(start.row, end.row);

    const selected = [];
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        selected.push(row * GRID_SIZE + col);
      }
    }
    return selected;
  };

  const handleMouseDown = (e) => {
    if (!gridRef.current) return;
    const index = calculateIndex(e.clientX, e.clientY);
    if (index === -1 || gridData[index]) return;

    const rect = gridRef.current.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / PIXEL_SIZE);
    const row = Math.floor((e.clientY - rect.top) / PIXEL_SIZE);

    setSelectionBox({ start: { row, col }, end: { row, col } });
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging || !gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / PIXEL_SIZE);
    const row = Math.floor((e.clientY - rect.top) / PIXEL_SIZE);

    setSelectionBox((prev) => ({
      ...prev,
      end: { row, col },
    }));
  };

  const handleMouseUp = () => {
    if (!dragging || !selectionBox) return;

    const selected = calculateRectangleSelection(
      selectionBox.start,
      selectionBox.end
    );
    const filteredSelection = selected.filter((index) => !gridData[index]); // Exclude already selected pixels

    setSelectedPixels(filteredSelection);
    setSelectionBox(null);
    setDragging(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmPurchase = () => {
    if (!selectedPixels.length || !image || !website) return;

    const newGridData = [...gridData];
    selectedPixels.forEach((index) => {
      newGridData[index] = { image, website };
    });

    setGridData(newGridData);
    setSelectedPixels([]);
    setImage(null);
    setWebsite("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Upload Card */}
      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h4>Upload Image for Selected Area</h4>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <input
          type="text"
          value={website}
          placeholder="Enter Website URL"
          onChange={(e) => setWebsite(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "5px",
            width: "100%",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={confirmPurchase}
          style={{
            padding: "10px",
            background: "blue",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Confirm Purchase
        </button>
        <p>
          Selected Pixels: {selectedPixels.length} ($
          {selectedPixels.length * PRICE_PER_PIXEL})
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
          position: "relative",
          userSelect: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setDragging(false)}
      >
        {gridData.map((data, index) => (
          <div
            key={index}
            style={{
              width: `${PIXEL_SIZE}px`,
              height: `${PIXEL_SIZE}px`,
              position: "relative",
              overflow: "hidden",
              border: data ? "none" : "1px solid #ddd",
              background: selectedPixels.includes(index)
                ? "rgba(0, 128, 255, 0.5)"
                : data
                ? "transparent"
                : "#f0f0f0",
            }}
            onMouseEnter={() => data && setHoveredPixel(data)}
            onMouseLeave={() => setHoveredPixel(null)}
          >
            {data && (
              <img
                src={data.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
              />
            )}
          </div>
        ))}

        {/* Hover Card */}
        {hoveredPixel && (
          <div
            style={{
              position: "absolute",
              top: `${hoveredPixel.y}px`,
              left: `${hoveredPixel.x}px`,
              background: "#fff",
              border: "1px solid #ccc",
              padding: "5px",
              zIndex: 1000,
              pointerEvents: "none",
            }}
          >
            Website: {hoveredPixel.website}
          </div>
        )}

        {/* Selection Box */}
        {selectionBox && (
          <div
            style={{
              position: "absolute",
              top: `${selectionBox.start.row * PIXEL_SIZE}px`,
              left: `${selectionBox.start.col * PIXEL_SIZE}px`,
              width: `${
                (selectionBox.end.col - selectionBox.start.col + 1) * PIXEL_SIZE
              }px`,
              height: `${
                (selectionBox.end.row - selectionBox.start.row + 1) * PIXEL_SIZE
              }px`,
              backgroundColor: "rgba(0, 128, 255, 0.2)",
              border: "1px dashed blue",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ImageUploadGrid;
