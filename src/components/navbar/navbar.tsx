import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/weather" exact>Узнать погоду</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar