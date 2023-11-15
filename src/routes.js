import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Menu from "./components/Menu";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Filme from "./pages/Filme";

function RoutesApp(){
  return(
    <Routes>
      <Route path='/blognerd' element={ <Home/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/cadastro' element={ <Signup/> } />
      <Route path='/filme' element={ <Filme/> } />
    </Routes>
  )
}

export default RoutesApp;