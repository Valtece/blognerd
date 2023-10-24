import './styleLogin.css';
import login from "./login.png"
import { Link } from 'react-router-dom';

function Login(){
  return(
    <div>
      <section className="containerLogin">
        <div className='login-form'>
          <div className='title'>Login</div>
          <form action='#'>
            <div className='input-box'>
              <input type='text' 
              placeholder='Digite seu Email' 
              required></input>

            </div>
            <div className='input-box'>
            <input type='password' 
            placeholder='Digite sua Senha' 
            required></input>
              
            </div>
            <div className='forgot'>
              <a href='#'>Esqueceu a senha?</a>
            </div>
            <div className='input-box'>
              <input type='submit' 
              value="Entrar"></input>
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

export default Login;