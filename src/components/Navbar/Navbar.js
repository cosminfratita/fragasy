import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

const Navbar = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <Logo/>
            </div>
            <div>
                <button>Perfumes</button>
                <button>Colonias</button>
                <button>Mujer</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar 