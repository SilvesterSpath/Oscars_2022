import { useState, useContext, useEffect } from "react"
import Card from "../shared/Card"
import Button from "../shared/Button"
import SelectEffects from "./SelectEffects"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackFormActor() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisables] = useState(false)
  const [message, setMessage] = useState('Select a nominant and send your vote')
  const [effects, setEffects] = useState('')

  const {addItem, feedbackEditState, updateFeedback} = useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEditState.edit){
      setBtnDisables(false)
      setText(feedbackEditState.item.text)
      setEffects(feedbackEditState.item.effects)      
    }
  },[feedbackEditState.edit, feedbackEditState.item.text, feedbackEditState.item.effects])

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
        effects
      }
      if(feedbackEditState.edit){
        updateFeedback(feedbackEditState.item.id, newFeedback)
      } else {
        addItem(newFeedback, "effects");
        setText('')
      }     
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Oscar nominations for best visual effects:</h2>
        <SelectEffects select={(effects)=>setEffects(effects)}/>
        <div className="input-group">
          <input type="text" placeholder="Write your name or choose from dropdown.." value={text} list="names" onChange={(e)=> handleTextChange(e)}/>
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

export default FeedbackFormActor