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
       <Card.Img className="img-fluid" variant="top" src={book.img} />
       <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.category}</Card.Text>
        <Card.Text>{book.price}€</Card.Text>
        <Button variant="warning">Go somewhere</Button>
       </Card.Body>
      </Card>
     </Col>
    );
   })}
  </Row>
 </Container>
);

export default AllTheBooks;
