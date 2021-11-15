import React,{createContext} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Register from "./components/register/register";
import Dashboard from "./components/dashboard/dash";
//import Orders from "./components/orders/orders"
import Signup from "./components/signup/signup"
import Orderview from './components/dashboard/orderview';
import "./App.css"
import Summary from "./components/summary/summary"
import Orderlist from './components/orders/orderlist'

export const UserContext = createContext()
class App extends React.Component {
  render() {
     return (
       <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Register}/>
              <Route path="/dashboard" component={Dashboard}/>
              {/* <Route path="/orders" component={Orders}/> */}
              <Route path="/signup" component={Signup}/>
              <Route path="/orderview" component={Orderview}/>
              <Route path="/summary" component={Summary}/>
              <Route path="/orderlist" component={Orderlist}/>
            </Switch>
            
          </div>
        </Router>
     );
  }
}
export default App;