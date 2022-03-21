import VoteItem from "./VoteItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';

function FeedbackListActress() {
  const {actress} = useContext(FeedbackContext)
  

  if(!actress || actress.length === 0){
    return <p>No Feedback Yet</p>
  }
  
  return (
    <div className="feedback-list">  
    <AnimatePresence>
      {actress.map((item, idx)=>(
        <motion.div key={uuidv4()} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <VoteItem key={idx} item={item} type={'actress'}/>
        </motion.div>        
      ))}
    </AnimatePresence>
    </div>
  )
}

export default FeedbackListActress