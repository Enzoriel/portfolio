import "./App.css";
import proyectos from "/bd.json";

const Proyects = () => {
  const bd = proyectos;

  return (
    <div className="proyect-list">
      {bd.map((element) => (
        <div className="proyect-item" key={element.name}>
          <h3>{element.name}</h3>
          <img src={element.img} />
          <p>{element.description}</p>
          <p>{element.github + element.deploy}</p>
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
