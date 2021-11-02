import React from 'react';
import "./dash.css"
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import user1 from "../../assets/img/user1.png"
 
export default function dashboard() {
  return (
      <div className="container">
        <div class="jumbotron">
            <h1>Bootstrap Tutorial</h1>      
            <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
        </div>
      </div>
  )
}