// import react from "react";
import Banner from "./components/Banner/Banner";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Home />
      <Banner />
    </Router>
  );
}

export default App;
