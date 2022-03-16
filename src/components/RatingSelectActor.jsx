import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({select}) {
  const [selected, setSelected] = useState(5)
  const bestPicture = [
    'Javier Bardem',
    'Benedict Cumberbach',
    'Andrew Garfield',
    "Will Smith",
    'Denzel Washington',
  ]

  const handleChange = (e)=>{
    console.log(e.currentTarget);
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
            name='rating'
            value={bestPicture[i]}
            onChange={handleChange}
            checked={selected === i}
          />
          <label htmlFor={i}>{bestPicture[i]}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect