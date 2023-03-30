import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../stylesheets/landing.css";

const Landing = () => {
  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <h1>
          {" "}
          Kusy, un proyecto social productivo que desarrolla el potencial de
          mujeres
        </h1>
        <button className="homeBtn"> ¡Quiero saber más! </button>
      </section>
      <section className="nosotros" id="nosotros">
        <div className="nosotrosCopy">
          <h1> Kusy, </h1>
          <h2>
            {" "}
            del qechua <em>kusilata</em>: <span>pueblo feliz</span>
          </h2>
          <p>
            Somos un proyecto social productivo, apolítico, no-ideológico
            centrado en el desarrollo del potencial de comunidades de mujeres a
            través de acciones colectivas y colaborativas intra-comunidad e
            inter-comunidad
          </p>
        </div>
        <div className="nosotrosImagenes">
          <div className="nosotrosImagen"></div>
          <div className="nosotrosImagen"></div>
          <div className="nosotrosImagen"></div>
        </div>
      </section>
      <section className="proyecto" id="proyecto"></section>
      <section className="capacitacion" id="capacitacion"></section>
      <section className="investigacion" id="investigacion"></section>
      <Footer />
    </>
  );
};

export default Landing;
