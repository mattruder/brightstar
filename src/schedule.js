import './schedule.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function Schedule() {
    return (
        <div className=" scheduleWidth">
            <Container fluid className='content-wrap transparentBG'>
        <Row xs={1} s={1} md={2} className='d-flex flex-wrap align-items-center'>
        <Col md className="d-flex justify-content-center align-items-center">
        <div>
        <h1>Enrollment</h1>
            <p>We will have 15 sessions operating on Tuesdays & Thursdays @ 9:30 am -2:30 pm 
                from June 13 - August 10.</p>
            <h2>Summer Dates</h2>
            
                <p>Week 1 ~ 6/13 & 6/15</p>
                <p>Week 2 ~ 6/20 & 6/22</p>
                <p>Week 3 ~ 7/6</p>
                <p>Week 4 ~ 7/11 & 7/13</p>
                <p>Week 5 ~ 7/18 & 7/20</p>
                <p>Week 6 ~ 7/25 & 7/27</p>
                <p>Week 7 ~ 8/1 & 8/3</p>
                <p>Week 8 ~ 8/8 & 8/9 </p>
        </div>
        
       
        </Col>
        <Col md className="d-flex justify-content-center align-items-center">
            <div>
            <h2>Tuition Information</h2>
            <p>The daily cost of the program is $44 per child, we also offer a discounted rate of $33 per additional child from the same family.</p>
            <p><em>Payment Options: </em>Tuition will be collected on a week by week basis via venmo, check, or cash.</p>
            </div>
        
        </Col>
        </Row>
        
           
       
        
        </Container>
    
        </div>
    )
}

export default Schedule