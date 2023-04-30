import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import './home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


function Home({setPage}) {
    return (
        <div className="homepage">
        <h1>Bright Star Spirits</h1>
        <div className="navlinks content-wrap">
        <Container fluid>
            <Row  className="d-flex flex-wrap justify-content-center align-items-center">
            <Col  className="d-flex justify-content-center align-items-center" >
            <Link to="/about">
                <Button className='home-nav-btn' variant="outline-primary" onClick={() => setPage('about')}>about us / mission statement</Button>
            </Link>
            </Col>
            <Col  className="d-flex justify-content-center align-items-center" >
            <Link to='enrollment'>
                <Button className='home-nav-btn' variant="outline-primary" onClick={() => setPage('enrollment')}>summer schedule / enrollment</Button>
            </Link>
            </Col>
            </Row>
        </Container>
            
            
            
            
        </div>
        </div>
    )
}

export default Home;