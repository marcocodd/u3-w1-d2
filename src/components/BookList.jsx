import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
 <Container fluid className="bg-dark">
  <h2 className="text-warning mb-4">Libri disponibili</h2>
  <Row className="g-3">
   {books.map((book) => {
    return (
     <Col xs={6} md={4} lg={2} key={book.asin}>
      <SingleBook book={book} />
     </Col>
    );
   })}
  </Row>
 </Container>
);

export default BookList;
