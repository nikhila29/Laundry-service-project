import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
//import axios from "axios";
import { useHistory } from "react-router-dom";
import { clearToken, getToken } from "../../Utils/AuthOperations";
import "font-awesome/css/font-awesome.min.css";
import OrderedItems from "../orders/orderedItems"

function Orderview() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  function createlist() {
    console.log("Hello");
    history.push("/dashboard");
  }
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
     fetch("/orders", {
        method:"get",//get
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setOrders(response.data.data.orders);
        setCount(orders.length);
        // setTimeout(() => {
        //   setOrders(response.data.data.orders);
        //   setCount(orders.length);
        // }, 1000);
        console.log(orders);
      })
      .catch((e) => {
       console.log("unAuthorized user");
      });
  });
  return (
    <div>
      <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{color:"#5861AE",backgroundColor:"#5861AE"}}>
        <Navbar.Brand href="#home" class="laundryhead" >
          Laundry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav style={{fontWeight:"bold",color:"black"}}>
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#features">Career</Nav.Link>
            <Nav.Link href="#features">
              <p class="signinlink">UserName
                <img src={Image} class="img" alt="image1" />
                {user}
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1 main-head">
            <div class="row">
              <div class="col-lg-12">
                <i
                  class="fa fa-home fontmain"
                  onClick={() => history.push("/dashboard")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-plus-circle fontmain"
                  onClick={() => history.push("/dashboard")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-bars fontmain1"
                  onClick={() => history.push("/orderview")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="bi bi-power fs-2 icon"
                  onClick={() => {
                    history.push("/");
                    clearToken();
                  }}
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-11">
            <div class="row">
              <div class="col-lg-2">
                <p>Orders | {count}</p>
              </div>
              <div class="col-lg-6"></div>
              <div class="col-lg-2">
                <button class="btn btn-primary " onClick={createlist}>
                  Create
                </button>
              </div>
              <div class="col-lg-2">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <table class="table maintable">
              <thead>
                <tr class="table-dark ">
                  <th>Order id</th>
                  <th>Order Date & Time </th>
                  <th>Store Location</th>
                  <th>City</th>
                  <th>Store Phone</th>
                  <th>Total Items</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Cancel Order</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((orders) => (
                  <OrderedItems key={orders.order_id} {...orders} />
                ))}
              </tbody>
            </table>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Summary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="row mainadd">
                  <div class="col-lg-4">Store Location</div>
                  <div class="col-lg-4">Store Address</div>
                  <div class="col-lg-4">Phone</div>
                </div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type
                 specimen book.
                </p>
              </Modal.Body>
            </Modal>
            <div class="createbtn"></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>2021 © Laundry</p>
      </div>
    </div>
  );
}

export default Orderview;