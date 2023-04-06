import imgExample from "../assets/images/rojo.png";
import "../stylesheets/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={imgExample} alt="ejemplo" className="logoKusy"></img>

        <ul>
          {" "}
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#proyecto"> Proyecto </a>
          </li>
          <li>
            <a href="#capacitacion">Capacitacion</a>
          </li>
          <li>
            <a href="#investigacion">Investigacion</a>
          </li>
          <li>
            <a href="/comprar">Comprar</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
