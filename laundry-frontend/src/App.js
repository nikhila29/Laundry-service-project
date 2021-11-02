import React, {components} from "react";
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import Register from "./components/register/register";
import Dashboard from "./components/dashboard/dash";
import Orders from "./components/orders/orders"

class App extends React.Component {
  render() {
     return (
       <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Register}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/orders" component={Orders}/>
            </Switch>
            
          </div>
        </Router>
     );
  }
}
export default App;
