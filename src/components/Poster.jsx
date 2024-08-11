import "../styles/poster/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";
const Poster = () => {
  return (
    <div className="p-main-container">
      <div className="p-left-section">
        <div className="p-m-1">
          FIND CLOTHE<br></br>
          THAT MATCHES<br></br>
          YOUR STYLES
        </div>
        <div className="p-m-2">
          <div className="p-c-m-2">
            Browse through our diverse range of meticulously crafted garments,
            designed<br></br> to bring out your individuality and cater to your
            sense of style.
          </div>
        </div>
        <div className="p-button-container">
          <div className="p-button-second-container">
            <button className="p-button-buy">
              <img src={lib.cart2} className="p-cart-button"></img>
              <span>Shop Now</span>
            </button>
          </div>
        </div>
        <div className="p-container-numbers">
          <div className="p-second-container">
            <div className="p-c-n-1">
              <span className="p-n-1">200 +</span>
              <br></br>
              <div className="p-m-n-1">International Brands</div>
            </div>
            <div className="p-c-n-2">
              <span className="p-n-2">20,00 +</span>
              <br></br>
              <span className="p-m-n-2">High-Quality Products</span>
            </div>
            <div className="p-c-n-3">
              <span className="p-n-3">30,000 +</span>
              <br></br>
              <span className="p-m-n-3"> Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-right-section">
        <img src={lib.star1} className="p-s-1"></img>
        <img src={lib.star2} className="p-s-2"></img>
        <img src={lib.people} alt="" className="p-p-image" />
        <img src={lib.people} alt="" className="p-p2-image" />
      </div>
    </div>
  );
};

export default Poster;
