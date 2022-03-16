import Card from "../shared/Card"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({item, type}) {
  const {deleteItem, editFeedback} = useContext(FeedbackContext)

  return (    
     <Card >
      <div className="num-display">{type === 'movies'? item.movie : item.actor}</div>
      <button className="close" onClick={() => deleteItem(item.id, type)} >
        <FaTimes color='purple'/>
      </button>
      <button className="edit" onClick={() => editFeedback(item)} >
        <FaEdit color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>      
    </Card>
  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  item: PropTypes.object
}

export default FeedbackItem