import "../styles/ClotheCard/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";

const ClotheCard = ({ name, image, price }) => {
  return (
    <div className="c-main-contianer">
      <div className="c-i-c">
        <img src={image} className="c-i"></img>
      </div>
      <div className="c-t-c">
        <span className="c-t">{name}</span>
        <div className="c-starts">
          <lib.StarRating></lib.StarRating>
        </div>
        <div className="c-p">{price}</div>
      </div>
    </div>
  );
};

export default ClotheCard;
