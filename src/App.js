import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigation from './Components/Navigation';
import Contact from './Components/Contact';
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
        <Container id="scrollspyHeading0" className="section">
          <Row>
            <Col>
              <h1 className="section-heading">Vi ska gifta oss!</h1>
            </Col>
            <Col>
              <Image src="ja.JPG" rounded fluid/>
            </Col>
          </Row>
          <Row style={{paddingTop: "25px"}}>
            <p>Den 14:e september blir det bröllop, och vi vill gärna fira den här dagen med er. All information ni behöver för att vara med på detta kalas kommer att dyka upp på den här hemsidan under våren.</p>
          </Row>
        </Container>
        <Container id="scrollspyHeading1" className="section">
        <h4 className="section-heading">Nyheter</h4>
          <Row>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Tal</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Anmälan</Card.Subtitle>
                <Card.Text>
                Om ni vill hålla tal så anmäler ni det via länken nedanför, eller hör av er till våra toasmasters. Kontaktinfo finns längre ned.
                </Card.Text>
                <Button href='https://docs.google.com/forms/d/e/1FAIpQLSfJYCMKDzu9NzFaf04q3wSMb1b7yaffpqLuZmzzkkN77KjUgw/viewform' target="_blank" variant="primary">Jag vill tala!</Button>
              </Card.Body>
            </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Dagordning</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Bra att veta</Card.Subtitle>
                  <Card.Text>
                  Vigseln startar 12.30. Efter vigseln kommer det att serveras tårta, kaffe, och bubbel. Under eftermiddagen kommer det finnas lättare snacks att tillgå, innan middagen börjar serveras vid 17.30-18.00. Det kan därmed vara bra att äta en stabil frukost eller en lättare lunch innan vigseln.
                  </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                  <Card.Title>Önskelista</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">För er som undrar</Card.Subtitle>
                  <Card.Text>
                  Då flera av er frågat efter en önskelista har vi lagt upp en digital variant som ni når via länken nedanför.
                  </Card.Text>
                  <Button href='https://mywishlist.online/w/twag8l/amanda-johans-onskelista' target="_blank" variant="primary">Önskelista</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                  <Card.Title>Klädkod</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Vad betyder "Kavaj"?</Card.Subtitle>
                  <Card.Text>
                  Klädkod Kavaj har historiskt sett syftat på det vi idag benämner som Mörk Kostym. Klädkoden betyder fortfarande hel kostym men öppnar nu en större variation av nyanser på såväl kostym som skjorta och skor. Det rör sig alltså inte om en uddakavaj eller Blazer när det står Kavaj på inbjudan.
                  </Card.Text>
                  <Button href='https://www.oscarjacobson.com/sv-se/inspiration/guider/hall-koll-pa-kladkoderna/' target="_blank" variant="primary">Läs mer om klädkoder</Button>
                </Card.Body>
            </Card>
            </CardGroup>
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
                    <Button href='https://maps.app.goo.gl/xwgAKFpjgCUW7nvk9' target="_blank" variant="primary">Öppna i Google Maps</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Festlokal</Card.Title>
                    <Card.Text>
                      Sockerbruket Arena
                    </Card.Text>
                    <Button href='https://maps.app.goo.gl/5sFK8kb5QtW74xHc6' target="_blank" variant="primary">Öppna i Google Maps</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Hotell</Card.Title>
                    <Card.Text>
                      Quality Hotel Waterfront. Kika under "Boende" för mer info.
                    </Card.Text>
                    <Button href='https://maps.app.goo.gl/u5AnTUEMdsjQFwps7' target="_blank" variant="primary">Öppna i Google Maps</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Row>
        </Container>
        <Container id="scrollspyHeading3" className="section">
          <h4 className="section-heading">Boende</h4>
          <p>För er som vill hitta ett boende i närheten av festligheterna rekommenderar vi Quality Hotel Waterfront. Smsa Johan på 0703328962 för att få en rabattkod på 15%.</p>
          <Button href='https://www.strawberry.se/transformation/?hotelId=117629' target="_blank" variant="primary">Boka hotell</Button>
          <Row style={{paddingTop: "25px"}}>
            <Image src="step1.png" rounded fluid/>
            <p>Använd rabattkoden genom att klicka på "Lägg till rabatt- eller bokningskod här", efter att ni valt datum och antal rum. Tryck sedan på "Sök" och gå vidare till nästa steg.</p>
          </Row>
          <Image src="step2.png" rounded fluid/>
          <p>Scrolla ned till de olika rumskategorierna och välj det som heter "Local Event 15%". Fyll därefter i personliga detaljer och biffen är kirrad!</p>
        </Container>
        <Container id="scrollspyHeading4" className="section">
          <h4 className="section-heading">Kontakter</h4>
          <h5>Värdpar</h5>
          <p>Vi finns här för att svara på frågor och guida er under bröllopsdagen. Vi kan svara på det mesta, men för frågor angeånde tal och bravader under middagen hänvisar vi till våra eminenta toastmasters.</p>
          <Row xs={2}>
            <Col>
                <Contact image="tobias.jpg" name="Tobias Fransson" phone="0706051603"></Contact>
              </Col>
              <Col>
                <Contact image="ellen.png" name="Ellen Thersthol" phone="0734018190"></Contact>
              </Col>
          </Row>
          <h5 style={{paddingTop: "25px"}}>Toastmasters</h5>
          <p>Vi styr upp allt som händer under kvällens middag, förutom själva matlagningen. Vill ni hålla tal? Prata med oss!</p>
          <Row xs={2}>
            <Col>
                <Contact image="viktor.jpeg" name="Viktor Barnö" phone="0725252379"></Contact>
              </Col>
              <Col>
                <Contact image="sten.jpeg" name="Simon Carlsson" phone="0709723558"></Contact>
              </Col>
          </Row>
        </Container>
        <Container id="scrollspyHeading5" className="section">
        <h4 className="section-heading">OSA</h4>
        <p>För att göra det lätt för både er och oss ber vi er OSA via vårt Google-formulär som ni når via knappen nedan. Vi vill gärna få in ert svar senast den 3:e maj.</p>
        <Button href='https://docs.google.com/forms/d/e/1FAIpQLSfr8-2_ctKEzIpI9pS-GjkhUIWT9YcNJ9b5p5JgA2HgrK7ABw/viewform?usp=sf_link' target="_blank" variant="primary">OSA</Button>
        </Container>
      </div>
    </div>
  );
}