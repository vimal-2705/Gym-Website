import React from "react";

function Payment() {
  return (
    <div className="payment-container">
      <div className="checkout">
        <div className="heading">CHECK OUT</div>
        <div className="fee standard-fee">
          <div className="pay-left">Registration Fee</div>
          <div className="pay-right">
            {" "}
            <i
              class="fa fa-inr"
              aria-hidden="true"
              style={{ fontSize: "15px" }}
            ></i>
            1000
          </div>
        </div>
        <div className="plus">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
        <div className="packs-container">
          <p className="select-option">Please select any one pack below:</p>
          <div className="pack-container">
            <div className="pack pack1">
              <div className="pack1-name">1 MONTH</div>
              <div className="pack1-details">
                <i
                  class="fa fa-inr"
                  aria-hidden="true"
                  style={{ color: "rgb(109, 62, 0)" }}
                ></i>
                1000
              </div>
            </div>
            <div className="pack pack2">
              <div className="pack1-name">6 MONTH</div>
              <div className="pack1-details">
                <i
                  class="fa fa-inr"
                  aria-hidden="true"
                  style={{ color: "rgb(109, 62, 0)" }}
                ></i>
                5000
              </div>
            </div>
            <div className="pack pack3">
              <div className="pack1-name">12 MONTH</div>
              <div className="pack1-details">
                <i
                  class="fa fa-inr"
                  aria-hidden="true"
                  style={{ color: "rgb(109, 62, 0)" }}
                ></i>
                9000
              </div>
            </div>
          </div>
        </div>

        <div className="total standard-fee">
          <div className="total-left">TOTAL</div>
          <div className="total-right">
            {" "}
            <i
              class="fa fa-inr"
              aria-hidden="true"
              style={{ fontSize: "15px" }}
            ></i>
            10000
          </div>
        </div>

        <button className="pay-now">Pay Now</button>
      </div>
    </div>
  );
}

export default Payment;
