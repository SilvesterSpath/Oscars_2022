import {MdRecentActors} from 'react-icons/md'
import {MdOutlineRecentActors} from 'react-icons/md'
import {BiMoviePlay} from 'react-icons/bi'
import {GiDirectorChair} from 'react-icons/gi'
import {ImWoman} from 'react-icons/im'
import {IoMdWoman} from 'react-icons/io'
import {FcFilmReel} from 'react-icons/fc'
import {FaPhotoVideo} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
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
        <Link className='a' to='/actor_sup'>
          <MdOutlineRecentActors size={30}/>        
        </Link>      
        <p className='b'>actor_sup</p>
      </div>
      <div className='links'>
        <Link className='a' to='/actress'>
          <ImWoman size={30}/>        
        </Link>      
        <p className='b'>actress</p>
      </div>
      <div className='links'>
        <Link className='a' to='/actress_sup'>
          <IoMdWoman size={30}/>        
        </Link>      
        <p className='b'>actress_sup</p>
      </div>
      <div className='links'>
        <Link className='a' to='/director'>
          <GiDirectorChair size={30}/>        
        </Link>  
        <p className='b'>directors</p>    
    </div>
      <div className='links'>
        <Link className='a' to='/animated'>
          <FcFilmReel size={30}/>        
        </Link>  
        <p className='b'>animated</p>    
      </div>
      <div className='links'>
        <Link className='a' to='/cinematography'>
          <FaPhotoVideo size={30}/>        
        </Link>  
        <p className='b'>cinematogr</p>    
      </div>
      <div className='links'>
        <Link className='a' to='/costume'>
          <MdDesignServices size={30}/>        
        </Link>  
        <p className='b'>costume</p>    
      </div>
    </div>
  )
}

export default CategoryLinks