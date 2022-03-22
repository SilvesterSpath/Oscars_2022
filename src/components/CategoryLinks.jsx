import {MdRecentActors} from 'react-icons/md'
import {MdOutlineRecentActors} from 'react-icons/md'
import {BiMoviePlay} from 'react-icons/bi'
import {GiDirectorChair} from 'react-icons/gi'
import {ImWoman} from 'react-icons/im'
import {IoMdWoman} from 'react-icons/io'
import {FcFilmReel} from 'react-icons/fc'
import {FaPhotoVideo} from 'react-icons/fa'
import {FaFeatherAlt} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {GiPodium} from 'react-icons/gi'
import {GiFeather} from 'react-icons/gi'
import {RiScissors2Fill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

function CategoryLinks() {
  return (
    <div className='about-link'>
      <div className='links'>
        <Link className='a' to='/'>
          <GiPodium size={30}/>        
        </Link>  
        <p className='b'>standing</p>      
      </div>    
      <div className='links'>
        <Link className='a' to='/movies'>
          <BiMoviePlay size={30}/>        
        </Link>  
        <p className='b'>movie</p>      
      </div>
      <div className='links'>
        <Link className='a' to='/actor'>
          <MdRecentActors size={30}/>        
        </Link>      
        <p className='b'>actor</p>
      </div>
      <div className='links'>
        <Link className='a' to='/actor_sup'>
          <MdOutlineRecentActors size={30}/>        
        </Link>      
        <p className='b'>actorSup</p>
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
        <p className='b'>actressSup</p>
      </div>
      <div className='links'>
        <Link className='a' to='/director'>
          <GiDirectorChair size={30}/>        
        </Link>  
        <p className='b'>director</p>    
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
      <div className='links'>
        <Link className='a' to='/doc'>
          <FaFeatherAlt size={30}/>        
        </Link>  
        <p className='b'>docum</p>    
      </div>
      <div className='links'>
        <Link className='a' to='/docs'>
          <GiFeather size={30}/>        
        </Link>  
        <p className='b'>doc short</p>    
      </div>
      <div className='links'>
        <Link className='a' to='/editing'>
          <RiScissors2Fill size={30}/>        
        </Link>  
        <p className='b'>editing</p>    
      </div>
    </div>
  )
}

export default CategoryLinks