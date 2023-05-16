import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';


const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });

function Contact({setPage}) {

    const [formData, updateFormData] = useState(initialFormData);

    const formStyles = {
     
        
        
        
        alignItems: 'center',
        justifyContent: 'center'
    }

  



    const sendFeedback = (serviceID, templateId, variables, publicKey) => {
        emailjs.send(
            serviceID, templateId,
            variables, publicKey
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const templateId = 'template_3irx4km';
        const serviceID = "service_bpdmgcd";
        const publicKey = "viC7jQKxx99O3NagW";
        if (formData.name && formData.mobile && formData.email && formData.query) {
            sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message: formData.query, email: formData.email }, publicKey)
            alert(`Thank you for your message. Your query has been forwarded.`);
            setPage('home')
        } else {
            alert(`Please complete all fields`);
        }
        

        console.log(formData);
      };

  return (
    <div  className=' formFormat align-items-center justify-content-center'>
        <div style={formStyles} >
        <h3>Register</h3>
        </div>
        <Container fluid >
            <Row>
                <Col>
                <Form >
        <div>
            <Form.Group hasValidation as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control required onChange={handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control required onChange={handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control required onChange={handleChange} name="mobile" placeholder="Phone" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Information*</Form.Label>
                <Form.Control required onChange={handleChange} name="query" placeholder="Please include name and age of all children, as well as what dates you would like to sign up for" as="textarea" rows={8} />
            </Form.Group>
    <div  className="d-flex align-items-center justify-content-center">
            <Button onClick={handleSubmit} variant="outline" className="formButtonStyle" type="submit">
                Submit
                </Button>
                </div>
                </div>
        </Form >
                </Col>
            </Row>
    
        </Container>
        </div>
  );
}

export default Contact