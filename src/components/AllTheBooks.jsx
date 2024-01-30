import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import books from "./data/horror.json";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

const AllTheBooks = () => (
 <Container fluid className="bg-dark">
  <h2 className="text-warning">Libri disponibili</h2>
  <Row className="g-3">
   {books.map((book) => {
    return (
     <Col xs={6} md={4} lg={2} key={book.asin}>
      <Card className="h-100 bg-black text-white">
       <Card.Img className="flex-grow-1" variant="top" src={book.img} />
       <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="border-bottom">{book.title}</Card.Title>
        <Card.Text>{book.category}</Card.Text>
        <Card.Text>{book.price}€</Card.Text>
        <Button variant="warning">Aggiungi al Carrello</Button>
       </Card.Body>
      </Card>
     </Col>
    );
   })}
  </Row>
 </Container>
);

export default AllTheBooks;
