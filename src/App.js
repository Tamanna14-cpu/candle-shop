import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Footer from './Pages/Shared/Footer/Footer';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>


              {/* <PrivateRoute path="/addService">
                <AddService></AddService>
              </PrivateRoute>

              <PrivateRoute path="/order">
                <MyOrder></MyOrder>
              </PrivateRoute>

              <PrivateRoute path="/manage">
                <ManageOrder></ManageOrder>
              </PrivateRoute>

              <PrivateRoute path="/placeOrder/:serviceId">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute> */}



              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
            <Footer></Footer>
          </ScrollToTop>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
