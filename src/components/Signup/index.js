import { useState, useContext } from 'react'
import './style.css';
import login from "../Login/login.png"
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth'

export default function Signup(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  async function handleSubmit(e){
    e.preventDefault();

    if(name !== '' && email !== '' && password !==''){
      await signUp(email, password, name)
    }

  }

  return(
    <div>
      <section className="containerLogin">

        <div className='login-form'>
          <div className='title'>Cadastro</div>

          <form onSubmit={handleSubmit}>

          <div className='input-box'>
            <input type='text' 
            placeholder='Digite seu Nome'
            value={name}
            onChange={ (e) => setName(e.target.value) } 
            required></input>
            </div>
            
          <div className='input-box'>
            <input type='text' 
            placeholder='Digite seu Email'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            required></input>
          </div>

          <div className='input-box'>
          <input type='password' 
          placeholder='Digite sua Senha'
          value={password}
          onChange={ (e) => setPassword(e.target.value) } 
          required></input>
          </div>

          <div className='input-box'>
            <button type='submit'>
              {loadingAuth ? "Carregando..." : "Cadastrar"}
            </button>
          </div>

          <div className='sigup-text'> 
            Já tem uma conta?
            <Link to='/login'> Entre aqui </Link></div>

          </form>
        </div>
        <div className='login-img'>
        <img src={login} alt=''width="370px" />
        </div>
      </section>
    </div>
  )
  
}
