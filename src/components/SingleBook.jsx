import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
 state = {
  selected: false,
 };

 SelectCard = () => {
  this.setState((prevState) => ({
   selected: !prevState.selected,
  }));
  this.props.OnBookSelectGetAsin(this.props.book.asin);
 };

 render() {
  return (
   <Card
    onClick={this.SelectCard}
    className={`h-100 bg-black text-white ${
     this.state.selected ? "selected" : ""
    }`}
   >
    <Card.Img className="flex-grow-1" variant="top" src={this.props.book.img} />
    <Card.Body className="d-flex flex-column justify-content-between">
     <Card.Title className="border-bottom">{this.props.book.title}</Card.Title>
     <Card.Text>{this.props.book.category}</Card.Text>
     <Card.Text>{this.props.book.price}€</Card.Text>
     <Button variant="warning">Aggiungi al Carrello</Button>
     {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </Card.Body>
   </Card>
  );
 }
}
export default SingleBook;
