import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import './infoCard.css'

function InfoCard({cardTitle, cardText}) {
    return (
        <Card className="infoCard1Style">
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

export default InfoCard