import BrightStarNav from './brightstarnav.js'
import Contact from './contact.js'
import Schedule from './schedule.js'
import './enrollmentPage.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import InfoCard from './infoCard.js'
import ScheduleText from './scheduleText.js'
import EnrollmentText from './enrollmentText.js';
function EnrollmentPage({setPage}) {

    return (
        <div>
       
        <div className="enrollmentContainer">
        <Container fluid className='full-about'>
            <Row xs={1} s={1} md={2} className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard 
            cardTitle={<b>Summer Schedule</b>}
            cardText={<ScheduleText />}
            />
                </Col>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard 
            cardTitle={<b>Enrollment/Tuition Info</b>}
            cardText={<EnrollmentText />}
            />
                </Col>
            </Row>
            <br></br>
            <Row className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center"><Contact /></Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
        </Container>
        <div >
        
        </div>
        </div>
        </div>
    )
}

export default EnrollmentPage