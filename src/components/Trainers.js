import React from "react";

function Trainers() {
  return (
    <div className="trainers-container">
      <h3 className="heading">TRAINERS</h3>
      <p>
        Find Top Rated Gyms. Search Faster, Better & Smarter at ZapMeta Now!
        Information 24/7 · The Complete Overview · 100+ Million Visitors Types:
        pdf, doc, ppt, xls, txt
      </p>
      <div className="trainer-container">
        <div className="trainer trainer1">
          <img
            className="trainer1-img"
            src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <div className="trainer-info">
            <div className="trainer-name">James Bond</div>
            <div className="trainer-about">
              Transparency plays an important role in front end development. It
              lets you choose how transparent the elements on your web pages
              appear.
            </div>
          </div>
        </div>

        <div className="trainer trainer2">
          <img
            className="trainer2-img"
            src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <div className="trainer-info">
            <div className="trainer-name">James Bond</div>
            <div className="trainer-about">
              Transparency plays an important role in front end development. It
              lets you choose how transparent the elements on your web pages
              appear.
            </div>
          </div>
          <button className="trainer-btn">All Trainers</button>
        </div>

        <div className="trainer trainer3">
          <img
            className="trainer3-img"
            src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <div className="trainer-info">
            <div className="trainer-name">James Bond</div>
            <div className="trainer-about">
              Transparency plays an important role in front end development. It
              lets you choose how transparent the elements on your web pages
              appear.
            </div>
          </div>
        </div>
      </div>
      <center>
      <button className="navigate-btn last">All Trainers</button>
      </center>
    </div>
  );
}

export default Trainers;
