import React from "react";

export default function Card() {
  return (
    <div>
      <div className="Card">
        <img
          className="Card--placePicture"
          src={require("../images/japan.png")}
        />
        <div className="Card--content">
          <div className="Card--maps">
            <img
              className="Card--locationSymbol"
              src={require("../images/locationTag.png")}
            />
            {/* This is where the red location tag goes */}
            <h3 className="Card--country">JAPAN </h3>
            <p className="Card--mapsLink">View on Google Maps</p>
          </div>
          <div className="Card--placeDetails">
            <h1 className="Card--placeName">Mount Fuji</h1>
            <h5 className="Card--dates">12 Jan, 2021 - 24 Jan, 2021</h5>
            <p className="Card--desc">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
