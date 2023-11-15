import RoutesApp from "./routes";
import Menu from "./components/Menu";
import NomePerfil from "./components/NomePerfil";

import { useState, useEffect } from "react";
import AuthProvider from './contexts/auth'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


register();

function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 25){
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll)
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Menu acao={ativaCor}/>
        <NomePerfil/>
        <AuthProvider>
          <ToastContainer autoClose={3000} limit={1}/>
          <RoutesApp/>
        </AuthProvider>
        {/*<Footer/>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
