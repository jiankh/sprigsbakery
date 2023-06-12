import { useContext  } from 'react'
import Slideshow from './Slideshow'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
      <main className="Home">
        <Slideshow />
        <div className='homeMsgContainer'>
          <h1 className='homeMsg'> Welcome to Sprigs Bakery! <br/> Where sweet dreams come true. </h1>
          <button> <Link to='/sprigsbakery/Menu'> Order Now! </Link> </button>
        </div>
        
      </main>
    )
  }
  
  export default Home