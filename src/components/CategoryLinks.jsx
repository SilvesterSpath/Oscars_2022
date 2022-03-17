import {MdRecentActors} from 'react-icons/md'
import {BiMoviePlay} from 'react-icons/bi'
import {GiDirectorChair} from 'react-icons/gi'
import {Link} from 'react-router-dom'

function CategoryLinks() {
  return (
    <div className='about-link'>
      <Link to='/'>
        <BiMoviePlay size={30}/>
        <p>movies</p>
      </Link>  
      <Link to='/actor'>
        <MdRecentActors size={30}/>
        <p>actors</p>
      </Link>      
      <Link to='/director'>
        <GiDirectorChair size={30}/>
        <p>directors</p>
      </Link>      
    
    </div>
  )
}

export default CategoryLinks