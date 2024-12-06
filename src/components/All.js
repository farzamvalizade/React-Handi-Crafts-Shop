import React, { useState } from "react";
import "./assets/css/card.css"; 
import "./assets/css/styles.css";
import img1 from "./assets/images/1.jpeg";
import img2 from "./assets/images/2.jpeg";
import img3 from "./assets/images/3.jpeg";
import img4 from "./assets/images/4.jpeg";
const products = [
  { id: 1, name: "محصول ۱", price: "۲۰۰,۰۰۰ تومان", image: img1, rating: 4 },
  { id: 2, name: "محصول ۲", price: "۳۰۰,۰۰۰ تومان", image: img2, rating: 5 },
  { id: 3, name: "محصول ۳", price: "۱۵۰,۰۰۰ تومان", image: img3, rating: 3 },
  { id: 4, name: "محصول ۴", price: "۴۰۰,۰۰۰ تومان", image: img4, rating: 5 },
  { id: 5, name: "محصول ۵", price: "۵۰۰,۰۰۰ تومان", image: img1, rating: 2 },
  { id: 6, name: "محصول ۶", price: "۶۰۰,۰۰۰ تومان", image: img2, rating: 4 },
  { id: 7, name: "محصول ۷", price: "۷۰۰,۰۰۰ تومان", image: img3, rating: 5 },
  { id: 8, name: "محصول ۸", price: "۸۰۰,۰۰۰ تومان", image: img4, rating: 3 },
  { id: 9, name: "محصول ۹", price: "۹۰۰,۰۰۰ تومان", image: img1, rating: 4 },
  { id: 10, name: "محصول ۱۰", price: "۱,۰۰۰,۰۰۰ تومان", image: img2, rating: 5 },
  { id: 11, name: "محصول ۱۱", price: "۱۱۰,۰۰۰ تومان", image: img3, rating: 2 },
  { id: 12, name: "محصول ۱۲", price: "۲۵۰,۰۰۰ تومان", image: img4, rating: 3 },
  { id: 13, name: "محصول ۱۳", price: "۳۰۰,۰۰۰ تومان", image: img1, rating: 4 },
  { id: 14, name: "محصول ۱۴", price: "۴۵۰,۰۰۰ تومان", image: img2, rating: 5 },
  { id: 15, name: "محصول ۱۵", price: "۶۰۰,۰۰۰ تومان", image: img3, rating: 3 },
];

const AllProduct = () => {
  const initialVisibleCount = 6; 
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, products.length));
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount); 
  };

  return (
    <div className="products-container">
      <h2 className="products-title">لیست محصولات</h2>
      <div className="products-grid">
        {products.slice(0, visibleCount).map((product) => (
          <div className="card" key={product.id}>
            <div className="card-container">
              <div className="card-img-box">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-text-box">
                <h3>{product.name}</h3>
                <div className="card-stars-box">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i
                      key={index}
                      className={`fa ${
                        index < product.rating ? "fa-star" : "fa-star-o"
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="card-price">{product.price}</p>
                <button className="btn-buy">
                  <span className="old">خرید</span>
                  <span className="new">افزودن</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {visibleCount < products.length && (
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

export default AllProduct;
