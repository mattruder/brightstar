import BrightStarNav from './brightstarnav.js'
import Contact from './contact.js'
import Schedule from './schedule.js'
import './enrollmentPage.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function EnrollmentPage({setPage}) {
    return (
        <div>
        <div className="nav">
            <BrightStarNav setPage={setPage} />
        </div>
        <div className='schedule-and-contact-area'>
        <Container fluid className='content-wrap'>
        <Row xs={1} s={1} md={2} className='d-flex flex-wrap align-items-center'>
        <Col md className="d-flex justify-content-center align-items-center">
        <Schedule />
       
        </Col>
        <Col md className="d-flex justify-content-center align-items-center">
        <Contact />
        </Col>
        </Row>
        
           
       
        
        </Container>
        </div>
        </div>
    )
}

export default EnrollmentPage