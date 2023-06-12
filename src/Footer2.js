import {Link} from 'react-router-dom'
import logo from './images/sprigslogo.png'
import map from './images/map.png'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <div className='logofooter'>
                <img src={logo}/>
            </div>
            
            <div className='table'>
                <table>
                    <tr>
                        <th>Info</th>
                        <th>Address</th>
                        <th>Visit Us</th>
                    </tr>

                    <tr>
                        <td><Link to='/Contact'> Contact </Link></td>
                        <td ROWSPAN="4" >
                                123 Main St <br/>
                                Queens, NY 12345<br/>
                                (212)123-7890<br/>
                                sprigsbakery@sprigsbakery.com<br/>
                        </td>
                        <td ROWSPAN="4" >
                            <div className='map'>
                                <img src={map}/>
                            </div>
                        </td>
                    </tr>

                    <tr><td><Link to='/Terms'> Terms of Service </Link></td></tr>
                    <tr><td><Link to='/Privacy'> Privacy Policy </Link></td></tr>

                </table>
            </div>

            

            <div className="copyright">Copyright &copy; {today.getFullYear()} Sprigs Bakery</div>
        </footer>
    )
  }
  
  export default Footer