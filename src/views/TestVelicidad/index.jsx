import React from 'react'
import Header from '../../components/Header'
import ImgPrincipal from '../../components/imgprincipal'
import Iframe from 'react-iframe'


import './testvelocidad.style.css'


const TestVelocidad = () => {
  return (
    <>
      <Header />
      <ImgPrincipal />
      <Iframe 
      src="https://skartelecontest.speedtestcustom.com"
        className='container container-test'
       />
       
    </>
  )
}



export default TestVelocidad