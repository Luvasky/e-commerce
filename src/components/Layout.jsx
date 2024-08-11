import "../styles/Layout/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";

const Layout = () => {
  return (
    <div className="l-main-container">
      <div className="l-s-c">
        <span className="l-t">BROWSE BY DRESS STYLE</span>
        <div className="i-c-i">
          <div className="l-c-i-1">
            <img src={lib.casual} alt="" className="l-i-1" />
          </div>
          <div className="l-c-i-2">
            <img src={lib.formal} alt="" className="l-i-2" />
          </div>
          <div className="l-c-i-3">
            <img src={lib.party} alt="" className="l-i-3" />
          </div>
          <div className="l-c-i-4">
            <img src={lib.gym} alt="" className="l-i-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
