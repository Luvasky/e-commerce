import "../styles/brands/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries.js";
const Brands = () => {
  return (
    <div className="b-main-container">
      <div className="p-s-c">
        <div className="b-c-b">
          <div className="item">
            <img src={lib.versage}></img>
          </div>
        </div>
        <div className="b-c-b">
          <div className="item">
            <img src={lib.zara}></img>
          </div>
        </div>
        <div className="b-c-b">
          <div className="item">
            <img src={lib.gucci}></img>
          </div>
        </div>
        <div className="b-c-b">
          <div className="item">
            <img src={lib.prada}></img>
          </div>
        </div>
        <div className="b-c-b">
          <div className="item">
            <img src={lib.calvin}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
