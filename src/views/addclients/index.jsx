import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import ImgPrincipal from '../../components/imgprincipal'

import Swal from 'sweetalert2'

import axios from 'axios'

import './createClient.style.css'

//importar Redux
// import { useDispatch } from 'react-redux'
// import { addUserAction,handleAddDatabase } from '../../Redux/actions/addUser.action'


const Login = () => {

    // const dispatch=useDispatch()

    const [dataUser, setDataUser] = useState({ name: '', identification: '', email: '', address: '', phone: '', dateInstallation: '', status: 'activo', planId: '' })
    const [plans, setPlans] = useState(null)

    const handleAddUser = async (e) => {
        e.preventDefault()
        const result = await Swal.fire({
            title: 'Desea Guardar Este Usuario?',
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            icon: 'question',
            confirmButtonColor: '#25a9f9'
        })
        if (result.isConfirmed) {
            const res = await axios.post('http://localhost:4000/api/v1/users', { ...dataUser })
            console.log(res)

            // setDataUser(
            //     {
            //         name: '', identification: '', email: '', address: '',
            //         phone: '', dateInstallation: '', status: 'activo', planId: ''
            //     })

            // await Swal.fire('Saved!', '', 'success')
        }
    }
    useEffect(() => {
        const loadplans = async () => {
            const response = await axios.get('http://localhost:4000/api/v1/plan')
            setPlans(response.data)
        }
        loadplans()
    }, [])

    return (
        <>
            <Header />
            <ImgPrincipal />
            <form method='Post' >
                <h2>Crear Cliente</h2>
                <div className='content-form-ground'>
                    <label>Nombre
                        <input type='text' name='name' value={dataUser.name} onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })} required />
                    </label>
                    <label>Identificacion
                        <input type='text' name='identification' value={dataUser.identification} onChange={(e) => setDataUser({ ...dataUser, identification: e.target.value })} required />
                    </label>
                    <label>Email
                        <input type='text' name='email' value={dataUser.email} onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} required />
                    </label>
                    <label>Direccion
                        <input type='text' name='address' value={dataUser.address} onChange={(e) => setDataUser({ ...dataUser, address: e.target.value })} required />
                    </label>
                    <label>Telefono
                        <input type='text' name='phone' value={dataUser.phone} onChange={(e) => setDataUser({ ...dataUser, phone: e.target.value })} required />
                    </label>
                    <label>Fecha De Instalacion
                        <input type='date' name='dateInstallation' value={dataUser.dateInstallation} onChange={(e) => setDataUser({ ...dataUser, dateInstallation: e.target.value })} required />
                    </label>
                    <div className='container-status'>
                        <label>Status
                            <select value={dataUser.status} onChange={(e) => setDataUser({ ...dataUser, status: e.target.value })} required>
                                <option value='activo'>Activo</option>
                                <option value='suspendido'>Suspendido</option>
                                <option value='inactivo'>Inactivo</option>
                            </select>
                        </label>
                        <select value={dataUser.planId} onChange={(e) => setDataUser({ ...dataUser, planId: e.target.value })} required >
                            <option value='0'>Selecciona Un Plan</option>
                            {plans ? plans.data.planAll.map(plan => <option key={plan.id} value={plan.id}>{plan.name}</option>) :
                                <option value='0'>NO HAY PLANES</option>}
                        </select>
                    </div>
                    <button className='btn-addUser' onClick={(e) => handleAddUser(e)}>Agregar Usuario</button>
                </div>
            </form>

        </>
    )
}

export default Login