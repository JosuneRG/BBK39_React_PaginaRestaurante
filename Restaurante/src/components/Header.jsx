import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Header.scss";

const Header = () => {
    return (
        <nav className="header">
            <span className="logo">Restaurante</span>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/reserve">Reserva</Link>
                <Link to="/saved">Ver Datos</Link>
                <Link to="/galery">Galeria</Link>
            </div>
        </nav>
    )
}
export default Header