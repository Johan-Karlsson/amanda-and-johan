import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Contact(props) {
    return (
        <Card >
        <Card.Img variant="top" style={{height:""}} src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <a href={`tel:${props.phone}`}>{props.phone}</a>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default Contact;