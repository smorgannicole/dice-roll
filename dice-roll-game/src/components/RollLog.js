import React from 'react'

const RollLog = ({ currentRoll, handleClearClick }) => {
  return (
    <>
      <div className="another-cont">
        <h2><span>Roll Log</span></h2>
        <div className='log-cont'>
          <ul className='num-parent'>
            {currentRoll.map((num, index) => { 
              return <li key={index}>{num}</li>
            })}
          </ul>
        </div>
        <button onClick={handleClearClick}>Clear Log</button>
      </div>
    </>
  )
}

export default RollLog