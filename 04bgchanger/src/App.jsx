import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color,setcolor]=useState("olive")
  // function changeC(color){
  //   setcolor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 bg-white' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify center bottom-15 inset-x-0 px-2'></div>
      <div className='fixed flex flex-wrap justify center bottom-12 inset-x-0 px-2 '>
    <button 
    // onClick={()=> changeC('red')}
    onClick={()=> setcolor('red')}
    className='outline-none px-4 py-1 text-black rounded-full shadow-lg'>test</button>
    <button 
    onClick={() => setcolor('blue')}
    className='outline-none px-4 py-1 text-black rounded-full shadow-lg'>test2</button>
    <button
    onClick={()=> setcolor("pink")}
    >Test3</button>
    </div>
    </div>
  
  )
}

export default App
