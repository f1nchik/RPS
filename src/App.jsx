import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import rock from './assets/rock.svg'
import paper from './assets/paper.svg'
import scissors from './assets/scissors.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(3)
  const [playerScore, setPlayerScore]= useState(0)
  const [botScore, setBotScore]= useState(0)
  const [countClass, setCountClass]= useState('')
  const [handClass, setHandClass]= useState('')
  const [optionClass, setOptionClass]= useState('')
  const [playerHand, setPlayerHand]= useState('rock')
  const [gradientClass, setGradientClass]=useState('')
  const [options, setOptions]= useState({
    'rock':rock,
    'paper':paper,
    'scissors':scissors,
  })
  const [botHand, setBotHand]= useState('rock')

function restart(){
  setTimeout(() => {
    setCount(3)
  }, 2000);
  setPlayerScore(0)
  setBotScore(0)
  setCountClass('')
  setHandClass('')
  setOptionClass('')
  setGradientClass('')
}


  function handleOption(option){
    setOptionClass('buttonBlocked')
    setCount(3)
    setHandClass('')
    setGradientClass('')
    setCountClass('activeCounter')
    let counterInterval=setInterval(() => {
      setCount((c)=>{
        
        if(c==0){
          clearInterval(counterInterval)
          setCountClass('')
          console.log(botScore,playerScore);
          
        if(botScore!=5 && playerScore!=5){
          setOptionClass('')
        }  
        }
        else if(c==1){
          let pHand=option
          let bHand=Object.keys(options)[Math.floor(Math.random()*3)]
          setHandClass('showHand')
          
        if(pHand=='rock' && bHand=='paper'){
          setBotScore(bs=>bs+1)
          setGradientClass('gradientRight')
        }  
        else if(pHand=='rock' && bHand=='scissors'){
          setPlayerScore(ps=>ps+1)
          setGradientClass('gradientLeft')
        }  
        else if(pHand=='paper' && bHand=='rock'){
          setPlayerScore(ps=>ps+1)
          setGradientClass('gradientLeft')
        }  
        else if(pHand=='paper' && bHand=='scissors'){
          setBotScore(bs=>bs+1)
          setGradientClass('gradientRight')
        }  
        else if(pHand=='scissors' && bHand=='paper'){
          setPlayerScore(ps=>ps+1)
          setGradientClass('gradientLeft')
        }  
        else if(pHand=='scissors' && bHand=='rock'){
          setBotScore(bs=>bs+1)
          setGradientClass('gradientRight')
        }  
        setBotHand(bHand)
        // setBotHand(Object.keys(options)[Math.floor(Math.random()*3)])
          setPlayerHand(pHand)
      }
      return c-1
    })
   }, 1000);
  }


  useEffect(function () {
    if (botScore==5){
      setTimeout(()=>{
        setCountClass('showCounter')
        setCount('Поражение')
      },1000)
      setOptionClass('buttonBlocked')
    }
    if (playerScore==5){
      setTimeout(()=>{
        setCountClass('showCounter')
        setCount('Победа')
      },1000)
      setOptionClass('buttonBlocked')
    }
  },[botScore,playerScore])

  return (
    <div id="game">
      <h1 onClick={()=>restart()}>КАМЕНЬ НОЖНИЦЫ БУМАГА</h1>
      <h3 className={countClass}>{count}</h3>
      <div className={gradientClass} id="gradient">
        
      </div>
      <div className="hands">
        <img className={handClass} id='left' src={options[playerHand]} alt="" />
        <img className={handClass} id='right' src={options[botHand]} alt="" />
      </div>
      <div className="scoreboard">
        <h2>{playerScore}</h2>
        <h2>{botScore}</h2>
      </div>
      <div className="options">
       <button disabled={typeof count == 'number'? false: true} className={optionClass} onClick={()=>handleOption('rock')} id='rock'></button>
       <button disabled={typeof count == 'number'? false: true} className={optionClass} onClick={()=>handleOption('scissors')} id='scissors'></button>
       <button disabled={typeof count == 'number'? false: true} className={optionClass} onClick={()=>handleOption('paper')} id='paper'></button>
      </div>
    </div>
      
  )
}

export default App
