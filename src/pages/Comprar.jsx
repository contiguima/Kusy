import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../stylesheets/comprar.css";
import Producto from "../components/Producto";
import Slider from "../components/Slider";

const productosArr = [
  <Producto
    nombre="Producto 1"
    talles="talles ejemplo"
    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nunc, volutpat eu tellus non."
    imagen="https://topitop.vteximg.com.br/arquivos/ids/244647-1000-1248/1851116_1jpg.jpg?v=637871905424770000"
  />,
  <Producto
    nombre="Producto 2"
    talles="talles ejemplo"
    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nunc, volutpat eu tellus non."
    imagen="https://static.dafiti.com.co/p/calvin-klein-3794-8809112-1-catalog-new.jpg"
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
  