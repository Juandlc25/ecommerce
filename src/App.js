import "./App.scss";
import Home from "./views/home/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./views/checkout";
import Search from "./views/search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Header />
          <Search />
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
