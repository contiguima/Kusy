import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../stylesheets/landing.css";
import imgExample from "../assets/images/rojo.png";

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
      <section className="proyecto" id="proyecto">
        <div className="proyectoProductivo">
          <h1>Proyecto productivo</h1>
          <div className="proyectoCard">
            <div className="proyectoCardText">
              <h2>Linea de ropa interior</h2>
              <ul>
                <li> Producido artesanalmente en el Barrio Las Tunas</li>
                <li> Diseños propios </li>
                <li> Talles grandes </li>
                <li>Práctico y cómodo</li>
              </ul>
              <button className="verProductosBtn"> Ver Productos</button>
            </div>

            <div className="proyectoCardImage">
              <div className="proyectoCardImageRow">
                <div className="proyectoImagen"></div>
                <div className="proyectoImagen"></div>
              </div>
              <div className="proyectoCardImageRow">
                <div className="proyectoImagen"></div>
                <div className="proyectoImagen"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="proyectoMaquillaje">
          <div className="proyectoCard">
            <div className="proyectoMaquillajeImage"></div>
            <div className="proyectoCardText">
              <h2>Maquillaje Profesional</h2>
              <ul>
                <li> Cumpleaños </li>
                <li> Casamientos </li>
                <li> De día </li>
                <li> Todos los eventos </li>
              </ul>
              <button className="infoBtn"> Más información</button>
            </div>
          </div>
        </div>
      </section>
      <section className="capacitacion" id="capacitacion">
        <div className="capacitacionText">
          <h1> Capacitación</h1>
          <p>
            En Kusy, tuvimos que desarrollar el oficio de la costurería para
            poder emprender nuestro proyecto productivo, pero también decidimos
            realizar capacitaciones que amplíen nuestro potencial
          </p>
        </div>
        <div className="capacitacionImages">
          <img
            src={imgExample}
            alt="ejemplo"
            className="capacitacionImage"
          ></img>
          <img
            src={imgExample}
            alt="ejemplo"
            className="capacitacionImage"
          ></img>
        </div>

        <div className="capacitacionText">
          <p>
            <em>Creatividad, inteligencia colectiva, actividades lúdicas</em>
          </p>
          <p>
            <em>Participación de conferencias y eventos</em>
          </p>
        </div>
      </section>
      <section className="investigacion" id="investigacion">
        <div className="investigacionText">
          <h1>Investigacion</h1>
          <p>
            Kusy surge originariamente de una investigación social que lleva 6
            años <br></br> acerca de la creación de capital social en
            comunidades
          </p>
        </div>
        <div className="investigacionColumns">
          <img
            src={imgExample}
            alt="ejemplo"
            className="investigacionImage"
          ></img>
          <div className="investigacionText">
            <p>
              La idea es entender como, a partir de actividades colectivas,
              enmarcadas dentro de lo que se llama{" "}
              <span>inteligencia colectiva</span>, se puede crear{" "}
              <span>capital social</span>
            </p>
            <p>
              Las actividades son diversas y multifacéticas de tal manera de
              lograr la mayor creatividad en el grupo
            </p>
          </div>
        </div>
        <div className="investigacionMensaje">
          <p>
            Kusy promueve lo que tenemos todas en común y que nos puede cambiar
            la vida: <b>NUESTRO POTENCIAL</b>
          </p>
        </div>
      </section>
      <section className="frases">
        <h1>Nosotras sobre Kusy </h1>
        <div className="frasesColumns">
          <img src={imgExample} alt="ejemplo" className="frasesImage"></img>
          <div className="frasesText">
            <h2>Nombre</h2>
            <p>
              {" "}
              Reflexión corta sobre el tiempo en Kusy, mensaje para los jóvenes,
              experiencia emprendiendo, etc
            </p>
          </div>
        </div>
        <div className="frasesColumns">
          <img src={imgExample} alt="ejemplo" className="frasesImage"></img>
          <div className="frasesText">
            <h2>Nombre</h2>
            <p>
              {" "}
              Reflexión corta sobre el tiempo en Kusy, mensaje para los jóvenes,
              experiencia emprendiendo, etc
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
