import {Link} from 'react-router-dom'
import { useContext  } from 'react'
import DataContext from './context/DataContext'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { useState } from 'react'
import Login from './Login'


const Nav = () => {
    const { search, setSearch } = useContext(DataContext)

    const [seen, setSeen] = useState(false)
    function togglePop () {
      setSeen(!seen);
    };

    return (
      <nav className="Nav">
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/Menu'> Menu </Link></li>
                <li><Link to='/Gallery'> Gallery </Link></li>
                <li><Link to='/About'> About Us </Link></li>
                <li><Link to='/Contact'> Contact Us </Link></li>

                <div style={{ float: 'right' }}>
                    <li><Link to='/Cart'> <AiOutlineShoppingCart /> </Link></li> 
                    <li><Link onClick={togglePop}> <FaUser /></Link> 
                    {seen ? <Login toggle={togglePop} /> : null} </li> 
                    <li><Link to='/Search'> <BsFillSearchHeartFill /> </Link></li> 
                </div>
            </ul>
            
  

      </nav>
    )
  }
  
  export default Nav