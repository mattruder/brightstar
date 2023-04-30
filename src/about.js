import BrightStarNav from './brightstarnav.js'
import InfoCard from './infoCard.js'
import './about.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function About({setPage}) {
    return (
        <div>
        <div className="nav">
            <BrightStarNav setPage={setPage} />
        </div>
        <Container fluid className='full-about'>
            <Row xs={1} s={1} md={2} className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard 
            cardTitle={'About Us'}
            cardText={"Here's a little bit about us!"}
            />
                </Col>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard 
            cardTitle={'Mission Statement'}
            cardText={"this is our mission statement"}
            />
                </Col>
            </Row>
        </Container>
        <div className='full-about content-wrap'>
            
            
        </div>
        </div>
    )
}

export default About