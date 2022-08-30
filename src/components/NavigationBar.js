import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">XX1 PUTRI</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="#download">LINK DOWNLOAD</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
