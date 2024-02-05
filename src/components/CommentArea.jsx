import { Component } from "react";



class CommentArea extends Component {
 state = {
  comments: [],
 };

 fetchComments = () => {
  fetch(
   "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
   {
    headers: {
     Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTg1MDViMjYxNTAwMTk4YTY5NjkiLCJpYXQiOjE3MDY3OTcxMzYsImV4cCI6MTcwODAwNjczNn0.g8GkMnP6jl2Xm1PTrGmbj0dGDqT3zWqs43Wa5yL3BSA",
    },
   }
  )
   .then((response) => {
    if (response.ok) {
     return response.json();
    } else {
     throw new Error("errore nella richiesta dei dati");
    }
   })
   .then((arrayOfComments) => {
    this.setState({
     comments: arrayOfComments,
    });
    console.log("array", this.state.comments);
   })
   .catch((err) => {
    console.log(err);
   });
 };

 componentDidMount() {
  this.fetchComments();
 }

 componentDidUpdate(prevProps) {
  if (this.props.asin !== prevProps.asin) {
   this.fetchComments();
  }
 }

 render() {
  return (
   <div>
    <h3 className="text-warning">Comments:</h3>
    <ul className="text-white">
     {this.state.comments.map((comment, index) => (
      <li key={comment._id}>
       {[index + 1]} - {comment.comment} Voto: {comment.rate}
      </li>
     ))}
    </ul>
   </div>
  );
 }
}

export default CommentArea;
