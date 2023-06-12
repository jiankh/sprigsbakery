import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import map from './images/map.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="row primary">
        <div className="column about">
          <h3 style={{ color: '#a17c6B' }}> Connect with us </h3>
          <div className="social">
            <Link to='/'> <BsFacebook /> </Link>
            <Link to='/'> <BsInstagram /> </Link>
            <Link to='/'> <BsTwitter /> </Link>
            <Link to='/'> <BsTiktok /> </Link>
          </div>
        </div>

        <div className="column link">
          <div className='infofooter'>
            <ul>
              <li> <h1>Information</h1> </li>
              <li> <Link to='/sprigsbakery/Contact'> Contact </Link> </li>
              <li> <Link to='/sprigsbakery/Terms'> Terms of Service </Link> </li>
              <li> <Link to='/sprigsbakery/Privacy'> Privacy Policy </Link> </li>
            </ul>
          </div>
        </div>

        <div className='columnaddress'>
          <ul>
            <li> <h1> Address </h1> </li>
            <li>
            123 Main St <br/>
            Queens, NY 12345<br/>
            (212)123-7890<br/>
            sprigsbakery@sprigsbakery.com<br/>
            </li>
          </ul>
        </div>

        <div className='map'>
          <h1>Visit Us</h1>
          <img src={map}/>
        </div>

      </div>
      <div className="copyright">Copyright &copy; 2023 Sprigs Bakery</div>
    </div>

    

  );
}

export default Footer