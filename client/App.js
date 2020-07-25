import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from './components/userComponents/Search';
import EditQuestion from './components/userComponents/EditQuestion'
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Open from './components/OpeningPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Search from './components/searchComponents/Search';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div>
          {/* <Search/> */}
          <Switch>
                                  
                  <Route exact path = '/' component = {Open}/>
                  <Route  path="/login" component={Login} />
                  <Route path = '/signup' component = {Signup}/>
                  <Route exact path='/EditQuestion' component={EditQuestion} />
                  <Route exact path='/Search' component={Search} />
          </Switch>
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}
export default App;

