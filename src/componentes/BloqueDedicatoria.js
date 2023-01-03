import React from 'react';
import './BloqueDedicatoria.css';

export const BloqueDedicatoria = ({nombre}) => {

    const dedicatorias = new Map();

    dedicatorias.set('Valido','¡Inés! Te queremos un montón. Desde que te conocí en bachiller supe que eras una persona maravillosa (como las del programa de cámara oculta) que siempre está ahí cuando se la necesita. En un futuro darás clase a los hijos de los de nuestro grupo (los que los vayan a tener, yo si eso seré el tito Valido) y estoy seguro de que no hay nadie mejor cualificado para ello. Te queremos todos un montón y espero que el 2023 y los años que vengan sigamos estando todos juntos.');
    dedicatorias.set('Marina','Inés, gracias por tener siempre una sonrisa para nosotros, estar ahí en las buenas y en las malas y por ser el rayito de sol que nos alegra el día cada vez que nos vemos. Te quiero muchísimo.');
    dedicatorias.set('Lucia','Inés, eres la mejor, me alegra haber compartido contigo momentos tan especiales, en teatro, en clase o de compras por Nervión. Estoy muy orgullosa de todo lo que has conseguido y de todo lo que estás por conseguir, te quiero muchísimo corazón');
    dedicatorias.set('Noe','Inés, te caracteriza una dulzura y amabilidad que pocas personas irradian. Cada vez que apereces se siente como un cálido abrazo de una amiga que está dispuesta a hacerlo todo por sus amigos. De verdad que te quiero muchísimo.');
    dedicatorias.set('Pipi','Mi querida blanca flor,'+
    'Valido me ha pedido que te escriba una pequeña dedicatoria para nuestro encuentro navideño de hoy (03/01/23), es por eso que me he puesto a recordar nuestros momentos juntas (aquellos que más atesoro y aprecio), y no he podido más que sentirme agradecida por tener a una persona tan pura a mí lado.'
    
    +'Muchas gracias por demostrarme siempre tu cariño, por hacerme ver esa alegría tan espontánea y sincera cuando nos encontramos, por todas las risas (con tu risa tan contagiosa, que sabes que me encanta), por la serenidad y paz que me trasmites.'
    
    +'Eres una persona preciosa.'
    
    +'Te quiero mucho.');
    dedicatorias.set('Blanco','');

  return (
    <div className='dedicatoria'>
        <p>{dedicatorias.get(nombre)}</p>
    </div>
  )
}
