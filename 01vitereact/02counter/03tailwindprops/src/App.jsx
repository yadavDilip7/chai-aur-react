import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    usernam:"Dilip",
    age:22,
    
  }

  return (
    <>

    <h1 className = 'bg-purple-400 text-black p-4 rounded-xl'>Apple Store</h1>
    
        <Card username= "Apple Macbook M1 pro" btnText="Buy at $6000"/>  
        <Card username="Apple Macbook M2 pro" btnText="Buy at $7000" /> 
        <Card username="Apple Macbook M2"/>       

  
    </>
  )
}

export default App
