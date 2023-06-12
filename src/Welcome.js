import { useParams } from 'react-router-dom';
import axios from 'axios'

const Welcome = () => {
    const { username } = useParams(); // Extract the username from the URL parameter

    function handleLogout(e) {
      e.preventDefault()    
      axios.get('http://localhost:5000/logout/')
      .catch((err) => {
          console.error('Logout Failed', err)
      })        
    }

    return (
      <div>
        <h1>Welcome, {username}!</h1>
        {/* Other content for the welcome page */}

        <button type="logout" onClick={handleLogout}>Logout</button>
      </div>
    );
};

export default Welcome