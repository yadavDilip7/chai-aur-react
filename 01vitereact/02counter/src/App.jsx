import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 5;

  const addValue = () => {
    if(counter <= 20)
    counter +=1
    setCounter(counter)
    console.log("clicked",counter);
    

  }
  const removeValue = () =>{
    if(counter >=0)
    setCounter(counter-1)
  }
  

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue} disabled={counter>=20}
    >Add Value {counter}</button>
    <br />
    <button onClick={removeValue} disabled={counter<=0}
    >Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
