import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 5;

  const addValue = ()=>{
    console.log("clicked: ",counter);
    // counter = counter + 1;
    // setCounter(counter);
    setCounter(counter + 1);
  }

  const removeValue=()=>{
    console.log("clicked: ",counter);
    setCounter(counter - 1);
  }

  return (
   <>
    <h1>Chai aur Recat</h1>
    <h2>Counter Value : {counter}</h2>

    <button  onClick={addValue}>Add Value</button>
    <br />
    <button onClick = {removeValue}>Remove Value</button>
   </>
  )
}

export default App
