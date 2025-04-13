import "./App.css";
import Header from "./containers/templates/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
// import LoginPage from "./containers/loginPage";
// import _ from "lodash";
import { ProductList } from "./containers/Products/productList";
import { Container } from "react-bootstrap";


function App() {
  const userCredential = localStorage.getItem("logginCredentials");
  // console.log(userCredential);

  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <div className="ui main container ">
            <Routes>
              <Route path="/" element={<ProductList />}></Route>
              {/* <Route
              path="/product/:productId"
              element={<ProductDetails />}
            ></Route> */}
              <Route>404 Route not Found!</Route>
            </Routes>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
