import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
 state = {
  selected: false,
 };

 ToggleSelectedCard = function () {};

 render() {
  return (
   <Card
    onClick={this.ToggleSelectedCard}
    className="h-100 bg-black text-white "
   >
    <Card.Img className="flex-grow-1" variant="top" src={this.props.book.img} />
    <Card.Body className="d-flex flex-column justify-content-between">
     <Card.Title className="border-bottom">{this.props.book.title}</Card.Title>
     <Card.Text>{this.props.book.category}</Card.Text>
     <Card.Text>{this.props.book.price}€</Card.Text>
     <Button variant="warning">Aggiungi al Carrello</Button>
    </Card.Body>
   </Card>
  );
 }
}
export default SingleBook;
