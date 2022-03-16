import React, {useState} from 'react'
import './score.css';

function Score({team}) {  
  const [point, setPoint] = useState(0)

  const handleIncrement = () => {
    setPoint(point + 1)
  }

  const handleDecrement = () => {
    if (point > 0) {
      setPoint(point - 1)
    }
  }

  return (
    <div className='objScore'>
      <div className='nameTeam'>
        {team}
      </div>
      <div className='pointScore'>
        {point}
      </div>
      <div >
        <button className='incrementer' onClick={handleIncrement}>+</button>
        <button className='incrementer' onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}

export default Score