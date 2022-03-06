import React from 'react'
import FormContact from '../../components/FormContact/FormContact'

import Header from '../../components/Header'
import ImgPrincipal from '../../components/imgprincipal'

//Importar Iconos
import iconTelefono from '../../Img/002-telfono.png'
import iconEmail from '../../Img/001-email.png'

import './contact.style.css'

const Contact = () => {


    return (
        <>
            <Header />
            <ImgPrincipal />
            <section>
                <div className='container'>
                    <div className='container-contact'>
                        <div className='contact'>
                            <h2>Contactanos</h2>
                            <p>Tus opiniones son importantes para nosotros.
                                Ya sea una pregunta simple o una sugerencia
                                valiosa, estamos aquí las 24 horas del día,
                                los 7 días de la semana.
                                Puede llamarnos por teléfono o
                                enviarnos un correo electrónico directamente.</p>
                            <hr />
                            <div className='contact-detail'>
                                <span>
                                    <img src={iconTelefono} alt='TElefono'></img>
                                    3026704171
                                </span>
                                <span>
                                    <img src={iconEmail} alt='Telefono'></img>
                                    Skartelecom@hotmail.com
                                </span>
                            </div>
                        </div>
                        <FormContact />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact