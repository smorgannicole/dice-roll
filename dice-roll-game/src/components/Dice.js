import React from 'react'

const Dice = ({ handleDiceClick, diceImage }) => {

  return (
    <>
      <div className='mini-die-cont'>
        <h2><span>Click to Roll</span></h2>
        <img onClick={handleDiceClick} className='mini-die-img' src={diceImage} alt="" />
      </div>
    </>
  )
}

export default Dice