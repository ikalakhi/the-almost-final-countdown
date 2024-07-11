import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerNmae] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handelChange(e){
    setEnteredPlayerNmae(e.target.value);
  }
  function handeClik(){
    setSubmitted(true)
  }
  
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName: 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={(e) => handelChange(e)} value={enteredPlayerName} />
        <button onClick={handeClik}>Set Name</button>
      </p>
    </section>
  );
}
