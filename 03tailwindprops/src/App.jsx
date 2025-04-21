import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-green-300'>Vite with Tailwind  </h1>
    <Card userName="Husky"/>
    <Card />
    </>
  )
}

export default App
