import { useState, useContext, useEffect } from "react"
import Card from "../shared/Card"
import Button from "../shared/Button"
import SelectMovie from "./SelectMovie"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisables] = useState(false)
  const [message, setMessage] = useState('Write or choose your name from the dropdown menu')
  const [movie, setRating] = useState('')

  const {addItem, feedbackEditState, updateFeedback} = useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEditState.edit){
      setBtnDisables(false)
      setText(feedbackEditState.item.text)
      setRating(feedbackEditState.item.rating)      
    }
  },[feedbackEditState.edit, feedbackEditState.item.text, feedbackEditState.item.rating])

  const handleTextChange = (e)=>{     
    console.log(text);   
    if (text.length > 0 ){
      setBtnDisables(false)
      setMessage(null)
    } else {
      setBtnDisables(false)
      setMessage('Choose a nominant (you can change it later)')
    }

    setText(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(text.trim().length > 1){
      const newFeedback = {         
        text,
        movie
      }
      if(feedbackEditState.edit){
        updateFeedback(feedbackEditState.item.id, newFeedback)
      } else {
        addItem(newFeedback, "movies");
        setText('')
      }     
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Oscar nominations for best picture:</h2>
        <SelectMovie select={(movie)=>setRating(movie)}/>
        <div className="input-group">
          <input type="text" placeholder="Your name.." value={text} list="names" onChange={(e)=> handleTextChange(e)}/>
          <datalist id="names">
            <option value="Szilvi"/>
            <option value="Szilveszter"/>
          </datalist>
          <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>    
  )
}

export default FeedbackForm