import BrightStarNav from './brightstarnav.js'
import InfoCard from './infoCard.js'
import InfoCard2 from './infoCard2.js';
import InfoCard3 from './infoCard3.js'
import './about.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import AboutText from './aboutText.js'
import VisionText from './visionText.js'
import MindfulnessText from './mindfulnessText.js'
import footer from './images/footer-brightstar.PNG'
import Image from 'react-bootstrap/Image'
import {useState, useEffect, useRef} from 'react'
function About({setPage}) {

    // const [boxHeight, setBoxHeight] = useState(0)
    // const ref = useRef(null)

    // const initialBoxHeight = {
    //     width: '50vw',
    //     height: 'auto'
    // }

    // const newBoxHeight = {
    //     height: `${boxHeight}`
    // }

    // function getBoxHeight(heightVariable) {
    //     return (
    //         heightVariable.height
    //     )
    // }

    // useEffect(() => {
    //     setBoxHeight(initialBoxHeight.height)
    // } )

    // console.log("initlaboxheightvalue", initialBoxHeight.height.valueOf())
    // console.log("newboxheight", newBoxHeight.height.value)
    // console.log("initialboxheight", initialBoxHeight.height.value)
    // console.log("newHeight", getBoxHeight(initialBoxHeight))

    

    return (
        <div>
        
        <Container fluid className='full-about'>
        <Row xs={1} s={1} md={1}>
            <Col md className="d-flex justify-content-center text-align-center align-items-center">
            <InfoCard
             
            cardTitle={<div className="centerText"><b>Bienvenida familias!</b> 
            <br></br>
        <b>Welcome to our Bright Star Spirits</b> 
        <br></br>
        <b>Kids Collective  🌟</b>
            </div> }
            cardText={<AboutText />}
            
            />
            
            </Col>
            </Row>
            {/* <br></br>
            <br></br>
            <Row xs={1} s={1} md={2} className='d-flex flex-wrap align-items-center'>
                <Col md className="d-flex justify-content-center align-items-center addSpace">
                <InfoCard3
            // style={newBoxHeight}
            cardTitle={<b>Practicing Mindfulness</b>}
            cardText={<MindfulnessText />}
            
            />
           
                </Col>
                <br></br>
                <br></br>
                <Col md className="initialBoxHeight d-flex justify-content-center align-items-center">
                    
                <InfoCard3
                
            // style={initialBoxHeight}
            cardTitle={<b>Vision Statement</b>}
            cardText={<VisionText />}
            
            />
            
                </Col>
            </Row> */}
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