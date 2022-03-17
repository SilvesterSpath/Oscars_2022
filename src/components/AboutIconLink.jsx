import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link' style={{justifyContent: 'flex-end'}}>
      <Link to='/about'>
        <FaQuestion size={30}/>
      </Link>      
    </div>
  )
}

export default AboutIconLink