import Layout from './Layout'
import Home from './Home'
import Menu from './Menu'
import Gallery from './Gallery'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Terms from './Terms'
import Privacy from './Privacy'
import Login from './Login'
import Welcome from './Welcome'

import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import './index.css'



function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/sprigsbakery/' element={<Layout/>}>
            <Route index element= <Home/> />

            <Route path='/sprigsbakery/Menu' index element= <Menu/> />
            <Route path='/sprigsbakery/Gallery' index element= <Gallery/> />
            <Route path='/sprigsbakery/About' index element= <AboutUs/> />
            <Route path='/sprigsbakery/Contact' index element= <ContactUs/> />
            <Route path='/sprigsbakery/Terms' index element= <Terms/> />
            <Route path='/sprigsbakery/Privacy' index element= <Privacy/> />
            <Route path='/sprigsbakery/Login' index element= <Login/> />
            <Route path='/sprigsbakery/Welcome' index element= <Welcome/> />

        </Route>


      </Routes>
    </DataProvider>
    

  );
}

export default App;
