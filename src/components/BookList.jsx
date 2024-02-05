import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";

const BookList = ({ books, OnBookSelect }) => (
 <>
  <h2 className="text-warning mb-4">Libri disponibili</h2>
  <Row className="g-3">
   {books.map((book) => {
    return (
     <Col xs={12} md={4} lg={4} key={book.asin}>
      <SingleBook book={book} OnBookSelect={OnBookSelect} />
     </Col>
    );
   })}
  </Row>
 </>
);

export default BookList;
