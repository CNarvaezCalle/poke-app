import '../components/PokedexPage/styles/PokeHeader.css'
import { Link } from "react-router-dom"

const PokeHeader = () => {
  return (
    <header className="header">
        <img className="header__background" src="/Group 217.png" alt="" />
        <Link to='/pokedex'><img className="header__logo" src="/pokedex.png" alt="" /></Link>
    </header>
  );
};

export default PokeHeader;
