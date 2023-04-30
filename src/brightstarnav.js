import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './brightstarnav.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function BrightStarNav({setPage}) {
    return (
       
        <div className='nav-container'>
        <Navbar sticky="top">
        <Link to="/">
            <Button variant='outline-primary' onClick={() => setPage('home')}>Bright Star Spirits</Button>
        </Link>
        </Navbar>
        </div>
     
    )
}

export default BrightStarNav