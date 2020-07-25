import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
//import * as Colors from 'material-ui/styles/colors';
//import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
//import Searching from './Search';
//import $ from 'jquery';
//var obj;
export default class Home extends React.Component{

  render(){

    const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
};

const rightButtons = (
  <div>
    <Link to="/login"><RaisedButton label="Login" style={buttonStyle}/></Link>
    <Link to="/signup"><RaisedButton label="Register" style={buttonStyle} /></Link>
  </div>
);

return (
  <AppBar title="Qna - Ask your Questions Here" iconElementRight={rightButtons} />
);
  }
}
