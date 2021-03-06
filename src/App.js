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
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Placeorder from './Pages/Placeorder/Placeorder';
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



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
              <Route path="/explore">
                <Explore />
              </Route>

              <PrivateRoute path="/placeOrder/:productId">
                <Placeorder></Placeorder>
              </PrivateRoute>

              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>



              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register />
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
