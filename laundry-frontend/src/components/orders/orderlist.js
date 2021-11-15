import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Ordercomponent from "../orders/ordercomponent";
import Summaryorder from "../summary/summaryorder"
import { useHistory,Link } from "react-router-dom";
import { getToken } from "../../Utils/AuthOperations";
import "./orders.css"

const order = { orderId: "orderId", userId: "userId", details: new Map() };
let orderedDate = [];

function Orderlist() {
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);

  const history = useHistory();

  function handleCallback(props) {
    order.details.set(props.name, props.value);
    orderedDate = [...order.details].map(([name, value]) => ({
      name,
      value,
    }));
    console.log("orderedData", orderedDate);
    return;
  }

  useEffect(() => {
    console.log("orderheader", getToken());
    
      fetch("/get", {
        method:"get",
        headers: { Authorization: "Bearer " + getToken() },
      })
      .then((response) => {
        setUser(response.data.data.get_user.name);
      })
      .catch((e) => {
        console.log(e)
      });
  });


  const orderComponents = [
    {
      image: "shirt.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing",
      name: "Shirts",
      type: "Boolean",
    },
    {
      image: "tshirt.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing",
      name: "Tshirts",
      type: "Boolean",
    },
    {
      image: "jeans.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing",
      name: "Jeans",
    },
    {
      image: "trousers.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing",
      name: "Trousers",
      type: "Boolean",
    },
  ];
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
                  class="fa fa-plus-circle fontmain1"
                  onClick={() => history.push("/dashboard")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-bars fontmain"
                  onClick={() => history.push("/orderview")}
                ></i>
              </div>
              <div class="col-lg-12">
                    <Link to={"/"}>
                      <i className="bi bi-power fs-2 icon"></i>
                    </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-11">
            <div class="row">
              <div class="col-lg-2" style={{fontWeight:"bold"}}>
                <p>Create Order</p>
              </div>
              <div class="col-lg-8"></div>
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
                  <th>Product Types</th>
                  <th>Quantity </th>
                  <th>Wash Type</th>
                  <th>Price</th>
                  <th>Reset</th>
                </tr>
              </thead>
              <tbody>
                {orderComponents.map((orderItem) => (
                  <Ordercomponent
                    image={orderItem.image}
                    description={orderItem.description}
                    name={orderItem.name}
                    handleClick={handleCallback}
                  />
                ))}
              </tbody>
            </table>
            <div class="but-com">
              <button class="btn btn btn-outline-primary cancel">Cancel</button>
              <button
                class="btn btn btn-primary proceed"
                onClick={() => setShow(true)}
              >
                proceed
              </button>
            </div>

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
                <div className="confirm_page">
                  <div class="row mainadd">
                    <div class="col-lg-4">
                      <select data-bs-display="static" aria-expanded="false">
                        <option disabled selected value>
                          {" "}
                          Store Location{" "}
                        </option>
                        <option>Hyderabad</option>
                        <option>Banglore</option>
                        <option>Guntur</option>
                        <option>Delhi</option>
                        <option>Gujarat</option>
                      </select>
                    </div>
                    <div class="col-lg-4">
                      <h6>Store Location</h6>
                      <p>Near SBI, gandimaisamma</p>
                    </div>
                    <div class="col-lg-4">
                      <h6>Phone</h6>
                      <p>+919956472398</p>
                    </div>
                  </div>
                </div>

                <Summaryorder
                  total={orderedDate
                    .map((order) => order.value.price)
                    .reduce((acc, curr) => acc + parseInt(curr, 10), 0)}
                  orderedDate={orderedDate}
                />
              </Modal.Body>
            </Modal>

            <div class="createbtn"></div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>
          2021 <i class="fa fa-copyright"></i> Laundry
        </p>
      </div>
    </div>
  );
}

export default Orderlist;
