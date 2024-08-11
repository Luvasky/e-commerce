import "../styles/Home/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";

const Home = () => {
  return (
    <div className="main-container">
      {/* Promo start*/}
      <div className="h-container-promo">
        <div className="h-m1-promo">
          Sing up get 20% off your first order.
          <span href="" className="h-promo-link">
            Sing Up Now
          </span>
        </div>
        <div className="h-close-promo">X</div>
      </div>
      <lib.Navbar></lib.Navbar>
      <lib.Poster></lib.Poster>
      <lib.Brands></lib.Brands>
      <lib.Arrivals></lib.Arrivals>
      <lib.Selling></lib.Selling>
      <lib.Layout></lib.Layout>
      <lib.CustomerCard></lib.CustomerCard>
      <lib.Footer></lib.Footer>
    </div>
  );
};

export default Home;
