import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Logado.module.css'
//import jwt from 'jsonwebtoken'
//import { useHistory } from 'react-router-dom'

function Logado(){

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
 // const history = useHistory() 
  async function populateQuote(){
    const req = await fetch('http://localhost:1337/api/Logado', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    })

    const data = req.json()
    console.log(data)
  }
  
  useEffect(()=> {
    const token = localStorage.getItem('token')
    if(token) {
     // const user = jwt.decode(token)
      //if(!user){
      //  localStorage.removeItem('token')
      //  navigate.replace('/login')
    //  } else {
     //   populateQuote()
    //  }
    }
  }, [])
  
    return (
    <section className={styles.home_container}>
      Logado
    <button onClick={logout}>Sair</button>
    </section>)
}
export default Logado