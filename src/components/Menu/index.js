import "./style.css";
import logo from "./logo.png"
import { Link } from "react-router-dom";

export default function Menu(){
  
  function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    } else {
      menuMobile.classList.add('open')
    }
  }

  return (
    <div className="container">
      <div>
        <header>
          <nav>
            <div className="box-logo">
              <a href='/blognerd' className="link-img">
                <img className="img-menu" src={logo}/>
              </a>
            </div>
            <ul className="menu">
              <li><a href='/blognerd'>Início</a></li>
              <li><a href='#'>Tec</a></li>
              <li><a href='#'>Séries</a></li>
              <li><a href='#'>Filmes</a></li>
              <li><a href='#'>Jogos</a></li>
              <li><Link to="/login">Entrar</Link></li>
            </ul>
            <button onClick={menuShow} className="mobile">
              <div className="traço"></div>
              <div className="traço"></div>
              <div className="traço"></div>
            </button>
          </nav>
        </header>

        <div className="mobile-menu">
          <ul className="menu-mobile">
            <li><a href='/blognerd'>Início</a></li>
            <li><a href='#'>Tec</a></li>
            <li><a href='#'>Séries</a></li>
            <li><a href='#'>Filmes</a></li>
            <li><a href='#'>Jogos</a></li>
            <li><Link to="/login">Entrar</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}
