import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Home from './home.js'
import EnrollmentPage from './enrollmentPage.js'
import About from './about.js'

function App() {

  const [page, setPage] = useState('home')

  return (
    <div className="App">
      
      <div>
        {page === 'home' && <Home setPage={setPage}/>}
        {page === 'enrollment' && <EnrollmentPage setPage={setPage}/>}
        {page === 'about' && <About setPage={setPage}/>}
      </div>

    </div>
  );
}

export default App;
