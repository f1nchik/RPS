import { useState } from 'react'
import reactLogo from './assets/react.svg'
import rock from './assets/rock.svg'
import paper from './assets/paper.svg'
import scissors from './assets/scissors.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(3)
  const [countClass, setCountClass]= useState('')
  function handleOption(option){
    setCountClass('activeCounter')
   let counterInterval=setInterval(() => {
    setCount((c)=>{
      if(c==0){
        clearInterval(counterInterval)
      }
      return c-1
    })
   }, 1000);
  }

  return (
    <div id="game">
      <h1>КАМЕНЬ НОЖНИЦЫ БУМАГА</h1>
      <h3 className={countClass}>{count}</h3>
      <div id="gradient">
        
      </div>
      <div className="hands">
        <img id='left' src={paper} alt="" />
        <img id='right' src={scissors} alt="" />
      </div>
      <div className="scoreboard">
        <h2>0</h2>
        <h2>0</h2>
      </div>
      <div className="options">
       <button id='rock'></button>
       <button id='paper'></button>
       <button onClick={()=>handleOption('scissors')} id='scissors'></button>
      </div>
    </div>
      
  )
}

export default App
