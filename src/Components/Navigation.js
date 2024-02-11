import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <>
      <Navbar className="bg-body-tertiary" sticky='top'>
        <Container id="navigation">
          <Navbar.Brand href="#scrollspyHeading1">
            <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            A&J
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#scrollspyHeading2">Plats</Nav.Link>
              <Nav.Link href="#scrollspyHeading3">Boende</Nav.Link>
              <Nav.Link href="#scrollspyHeading4">Kontakter</Nav.Link>
              <Nav.Link href="#scrollspyHeading5">OSA</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;