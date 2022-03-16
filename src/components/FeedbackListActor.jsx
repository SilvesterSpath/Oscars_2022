import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';

function FeedbackListActor() {
  const {actors} = useContext(FeedbackContext)
  

  if(!actors || actors.length === 0){
    return <p>No Feedback Yet</p>
  }
  
  return (
    <div className="feedback-list">  
    <AnimatePresence>
      {actors.map((item, idx)=>(
        <motion.div key={uuidv4()} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <FeedbackItem key={idx} item={item} type={'actors'}/>
        </motion.div>        
      ))}
    </AnimatePresence>
    </div>
  )
}

export default FeedbackListActor