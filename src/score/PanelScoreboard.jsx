import React from 'react'
import Score from './Score'
import './score.css';

function PanelScoreboard({teams}) {    
  return (
    <div className='score_container'>
      <div className='panel'>
        {teams.map((team, idx) => {
          return (
            <Score key={idx} team={team} />
          )
        })}
      </div>
    </div>
  )
}

export default PanelScoreboard