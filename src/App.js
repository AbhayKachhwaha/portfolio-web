import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Route path="/" component={Home} exact />
        <Route path="/contactus" component={ContactUs} exact />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
