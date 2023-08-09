import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { PaystackButton } from 'react-paystack';

function PaystackForm({ getTotal }) {
  const amount = 88.99 * 100; // Remember, set in kobo!
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const componentProps = {
    email,
    amount,
    currency: 'GHS',
    metadata: {
      name,
      phone,
    },
    publicKey: `${process.env.REACT_APP_API_KEY}`,
    text: 'Pay Now',
    onSuccess: () =>
      alert('Thanks for doing business with us! Come back soon!!'),
    onClose: () => alert('Get it while it lasts!!!'),
  };
  return (
    <>
      <Col sm={6} md={6} lg={4} className="paystackSection">
        <div className="">
          <div className="item">
            <div className="payStackTotal itemNprice">
              <h6>Total</h6>
              <p className="item-details__amount">GHS {getTotal}</p>
            </div>
            <div className="payStackSummary">
              <h6 className="item-details__title font">Order Summary</h6>
              <p className="itemNprice">
                Item
                <span className="payStackSummaryPrice">
                  <span className="font" style={{ marginRight: '30px' }}>
                    Qty
                  </span>
                  Item Total
                </span>
              </p>
              <p className="itemNprice">
                Pecan Pie
                <span className="payStackSummaryPrice">
                  <span style={{ marginRight: '30px' }}>1</span>GHC 65.55
                </span>
              </p>
              <p className="itemNprice">
                Unicorn Cake
                <span className="payStackSummaryPrice">
                  <span style={{ marginRight: '30px' }}>1</span>GHC 23.44
                </span>
              </p>
            </div>
            <div className="checkout-form">
              <div className="fieldsets">
                <div className="checkout-field">
                  <label>Name: </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="checkout-field">
                  <label>Email: </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="checkout-field">
                  <label>Phone: </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <PaystackButton className="paystack-button" {...componentProps} />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default PaystackForm;
