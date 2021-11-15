import React from "react";
import { useHistory } from "react-router-dom";
import "./dash.css";
import { BrowserRouter as Link} from "react-router-dom";
import user1 from "../../assets/img/user1.png";

export default function Dashboard() {
  const history = useHistory();
  function createlist() {
    console.log("Hello");
    history.push("/orderlist");
  }
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
                    Pricing <span className="sr-only">(current)</span>
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
                      <i className="bi bi-power fs-2 icon"></i>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="row align-items-center">
        <div style={{ width: "6%" }} className="col-md-1  bg-primary">
          <div className="row sidenav">
            <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
              <div>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                  <li className="nav-item">
                    <a
                      href="/dashboard"
                      className="nav-link py-3 px-2"
                      title=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-original-title="Home"
                    >
                      <i className="bi-house fs-2 icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/orderlist"
                      className="nav-link py-3 px-2"
                      title=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-original-title="Dashboard"
                    >
                      <i className="bi-plus-circle-fill fs-2 icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/orderview"
                      className="nav-link py-3 px-2"
                      title=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-original-title="Orders"
                    >
                      <i className="bi-list-ul fs-2 icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-11">
          <div className="text-center">
            <p className="text-muted">No Orders Available</p>
            <Link to={"/orderlist"}>
              <button type="button" className="btn btn-primary"onClick={createlist}>
                Create
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>2021 © Laundry</p>
      </div>
    </div>
  );
}