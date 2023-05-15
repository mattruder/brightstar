import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import './infoCard2.css'

function InfoCard2({cardTitle, cardText}) {
    return (
        <Card className="infoCard2Style">
        <Image fluid variant="top"  />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>
            {cardText}
          </Card.Text>
          
          
        </Card.Body>
      </Card>
    )
}

export default InfoCard2