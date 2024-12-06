import React from "react";
import img2 from "./assets/images/ads.png";
import "./assets/css/showProduct.css";

const ShowProduct = () => {

    return(
        <React.Fragment>
            <div className="showProduct-container">
                <img src={img2} alt="show1" />
                <img src={img2} alt="show2" />
            </div>
        </React.Fragment>
    );
};
export default ShowProduct;

