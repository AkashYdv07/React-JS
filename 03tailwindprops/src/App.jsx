import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // props = property
  // let myobj = {
  //   username :"Akash",
  //   age: 21
  // }
  let newArr= [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 mb-4 text-black p-4 rounded-xl '>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText = "Click Me" someobj = {newArr}/>
      <Card username="akash" btnText = "Visit Me" />
    </>
  )
}

export default App
