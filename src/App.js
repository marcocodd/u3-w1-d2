import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
//import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import arrayBooksHorror from "./components/data/horror.json";
import CommentArea from "./components/CommentArea";


function App() {
 return (
  <div className="App">
   <header>
    <CustomNavBar />
   </header>
   <main>
    <BookList books={arrayBooksHorror} />
    <CommentArea />
   </main>
   <CustomFooter />
  </div>
 );
}

export default App;
