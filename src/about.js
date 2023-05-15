import BrightStarNav from './brightstarnav.js'
import InfoCard from './infoCard.js'
import './about.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import AboutText from './aboutText.js'
import VisionText from './visionText.js'
import MindfulnessText from './mindfulnessText.js'
import footer from './images/footer-brightstar.PNG'
import Image from 'react-bootstrap/Image'
function About({setPage}) {

    const cardStyle2 = {
        width: '50vw', height: '50vh'
    }

    const cardStyle1 = {
        width: '100vw'
    }

    return (
        <div>
        
        <Container fluid className='full-about'>
            <Row xs={1} s={1} md={2} className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard 
            cardTitle={<b>About Us</b>}
            cardText={<AboutText />}
            cardStyle={cardStyle2}
            />
                </Col>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard 
            cardTitle={<b>Vision Statement</b>}
            cardText={<VisionText />}
            cardStyle={cardStyle2}
            />
                </Col>
            </Row>
            <br></br>
            <br></br>
            <Row xs={1} s={1} md={1}>
            <Col>
            <InfoCard 
            cardTitle={<b>Practicing Mindfulness</b>}
            cardText={<MindfulnessText />}
            cardStyle={cardStyle1}
            />
            </Col>
            </Row>
            <br></br>
            <br></br>
            <Row xs={1} s={1} md={1} className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center">
                    <Image src={footer} />
                </Col>
            </Row>
            <br></br>
            <br></br>
        </Container>
        {/* <div className='full-about content-wrap'>
            
            
        </div> */}
        </div>
    )
}

export default About