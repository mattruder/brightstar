import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import Home from './home.js'
import EnrollmentPage from './enrollmentPage.js'
import About from './about.js'
import background from "./images/background-brightstar.png"
import banner from './images/banner-brighstar.png'
import BrightStarNav from './brightstarnav';

import { Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';


function App() {

  

  const [page, setPage] = useState('home')

  const appStyles = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100%',
    height: '100vh'
  }

  if (page) {
    window.scrollTo(0, 0)
  }
  
//   const navigate = useNavigate()
  
//   window.onload = (e) => {
//     navigate('/')
//     setPage('home')
//   }

  const bannerStyles= {
    display: 'flex',
    width: '100vw'
  }

  return (
    <div className="App scroll" style={appStyles}>
      <div className="navheight">
     {page !== 'home' && <BrightStarNav sticky="top" setPage={setPage}/>}
     </div>
      <div className="homeContent ">
        <Routes>
          <Route exact path ="/" element={page === 'home' && <Home setPage={setPage}/>}/>
          <Route  exact path = "/enrollment" element={page === 'enrollment' && <EnrollmentPage setPage={setPage}/>}/>
          <Route exact path = "/about" element= {page === 'about' && <About setPage={setPage}/>}></Route>
        </Routes>
        
        
       
      </div>
      
  
    </div>
  );
}

export default App;
