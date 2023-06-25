import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heros from "./Pages/Heros";
import Footer from "./Pages/Footer";

const App=()=> {
    return (
      <>
        <Router>
          <Navbar />
          <Heros />
          <Footer/>
          <Routes>
            <Route exact path="/" />
            <Route
              exact
              path="/business" />
            <Route
              exact
              path="/entertainment"
              
            />
            <Route
              exact
              path="/general"
              
            />
            <Route
              exact
              path="/health"
              
            />
            <Route
              exact
              path="/science"
              
            />
            <Route
              exact
              path="/sports"
              
            />
            <Route
              exact
              path="/technology"
              
            />
          </Routes>

        </Router>
      </>
    );
  
}
export default App;
