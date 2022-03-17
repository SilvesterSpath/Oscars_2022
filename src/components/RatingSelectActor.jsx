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
      {bestActors.map((item, idx)=> (
        <li key={`rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name='actor'
            value={item}
            onChange={handleChange2}
            checked={selected === idx}
          />
          <label htmlFor={idx}>{item}</label>
        </li>
      ))}

    </ul>
  )
}

export default RatingSelectActor