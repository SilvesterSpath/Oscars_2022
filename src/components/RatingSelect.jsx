import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({select}) {
  const [selected, setSelected] = useState(5)
  const [bestPicture, setBestPicture] = useState([
    'Belfast',
    'Coda',
    'Drive my car',
    "Don't look up",
    'Dune',
    'King Richard',
    'Licorice Pizza',
    'Nightmare Alley',
    'The power of the dog',
    'West side story'
  ])

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
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={i + 2}
            name='rating'
            value={bestPicture[i + 1]}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={i + 1}>{bestPicture[i]}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect