import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './header.style.css'
import Logo from '../../Img/logo.png'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header>
            <div className='menu' onClick={handleOpenMenu}>
                <span className={menuOpen ? 'span1close' : undefined}></span>
                <span className={menuOpen ? 'span2close' : undefined}></span>
                <span className={menuOpen ? 'span3close' : undefined}></span>
            </div>
            <nav className='main-header'>
                <div className='containe-logo'>
                    <img src={Logo} alt='Logo'></img>
                    <h2>Skartelecon</h2>
                </div>
                <ul className={menuOpen ? 'linkopen' : 'link'}>
                    <li>
                        <Link to={'/'}>Inicio</Link>
                    </li>
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
            </nav>
        </header>
    )
}

export default Header