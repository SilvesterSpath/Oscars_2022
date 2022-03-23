import PropTypes from 'prop-types'
import image from '../img/Rectangle3.jpg'

function Header({textColor, text}) {
  console.log( {image});
 
  return (
    <header style={{backgroundImage: `url(${image})`, color: textColor, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="container"> 
        <h2>{text}</h2>      
      </div>
    </header>
  )
}

Header.defaultProps = {      
  textColor: '#FBEC91',
  text: '..and the Oscar goes to..'
}

Header.propTypes = {  
  textColor: PropTypes.string
}

export default Header