import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function SelectDirectors({select}) {
  const [selected, setSelected] = useState(null)
  const bestInternat = [
    'DRIVE MY CAR',
    'FLEE',
    'THE HAND OF GOD',
    'LUNANA: A YAK IN THE CLASSROOM',
    'THE WORST PERSON IN THE WORLD',
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
      {bestInternat.map((item, idx)=> (
        <li key={`rating-${idx + 1}`}>
          <input
            type='radio'
            id={idx}
            name='internat'
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

export default SelectDirectors