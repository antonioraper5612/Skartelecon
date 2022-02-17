import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './formcontact.style.css'

const FormContact = () => {

    const [data, setData] = useState({
        name: '', apellidos: '', email: '',
        direccion: '', telefono: '', contact: '', plan: '', mensaje: ''
    })
    const planes = useParams()

    useEffect(() => {
        if (planes.plan !== undefined) {
            setData({ plan: planes.plan, contact: 'Ventas' })
        }
    }, [planes])
    return (
        <>
            <form className='container-form'>
                <h2>Completa El Siguiente Formulario</h2>
                <label>Nombres <span>*</span> </label>
                <input type='text' onChange={(e) => setData({ ...data, name: e.target.value })} required></input>

                <label>Apellidos <span>*</span> </label>
                <input type='text' onChange={(e) => setData({ ...data, apellidos: e.target.value })} required></input>

                <label>Foto Cedula <span>*</span> </label>
                <input type='file' required></input>

                <label>Correo Electronico <span>*</span> </label>
                <input type='text' onChange={(e) => setData({ ...data, email: e.target.value })} required></input>

                <label>Direccion<span>*</span> </label>
                <input type='text' onChange={(e) => setData({ ...data, direccion: e.target.value })} required></input>

                <label>Telefono De Contacto <span>*</span> </label>
                <input type='text' onChange={(e) => setData({ ...data, telefono: e.target.value })} required></input>

                <label>Quiero Contantarme Con <span>*</span></label>
                <select value={data.contact !== null ? data.contact : 0} onChange={(e) => setData({ ...data, contact: e.target.value })} required>
                    <option value='0'>Selecciona Una Opcion</option>
                    <option value='Ventas'>Ventas (Deseo Adquirir Un Plan)</option>
                    <option value='Soporte'>Soporte Tecnico</option>
                    <option value='Quejas'>Quejas y Reclamos</option>
                </select>

                {data.contact === 'Ventas' &&
                    <select value={data.contact !== null ? data.plan : 0} onChange={(e) => setData({ ...data, plan: e.target.value })} required>
                        <option value='0'>Elige Un Plan</option>
                        <option value='Plan Bronce'>Plan Bronce (6 Megas) 55.000 mil </option>
                        <option value='Plan Diamante'>Plan Diamante (8 Megas) 65.000 mil</option>
                        <option value='Plan Oro'>Plan Oro (10 Megas) 75.000 mil</option>
                    </select>}
                <label>Mensaje</label>
                <input type='text' onChange={(e) => setData({ ...data, mensaje: e.target.value })}></input>
                <button>Enviar Formulario</button>
            </form>
        </>
    )
}

export default FormContact