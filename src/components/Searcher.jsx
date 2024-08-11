import "../styles/Home/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";

const Searcher = () => {
  return (
    <div className="n-container-searcher">
      <img src={lib.search} className="n-img-search"></img>
      <input className="n-input" placeholder="Search for products..."></input>
    </div>
  );
};

export default Searcher;
