import {MdRecentActors} from 'react-icons/md'
import {BiMoviePlay} from 'react-icons/bi'
import {GiDirectorChair} from 'react-icons/gi'
import {FcBusinesswoman} from 'react-icons/fc'
import {Link} from 'react-router-dom'

function CategoryLinks() {
  return (
    <div className='about-link'>
      <div className='links'>
      <Link className='a' to='/'>
        <BiMoviePlay size={30}/>        
      </Link>  
      <p className='b'>movies</p>      
      </div>
      <div className='links'>
      <Link className='a' to='/actor'>
        <MdRecentActors size={30}/>        
      </Link>      
      <p className='b'>actors</p>
      </div>
      <div className='links'>
      <Link className='a' to='/actress'>
        <FcBusinesswoman size={30}/>        
      </Link>      
      <p className='b'>actress</p>
      </div>
      <div className='links'>
      <Link className='a' to='/director'>
        <GiDirectorChair size={30}/>        
      </Link>  
      <p className='b'>directors</p>    
    </div>
    </div>
  )
}

export default CategoryLinks