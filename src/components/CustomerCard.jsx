import React from "react";
import "../styles/CustomerCard/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomerCard() {
  const customers = [
    {
      name: "Sara M.",
      message:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Sara M.",
      message:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Sara M.",
      message:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Sara M.",
      message:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Sara M.",
      message:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="cu-main-container">
      <div className="cu-t">OUR HAPPY CUSTOMERS</div>
      <div className="slider-container">
        <Slider {...settings}>
          {customers.map((item) => (
            <div className="cu-c-400px">
              <div className="cu-m-c-c">
                <div className="cu-c-s">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="cu-star">
                      &#9733;
                    </span>
                  ))}
                </div>
                <div className="cu-n-v">
                  <span className="cu-n">{item.name}</span>
                  <img src={lib.verify} alt="" className="cu-i" />
                </div>
                <div className="cu-r">{item.message}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomerCard;
