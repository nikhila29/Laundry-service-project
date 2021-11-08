import React from "react";
import "./signup.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import footercircle from "../../assets/img/footer-circle.jpg";

export default function signup() {
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
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
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
                    <a className="nav-link text-light" href="#">
                      Sign In
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="vh-100 row align-items-center">
        <div class="col-md-4">
          <div className="d-flex justify-content-center left-align">
            <div>
              <div>
                <h1 style={{ fontSize: "80px" }} className="text-primary">
                  Laundry
                </h1>
                <h1 style={{ fontSize: "80px" }} className="text-primary">
                  Service
                </h1>
              </div>
              <div className="left-align">
                <h5 className="text-muted">
                  Door Step Wash & Dryclean Service
                </h5>
              </div>
              <div className="left">
                <p className="text-muted">Already Have Account</p>
                <Link to={"/"}>
                  <button type="button" class="btn btn-primary">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <section class="h-100 h-custom gradient-custom-2">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">
                  <div class="card card-registration card-registration-2">
                    <div class="card-body p-0">
                      <div class="row g-0">
                        <div class="col-12">
                          <div class="p-5">
                            <h1 class="fw-normal mb-5 text-primary">
                              REGISTER
                            </h1>
                            <div class="row">
                              <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev2"
                                    class="form-control form-control-lg p-2"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev3"
                                    class="form-control form-control-lg p-2"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev2"
                                    class="form-control form-control-lg p-2"
                                    placeholder="Phone"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev2"
                                    class="form-control form-control-lg p-2"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev2"
                                    class="form-control form-control-lg p-2"
                                    placeholder="District"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev2"
                                    class="form-control form-control-lg p-2"
                                    placeholder="Address"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                <div class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev5"
                                    class="form-control form-control-lg p-2"
                                    placeholder="Pincode"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6"></div>
                            </div>
                            <div className="justify-content-center">
                              <div class="form-check mb-4 pt-5">
                                <div>
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="form2Example3c"
                                  />
                                </div>
                                <label
                                  class="form-check-label text-muted text-center"
                                  for="form2Example3"
                                >
                                  I do accept the{" "}
                                  <a href="#!" class="text-muted">
                                    <u>Terms and Conditions</u>
                                  </a>{" "}
                                  of your site.
                                </label>
                              </div>
                              <Link to={"/"}>
                                <button type="button" class="btn btn-primary">
                                  Register
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <h3 className="text-primary">
          Now Reffer & Earn ₹500 for every referral*
        </h3>
        <p className="text-muted">*Terms and conditions will be applied</p>
      </div>
      <div class="row align-items-center border-top">
        <div class="col-sm-3 p-5">
          <h5>ABOUT US</h5>
          <p>Doorstep Wash & Dryclean Service</p>
        </div>
        <div class="col-sm-5 p-5">
          <table>
            <tr>
              <td className="text-dark footer-table">
                <h6>Home</h6>
              </td>
              <td className="text-dark footer-table">
                <h6>Pricing</h6>
              </td>
              <td className="text-dark footer-table">
                <h6>Career</h6>
              </td>
              <td className="text-dark">
                <h6>Contact</h6>
              </td>
            </tr>
            <tr>
              <td className="text-muted">Sign In</td>
              <td></td>
              <td className="text-muted">Blogs</td>
            </tr>
            <tr>
              <td className="text-muted">Register</td>
              <td></td>
              <td className="text-muted">Create</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="col-sm-2 p-5">
          <h5>SOCIAL MEDIA</h5>
          <div className="social-media social-gap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.942"
              height="19.942"
              viewBox="0 0 19.942 19.942"
            >
              <path
                id="facebook"
                d="M17.021,0H2.921A2.925,2.925,0,0,0,0,2.921v14.1a2.925,2.925,0,0,0,2.921,2.921H8.8v-7.05H6.466V9.387H8.8V7.011a3.509,3.509,0,0,1,3.505-3.505h3.544V7.011H12.308V9.387h3.544l-.584,3.505h-2.96v7.05h4.713a2.925,2.925,0,0,0,2.921-2.921V2.921A2.925,2.925,0,0,0,17.021,0Zm0,0"
                fill="#5861ae"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="social-media social-gap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.111"
              height="19.111"
              viewBox="0 0 19.111 19.111"
            >
              <g id="instagram" opacity="0.6">
                <path
                  id="Path_169"
                  data-name="Path 169"
                  d="M13.938,0H5.173A5.179,5.179,0,0,0,0,5.173v8.765a5.179,5.179,0,0,0,5.173,5.173h8.765a5.179,5.179,0,0,0,5.173-5.173V5.173A5.179,5.179,0,0,0,13.938,0ZM9.556,14.781a5.226,5.226,0,1,1,5.226-5.226A5.232,5.232,0,0,1,9.556,14.781Zm5.351-9.219a1.544,1.544,0,1,1,1.544-1.544A1.546,1.546,0,0,1,14.906,5.562Zm0,0"
                  transform="translate(0 0)"
                  fill="#5861ae"
                />
                <path
                  id="Path_170"
                  data-name="Path 170"
                  d="M150.125,146.02a4.105,4.105,0,1,0,4.105,4.105A4.11,4.11,0,0,0,150.125,146.02Zm0,0"
                  transform="translate(-140.569 -140.569)"
                  fill="#5861ae"
                />
                <path
                  id="Path_171"
                  data-name="Path 171"
                  d="M388.416,96.3a.424.424,0,1,0,.424.424A.424.424,0,0,0,388.416,96.3Zm0,0"
                  transform="translate(-373.51 -92.706)"
                  fill="#5861ae"
                />
              </g>
            </svg>
          </div>
          <div className="social-media ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.281"
              height="18.281"
              viewBox="0 0 18.281 18.281"
            >
              <path
                id="linkedin"
                d="M16.962,0H1.318A1.318,1.318,0,0,0,0,1.318V16.962a1.318,1.318,0,0,0,1.318,1.318H16.962a1.318,1.318,0,0,0,1.318-1.318V1.318A1.318,1.318,0,0,0,16.962,0ZM6.484,13.818H4.258V7.12H6.484ZM5.371,6.206H5.357a1.16,1.16,0,1,1,.029-2.314,1.161,1.161,0,1,1-.015,2.314Zm9.14,7.612H12.285V10.235c0-.9-.322-1.514-1.128-1.514a1.219,1.219,0,0,0-1.142.814,1.524,1.524,0,0,0-.073.543v3.74H7.716s.029-6.069,0-6.7H9.942v.948a2.21,2.21,0,0,1,2.006-1.105c1.465,0,2.563.957,2.563,3.014Zm0,0"
                fill="#5861ae"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
        <div class="col-sm-2 text-center">
          <img className="footer-circle" src={footercircle} />
        </div>
      </div>
      <div className="bg-dark text-center p-1 align-items-center">
        <div className="col-md-12">
          <p className="text-light">2021 © Laundry</p>
        </div>
      </div>
    </div>
  );
}
