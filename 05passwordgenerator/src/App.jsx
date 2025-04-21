// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [length, setLength] = useState(9)
//   const [numberAllowed,setnumberAllowed]=useState(false)
//   const[char,setChar]=useState("")
  

//   return (
   
//     <div className='max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-300'>
//      <h1 className='text-red text-center my-9'>Password Generator</h1>
//      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//      {/* <h1 className="bg-red-800">Setup ready</h1> */}
//      <input
//       type="text"
//       value={char}
//       className="outline-none w-full py-1 px-3 text-white bg-gray-800"
//       placeholder='password'
//       readOnly
      
//       ></input>
//       <button
//       className="outline-none text-white bg-blue-400 mt-2">copy</button>
    
//      <div
//      className='flex  felx-col items-center space-y-4 mt-6'>
//       <div className='flex flex-col items-center'></div>
//       <input
//       type='range'
//       min={6}
//       max={50}
//       value={length}
//       className="cursor-pointer"
//       onChange={(e)=>setLength(e.target.value)}// setting the value into the length  when button is clicked
//       name=""
//       // id="length"
//       ></input>
//       {/* htmlfor connects input and label */}
//       <label htmlFor="length" className='mt-14'>Length:{length}</label>
//      </div>
//      <div
//      className='flex items-center gap-x-4'>
//       <input type="checkbox"  
//       defaultChecked={numberAllowed}
//       onChange={(e)=>setnumberAllowed((prev)=>!prev)}
//       name="" 
//       // id="number"
//        />
//       {/* htmlfor connects input and label */}
//       <label htmlFor="number">Number:{char
//         }</label>
//      </div>
//      <div
//      className='flex items-center gap-x-4'>
//       <input type="checkbox" 
//       defaultChecked={char}
//       onChange={(e)=>setchar((prev)=>!prev)}
//       name="" 
//       // id="number"
//        />
//       {/* htmlfor connects input and label */}
//       <label htmlFor="charInput" className='mt-14'>Character:{char
//         }</label>
//      </div>
//      </div>
//      </div>
//   )
// }

// export default App
import { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(9);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [char, setChar] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null)
const copyPasswordToClipboard=()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
}
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Correct string for letters
    
    if (numberAllowed) str += "0123456789";  // Add numbers if allowed
    if (char) str += "!@#$%&";  // Add special characters if allowed
    
    // Corrected loop: start at 0 and loop till length
    for (let i = 0; i < length; i++) {
      const charc = Math.floor(Math.random() * str.length);  // Correct index calculation
      pass += str.charAt(charc);
    }

    setPassword(pass);  // Set the generated password in state
  }, [length, char, numberAllowed]); // not using password cause it keeps changing

  // Trigger password generation whenever length, char, or numberAllowed change
  useEffect(() => {
    generatePassword();
  }, [length, char, numberAllowed]);

  return (
    <div className="max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-300">
      <h1 className="text-red text-center my-9">Password Generator</h1>
      <div className="flex flex-col shadow rounded-lg overflow-hidden mb-4">
        {/* Password display */}
        <input
          type="text"
          value={password}  // Bind to password state
          className="outline-none w-full py-1 px-3 text-white bg-gray-800"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className="outline-none text-white bg-blue-400 mt-2">
          Copy
        </button>

        {/* Settings below the password display */}
        <div className="flex flex-col items-center space-y-4 mt-6">
          {/* Length Slider */}
          <div className="flex flex-col items-center">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length" className="text-white mt-2">
              Length: {length}
            </label>
          </div>

          {/* Number Allowed */}
          <div className="flex items-center gap-x-4">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => setnumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number" className="text-white">
              Number: {numberAllowed ? "Yes" : "No"}
            </label>
          </div>

          {/* Character Allowed */}
          <div className="flex items-center gap-x-4">
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={(e) => setChar((prev) => !prev)}
            />
            <label htmlFor="charInput" className="text-white">
              Character: {char ? "Yes" : "No"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
