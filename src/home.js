import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import './home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import banner from './images/banner-brighstar.png'
import Image from 'react-bootstrap/Image'
function Home({setPage}) {

    // const homeStyles = {
    //     backgroundImage: `url(${banner})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100%',
        
    //   }
   
    return (
        <div className="homepage" >
     
       
        <div className="navlinks content-wrap">
        <Container className="homeContainer" fluid >
        
        <Row  className="d-flex flex-wrap justify-content-center align-items-center"> 
           
            <Col md={20} lg={10} s={20} xs={20}><Image className="homeImage" fluid src={banner} /></Col>
            
        
        </Row>
            <Row md={2} sm={2} xs={1} className="d-flex flex-wrap justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center" >
            <Link to="/about">
                <Button className='home-nav-btn' variant="outline" onClick={() => setPage('about')}>about us / mission statement</Button>
            </Link>
            </Col>
            <Col  className="d-flex justify-content-center align-items-center" >
            <Link to='enrollment'>
                <Button className='home-nav-btn' variant="outline" onClick={() => setPage('enrollment')}>summer schedule / enrollment</Button>
            </Link>
            </Col>
            </Row>
        </Container>
            
            
            
            
        </div>
        </div>
    )
}

export default Home;