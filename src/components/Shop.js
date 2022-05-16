import React from "react";

function Shop() {
  return (
    <div className="shops-container">
      <h3 className="heading">SHOP</h3>
      <p>
        Your services will be matched with buyer briefs—it’s a great way to get
        more work.Your services will be matched with buyer briefs—it’s a great
        way to get more work.
      </p>
      <div className="shop-container">
        <div className="shop-top">
          <h5>Shop Gym Related Products Here</h5>
        </div>
        <div className="shop-bottom">
          <div className="shop-bottom-left">
            <h5>Food</h5>
          </div>
          <div className="shop-bottom-right">
            <h5>Equipments</h5>
          </div>
        </div>
      </div>
      <button className="navigate-btn">All products</button>
    </div>
  );
}

export default Shop;
