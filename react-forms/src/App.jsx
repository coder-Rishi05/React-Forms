import { useState } from 'react'
import UseRef from './Components/UseRef'
import Controlled from './Components/Controlled'
import Hooks from './Components/Hooks'
import './App.css'

function App() {
  

  return (
  <div className="App h-screen w-full bg-zinc-900 ">
    <h1 className='text-xl text-center text-white font-mono p-4 ' >React form using UseRef</h1>
    <UseRef />
    <Controlled />
    <Hooks />
    </div>
  )
}

export default App
