import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../stylesheets/comprar.css";
import Producto from "../components/Producto";
import Slider from "../components/Slider";
import productosImagen1 from "../assets/images/productosImagen1.png";
import productosImagen2 from "../assets/images/productosImagen2.png";


const productosArr = [
  <Producto
    nombre="Producto 1"
    talles="Todos los talles"
    texto="Simple, cómodo, para usar en el día a día. Producción artesanal y de calidad. Varios colores."
    imagen= {productosImagen1}
  />,
  <Producto
    nombre="Producto 2"
    talles="talles ejemplo"
    texto="Simple, cómodo, para usar en el día a día. Producción artesanal y de calidad. Varios colores."    imagen={productosImagen2}
  />
];
const Comprar = () => {
    return (
      <>
        <Navbar/>
        <div className="comprar">
          <h1>Nuestros productos</h1>
          <Slider productos={productosArr} />
        </div>
        <Footer/>
      </>
    );
  };
  
  export default Comprar;
  