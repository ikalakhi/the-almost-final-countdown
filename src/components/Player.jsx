import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerNmae] = useState('');

  function handelClik(){
    setEnteredPlayerNmae(playerName.current.value);
    playerName.current.value = '';
  }
  
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName: 'unknown entity'}</h2>
      <p>
        <input 
          ref={playerName}
          type="text" />
        <button onClick={handelClik}>Set Name</button>
      </p>
    </section>
  );
}
