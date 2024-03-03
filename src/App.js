import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigation from './Components/Navigation';
import Map from './Components/Map'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function MyApp() {
  return (
    <div id="app">
      <Navigation></Navigation>
      <div id="contents" data-spy="scroll" data-target="#nav-options" data-offset="0">
        <Container id="scrollspyHeading1" className="section">
          <Row>
            <Col>
            <h1 className="section-heading">Vi ska gifta oss!</h1>
            <p>Den 14:e september blir det bröllop, och vi vill gärna fira den här dagen med er. All information ni behöver för att vara med på detta kalas kommer att dyka upp på den här hemsidan under våren.</p>
            </Col>
            <Col>
              <Image src="ja.JPG" rounded fluid/>
            </Col>
          </Row>
        </Container>
        <Container id="scrollspyHeading2" className="section">
          <Row>
            <h4 className="section-heading">Plats</h4>
          </Row>
              <Map></Map>
          <Row>
            <div style={{paddingTop: "25px"}}>
            <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Vigsel</Card.Title>
          <Card.Text>
            Sankta Birgittas kapell
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Festlokal</Card.Title>
          <Card.Text>
            Sockerbruket Arena
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Hotell</Card.Title>
          <Card.Text>
            Quality Hotel Waterfront, mer info längre ned
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
            </div>
          </Row>
        </Container>
        <Container id="scrollspyHeading3" className="section">
        <h4 className="section-heading">Boende</h4>
        </Container>
        <Container id="scrollspyHeading4" className="section">
        <h4 className="section-heading">Kontakter</h4>
        </Container>
        <Container id="scrollspyHeading5" className="section">
        <h4 className="section-heading">OSA</h4>
        </Container>
      </div>
    </div>
  );
}