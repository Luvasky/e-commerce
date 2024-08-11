import * as lib from "../libraries/EntryPoint/libraries";
import "../styles/Arribals/Styles.css";

const Selling = () => {
  const listCard = [
    {
      name: "Vertical Striped Shirt",
      image: lib.shirt4,
      price: "$212",
    },
    {
      name: "Courage Graphic T-shirt",
      image: lib.shirt5,
      price: "$145",
    },
    {
      name: "Loose Fit Bermuda Shorts",
      image: lib.short,
      price: "$80",
    },
    {
      name: "Faded Skinny Jeans",
      image: lib.jean2,
      price: "$210",
    },
  ];

  return (
    <div className="a-main-container">
      <div className="a-t-c">
        <span className="a-t">TOP SELLINGS</span>
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

export default Selling;
