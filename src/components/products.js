import React from "react";
import "./assets/css/styles.css";

import img1 from "./assets/images/1.jpeg";
import img2 from "./assets/images/2.jpeg";
import img3 from "./assets/images/3.jpeg";
import img4 from "./assets/images/4.jpeg";
import { Link } from "react-router-dom";

function ProductsList({ title }) {
    const products = [
        { src: img1, caption: "محصول 1" },
        { src: img2, caption: "محصول 2" },
        { src: img3, caption: "محصول 3" },
        { src: img4, caption: "محصول 4" },

    ];



    return (
        <div className="products-container">
            
            <h2 className="products-title">{title}</h2>

            <div className={`products-grid`}>
                {products.map((product, index) => (
                    
                    <div className="card" key={index}>
                        <div className="card-container">
                            <div className="card-img-box">
                                <img src={product.src} alt={product.caption} />
                            </div>

                            <div className="card-text-box">
                                <h3>{product.caption}</h3>
                                <div className="card-stars-box">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <h4 className="card-price">60,450,000 تومان</h4>

                                <button className="btn-buy">
                                    <span class="new"><i className="fa-solid fa-cart-shopping text-xl"></i></span>
                                    <span class="old">افزودن به سبد خرید</span>
                                </button>

                            </div>  
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link to="/products" className="btn-more">بیشتر</Link>
            </div>

        </div>

    );
}

export default ProductsList;
