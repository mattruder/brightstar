import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function InfoCard({cardTitle, cardText, cardStyle}) {
    return (
        <Card style={cardStyle}>
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