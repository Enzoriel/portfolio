import "./App.css";
import proyectos from "/bd.json";

const Proyects = () => {
  const bd = proyectos;

  return (
    <div className="proyect-list">
      {bd.map((element) => (
        <div className="proyect-item" key={element.name}>
          <h3>{element.name}</h3>
          <img className="proyect-preview" src={element.img} />
          <p>{element.description}</p>
          <div className="proyect-links">
            <a
              href={element.github}
              title="Ver repositorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código en Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="links"
                src="/github.svg"
                alt=""
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
            <a href={element.deploy} title="Ver preview" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="links"
                src="/preview.svg"
                alt="Preview"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                <path d="M7 20h10" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="html">
      <nav className="nav">
        <section className="logo class-box">
          <a>
            <img className="logo-img" src="/My-logo.svg" />
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
          <img className="img" src="/logo-img.png" />
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
        <img src="/proyect.svg" className="proyect-img" />
        <div>
          <Proyects />
        </div>
      </section>
      <section className="tecnologies class-box">
        <img src="../../tecnologies.svg" className="tecnologies-img" />
      </section>
    </div>
  );
}

export default App;
