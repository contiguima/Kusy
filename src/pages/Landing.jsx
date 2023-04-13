import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../stylesheets/landing.css";
import imgExample from "../assets/images/rojo.png";
import alejandra from "../assets/images/alejandra.png";
import alicia from "../assets/images/alice.png";
import veronica from "../assets/images/veronica.png";
import paca from "../assets/images/paca.png";
import reina from "../assets/images/reina.png";
import wpp from "../assets/logos/wpp.png"

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
        <button className="homeBtn"> <a href="#nosotros" >¡Quiero saber más! </a></button>
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
              <button className="verProductosBtn"><a href="/comprar">Ver Productos</a> </button>
            </div>

            <div className="proyectoCardImage">
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
              <button className="infoBtn"> <img src={wpp} alt="logo whatsapp"/> Más información</button>
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
          <h1>Investigación</h1>
          <p>
            Kusy surge originariamente de una investigación social que lleva 6
            años acerca de la creación de capital social en
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
          <img src={alejandra} alt="alejandra" className="frasesImage"></img>
          <div className="frasesText">
            <h2>Alejandra Vega</h2>
            <p>
             "Para mi Kusy fue el comienzo del 'si se puede'. De darme cuenta de que las respuestas están en mi y no en otra persona. De darme cuenta del poder que tenía para ayudar a las demás. Fue descubrirme como empresaria, de hacer algo que me gusta y que permite empoderar a las mujeres. Kusy es decirles a las mujeres que los sueños se hacen realidad; que podemos soñar juntas y crear nuestro propio emprendimiento."
            </p>
          </div>
        </div>
        <div className="frasesColumns">
        <div className="frasesText">
            <h2>Alicia Siles</h2>
            <p>
              "La verdad es que me sentía muerta en vida. Era casi muda. Tenía terror a las críticas de los demás. Tenía miedo de pasar vergüenza. Kusy cambió mi manera de ver. Entendí que las dificultades son oportunidades. Con cada mujer que llegó pudimos edificar algo. El abrazo de hermandad y acompañamiento que le dieron a mi alma rota fue la clave para enraizarme en esta nueva etapa de mi vida."
            </p>
          </div>
          <img src={alicia} alt="alicia" className="frasesImage"></img>
          
        </div>
        <div className="frasesColumns">
          <img src={veronica} alt="veronica" className="frasesImage"></img>
          <div className="frasesText">
            <h2>Verónica Juárez</h2>
            <p>
              "Kusy en mi vida ha sido un increíble aprendizaje. Vimos como muchas situaciones fueron derivando en soluciones y nuevas oportunidades. Tuvimos la posibilidad de conocer nuevos pensamientos y grupos que nos hicieron reflexionar e incorporarlo en nuestras vidas. Amor para todas por cada momento compartido, por cada palabra, por cada brazo, por cado momento que fui escuchada y aconsejada."
            </p>
          </div>
        </div>
        <div className="frasesColumns">
        <div className="frasesText">
            <h2>Paca Antezana</h2>
            <p>
              "Adoré cuando en mi vida entró Kusy porque conocí muchas personas optimistas, sencillas y positivas, que ponen el corazón en cada una de sus acciones. Son personas que no piden nada a cambio, que te acarician el alma y enriquecen tu vida dándote confianza, compromiso y oportunidades. Pero, sobre todo, mucho amor y humildad."
            </p>
          </div>
          <img src={paca} alt="paca" className="frasesImage"></img>
          
        </div>
        <div className="frasesColumns">
          <img src={reina} alt="reina" className="frasesImage"></img>
          <div className="frasesText">
            <h2>Reina Castillo</h2>
            <p>
              "Kusy apareció en mi vida para hacerme ver, para dejar de estar escondida esperando que algo suceda. Me sentí apoyada para despertarme, para lanzar a esa emprendedora que había en mi y estaba tapada. Lo más lindo es que, cuando ya una se siente con esa autonomía, quiere transmitirlo a otras mujeres para que logren sus objetivos."
            </p>
          </div>
        </div>
        
        
      </section>
      <Footer />
    </>
  );
};

export default Landing;
