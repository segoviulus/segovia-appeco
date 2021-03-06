// Fragmento <> </> para no utilizar etiquetas
import LogoHeader from '../../assets/images/logo-dricco.avif';
import CartWidget from './CartWidget';
import Categorias from './Categorias';
import { Link } from 'react-router-dom';

const NavBar = () => {;
return (
   <header className='header__menuGen'>
        <nav>
            <div className='header__menu'>
            
            <Link to={`/`}>
                <img className='header__logo' src={LogoHeader} alt="LogoHeader" />
            </Link>
            <CartWidget />
            </div>
            <div>
            <Categorias/>
            </div>
        </nav>
   </header>
)
}

export default NavBar;