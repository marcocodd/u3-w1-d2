import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import books from "./data/horror.json";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

const AllTheBooks = () => (
 <Container>
  <h2>Libri disponibili</h2>
  <Row className="g-3">
   {books.map((book) => {
    return (
     <Col xs={6} md={4} lg={2}>
      <Card className="h-100">
       <Card.Img variant="top" src={book.img} />
       <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.category}</Card.Text>
        <Card.Text>{book.price}€</Card.Text>
        <Button variant="primary">Go somewhere</Button>
       </Card.Body>
      </Card>
     </Col>
    );
   })}
  </Row>
 </Container>
);

export default AllTheBooks;
