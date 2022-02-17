import React from 'react'
import Header from '../../components/Header'
import  {useNavigate}  from 'react-router-dom'

//Iconos
// import velocidad from '../../Img/001-velocmetro.png'
// import Destello from '../../Img/003-destello.png'
// import musica from '../../Img/001-msica.png'
// import videos from '../../Img/002-video.png'
import plan6Megas from '../../Img/6Megas.png'
import plan8Megas from '../../Img/8megas.png'
import plan10Megas from '../../Img/10megas.png'
import './planes.style.css'
import ImgPrincipal from '../../components/imgprincipal'

const Planes = () => {

const navigate=useNavigate()

const handleaddplan =(plan)=>{
    navigate(`/contact/${plan}`)
}

    return (
        <>
            <Header />
            <ImgPrincipal/>
            <div className='container container-title'>
                <h2>Internet de última generación
                </h2>
                <p>
                    Con Nuestro servicio de fibra optica tendrás internet de banda ancha de última
                    generación con velocidades de hasta 100 megas para tu entretenimiento y diversión.
                    Podrás compartir archivos de gran tamaño, utilizar servicios de streaming de alta definición,
                    realizar videoconferencias y llamadas por IP. Ideal para teletrabajo y clases virtuales.
                </p>
            </div>
            <div className='container container-content-rendimiento'>
                <div className='content-redimiento'>
                   <div className='spiner'></div>
                    <h2>Velocidad</h2>
                    <p>
                        Tienes la mayor velocidad de conexion a internet.</p>
                </div>
                <div className='content-redimiento'>
                   
                <div className='spiner'></div>
                    <h2>Rendimiento</h2>
                    <p>
                        Contamos con la mejor tecnología para que nunca te detengas.
                    </p>
                </div>
                <div className='content-redimiento'>
                <div className='spiner'></div>
                    <h2>Videos</h2>
                    <p>
                        Mira tus películas y videos las veces que desees y lo mejor sin cortes.
                    </p>
                </div>
                <div className='content-redimiento'>
                <div className='spiner'></div>
                    <h2>Música</h2>
                    <p>
                        Escucha tu música sin parar y sin limites.
                    </p>
                </div>
            </div>
            <div className='container container-content-plan'>
                <div className='content-plan'>
                    <img src={plan6Megas} alt='plan6Megas'/>
                    <h2>Plan Bronce</h2>
                    <p>6 Megas de bajada</p>
                    <hr/>
                    <p>6 Megas de Subida</p>
                    <hr/>
                    <p>Totalmente ilimitado</p>
                    <p>Hasta 5 dispositivos conectados
                        simultáneamente
                    </p>
                    <p><span>$55000</span></p>
                     <button onClick={()=>handleaddplan('Plan Bronce')}>Lo Quiero Ya!</button>

                </div>
                <div className='content-plan'>
                    <img src={plan8Megas} alt='plan8Megas'/>
                    <h2>Plan Diamante</h2>
                    <p>8 Megas de bajada</p>
                    <hr/>
                    <p>8 Megas de Subida</p>
                    <hr/>
                    <p>Totalmente ilimitado</p>
                    <p>Hasta 10 dispositivos conectados
                        simultáneamente
                    </p>
                     <p><span>$65000</span></p>
                     <button onClick={()=>handleaddplan('Plan Diamante')}>Lo Quiero Ya!</button>

                </div>
                <div className='content-plan'>
                    <img src={plan10Megas} alt='plan10Megas'/>
                    <h2>Plan Oro</h2>
                    <p>10 Megas de bajada</p>
                    <hr/>
                    <p>10 Megas de Subida</p>
                    <hr/>
                    <p>Totalmente ilimitado</p>
                    <p>Hasta 10 dispositivos conectados
                        simultáneamente
                    </p>
                    <p><span>$75000</span></p>
                    <button onClick={()=>handleaddplan('Plan Oro')}>Lo Quiero Ya!</button>
                </div>
            </div>
        </>
    )
}

export default Planes