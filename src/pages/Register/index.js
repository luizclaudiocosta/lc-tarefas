import { useState } from "react";
//import '../Home/home.css';
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();

    if(email && password){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        navigate('/admin', { replace: true })
      })
      .catch((error)=>{
        console.log(error);
      })
    }else{
      alert('preencha os campos')
    }

    
  }

  return(
    <div className="container">
      <h1>Cadastre-se</h1>
      <span>Crie sua conta.</span>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="digite seu email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />

        <input
          type="password"
          autoComplete="off"
          placeholder="digite sua senha"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link className="register" to="/">
        Já tem uma conta? Faça login
      </Link>
    </div>
  )
  }