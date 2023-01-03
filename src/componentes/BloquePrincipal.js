import React, { useState } from 'react';
import './BloquePrincipal.css';
import Valido from '../imagenes/valido.png';
import Pipi from '../imagenes/pipi.png';
import Noe from '../imagenes/noe.png';
import Lucia from '../imagenes/lucia.png';
import Marina from '../imagenes/marina.png';
import { BloqueDedicatoria } from './BloqueDedicatoria';

export const BloquePrincipal = () => {

    //var nombre = 'Blanco';

    //nombre = document.getElementById('imagen').getAttribute('alt');

    const [nombre, setNombre] = useState("Blanco");


  return (
    <div>
        <div className='bloque-caras'>

            <img src={Valido} alt='Valido' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={Pipi} alt='Pipi' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={Lucia} alt='Lucia' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={Marina} alt='Marina' onClick={e => {setNombre(e.target.alt)}}/>
            <img src={Noe} alt='Noe' onClick={e => {setNombre(e.target.alt)}}/>

        </div>

        <BloqueDedicatoria nombre={nombre}/>
    </div>
  )
}
