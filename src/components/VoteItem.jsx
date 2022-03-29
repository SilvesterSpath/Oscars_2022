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
      case 'actress':
        return item.actress;
      case 'actress-sup':
        return item.actress_sup;
      case 'actor-sup':
        return item.actor_sup;
      case 'directors':
        return item.director;
      case 'animated':
        return item.animated;
      case 'cinematography':
        return item.cinematography;
      case 'costume':
        return item.costume;
      case 'doc':
        return item.doc;
      case 'docs':
        return item.docs;
      case 'editing':
        return item.editing;
      case 'internat':
        return item.internat;
      case 'makeup':
        return item.makeup;
      case 'score':
        return item.score;
      case 'song':
        return item.song;
      case 'design':
        return item.design;
      case 'anims':
        return item.anims;
      case 'short':
        return item.short;
      case 'sound':
        return item.sound;
      case 'effects':
        return item.effects;
      case 'adapted':
        return item.adapted;
      case 'original':
        return item.original;
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