import React from 'react'
import { useNavigate } from 'react-router-dom'
//Iconos
import whatsapp from '../../Img/whatsapp.png'

const ContentHome = () => {
    const navigate = useNavigate()

    const handlenavigate = ({ target }) => {
        const innerText = target.innerText
        if (innerText === 'CAMBIATE YA!!') {
            navigate('/planes')
        } else {
            navigate('/contact')
        }

    }
    return (
        <section className='img-Font'>
            <div className='section-title '>
                <h2>Nunca un internet fue tan veloz</h2>
                <p>Si pensaste que el internet de tu negocio o hogar nunca podría ser tan rápido es porque no has probado Skartelecon</p>
                <button onClick={(e) => handlenavigate(e)}>CAMBIATE YA!!</button>
                <button onClick={(e) => handlenavigate(e)}>CONTACTANOS</button>
            </div>
            <div className='container-redes'>
                <a href='https://api.whatsapp.com/send?phone=+573026704171&text=Hola...'>
                    <img src={whatsapp} alt='icon-whatsapp' />
                </a>
            </div>
        </section>
    )
}

export default ContentHome