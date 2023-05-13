import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './brightstarnav.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function BrightStarNav({setPage}) {

    const sticky={
        position: 'fixed',
        top: "0",
        width: "100%",
        zIndex: "100",
        paddingBottom: "10px",
        padding: "10px",
        height: '10vh'
      }

      const padding = {
        paddingBottom: '100px'
      }

    return (
       
        <div style={padding} >
        <Navbar style={sticky} className="navStyles">
        <Container>
        <Navbar.Brand href="#home"><Link to="/">
            <Button  className="navButton" onClick={() => setPage('home')}>bright star spirits</Button>
        </Link></Navbar.Brand>
        {/* <Link to="/about">
                <Button className='home-nav-btn' variant="outline-primary" onClick={() => setPage('about')}>about us / mission statement</Button>
            </Link>
            <Link to='enrollment'>
                <Button className='home-nav-btn' variant="outline-primary" onClick={() => setPage('enrollment')}>summer schedule / enrollment</Button>
            </Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
        
        </Navbar>
        </div>
     
    )
}

export default BrightStarNav