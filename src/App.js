import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Home from './home.js'
import EnrollmentPage from './enrollmentPage.js'
import About from './about.js'
import background from "./images/background-brightstar.png"
import banner from './images/banner-brighstar.png'
import BrightStarNav from './brightstarnav';


function App() {

  const [page, setPage] = useState('home')

  const appStyles = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100%',
    height: '100vh'
  }

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
        {page === 'home' && <Home setPage={setPage}/>}
        {page === 'enrollment' && <EnrollmentPage setPage={setPage}/>}
        {page === 'about' && <About setPage={setPage}/>}
      </div>
  
    </div>
  );
}

export default App;
