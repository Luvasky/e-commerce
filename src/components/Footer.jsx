import "../styles/Footer/Styles.css";
import * as lib from "../libraries/EntryPoint/libraries";

const Footer = () => {
  return (
    <div className="f-main-container">
      <div className="f-b-b">
        <div className="f-r-b">
          <div className="f-l-s">
            <span>STAY UPTO DATE ABOUT OUR LATEST OFFERS</span>
          </div>
          <div className="f-r-s">
            <input
              className="f-f-in"
              placeholder="Enter your email address"
            ></input>
            <button className="f-s-in f-btn">Subscribe Newsletter</button>
          </div>
        </div>
      </div>

      <div className="f-c-s-m">
        <div className="c-l-n">
          <img src={lib.linkedin} alt="LinkedIn" />
          <a
            href="https://www.linkedin.com/in/luvasky-hern%C3%A1ndez-ram%C3%ADrez-37949b316/"
            target="_blank"
            className="f-n"
          >
            Luvasky Hernández Ramírez
          </a>
        </div>

        <div className="c-l-n">
          <img src={lib.github} alt="GitHub" />
          <a
            href="https://github.com/LuvaskyHernandez"
            target="_blank"
            className="f-n"
          >
            LuvaskyHernandez
          </a>
        </div>

        <div className="c-l-n">
          <img src={lib.gmail} alt="Gmail" />
          <a
            href="mailto:luvaskyhernandezramirez28@gmail.com?subject=Contacto%20desde%20la%20web&body=Hola%20Luvasky,"
            className="f-n"
          >
            luvaskyhernandezramirez28@gmail.com
          </a>
        </div>

        <div className="c-l-n">
          <img src={lib.whatsapp} alt="WhatsApp" />
          <a
            href="https://api.whatsapp.com/send?phone=573045450054&text=Hola%20Luvasky,"
            target="_blank"
            className="f-n"
          >
            +57 304 545 0054
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
