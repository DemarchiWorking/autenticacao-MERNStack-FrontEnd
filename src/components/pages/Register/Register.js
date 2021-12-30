import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
//import { useHistory } from 'react-router-dom'

function Register() {
    //const history = useHistory()
    const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/logado");
    }
  }, [navigate]);



  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },  
    body: JSON.stringify({
      name,
      email,
      password
      }),
    })

    const data = await response.json()
   if(data.status === 'ok') {
    navigate("/login")
     //history.push('/login')
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
      <input 
          value={name}
          onChange={(e)=> setName(e.target.value)}
          type="text"
          placeholder="Name"/><br/>

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

          <input type="submit" value="Registrar"/>

    
      </form>
    </div>
    )
}
export default Register;
