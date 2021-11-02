import React from 'react';
import "./dash.css"
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import user1 from "../../assets/img/user1.png"
 
export default function dashboard() {
  return (
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <a class="navbar-brand" href="#">LAUNDRY</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Career</a>
      </li>
      <li class="nav-item">
        <img src={user1}/>
        <a class="nav-link" href="#">User Name</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        </nav>
      </div>
  )
}