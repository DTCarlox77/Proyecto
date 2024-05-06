import React from 'react'
import { useState } from 'react'

export function Pagina() {

  const [number, setNumber] = useState(0);

  const [text, setText] = useState('Texto');

  const haddleText = (event) => {
    if (text.length < 12) {
      setText(event.target.value);
      
    } else {
      setText('Te pasaste');
    }

    console.log(text.length);
  }

  return (
    <div>
        <h1>Hola</h1>
        <button onClick={ () => { setNumber(number + 1) } }>Aumentar { number }</button>

        <h1>{ text }</h1>
        <input onInput={ (event) => { haddleText(event) } } type="text" />
    </div>
  )
}
