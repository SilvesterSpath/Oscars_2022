import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [movies, setMovies] = useState([{
    id: 1,
    text: 'Example name',
    movie: 'Example movie'
  }
])

const [actors, setActors] = useState([{
  id: 1,
  text: 'Example name',
  actor: 'Example actor'
}
])

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false
  })

  // Delete item
  const deleteItem = (id, type) => {
    if (window.confirm('Are you sure you want to delete')) {
      if (type === 'movies') setMovies(movies.filter((item) => item.id !== id));
      if (type === 'actors') setActors(actors.filter((item) => item.id !== id))      
    }
  };

  // Set item to be updated
  const editFeedback = (item)=>{
    setFeedbackEditState({
      item,
      edit: true
    })
  }

  // Add a movie
  const addItem = (newFeedback, type) => {
    if(isNaN(newFeedback.id)){
      newFeedback.id = uuidv4();
    }
    if(type === 'movies') setMovies([newFeedback, ...movies]);
    if(type === 'actors') setActors([newFeedback, ...actors]);

    
  };

  // Update feedback item
  const updateFeedback = (id, feedbackItem)=>{
    setMovies(movies.map((item)=> item.id === id ? {...item, ...feedbackItem}: item))
  }
 
  return <FeedbackContext.Provider value={{
    movies,
    actors,
    deleteItem,
    addItem,
    editFeedback,
    feedbackEditState,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext