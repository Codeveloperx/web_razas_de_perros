import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <header>
                <ul className="navbar">
                    <li>
                        <img src={logo} alt="Logo" className="logo"/>
                    </li>
                    <li className="botones bt2"><i className="fas fa-plus"></i> Nuevo Post</li>
                    <li>
                        <div className="buscar">
                            <input type="text" placeholder="Buscar una raza" /><i className="fas fa-search generico"></i>
                        </div>
                    </li>
            <li className="botones login">Iniciar Sesion</li>
            <li className="botones bt2">Registrarme</li>
        </ul>
    </header>
        </div>
    )
}

export default Header
