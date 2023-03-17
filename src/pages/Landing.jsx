import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Landing = () =>{
    return <>
    <Navbar/>
    <section className="home" id="home"></section>
    <section className="nosotros" id="nosotros"></section>
    <section className="proyecto" id= "proyecto"></section>
    <section className="capacitacion" id="capacitacion"></section>
    <section className="investigacion" id="investigacion"></section>
    <Footer/>
    </>

}

export default Landing;