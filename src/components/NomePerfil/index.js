import './style.css';

import { AuthContext } from "../../contexts/auth"
import { useContext } from 'react';

export default function NomePerfil(){
  const { user } = useContext(AuthContext);

  return(
    <div className='box-NomePerfil'>
      <div>
      <h3 className='NomePerfil'> 
        Seja bem-vindo!
        { /*{user.nome === null ? "Seja bem-vindo!" : user.nome }*/}
      </h3>
      </div>
    </div>
  )
}