import { Link  } from 'react-router-dom'
import Container from '../Container/Container'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src="data:image/png;base64,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"></img>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/register">Registrar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/login">Logar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
    }
    
    export default Navbar