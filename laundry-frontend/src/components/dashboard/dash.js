import React from "react";
import "./dash.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import user1 from "../../assets/img/user1.png";

export default function dashboard() {
  return (
    <div className="container-fluid-body">
      <div className="jumbotron bg-light border-bottom">
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse float-left">
            <h3 className="text-primary p-4">LAUNDRY</h3>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div>
            <div
              className="collapse navbar-collapse float-right"
              id="navbarNav"
            >
              <ul className="navbar-nav float-right">
                <li className="nav-item active p-3">
                  <a className="nav-link" href="#">
                    Pricing <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item p-3">
                  <a className="nav-link" href="#">
                    Career
                  </a>
                </li>
                <div className="collapse navbar-collapse float-right p-3 bg-primary">
                  <li>
                    <img className="userimage rounded-circle" src={user1} />
                  </li>
                  <li>
                    <a className="nav-link text-light" href="#">
                      User Name
                    </a>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <i class="bi bi-power fs-2 icon"></i>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="row align-items-center">
        <div style={{ width: "6%" }} class="col-md-1  bg-primary">
          <div class="row sidenav">
            <div class="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
              <div>
                <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                  <li class="nav-item">
                    <a
                      href="/dashboard"
                      class="nav-link py-3 px-2"
                      title=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-original-title="Home"
                    >
                      <i class="bi-house fs-2 icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/orders"
                      class="nav-link py-3 px-2"
                      title=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-original-title="Dashboard"
                    >
                      <i class="bi-plus-circle-fill fs-2 icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashboard"
                      class="nav-link py-3 px-2"
                      title=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-original-title="Orders"
                    >
                      <i class="bi-list-ul fs-2 icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-11">
          <div className="text-center">
            <p className="text-muted">No Orders Available</p>
            <Link to={"/orders"}>
              <button type="button" class="btn btn-primary">
                Create
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>2021 © Laundry</p>
      </div>
    </div>
  );
}
