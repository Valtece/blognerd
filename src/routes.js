import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Menu from "./components/Menu";
import Login from "./components/Login";
import Signup from "./components/Signup"

function RoutesApp(){
  return(
    <Routes>
      <Route path='/blognerd' element={ <Home/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/cadastro' element={ <Signup/> } />
    </Routes>
  )
}

export default RoutesApp;