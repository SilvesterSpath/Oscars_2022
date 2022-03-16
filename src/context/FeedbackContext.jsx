import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [movies, setFeedbacks] = useState([{
    id: 1,
    text: 'Example name',
    rating: 'Example movie'
  }
])

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false
  })

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedbacks(movies.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item)=>{
    setFeedbackEditState({
      item,
      edit: true
    })
  }

  // Add a feedback
  const addFeedback = (newFeedback) => {
    if(isNaN(newFeedback.id)){
      newFeedback.id = uuidv4();
    }
    
    console.log(newFeedback);      
    setFeedbacks([newFeedback, ...movies]);
    console.log(movies);
  };

  // Update feedback item
  const updateFeedback = (id, feedbackItem)=>{
    setFeedbacks(movies.map((item)=> item.id === id ? {...item, ...feedbackItem}: item))
  }
 
  return <FeedbackContext.Provider value={{
    movies,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEditState,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext