import "./style.css";
import logo from "./logo.png"
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";

export default function Menu(){
  const { signed } = useContext(AuthContext);

  console.log(signed);

  return (
    <div className="container">
      <div>
        <header>
          <nav>
            <div>
              <a href='/blognerd'>
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
            <div className="mobile">MENU</div>
          </nav>
        </header>
      </div>
    </div>
  );
  
}

