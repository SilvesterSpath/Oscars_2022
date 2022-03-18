import Card from "../shared/Card"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function VoteItem({item, type}) {
  const {deleteItem, editFeedback} = useContext(FeedbackContext)

  function renderSwitch(type) {
    switch(type) {
      case 'movies':
        return item.movie;
      case 'actors':
        return item.actor;
      case 'directors':
        return item.director;
      default:
        return [];
    }
  }

  return (    
     <Card >
      <div className="num-display">{renderSwitch(type)}</div>
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

export default VoteItem