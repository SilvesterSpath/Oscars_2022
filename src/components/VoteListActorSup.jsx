import VoteItem from "./VoteItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';

function FeedbackListActor() {
  const {actor_sup} = useContext(FeedbackContext)
  

  if(!actor_sup || actor_sup.length === 1){
    return <p>No Vote Yet</p>
  }
  
  return (
    <div className="feedback-list">  
    <AnimatePresence>
      {actor_sup.slice(1).map((item, idx)=>(
        <motion.div key={uuidv4()} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <VoteItem key={idx} item={item} type={'actor-sup'}/>
        </motion.div>        
      ))}
    </AnimatePresence>
    </div>
  )
}

export default FeedbackListActor