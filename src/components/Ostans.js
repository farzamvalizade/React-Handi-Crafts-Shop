import React, { useState } from "react";
import "./assets/css/card.css";

import img1 from "./assets/images/0-1.jpg"
import img2 from "./assets/images/0-2.jpg"
import img3 from "./assets/images/0-3.jpg"
import img4 from "./assets/images/0-4.jpg"

const items = [
  { id: 1, name: "استان ۱", image: img1, link: "#" },
  { id: 2, name: "استان ۲", image: img2, link: "#" },
  { id: 3, name: "استان ۳", image: img3, link: "#" },
  { id: 4, name: "استان ۴", image: img4, link: "#" },
  { id: 5, name: "استان ۵", image: img1, link: "#" },
  { id: 6, name: "استان ۶", image: img2, link: "#" },
  { id: 7, name: "استان ۷", image: img3, link: "#" },
  { id: 8, name: "استان ۸", image: img4, link: "#" },
  { id: 9, name: "استان ۹", image: img1, link: "#" },
  { id: 10, name: "استان ۱۰", image: img2, link: "#" },
  { id: 11, name: "استان ۱۱", image: img3, link: "#" },
  { id: 12, name: "استان ۱۲", image: img4, link: "#" },
  { id: 13, name: "استان ۱۳", image: img1, link: "#" },
  { id: 14, name: "استان ۱۴", image: img2, link: "#" },
  { id: 15, name: "استان ۱۵", image: img3, link: "#" },
  { id: 16, name: "استان ۱۶", image: img4, link: "#" },
  { id: 17, name: "استان ۱۷", image: img1, link: "#" },
  { id: 18, name: "استان ۱۸", image: img2, link: "#" },
  { id: 19, name: "استان ۱۹", image: img3, link: "#" },
  { id: 20, name: "استان ۲۰", image: img4, link: "#" },
  
  { id: 21, name: "استان 21", image: img1, link: "#" },
  { id: 22, name: "استان 22", image: img2, link: "#" },

  { id: 23, name: "استان 23", image: img3, link: "#" },
  { id: 24, name: "استان 24", image: img4, link: "#" },
];

const ImageList = () => {
  const initialVisibleCount = 12;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, items.length));
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.slice(0, visibleCount).map((item) => (
          <a
            href={item.link}
            key={item.id}
            className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-lg bg-white hover:shadow-xl hover:-translate-y-1 transform transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-blue-500"
            />
            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {visibleCount < items.length && (
          <button
            className="btn-more hover:bg-blue-500"
            onClick={handleLoadMore}
          >
            بیشتر
          </button>
        )}
        {visibleCount > initialVisibleCount && (
          <button
            className="btn-less hover:bg-red-600"
            onClick={handleShowLess}
          >
            کمتر
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageList;
