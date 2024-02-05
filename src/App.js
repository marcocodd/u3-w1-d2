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
  selectedBookAsin: null,
 };

 OnBookSelectGetAsin = (asin) => {
  this.setState({ selectedBookAsin: asin });
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
        <BookList
         books={arrayBooksHorror}
         OnBookSelectGetAsin={this.OnBookSelectGetAsin}
        />
       </Col>
       <Col className="col-6">
        <CommentArea asin={this.state.selectedBookAsin} />
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
