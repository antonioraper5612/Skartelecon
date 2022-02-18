import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
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

    const hadlewhatsapp = async () => {

        const config =
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }

        await axios.POST('https://wa.me/3013454435', config)
    }
    return (
        <section className='img-Font'>
            <div className='section-title'>
                <h2>Nunca un internet fue tan veloz</h2>
                <p>Si pensaste que el internet de tu negocio o hogar nunca podría ser tan rápido es porque no has probado Skartelecon</p>
                <button onClick={(e) => handlenavigate(e)}>CAMBIATE YA!!</button>
                <button onClick={(e) => handlenavigate(e)}>CONTACTANOS</button>
            </div>
            <div className='container-redes'>
                <img src={whatsapp} alt='icon-whatsapp' onClick={hadlewhatsapp} />
            </div>
        </section>
    )
}

export default ContentHome