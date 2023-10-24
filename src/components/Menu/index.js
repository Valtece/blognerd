import "./style.css";
import logo from "./logo.png"
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <div>
        <header>
          <nav>
            <div>
              <a href='blognerd'>
                <img src={logo}/>
              </a>
            </div>
            <ul>
              <li><a href='blognerd'>Início</a></li>
              <li><a href='#'>Tec</a></li>
              <li><a href='#'>Séries</a></li>
              <li><a href='#'>Filmes</a></li>
              <li><a href='#'>Jogos</a></li>
              <li><Link to="/login">Entrar</Link></li>
            </ul>
            <div className="mobile"></div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Menu;
