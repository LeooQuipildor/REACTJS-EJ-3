import { useState } from 'react'
import Titulo from './components/Titulo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo nuevoTitulo="Hello my friend!"></Titulo>
      
    </>
  )
}

export default App
