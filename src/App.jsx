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
    </div>
  );
}

export default App;
