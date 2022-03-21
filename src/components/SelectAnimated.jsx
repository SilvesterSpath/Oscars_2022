import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function SelectAnimated({select}) {
  const [selected, setSelected] = useState(null)
  const bestAnimated = [
    'ENCANTO',
    'FLEE',
    'LUCA',
    'THE MITCHELLS VS. THE MACHINES',
    'RAYA AND THE LAST DRAGON',
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
      {bestAnimated.map((item, idx)=> (
        <li key={`rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name='animated'
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

export default SelectAnimated