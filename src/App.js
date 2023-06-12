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
        <Route path='/' element={<Layout></Layout>}>
          <Route index element= <Home/> />

            <Route path='Menu' index element= <Menu/> />
            <Route path='Gallery' index element= <Gallery/> />
            <Route path='About' index element= <AboutUs/> />
            <Route path='Contact' index element= <ContactUs/> />
            <Route path='Terms' index element= <Terms/> />
            <Route path='Privacy' index element= <Privacy/> />
            <Route path='Login' index element= <Login/> />
            <Route path='Welcome' index element= <Welcome/> />


        </Route>


      </Routes>
    </DataProvider>
    

  );
}

export default App;
