import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';

function FeedbackList() {
  const {movies} = useContext(FeedbackContext)
  

  if(!movies || movies.length === 0){
    return <p>No Feedback Yet</p>
  }
  
  return (
    <div className="feedback-list">  
    <AnimatePresence>
      {movies.map((item, idx)=>(
        <motion.div key={uuidv4()} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <FeedbackItem key={idx} item={item} type={'movies'}/>
        </motion.div>        
      ))}
    </AnimatePresence>
    </div>
  )
}

export default FeedbackList