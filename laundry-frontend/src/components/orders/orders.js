import React from "react";
import "./orders.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import user1 from "../../assets/img/user1.png";
import shirts from "../../assets/img/shirts.jpg";
import tshirts from "../../assets/img/t-shirts.jpg";
import trousers from "../../assets/img/trousers.jpeg";
import jeans from "../../assets/img/jeans.jpg";
import towels from "../../assets/img/towels.jpeg";

export default function orders() {
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
      <div className="row">
        <div style={{ width: "6%" }} className="col-md-1  bg-primary">
          <div className="row">
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
                      href="/orders"
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
                      href="/dashboard"
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
        <div className="col-md-11 table-center" style={{ width: "85%" }}>
          <div style={{ padding: "30px 0 30px 0", width: "auto" }}>
            <h3>Create Order</h3>
          </div>
          <div style={{ padding: "0 0 30px 0" }} className="row align-items-center">
            <div className="col-md-3 bg-dark p-3 text-light">Product Type</div>
            <div className="col-md-1 bg-dark p-3 text-light">Quantity</div>
            <div className="col-md-4 bg-dark p-3 text-light">Wash Type</div>
            <div className="col-md-3 bg-dark p-3 text-light">Price</div>
            <div className="col-md-1 bg-dark p-3 text-light">Reset</div>
          </div>
          <div className="row align-items-center" style={{ height: "100px" }}>
            <div className="col-md-3 bg-light text-dark">
              <div className="row">
                <div className="col-6" style={{ width: "auto" }}>
                  <img className="images" src={shirts} />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Shirts</h5>
                  <p className="text-primary">Lorem ipsum is a dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-1 bg-light text-dark">
              <input
                type="text"
                className="form-control"
                style={{ width: "50px" }}
                id="pwd"
              />
            </div>
            <div className="col-md-4 text-dark">
              <table>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="washing-machine"
                      width="25.258"
                      height="29.368"
                      viewBox="0 0 25.258 29.368"
                    >
                      <path
                        id="Path_1770"
                        data-name="Path 1770"
                        d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0"
                        transform="translate(-0.5 -158.102)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1771"
                        data-name="Path 1771"
                        d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0"
                        transform="translate(-127.738 -299.502)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1772"
                        data-name="Path 1772"
                        d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0"
                        transform="translate(-123.205 -217.076)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1773"
                        data-name="Path 1773"
                        d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0"
                        transform="translate(-0.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1774"
                        data-name="Path 1774"
                        d="M78.441,60.68h3.89v1.041h-3.89Zm0,0"
                        transform="translate(-73.971 -57.199)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="ironing"
                      width="26.105"
                      height="26.105"
                      viewBox="0 0 26.105 26.105"
                    >
                      <path
                        id="Path_1759"
                        data-name="Path 1759"
                        d="M364.977,6.118h.766a.765.765,0,0,0,.765-.765h1.531a.765.765,0,0,0,0-1.53h-1.531V2.294h1.531a.765.765,0,0,0,0-1.53h-1.531A.765.765,0,0,0,365.743,0h-.766a3.059,3.059,0,0,0,0,6.118Z"
                        transform="translate(-343.465)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1760"
                        data-name="Path 1760"
                        d="M51.078,55.131a2.294,2.294,0,0,0-.258-4.574H32.176a2.014,2.014,0,1,1,0-4.028H44A4.595,4.595,0,0,1,44,45H32.176a3.543,3.543,0,1,0,0,7.087H50.82a.765.765,0,1,1,0,1.53H43.382A15.78,15.78,0,0,0,28.463,64.273H53.115a13.971,13.971,0,0,0-.032-2.445Zm-2.7,7.663h-9.8a.765.765,0,0,1-.669-.395l-1.53-2.769a.765.765,0,0,1,.264-1.019,12.712,12.712,0,0,1,6.739-1.936h4.133a.765.765,0,0,1,.752.624l.861,4.589A.765.765,0,0,1,48.376,62.794Z"
                        transform="translate(-27.012 -42.706)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1761"
                        data-name="Path 1761"
                        d="M222.363,304a11.174,11.174,0,0,0-5.3,1.34l.95,1.719h8.425L225.862,304Z"
                        transform="translate(-205.993 -288.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1762"
                        data-name="Path 1762"
                        d="M.739,454.48a.764.764,0,0,0,.026,1.528H25.338a.765.765,0,0,0,.765-.765V453H1.011q-.17.727-.273,1.48Z"
                        transform="translate(0 -429.904)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="towel"
                      width="27.775"
                      height="27.775"
                      viewBox="0 0 27.775 27.775"
                    >
                      <path
                        id="Path_1763"
                        data-name="Path 1763"
                        d="M56,283.473H70.879v-3.388a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.022,2.022,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -262.642)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1764"
                        data-name="Path 1764"
                        d="M56,249.04a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549v-.955a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.023,2.023,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -232.626)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1765"
                        data-name="Path 1765"
                        d="M56,14.43a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549V2.48a4.776,4.776,0,0,1,.086-.758c.006-.027.015-.054.021-.08s.017-.066.026-.1c.017-.062.036-.124.056-.184s.042-.115.064-.172c.014-.036.028-.071.044-.107A3.437,3.437,0,0,1,71.918,0H58.48A2.483,2.483,0,0,0,56,2.48Zm0,0"
                        transform="translate(-52.528 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1766"
                        data-name="Path 1766"
                        d="M166.879,72h-4.96V88.863a.5.5,0,0,1-.5.5H152v3.968h10.415a.5.5,0,1,1,0,.992H152v.992h14.879Zm-1.488,22.319H164.4a.5.5,0,0,1,0-.992h.992a.5.5,0,1,1,0,.992Zm0,0"
                        transform="translate(-142.576 -67.536)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1767"
                        data-name="Path 1767"
                        d="M.5,40.992H2.48V40H.5a.5.5,0,0,0-.5.5.475.475,0,0,0,.143.344A.483.483,0,0,0,.5,40.992Zm0,0"
                        transform="translate(0 -37.52)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1768"
                        data-name="Path 1768"
                        d="M317.66,0a2.446,2.446,0,0,0-.454.046c-.037.006-.073.016-.109.024a2.518,2.518,0,0,0-.355.111l-.067.026a2.5,2.5,0,0,0-.753.509l-.029.03a2.5,2.5,0,0,0-.267.324c-.009.013-.019.025-.028.039a2.479,2.479,0,0,0-.206.379h4.545a2.418,2.418,0,0,0-.521-.758A2.448,2.448,0,0,0,317.66,0Zm0,0"
                        transform="translate(-295.837 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1769"
                        data-name="Path 1769"
                        d="M320.432,40.5a.475.475,0,0,0-.143-.344.482.482,0,0,0-.353-.152H312v.992h7.936A.5.5,0,0,0,320.432,40.5Zm0,0"
                        transform="translate(-292.657 -37.52)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="bleach"
                      width="15.771"
                      height="26.048"
                      viewBox="0 0 15.771 26.048"
                    >
                      <path
                        id="Path_1757"
                        data-name="Path 1757"
                        d="M100,0h5.6V2.035H100Zm0,0"
                        transform="translate(-94.912)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1758"
                        data-name="Path 1758"
                        d="M14.2,73.742C13.028,71.329,11.507,70,9.921,70H5.851c-1.586,0-3.107,1.329-4.284,3.742A15.72,15.72,0,0,0,0,80.175V92.487H15.772V80.175A15.72,15.72,0,0,0,14.2,73.742ZM6.359,89.435H3.053V87.908H6.359Zm1.526-3.053H3.053V84.856H7.886Zm4.579-6.359a1.526,1.526,0,1,1-3.053,0V76.97a1.526,1.526,0,1,1,3.053,0Zm0,0"
                        transform="translate(0 -66.439)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-md-3 bg-light text-dark">Price</div>
            <div className="col-md-1 bg-light text-dark">Reset</div>
          </div>
          {/* Row Second Starts */}
          <div className="row align-items-center" style={{ height: "150px" }}>
            <div className="col-md-3 bg-light text-dark">
              <div className="row">
                <div className="col-6" style={{ width: "auto" }}>
                  <img className="images" src={tshirts} />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">T-Shirts</h5>
                  <p className="text-primary">Lorem ipsum is a dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-1 bg-light text-dark">
              <input
                type="text"
                className="form-control"
                style={{ width: "50px" }}
                id="pwd"
              />
            </div>
            <div className="col-md-4 text-dark">
              <table>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="washing-machine"
                      width="25.258"
                      height="29.368"
                      viewBox="0 0 25.258 29.368"
                    >
                      <path
                        id="Path_1770"
                        data-name="Path 1770"
                        d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0"
                        transform="translate(-0.5 -158.102)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1771"
                        data-name="Path 1771"
                        d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0"
                        transform="translate(-127.738 -299.502)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1772"
                        data-name="Path 1772"
                        d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0"
                        transform="translate(-123.205 -217.076)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1773"
                        data-name="Path 1773"
                        d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0"
                        transform="translate(-0.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1774"
                        data-name="Path 1774"
                        d="M78.441,60.68h3.89v1.041h-3.89Zm0,0"
                        transform="translate(-73.971 -57.199)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="ironing"
                      width="26.105"
                      height="26.105"
                      viewBox="0 0 26.105 26.105"
                    >
                      <path
                        id="Path_1759"
                        data-name="Path 1759"
                        d="M364.977,6.118h.766a.765.765,0,0,0,.765-.765h1.531a.765.765,0,0,0,0-1.53h-1.531V2.294h1.531a.765.765,0,0,0,0-1.53h-1.531A.765.765,0,0,0,365.743,0h-.766a3.059,3.059,0,0,0,0,6.118Z"
                        transform="translate(-343.465)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1760"
                        data-name="Path 1760"
                        d="M51.078,55.131a2.294,2.294,0,0,0-.258-4.574H32.176a2.014,2.014,0,1,1,0-4.028H44A4.595,4.595,0,0,1,44,45H32.176a3.543,3.543,0,1,0,0,7.087H50.82a.765.765,0,1,1,0,1.53H43.382A15.78,15.78,0,0,0,28.463,64.273H53.115a13.971,13.971,0,0,0-.032-2.445Zm-2.7,7.663h-9.8a.765.765,0,0,1-.669-.395l-1.53-2.769a.765.765,0,0,1,.264-1.019,12.712,12.712,0,0,1,6.739-1.936h4.133a.765.765,0,0,1,.752.624l.861,4.589A.765.765,0,0,1,48.376,62.794Z"
                        transform="translate(-27.012 -42.706)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1761"
                        data-name="Path 1761"
                        d="M222.363,304a11.174,11.174,0,0,0-5.3,1.34l.95,1.719h8.425L225.862,304Z"
                        transform="translate(-205.993 -288.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1762"
                        data-name="Path 1762"
                        d="M.739,454.48a.764.764,0,0,0,.026,1.528H25.338a.765.765,0,0,0,.765-.765V453H1.011q-.17.727-.273,1.48Z"
                        transform="translate(0 -429.904)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="towel"
                      width="27.775"
                      height="27.775"
                      viewBox="0 0 27.775 27.775"
                    >
                      <path
                        id="Path_1763"
                        data-name="Path 1763"
                        d="M56,283.473H70.879v-3.388a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.022,2.022,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -262.642)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1764"
                        data-name="Path 1764"
                        d="M56,249.04a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549v-.955a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.023,2.023,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -232.626)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1765"
                        data-name="Path 1765"
                        d="M56,14.43a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549V2.48a4.776,4.776,0,0,1,.086-.758c.006-.027.015-.054.021-.08s.017-.066.026-.1c.017-.062.036-.124.056-.184s.042-.115.064-.172c.014-.036.028-.071.044-.107A3.437,3.437,0,0,1,71.918,0H58.48A2.483,2.483,0,0,0,56,2.48Zm0,0"
                        transform="translate(-52.528 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1766"
                        data-name="Path 1766"
                        d="M166.879,72h-4.96V88.863a.5.5,0,0,1-.5.5H152v3.968h10.415a.5.5,0,1,1,0,.992H152v.992h14.879Zm-1.488,22.319H164.4a.5.5,0,0,1,0-.992h.992a.5.5,0,1,1,0,.992Zm0,0"
                        transform="translate(-142.576 -67.536)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1767"
                        data-name="Path 1767"
                        d="M.5,40.992H2.48V40H.5a.5.5,0,0,0-.5.5.475.475,0,0,0,.143.344A.483.483,0,0,0,.5,40.992Zm0,0"
                        transform="translate(0 -37.52)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1768"
                        data-name="Path 1768"
                        d="M317.66,0a2.446,2.446,0,0,0-.454.046c-.037.006-.073.016-.109.024a2.518,2.518,0,0,0-.355.111l-.067.026a2.5,2.5,0,0,0-.753.509l-.029.03a2.5,2.5,0,0,0-.267.324c-.009.013-.019.025-.028.039a2.479,2.479,0,0,0-.206.379h4.545a2.418,2.418,0,0,0-.521-.758A2.448,2.448,0,0,0,317.66,0Zm0,0"
                        transform="translate(-295.837 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1769"
                        data-name="Path 1769"
                        d="M320.432,40.5a.475.475,0,0,0-.143-.344.482.482,0,0,0-.353-.152H312v.992h7.936A.5.5,0,0,0,320.432,40.5Zm0,0"
                        transform="translate(-292.657 -37.52)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="bleach"
                      width="15.771"
                      height="26.048"
                      viewBox="0 0 15.771 26.048"
                    >
                      <path
                        id="Path_1757"
                        data-name="Path 1757"
                        d="M100,0h5.6V2.035H100Zm0,0"
                        transform="translate(-94.912)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1758"
                        data-name="Path 1758"
                        d="M14.2,73.742C13.028,71.329,11.507,70,9.921,70H5.851c-1.586,0-3.107,1.329-4.284,3.742A15.72,15.72,0,0,0,0,80.175V92.487H15.772V80.175A15.72,15.72,0,0,0,14.2,73.742ZM6.359,89.435H3.053V87.908H6.359Zm1.526-3.053H3.053V84.856H7.886Zm4.579-6.359a1.526,1.526,0,1,1-3.053,0V76.97a1.526,1.526,0,1,1,3.053,0Zm0,0"
                        transform="translate(0 -66.439)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-md-3 bg-light text-dark">Price</div>
            <div className="col-md-1 bg-light text-dark">Reset</div>
          </div>
          {/* Row Second Ends */}
          {/* Row Third Starts */}
          <div className="row align-items-center" style={{ height: "150px" }}>
            <div className="col-md-3 bg-light text-dark">
              <div className="row">
                <div className="col-6" style={{ width: "auto" }}>
                  <img className="images" src={trousers} />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Trousers</h5>
                  <p className="text-primary">Lorem ipsum is a dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-1 bg-light text-dark">
              <input
                type="text"
                className="form-control"
                style={{ width: "50px" }}
                id="pwd"
              />
            </div>
            <div className="col-md-4 text-dark">
              <table>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="washing-machine"
                      width="25.258"
                      height="29.368"
                      viewBox="0 0 25.258 29.368"
                    >
                      <path
                        id="Path_1770"
                        data-name="Path 1770"
                        d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0"
                        transform="translate(-0.5 -158.102)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1771"
                        data-name="Path 1771"
                        d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0"
                        transform="translate(-127.738 -299.502)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1772"
                        data-name="Path 1772"
                        d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0"
                        transform="translate(-123.205 -217.076)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1773"
                        data-name="Path 1773"
                        d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0"
                        transform="translate(-0.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1774"
                        data-name="Path 1774"
                        d="M78.441,60.68h3.89v1.041h-3.89Zm0,0"
                        transform="translate(-73.971 -57.199)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="ironing"
                      width="26.105"
                      height="26.105"
                      viewBox="0 0 26.105 26.105"
                    >
                      <path
                        id="Path_1759"
                        data-name="Path 1759"
                        d="M364.977,6.118h.766a.765.765,0,0,0,.765-.765h1.531a.765.765,0,0,0,0-1.53h-1.531V2.294h1.531a.765.765,0,0,0,0-1.53h-1.531A.765.765,0,0,0,365.743,0h-.766a3.059,3.059,0,0,0,0,6.118Z"
                        transform="translate(-343.465)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1760"
                        data-name="Path 1760"
                        d="M51.078,55.131a2.294,2.294,0,0,0-.258-4.574H32.176a2.014,2.014,0,1,1,0-4.028H44A4.595,4.595,0,0,1,44,45H32.176a3.543,3.543,0,1,0,0,7.087H50.82a.765.765,0,1,1,0,1.53H43.382A15.78,15.78,0,0,0,28.463,64.273H53.115a13.971,13.971,0,0,0-.032-2.445Zm-2.7,7.663h-9.8a.765.765,0,0,1-.669-.395l-1.53-2.769a.765.765,0,0,1,.264-1.019,12.712,12.712,0,0,1,6.739-1.936h4.133a.765.765,0,0,1,.752.624l.861,4.589A.765.765,0,0,1,48.376,62.794Z"
                        transform="translate(-27.012 -42.706)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1761"
                        data-name="Path 1761"
                        d="M222.363,304a11.174,11.174,0,0,0-5.3,1.34l.95,1.719h8.425L225.862,304Z"
                        transform="translate(-205.993 -288.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1762"
                        data-name="Path 1762"
                        d="M.739,454.48a.764.764,0,0,0,.026,1.528H25.338a.765.765,0,0,0,.765-.765V453H1.011q-.17.727-.273,1.48Z"
                        transform="translate(0 -429.904)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="towel"
                      width="27.775"
                      height="27.775"
                      viewBox="0 0 27.775 27.775"
                    >
                      <path
                        id="Path_1763"
                        data-name="Path 1763"
                        d="M56,283.473H70.879v-3.388a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.022,2.022,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -262.642)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1764"
                        data-name="Path 1764"
                        d="M56,249.04a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549v-.955a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.023,2.023,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -232.626)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1765"
                        data-name="Path 1765"
                        d="M56,14.43a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549V2.48a4.776,4.776,0,0,1,.086-.758c.006-.027.015-.054.021-.08s.017-.066.026-.1c.017-.062.036-.124.056-.184s.042-.115.064-.172c.014-.036.028-.071.044-.107A3.437,3.437,0,0,1,71.918,0H58.48A2.483,2.483,0,0,0,56,2.48Zm0,0"
                        transform="translate(-52.528 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1766"
                        data-name="Path 1766"
                        d="M166.879,72h-4.96V88.863a.5.5,0,0,1-.5.5H152v3.968h10.415a.5.5,0,1,1,0,.992H152v.992h14.879Zm-1.488,22.319H164.4a.5.5,0,0,1,0-.992h.992a.5.5,0,1,1,0,.992Zm0,0"
                        transform="translate(-142.576 -67.536)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1767"
                        data-name="Path 1767"
                        d="M.5,40.992H2.48V40H.5a.5.5,0,0,0-.5.5.475.475,0,0,0,.143.344A.483.483,0,0,0,.5,40.992Zm0,0"
                        transform="translate(0 -37.52)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1768"
                        data-name="Path 1768"
                        d="M317.66,0a2.446,2.446,0,0,0-.454.046c-.037.006-.073.016-.109.024a2.518,2.518,0,0,0-.355.111l-.067.026a2.5,2.5,0,0,0-.753.509l-.029.03a2.5,2.5,0,0,0-.267.324c-.009.013-.019.025-.028.039a2.479,2.479,0,0,0-.206.379h4.545a2.418,2.418,0,0,0-.521-.758A2.448,2.448,0,0,0,317.66,0Zm0,0"
                        transform="translate(-295.837 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1769"
                        data-name="Path 1769"
                        d="M320.432,40.5a.475.475,0,0,0-.143-.344.482.482,0,0,0-.353-.152H312v.992h7.936A.5.5,0,0,0,320.432,40.5Zm0,0"
                        transform="translate(-292.657 -37.52)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="bleach"
                      width="15.771"
                      height="26.048"
                      viewBox="0 0 15.771 26.048"
                    >
                      <path
                        id="Path_1757"
                        data-name="Path 1757"
                        d="M100,0h5.6V2.035H100Zm0,0"
                        transform="translate(-94.912)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1758"
                        data-name="Path 1758"
                        d="M14.2,73.742C13.028,71.329,11.507,70,9.921,70H5.851c-1.586,0-3.107,1.329-4.284,3.742A15.72,15.72,0,0,0,0,80.175V92.487H15.772V80.175A15.72,15.72,0,0,0,14.2,73.742ZM6.359,89.435H3.053V87.908H6.359Zm1.526-3.053H3.053V84.856H7.886Zm4.579-6.359a1.526,1.526,0,1,1-3.053,0V76.97a1.526,1.526,0,1,1,3.053,0Zm0,0"
                        transform="translate(0 -66.439)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-md-3 bg-light text-dark">Price</div>
            <div className="col-md-1 bg-light text-dark">Reset</div>
          </div>
          {/* Row Third Ends */}
          {/* Row Fourth Starts */}
          <div className="row align-items-center" style={{ height: "150px" }}>
            <div className="col-md-3 bg-light text-dark">
              <div className="row">
                <div className="col-6" style={{ width: "auto" }}>
                  <img className="images" src={jeans} />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Jeans</h5>
                  <p className="text-primary">Lorem ipsum is a dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-1 bg-light text-dark">
              <input
                type="text"
                className="form-control"
                style={{ width: "50px" }}
                id="pwd"
              />
            </div>
            <div className="col-md-4 text-dark">
              <table>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="washing-machine"
                      width="25.258"
                      height="29.368"
                      viewBox="0 0 25.258 29.368"
                    >
                      <path
                        id="Path_1770"
                        data-name="Path 1770"
                        d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0"
                        transform="translate(-0.5 -158.102)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1771"
                        data-name="Path 1771"
                        d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0"
                        transform="translate(-127.738 -299.502)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1772"
                        data-name="Path 1772"
                        d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0"
                        transform="translate(-123.205 -217.076)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1773"
                        data-name="Path 1773"
                        d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0"
                        transform="translate(-0.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1774"
                        data-name="Path 1774"
                        d="M78.441,60.68h3.89v1.041h-3.89Zm0,0"
                        transform="translate(-73.971 -57.199)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="ironing"
                      width="26.105"
                      height="26.105"
                      viewBox="0 0 26.105 26.105"
                    >
                      <path
                        id="Path_1759"
                        data-name="Path 1759"
                        d="M364.977,6.118h.766a.765.765,0,0,0,.765-.765h1.531a.765.765,0,0,0,0-1.53h-1.531V2.294h1.531a.765.765,0,0,0,0-1.53h-1.531A.765.765,0,0,0,365.743,0h-.766a3.059,3.059,0,0,0,0,6.118Z"
                        transform="translate(-343.465)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1760"
                        data-name="Path 1760"
                        d="M51.078,55.131a2.294,2.294,0,0,0-.258-4.574H32.176a2.014,2.014,0,1,1,0-4.028H44A4.595,4.595,0,0,1,44,45H32.176a3.543,3.543,0,1,0,0,7.087H50.82a.765.765,0,1,1,0,1.53H43.382A15.78,15.78,0,0,0,28.463,64.273H53.115a13.971,13.971,0,0,0-.032-2.445Zm-2.7,7.663h-9.8a.765.765,0,0,1-.669-.395l-1.53-2.769a.765.765,0,0,1,.264-1.019,12.712,12.712,0,0,1,6.739-1.936h4.133a.765.765,0,0,1,.752.624l.861,4.589A.765.765,0,0,1,48.376,62.794Z"
                        transform="translate(-27.012 -42.706)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1761"
                        data-name="Path 1761"
                        d="M222.363,304a11.174,11.174,0,0,0-5.3,1.34l.95,1.719h8.425L225.862,304Z"
                        transform="translate(-205.993 -288.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1762"
                        data-name="Path 1762"
                        d="M.739,454.48a.764.764,0,0,0,.026,1.528H25.338a.765.765,0,0,0,.765-.765V453H1.011q-.17.727-.273,1.48Z"
                        transform="translate(0 -429.904)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="towel"
                      width="27.775"
                      height="27.775"
                      viewBox="0 0 27.775 27.775"
                    >
                      <path
                        id="Path_1763"
                        data-name="Path 1763"
                        d="M56,283.473H70.879v-3.388a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.022,2.022,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -262.642)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1764"
                        data-name="Path 1764"
                        d="M56,249.04a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549v-.955a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.023,2.023,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -232.626)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1765"
                        data-name="Path 1765"
                        d="M56,14.43a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549V2.48a4.776,4.776,0,0,1,.086-.758c.006-.027.015-.054.021-.08s.017-.066.026-.1c.017-.062.036-.124.056-.184s.042-.115.064-.172c.014-.036.028-.071.044-.107A3.437,3.437,0,0,1,71.918,0H58.48A2.483,2.483,0,0,0,56,2.48Zm0,0"
                        transform="translate(-52.528 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1766"
                        data-name="Path 1766"
                        d="M166.879,72h-4.96V88.863a.5.5,0,0,1-.5.5H152v3.968h10.415a.5.5,0,1,1,0,.992H152v.992h14.879Zm-1.488,22.319H164.4a.5.5,0,0,1,0-.992h.992a.5.5,0,1,1,0,.992Zm0,0"
                        transform="translate(-142.576 -67.536)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1767"
                        data-name="Path 1767"
                        d="M.5,40.992H2.48V40H.5a.5.5,0,0,0-.5.5.475.475,0,0,0,.143.344A.483.483,0,0,0,.5,40.992Zm0,0"
                        transform="translate(0 -37.52)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1768"
                        data-name="Path 1768"
                        d="M317.66,0a2.446,2.446,0,0,0-.454.046c-.037.006-.073.016-.109.024a2.518,2.518,0,0,0-.355.111l-.067.026a2.5,2.5,0,0,0-.753.509l-.029.03a2.5,2.5,0,0,0-.267.324c-.009.013-.019.025-.028.039a2.479,2.479,0,0,0-.206.379h4.545a2.418,2.418,0,0,0-.521-.758A2.448,2.448,0,0,0,317.66,0Zm0,0"
                        transform="translate(-295.837 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1769"
                        data-name="Path 1769"
                        d="M320.432,40.5a.475.475,0,0,0-.143-.344.482.482,0,0,0-.353-.152H312v.992h7.936A.5.5,0,0,0,320.432,40.5Zm0,0"
                        transform="translate(-292.657 -37.52)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="bleach"
                      width="15.771"
                      height="26.048"
                      viewBox="0 0 15.771 26.048"
                    >
                      <path
                        id="Path_1757"
                        data-name="Path 1757"
                        d="M100,0h5.6V2.035H100Zm0,0"
                        transform="translate(-94.912)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1758"
                        data-name="Path 1758"
                        d="M14.2,73.742C13.028,71.329,11.507,70,9.921,70H5.851c-1.586,0-3.107,1.329-4.284,3.742A15.72,15.72,0,0,0,0,80.175V92.487H15.772V80.175A15.72,15.72,0,0,0,14.2,73.742ZM6.359,89.435H3.053V87.908H6.359Zm1.526-3.053H3.053V84.856H7.886Zm4.579-6.359a1.526,1.526,0,1,1-3.053,0V76.97a1.526,1.526,0,1,1,3.053,0Zm0,0"
                        transform="translate(0 -66.439)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-md-3 bg-light text-dark">Price</div>
            <div className="col-md-1 bg-light text-dark">Reset</div>
          </div>
          {/* Row Fourth Ends */}
          {/* Row Fifth Starts */}
          <div className="row align-items-center" style={{ height: "150px" }}>
            <div className="col-md-3 bg-light text-dark">
              <div className="row">
                <div className="col-6" style={{ width: "auto" }}>
                  <img className="images" src={towels} />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Others</h5>
                  <p className="text-primary">Lorem ipsum is a dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-1 bg-light text-dark">
              <input
                type="text"
                className="form-control"
                style={{ width: "50px" }}
                id="pwd"
              />
            </div>
            <div className="col-md-4 text-dark">
              <table>
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="washing-machine"
                      width="25.258"
                      height="29.368"
                      viewBox="0 0 25.258 29.368"
                    >
                      <path
                        id="Path_1770"
                        data-name="Path 1770"
                        d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0"
                        transform="translate(-0.5 -158.102)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1771"
                        data-name="Path 1771"
                        d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0"
                        transform="translate(-127.738 -299.502)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1772"
                        data-name="Path 1772"
                        d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0"
                        transform="translate(-123.205 -217.076)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1773"
                        data-name="Path 1773"
                        d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0"
                        transform="translate(-0.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1774"
                        data-name="Path 1774"
                        d="M78.441,60.68h3.89v1.041h-3.89Zm0,0"
                        transform="translate(-73.971 -57.199)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="ironing"
                      width="26.105"
                      height="26.105"
                      viewBox="0 0 26.105 26.105"
                    >
                      <path
                        id="Path_1759"
                        data-name="Path 1759"
                        d="M364.977,6.118h.766a.765.765,0,0,0,.765-.765h1.531a.765.765,0,0,0,0-1.53h-1.531V2.294h1.531a.765.765,0,0,0,0-1.53h-1.531A.765.765,0,0,0,365.743,0h-.766a3.059,3.059,0,0,0,0,6.118Z"
                        transform="translate(-343.465)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1760"
                        data-name="Path 1760"
                        d="M51.078,55.131a2.294,2.294,0,0,0-.258-4.574H32.176a2.014,2.014,0,1,1,0-4.028H44A4.595,4.595,0,0,1,44,45H32.176a3.543,3.543,0,1,0,0,7.087H50.82a.765.765,0,1,1,0,1.53H43.382A15.78,15.78,0,0,0,28.463,64.273H53.115a13.971,13.971,0,0,0-.032-2.445Zm-2.7,7.663h-9.8a.765.765,0,0,1-.669-.395l-1.53-2.769a.765.765,0,0,1,.264-1.019,12.712,12.712,0,0,1,6.739-1.936h4.133a.765.765,0,0,1,.752.624l.861,4.589A.765.765,0,0,1,48.376,62.794Z"
                        transform="translate(-27.012 -42.706)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1761"
                        data-name="Path 1761"
                        d="M222.363,304a11.174,11.174,0,0,0-5.3,1.34l.95,1.719h8.425L225.862,304Z"
                        transform="translate(-205.993 -288.5)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1762"
                        data-name="Path 1762"
                        d="M.739,454.48a.764.764,0,0,0,.026,1.528H25.338a.765.765,0,0,0,.765-.765V453H1.011q-.17.727-.273,1.48Z"
                        transform="translate(0 -429.904)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="towel"
                      width="27.775"
                      height="27.775"
                      viewBox="0 0 27.775 27.775"
                    >
                      <path
                        id="Path_1763"
                        data-name="Path 1763"
                        d="M56,283.473H70.879v-3.388a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.022,2.022,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -262.642)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1764"
                        data-name="Path 1764"
                        d="M56,249.04a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549v-.955a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.023,2.023,0,0,0-.528-.313Zm0,0"
                        transform="translate(-52.528 -232.626)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1765"
                        data-name="Path 1765"
                        d="M56,14.43a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549V2.48a4.776,4.776,0,0,1,.086-.758c.006-.027.015-.054.021-.08s.017-.066.026-.1c.017-.062.036-.124.056-.184s.042-.115.064-.172c.014-.036.028-.071.044-.107A3.437,3.437,0,0,1,71.918,0H58.48A2.483,2.483,0,0,0,56,2.48Zm0,0"
                        transform="translate(-52.528 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1766"
                        data-name="Path 1766"
                        d="M166.879,72h-4.96V88.863a.5.5,0,0,1-.5.5H152v3.968h10.415a.5.5,0,1,1,0,.992H152v.992h14.879Zm-1.488,22.319H164.4a.5.5,0,0,1,0-.992h.992a.5.5,0,1,1,0,.992Zm0,0"
                        transform="translate(-142.576 -67.536)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1767"
                        data-name="Path 1767"
                        d="M.5,40.992H2.48V40H.5a.5.5,0,0,0-.5.5.475.475,0,0,0,.143.344A.483.483,0,0,0,.5,40.992Zm0,0"
                        transform="translate(0 -37.52)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1768"
                        data-name="Path 1768"
                        d="M317.66,0a2.446,2.446,0,0,0-.454.046c-.037.006-.073.016-.109.024a2.518,2.518,0,0,0-.355.111l-.067.026a2.5,2.5,0,0,0-.753.509l-.029.03a2.5,2.5,0,0,0-.267.324c-.009.013-.019.025-.028.039a2.479,2.479,0,0,0-.206.379h4.545a2.418,2.418,0,0,0-.521-.758A2.448,2.448,0,0,0,317.66,0Zm0,0"
                        transform="translate(-295.837 0)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1769"
                        data-name="Path 1769"
                        d="M320.432,40.5a.475.475,0,0,0-.143-.344.482.482,0,0,0-.353-.152H312v.992h7.936A.5.5,0,0,0,320.432,40.5Zm0,0"
                        transform="translate(-292.657 -37.52)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                  <td className="wash-type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="bleach"
                      width="15.771"
                      height="26.048"
                      viewBox="0 0 15.771 26.048"
                    >
                      <path
                        id="Path_1757"
                        data-name="Path 1757"
                        d="M100,0h5.6V2.035H100Zm0,0"
                        transform="translate(-94.912)"
                        fill="#9b9b9b"
                      />
                      <path
                        id="Path_1758"
                        data-name="Path 1758"
                        d="M14.2,73.742C13.028,71.329,11.507,70,9.921,70H5.851c-1.586,0-3.107,1.329-4.284,3.742A15.72,15.72,0,0,0,0,80.175V92.487H15.772V80.175A15.72,15.72,0,0,0,14.2,73.742ZM6.359,89.435H3.053V87.908H6.359Zm1.526-3.053H3.053V84.856H7.886Zm4.579-6.359a1.526,1.526,0,1,1-3.053,0V76.97a1.526,1.526,0,1,1,3.053,0Zm0,0"
                        transform="translate(0 -66.439)"
                        fill="#9b9b9b"
                      />
                    </svg>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-md-3 bg-light text-dark">Price</div>
            <div className="col-md-1 bg-light text-dark">Reset</div>
          </div>
          {/* Row Fifth Ends */}
          <div
            className="bg-light"
            style={{
              padding: "10px 0 150px 0",
              position: "relative",
              flexFlow: "row",
            }}
          >
            <div style={{ width: "100px", float: "right", margin: "0px" }}>
              <button type="submit" className="btn btn-primary">
                Proceed
              </button>
            </div>
            <div style={{ width: "100px", float: "right", margin: "0px" }}>
              <button type="submit" className="btn btn-primary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>2021 © Laundry</p>
      </div>
    </div>
  );
}
