import React from 'react'
import { Link } from 'react-router-dom'

import './header.style.css'
import Logo from '../../Img/logo.png'


const Header = () => {
    return (
        <header>
            <div className='main-header'>

                <div className='containe-logo'>
                        <img src={Logo} alt='Logo'></img>
                        <h2>Skartelecon</h2>
                </div>
                <ul className='link'>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li>
                        <Link to={'/quienesSomos'}>Quienes Somos</Link>
                    </li>
                    <li>
                        <Link to={'/planes'}>Planes</Link>
                    </li>
                    <li>
                        <Link to={'/testVelocidad'}>Prueba De Velocidad</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contactos</Link>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header