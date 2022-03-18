import {MdRecentActors} from 'react-icons/md'
import {BiMoviePlay} from 'react-icons/bi'
import {GiDirectorChair} from 'react-icons/gi'
import {Link} from 'react-router-dom'

function CategoryLinks() {
  return (
    <div className='about-link'>
      <div className='links'>
      <Link to='/'>
        <BiMoviePlay size={30}/>        
      </Link>  
      <p>movies</p>
      </div>
      <div className='links'>
      <Link to='/actor'>
        <MdRecentActors size={30}/>        
      </Link>      
      <p>actors</p>
      </div>
      <div className='links'>
      <Link to='/director'>
        <GiDirectorChair size={30}/>        
      </Link>  
      <p>directors</p>    
    </div>
    </div>
  )
}

export default CategoryLinks