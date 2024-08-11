import "../styles/Home/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";
const options = [
  {
    className: "n-c-s",
    option: "Shop",
  },

  {
    className: "n-c-o",
    option: "On sale",
  },

  {
    className: "n-c-n",
    option: "New Arrivals",
  },

  {
    className: "n-c-b",
    option: "Brand",
  },
];

const Navbar = () => {
  return (
    <div className="n-main-container">
      <div className="n-container-logo">
        <img src={lib.menu} className="n-menu"></img>
        <span>SHOP.CO</span>
      </div>
      <div className="n-container-menu">
        {options.map((item, index) =>
          item.option !== "Shop" ? (
            <div key={index}>
              <span>{item.option}</span>
            </div>
          ) : (
            <div key={index}>
              <span>
                {item.option}
                <img src={lib.arrow}></img>
              </span>
            </div>
          )
        )}
      </div>
      <lib.Searcher></lib.Searcher>
      <div className="n-cart">
        <div className="n-c-cart">
          <img src={lib.search2} alt="" className="n-search" />
          <img src={lib.cart}></img>
          <img src={lib.profile}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
