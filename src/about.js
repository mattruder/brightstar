import BrightStarNav from './brightstarnav.js'
import InfoCard from './infoCard.js'
import InfoCard2 from './infoCard2.js';
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

    

    return (
        <div>
        
        <Container fluid className='full-about'>
            <Row xs={1} s={1} md={2} className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard2 
            cardTitle={<h4><b>Bienvenida familias! Welcome to our Bright Star Spirits - Kids Collective  🌟 </b></h4>}
            cardText={<AboutText />}
            
            />
           
                </Col>
                <br></br>
                <br></br>
                <Col md className="d-flex justify-content-center align-items-center">
                <InfoCard2
            cardTitle={<b>Vision Statement</b>}
            cardText={<VisionText />}
            
            />
                </Col>
            </Row>
            <br></br>
            <br></br>
            <Row xs={1} s={1} md={1}>
            <Col md className="d-flex justify-content-center align-items-center">
            <InfoCard 
            cardTitle={<b>Practicing Mindfulness</b>}
            cardText={<MindfulnessText />}
            
            />
            </Col>
            </Row>
            <br></br>
            <br></br>
            <Row xs={1} s={1} md={1} className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center">
                    <Image fluid src={footer} />
                </Col>
            </Row>
            <br></br>
            <br></br>
        </Container>
        
        </div>
    )
}

export default About