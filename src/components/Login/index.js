import { useState, useContext } from 'react';

import './styleLogin.css';
import login from "./login.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext)

  async function handleSignIn(e){
    e.preventDefault();

    if(email !== " && password !== "){
      await signIn(email, password);
    }

  }

  return(
    <div>
      <section className="containerLogin">
        <div className='login-form'>
          <div className='title'>Login</div>
          <form onSubmit={handleSignIn}>
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
            <div className='forgot'>
              <a href='#'>Esqueceu a senha?</a>
            </div>
            <div className='input-box'>
              <button type='submit' 
              >{loadingAuth ? "Entrando..." : "Entrar"}
              </button>
            </div>
            <div className='sigup-text'> 
              Não tem uma conta?
              <Link to='/cadastro'> Crie uma agora </Link></div>
          </form>
        </div>
        <div className='login-img'>
        <img src={login} alt=''width="370px" />
        </div>
      </section>
    </div>
  )
  
}
