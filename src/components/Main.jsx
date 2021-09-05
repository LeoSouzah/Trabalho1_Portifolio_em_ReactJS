import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg">
                <Link to="/home" className="navbar-brand">
                    <img src="images/leologo.png" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/sobre'} className="nav-link">Sobre</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/contato'} className="nav-link">Contatos</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/curriculo'} className="nav-link">Currículo</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export const Footer = () => {
    return(
        <>
            <footer className="text-center">
                <img src="images/leofooter.png"/>
            </footer>
        </>
    )
}

export const Banner = props => {
    return(
        <>
        <div id="banner">
            <img src={props.imagem} alt={props.titulo} title={props.titulo} className="w-100" />
        </div>
        </>
    )
}