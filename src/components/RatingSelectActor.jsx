import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function RatingSelectActor({select}) {
  const [selected, setSelected] = useState(2)
  const bestActors = [
    'Javier Bardem',
    'Benedict Cumberbach',
    'Andrew Garfield',
    "Will Smith",
    'Denzel Washington',
  ]

  const handleChange2 = (e)=>{
    console.log('that', e.target);
    setSelected(parseInt(e.currentTarget.id))
    select(e.currentTarget.value)
  }

  const {feedbackEditState} = useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEditState.edit){
      setSelected(feedbackEditState.item.rating)
    }
  }, [feedbackEditState])  

  return (
    <ul className='rating'>
      {Array.from({ length: 5 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={i}
            name='actor'
            value={bestActors[i]}
            onChange={handleChange2}
            checked={selected === i}
          />
          <label htmlFor={i}>{bestActors[i]}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelectActor