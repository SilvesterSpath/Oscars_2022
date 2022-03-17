import {MdRecentActors} from 'react-icons/md'
import {BiMoviePlay} from 'react-icons/bi'
import {Link} from 'react-router-dom'

function ActorIconLink() {
  return (
    <div className='about-link'>
      <Link to='/actor'>
        <MdRecentActors size={30}/>
        <p>actors</p>
      </Link>      
      <Link to='/'>
        <BiMoviePlay size={30}/>
        <p>movies</p>
      </Link>      
    </div>
  )
}

export default ActorIconLink