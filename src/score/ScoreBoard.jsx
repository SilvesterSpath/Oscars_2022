import React from 'react'
import PanelScoreboard from './PanelScoreboard'
import './score.css';

function ScoreBoard() {
  const teams = [['Voter 1'], ['Voter 2']]  

  return (
    <div className='score_container'>
      <div className='panelScore'>
        <PanelScoreboard teams={teams} />
      </div>
    </div>
  )
}

export default ScoreBoard