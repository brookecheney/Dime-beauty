import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import About from "./pages/About";
import NavMenu from "./components/NavMenu";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route exact path="/" component={Home} >
            <Home />
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
        </Switch>
     
      </Router>
    </div>
  );
}

export default App;
