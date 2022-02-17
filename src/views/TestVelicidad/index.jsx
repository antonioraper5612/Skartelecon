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
      src="http://skartele.speedtestcustom.com"
        width="100%"
        height="650px"
        className='container'
       />
       
    </>
  )
}



export default TestVelocidad