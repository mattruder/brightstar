import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './brightstarnav.css'
import Button from 'react-bootstrap/Button';

function BrightStarNav({setPage}) {
    return (
       
        <div className='nav-container'>
        <Button onClick={() => setPage('home')}>Bright Star Spirits</Button>
        </div>
     
    )
}

export default BrightStarNav