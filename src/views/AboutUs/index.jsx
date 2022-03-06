import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import ImgPrincipal from '../../components/imgprincipal'


import './aboutUs.style.css'

const AboutUS = () => {

    const navigate = useNavigate()

    const handlenavigate = () => {
        navigate('/contact')
    }

    return (
        <section>
            <Header />
            <ImgPrincipal />
            <div className='container container-content'>
                <h2>QUIENES SOMOS</h2>
                <p>Somos un grupo de personas que trabajamos en equipo apasionadamente, convencidos de lo que hacemos y seguros de haber encontrado la clave del éxito.
                    Pensando solo en lo mejor, para prestar un exelente servicio a nuestros clientes.
                </p>
            </div>
            <div className='container container-content-mision'>
                <div className='content'>
                    <h2>Mision</h2>
                    <p>
                        La empresa Skartelecon, tiene como finalidad la prestación de servicios de telecomunicaciones,satisfaciendo las expectativas y necesidades de sus clientes; gracias a la constate búsqueda del mejoramiento continuo de sus procesos para ofrecer la mejor calidad de nuestros servicios.
                    </p>
                </div>
                <div className='content'>
                    <h2>Vision</h2>
                    <p>
                        Queremos ser una empresa líder de telecomunicaciones en el país,reconocidos por nuestro servicio de calidad, que generan valor para nuestros clientes.
                    </p>
                </div>
                <div className='content'>
                    <h2>Apoyo a los trabajadores</h2>
                    <p>
                        Los trabajadores son considerados el activo más preciado.Como fundamento del éxito de nuestra empresa, existe preocupación por los trabajadores,se les capacita,fomenta su desarrollo, se estimula su participación y se reconocen sus logros.
                    </p>
                </div>
                <div className='content'>
                    <h2>Productos y Soluciones</h2>
                    <p>
                        Nuestro principal servicio es el acceso a internet a través de sistemas inalámbricos y cableados en fibra óptica a empresas y hogares en Colombia,entregamos  Navegación en internet ilimitada a alta velocidad,conexión permanente y de calidad, Capacidad de ancho de banda acorde a sus necesidades.
                    </p>
                </div>
            </div>
            <div className='container-help'>
                <p>
                    Tienes alguna inquietud  ?
                    Nuestro heroico equipo de soporte puede ayudarlo.
                </p>
                <button onClick={handlenavigate}>Contactanos</button>
            </div>
        </section>
    )
}

export default AboutUS