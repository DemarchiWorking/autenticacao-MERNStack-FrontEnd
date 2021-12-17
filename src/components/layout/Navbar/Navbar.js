import { Link  } from 'react-router-dom'
import Container from '../Container/Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav>
            <Container>
                <Link to="/">
                    <img src={logo}></img>
                </Link>
                <ul>
                    <li>
                        <Link to="/newCur">Novo Curriculo</Link>
                    </li>
                    <li>
                        <Link to="/curriculos">Curriculos</Link>
                    </li>
                    <li>
                        <Link to="/company">Compania</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
    }
    
    export default Navbar