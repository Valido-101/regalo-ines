import React, { useState } from 'react';
import './BloquePrincipal.css';
import TestPic from '../imagenes/test-pic.jpg';
import { BloqueDedicatoria } from './BloqueDedicatoria';

export const BloquePrincipal = () => {

    //var nombre = 'Blanco';

    //nombre = document.getElementById('imagen').getAttribute('alt');

    const [nombre, setNombre] = useState("Blanco");


  return (
    <div>
        <div className='bloque-caras'>

            <img src={TestPic} alt='Valido' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={TestPic} alt='Pipi' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={TestPic} alt='Lucia' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={TestPic} alt='Marina' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={TestPic} alt='Noe' onClick={e => {setNombre(e.target.alt)}}/>

        </div>

        <BloqueDedicatoria nombre={nombre}/>
    </div>
  )
}
