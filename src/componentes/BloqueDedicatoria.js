import React from 'react';
import './BloqueDedicatoria.css';

export const BloqueDedicatoria = ({nombre}) => {

    const dedicatorias = new Map();

    dedicatorias.set('Valido','Dedicatoria Valido');
    dedicatorias.set('Marina','Dedicatoria Marina');
    dedicatorias.set('Lucia','Dedicatoria Lucia');
    dedicatorias.set('Noe','Dedicatoria Noe');
    dedicatorias.set('Pipi','Dedicatoria Pipi');
    dedicatorias.set('Blanco','');

  return (
    <div className='dedicatoria'>
        <p>{dedicatorias.get(nombre)}</p>
    </div>
  )
}
