import React, { useState } from 'react';
import PaystackForm from './PaystackForm';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import levi from '../images/levi.jpg';
import deva from '../images/deva.jpg';

function Cart() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState('88.99');
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <div className="cart">
        <Col sm={6}>
          <div className="cartSection">
            <h1 className=" cartTitle">My Cart</h1>
            <div className="cartContainer">
              <Col className="checkoutItem">
                <Row>
                  <Col xs={3}>
                    <img
                      src={levi}
                      alt="item"
                      width={50}
                      height="100%"
                      className="cartImage"
                    />
                  </Col>

                  <Col xs={5}>
                    <Card.Body>
                      <Card.Title className="itemNprice">Pecan Pie</Card.Title>
                      <Card.Text>
                        <p className="itemNprice">
                          GHC
                          <span className="prices">65.55</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col xs={4}>
                    <Card.Subtitle className="mb-2 text-muted itemCount">
                      <button className="minus cartCount">+</button>
                      <button className="itemNumber">1</button>
                      <button className="plus cartCount">-</button>
                    </Card.Subtitle>
                  </Col>
                </Row>
              </Col>
              <Col className="checkoutItem">
                <Row>
                  <Col xs={3}>
                    <img
                      src={deva}
                      alt="item"
                      width={50}
                      height="100%"
                      className="cartImage"
                    />
                  </Col>
                  <Col xs={5}>
                    <Card.Body>
                      <Card.Title className="itemNprice">
                        Unicorn Cake
                      </Card.Title>
                      <Card.Text>
                        <p className="itemNprice">
                          GHC
                          <span className="prices">23.44</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col xs={4}>
                    <Card.Subtitle className="mb-2 text-muted itemCount">
                      <button className="minus cartCount">+</button>
                      <button className="itemNumber">1</button>
                      <button className="plus cartCount">-</button>
                    </Card.Subtitle>
                  </Col>
                </Row>
              </Col>
              <div className="totalContainer">
                <h6>Total</h6>
                <h6>
                  GHC
                  <span id="totalAmount">88.99</span>
                </h6>
              </div>
            </div>
            <Row>
              <Col className="checkoutContainer">
                <button
                  className="checkoutButton"
                  onClick={() => handleShow(true)}
                >
                  Proceed to Checkout
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      </div>

      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="checkoutSection"
      >
        <div className="navbar" style={{ width: '100%' }}>
          <div className="brand">
            <i className="fas fa-birthday-cake">bakes</i>
          </div>
          <button className="toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Modal.Header closeButton className="modalHeader">
          <h1>Checkout</h1>
        </Modal.Header>
        <Modal.Body className="cartForm">
          <PaystackForm getTotal={total} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cart;
