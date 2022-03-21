import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function SelectActorSup({select}) {
  const [selected, setSelected] = useState(null)
  const bestActorsSup = [
    'Ciarán Hinds',
    'Troy Kotsur',
    'Jesse Plemons',
    'J.K. Simmons',
    'Kodi Smit-McPhee',
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
      {bestActorsSup.map((item, idx)=> (
        <li key={`rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name='actor_sup'
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

export default SelectActorSup