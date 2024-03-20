import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'
import RollLog from './components/RollLog'
import blueCube from './images/blue-die.png'
import pinkCube from './images/pink-die.png'
import purpleCube from './images/purple-die.png'
import yellowCube from './images/yellow-die.png'

const App = () => {
  const [currentRoll, setCurrentRoll] = useState([ ])
  const [selectedDie, setSelectedDie] = useState({ })

  const dieOptions = [
    { imagePath: blueCube, alt: 'blue die', roll: ['💎','👁️','🌙','🦕', '🥿','🧵'] }, 
    { imagePath: pinkCube, alt: 'pink die', roll: ['⭐️','☮️','🌐','👛', '🦩','🐽',] }, 
    { imagePath: purpleCube, alt: 'purple die', roll: ['🩷','🙂','☯️','👾','☂️','🍇'] }, 
    { imagePath: yellowCube,  alt: 'yellow die', roll: ['🦴','🎯','🎱','🌻','🍋','🚕'] },
  ]

  const handleDiceClick = () => {
    const num = Math.floor(Math.random() * selectedDie.roll.length)
    setCurrentRoll([selectedDie.roll[num], ...currentRoll])
  }

  const handleDieSelect = (dieOption) => {
    setSelectedDie(dieOption)
  }

  const handleClearClick = () => {
    setCurrentRoll([ ])
  }

  return (
    <>
      <div className='page-wrapper'>
        <div className='header'>
          <h1 className='choose'><span>Select a Die</span></h1>
          <div className="die-options">
            {dieOptions.map((option, index) => (
              <img className={`die-img ${selectedDie.imagePath === option.imagePath ? '' : 'fade-out'}`} 
              key={index} src={option.imagePath} 
              alt={option.alt}
              onClick={() => handleDieSelect(option)} />
            ))} 
          </div>
        </div>
        <div className="bottom-half">
          <Dice 
          handleDiceClick={handleDiceClick} 
          diceImage={selectedDie.imagePath}/> 
          <RollLog 
          currentRoll={currentRoll}
          handleClearClick={handleClearClick} />
        </div>
      </div>
    </>
  )
}

export default App
