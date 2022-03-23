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

const [actor_sup, setActorSup] = useState([{
  id: 1,
  text: 'Example name',
  actor_sup: 'Example actor sup'
}
])

const [actress, setActress] = useState([{
  id: 1,
  text: 'Example name',
  actress: 'Example actress'
}
])

const [doc, setDoc] = useState([{
  id: 1,
  text: 'Example name',
  doc: 'Example docum'
}
])

const [docs, setDocS] = useState([{
  id: 1,
  text: 'Example name',
  docs: 'Example docum short'
}
])

const [actress_sup, setActressSup] = useState([{
  id: 1,
  text: 'Example name',
  actress_sup: 'Example actress sup'
}
])

const [directors, setDirectors] = useState([{
  id: 1,
  text: 'Example name',
  director: 'Example director'
}
])

const [cinematography, setCinematography] = useState([{
  id: 1,
  text: 'Example name',
  cinematography: 'Example cinematography'
}
])

const [animated, setAnimated] = useState([{
  id: 1,
  text: 'Example name',
  animated: 'Example animated'
}
])

const [costume, setCostume] = useState([{
  id: 1,
  text: 'Example name',
  costume: 'Example costume'
}
])

const [editing, setEditing] = useState([{
  id: 1,
  text: 'Example name',
  editing: 'Example editing'
}
])

const [makeup, setMakeup] = useState([{
  id: 1,
  text: 'Example name',
  makeup: 'Example makeup'
}
])

const [internat, setInternat] = useState([{
  id: 1,
  text: 'Example name',
  internat: 'Example internat'
}
])

const [score, setScore] = useState([{
  id: 1,
  text: 'Example name',
  score: 'Example score'
}
])

const [song, setSong] = useState([{
  id: 1,
  text: 'Example name',
  song: 'Example song'
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
      if (type === 'actors') setActors(actors.filter((item) => item.id !== id));
      if (type === 'directors') setDirectors(directors.filter((item) => item.id !== id));      
      if (type === 'actress') setActress(actress.filter((item) => item.id !== id));      
      if (type === 'actress-sup') setActressSup(actress_sup.filter((item) => item.id !== id));      
      if (type === 'animated') setAnimated(animated.filter((item) => item.id !== id));      
      if (type === 'actor-sup') setActorSup(actor_sup.filter((item) => item.id !== id));      
      if (type === 'cinematography') setCinematography(cinematography.filter((item) => item.id !== id));      
      if (type === 'costume') setCostume(costume.filter((item) => item.id !== id));      
      if (type === 'doc') setDoc(doc.filter((item) => item.id !== id));      
      if (type === 'docs') setDocS(docs.filter((item) => item.id !== id));      
      if (type === 'editing') setEditing(editing.filter((item) => item.id !== id));      
      if (type === 'internat') setInternat(internat.filter((item) => item.id !== id));      
      if (type === 'makeup') setMakeup(makeup.filter((item) => item.id !== id));      
      if (type === 'score') setScore(score.filter((item) => item.id !== id));      
      if (type === 'song') setSong(song.filter((item) => item.id !== id));      
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
    if(type === 'actor-sup') setActorSup([newFeedback, ...actor_sup]);
    if(type === 'actress') setActress([newFeedback, ...actress]);
    if(type === 'actress-sup') setActressSup([newFeedback, ...actress_sup]);
    if(type === 'directors') setDirectors([newFeedback, ...directors]);
    if(type === 'animated') setAnimated([newFeedback, ...animated]);
    if(type === 'cinematography') setCinematography([newFeedback, ...cinematography]);
    if(type === 'costume') setCostume([newFeedback, ...costume]);
    if(type === 'doc') setDoc([newFeedback, ...doc]);
    if(type === 'docs') setDocS([newFeedback, ...docs]);
    if(type === 'editing') setEditing([newFeedback, ...editing]);
    if(type === 'internat') setInternat([newFeedback, ...internat]);
    if(type === 'makeup') setMakeup([newFeedback, ...makeup]);
    if(type === 'score') setScore([newFeedback, ...score]);
    if(type === 'song') setSong([newFeedback, ...song]);
  
  };

  // Update feedback item
  const updateFeedback = (id, feedbackItem)=>{
    setMovies(movies.map((item)=> item.id === id ? {...item, ...feedbackItem}: item))
  }
 
  return <FeedbackContext.Provider value={{
    movies,
    actors,
    actress,
    actress_sup,
    directors,
    animated,
    actor_sup,
    cinematography,
    costume,
    doc,
    docs,
    editing,
    internat,
    makeup,
    score,
    song,
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