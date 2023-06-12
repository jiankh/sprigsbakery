import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import DataContext from './context/DataContext';
import axios from 'axios'

const Login = (props) => {
    const [user, setUsername] = useState('')
    const [pwd, setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [activePage, setActivePage] = useState('login')
    const {togglePop} = useContext(DataContext)

    function handleLogin(e) {
        e.preventDefault()
        
        axios
        .post('http://localhost:5000/login/',
        {user, pwd})
        .then((res) => {
            //handleloging
            props.toggle()
        })
        .catch((err) => {
            console.error('Login Failed', err)
        })        
    }

    function handleRegister(e) {
        e.preventDefault()
        
        axios
        .post('http://localhost:5000/register/',
        {user, pwd, email})
        .then((res) => {
            console.log('Response status:', res.status);
            console.log('Response data:', res.data);
            //handleloging
            props.toggle()
        })
        .catch((err) => {
            console.error('Login Failed', err)
        })        
    }

    function handlePageChange(page) {
        setActivePage(page);
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="loginRegister">
                    <ul>
                        <li className={activePage === 'login' ? 'active' : ''} onClick={() => handlePageChange('login')}>LOGIN</li>
                        <li className={activePage === 'register' ? 'active' : ''} onClick={() => handlePageChange('register')}>
                            <Link to="#" onClick={togglePop}>REGISTER</Link>
                        </li>
                    </ul>
                </div>
                <hr />
                {activePage === 'login' ? (
                    <div>
                        <form onSubmit={handleLogin}>
                            <label>
                                Username:
                            </label>
                            <input type="text" value={user} onChange={(e) => setUsername(e.target.value)} />
    
                            <label>
                                Password:
                            </label>
                            <input type="password" value={pwd} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">Login</button>
                            {/* onClick={handleLogin} */}
                        </form>
                        <button className='cancelbtn' onClick={props.toggle}>Close</button>
                    </div>
                ) : (
                    <div>
                        <form onSubmit={handleRegister}>
                            <label>
                                Username:
                            </label>
                            <input type="text" value={user} onChange={(e) => setUsername(e.target.value)} />

    
                            <label>
                                Email:
                            </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    
                            <label>
                                Password:
                            </label>
                            <input type="password" />
    
                            <button type="submit">Register</button>
                        </form>
                        <button className='cancelbtn' onClick={props.toggle}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;