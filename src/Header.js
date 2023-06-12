import { useContext  } from 'react'
import DataContext from './context/DataContext'
import logo from './images/sprigslogo.png'
import Schedule from './Schedule'

const Header = () => {
  return (
    <header className="Header">
      <div className='logosize'>
        <img src={logo} alt="Logo" style= {{  height:"100px" }}/>
      </div>
      <div className='schedule'>
        <Schedule />
      </div>
    </header>
  )
}

export default Header