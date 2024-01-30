import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const CustomNavBar = () => (
 <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
  <Container>
   <Navbar.Brand href="#home">Logo</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
     <Nav.Link href="#booking">Home</Nav.Link>
     <Nav.Link href="#admin">About</Nav.Link>
     <Nav.Link href="#contacts">Browse</Nav.Link>
    </Nav>
   </Navbar.Collapse>
  </Container>
 </Navbar>
);

export default CustomNavBar;
