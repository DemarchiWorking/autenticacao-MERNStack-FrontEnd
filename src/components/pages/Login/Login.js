import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/logado");
    }
  }, [navigate]);


  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },  
    body: JSON.stringify({
      email,
      password
      }),
    })

    const data = await response.json()

    if(data.user) {
        localStorage.setItem('token', data.user)
        alert('Logado com sucesso!')
        window.location.href = '/logado'
    }else {
        alert('Login ou senha inválidos!')
    }
    console.log(data)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
      <input 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
          placeholder="Email"/><br/>

      <input 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password"
          placeholder="Password"/><br/>

          <input type="submit" value="Login"/>

    
      </form>
    </div>
    )
}
  

export default Login;
