import * as lib from "../libraries/EntryPoint/libraries";
import "../styles/Arribals/Styles.css";

const Arrivals = () => {
  const listCard = [
    {
      name: "T-Shirt With Tape Details",
      image: lib.shirt,
      price: "$120",
    },
    {
      name: "Skinny Fit Jeans",
      image: lib.jean,
      price: "$240",
    },
    {
      name: "Checkered Shirt",
      image: lib.shirt2,
      price: "$180",
    },
    {
      name: "Sleeve Striped T-shirt",
      image: lib.shirt3,
      price: "$130",
    },
  ];

  return (
    <div className="a-main-container">
      <div className="a-t-c">
        <span className="a-t">NEW ARRIVALS</span>
      </div>
      <div className="a-c-c">
        <div className="a-s-c-c">
          {listCard.map((item, index) => (
            <lib.ClotheCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
            ></lib.ClotheCard>
          ))}
        </div>
      </div>
      <div className="a-b-c">
        <button className="a-btn">View all</button>
      </div>
      <div className="a-l"></div>
    </div>
  );
};

export default Arrivals;
