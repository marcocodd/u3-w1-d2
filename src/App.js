import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
//import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import arrayBooksHorror from "./components/data/horror.json";
import CommentArea from "./components/CommentArea";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
 state = {
  selectedBook: null,
 };

 OnBookClick = (asin) => {
  this.setState({ selectedBook: asin });
 };

 render() {
  return (
   <div className="App">
    <header>
     <CustomNavBar />
    </header>
    <main>
     <Container fluid className="p-0 bg-dark">
      <Row>
       <Col className="col-6 border-end">
        <BookList books={arrayBooksHorror} />
       </Col>
       <Col className="col-6">
        <CommentArea asin={this.props.asin} />
       </Col>
      </Row>
     </Container>
    </main>
    <CustomFooter />
   </div>
  );
 }
}

export default App;
