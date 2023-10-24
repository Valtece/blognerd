import './style.css';
import login from "../Login/login.png"
import { Link } from 'react-router-dom';

function Signup(){
  return(
    <div>
      <section className="containerLogin">

        <div className='login-form'>
          <div className='title'>Cadastro</div>

          <form action='#'>

          <div className='input-box'>
            <input type='text' 
            placeholder='Digite seu nome' 
            required></input>
            </div>
            
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

            <div className='input-box'>
              <input type='submit' 
              value="Cadastrar"></input>
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

export default Signup;