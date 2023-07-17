import { useState } from "react";
import './home.css';
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Home(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    if(email && password){
      await signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
        //navegar para admin
        navigate('/admin', { replace: true })
      })
      .catch((error)=>{
        toast.error("Usuário e/ou senha não conferem.");
      })
    }else{
      toast.info("Preencha os campos.");
    }

    
  }

  return(
    <div className="container">
      <h1>Tarefas</h1>
      <span>Gerencie seu tempo.</span>

      <form onSubmit={handleLogin}>

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

        <button type="submit">Entrar</button>
      </form>

      <Link className="register" to="/register">
        Não tem uma conta? Cadastre-se
      </Link>
    </div>
  )
  }