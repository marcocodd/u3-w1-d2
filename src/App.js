import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
 return (
  <div className="App">
   <header>
    <CustomNavBar />
   </header>
   <main>
    <AllTheBooks />
   </main>
   <CustomFooter />
  </div>
 );
}

export default App;
