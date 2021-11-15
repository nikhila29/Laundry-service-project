import React, { useState } from "react";
import Orderheader from "../orders/orderheader";
import "font-awesome/css/font-awesome.min.css";
import { Modal } from "react-bootstrap";
import Ordercomponent from "../orders/ordercomponent";
import Summaryorder from "../summary/summaryorder"
import { useHistory,Link } from "react-router-dom";
import "./orders.css"

const order = { orderId: "orderId", userId: "userId", details: new Map() };
let orderedDate = [];

function Orderlist() {
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

  const orderComponents = [
    {
      image: "shirt.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Shirts",
      type: "Boolean",
    },
    {
      image: "tshirt.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Tshirts",
      type: "Boolean",
    },
    {
      image: "jeans.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Jeans",
    },
    {
      image: "trousers.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Trousers",
      type: "Boolean",
    },
  ];
  return (
    <div>
      <Orderheader />
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
                  onClick={() => history.push("/listview")}
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
              <div class="col-lg-2">
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
                      <p>Near Phone Booth, 10th Road</p>
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
