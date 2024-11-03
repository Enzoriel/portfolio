import "./App.css";

function App() {
  return (
    <div className="html">
      <nav className="nav">
        <section className="logo class-box">
          <a>
            <img className="logo-img" src="../../public/my-logo.svg" />
          </a>
        </section>

        <ul className="nav-list class-box">
          <li className="nav-item">
            <a>Inicio</a>
          </li>
          <li className="nav-item">
            <a>Proyectos</a>
          </li>
          <li className="nav-item">
            <a>Tecnologías</a>
          </li>
          <li className="nav-item">
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
      <section className="info class-box">
        <div className="box-img">
          <img className="img" src="../../public/logo-img.png" />
        </div>
        <div className="description">
          <p>Hola, soy Enzorieldev.</p>
          <p>Desarrollador front-end apasionado por crear experiencias interactivas y funcionales en la web. </p>
          <p>Tengo experiencia construyendo interfaces de usuario dinámicas y reactivas.</p>
          <p>
            Mi enfoque está en optimizar cada proyecto para brindar una experiencia fluida y atractiva para los
            usuarios.
          </p>
        </div>
      </section>
      <section className="proyect class-box">
        <img src="../../public/proyect.svg" className="proyect-img" />
        <div>
          <div className="proyect-list">
            <div className="proyect-item">
              <h3>Valorant API</h3>
              <img src="../../public/Valorant 1.png" />
              <p>
                Count the time your children spend on activities like homework, chores and exercise and convert it into
                screen time. I created this with Vue.js and the Howlr library to add the interactive clock sounds. It
                can be installed as a progressive web application. The git repository for this one is private at the
                moment.
              </p>
              <p>Tecnoligias</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tecnologies class-box">
        <img src="../../tecnologies.svg" className="tecnologies-img" />
      </section>
    </div>
  );
}

export default App;
