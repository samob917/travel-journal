import React from "react";

export default function Card(props) {
  const country = props.location.toUpperCase();
  return (
    <div className="CardWrapper">
      <div className="Card">
        <img className="Card--placePicture" src={props.pic} />
        <div className="Card--content">
          <div className="Card--maps">
            <img
              className="Card--locationSymbol"
              src={require("../images/locationTag.png")}
            />
            {/* This is where the red location tag goes */}
            <h3 className="Card--country">{country}</h3>
            <a href={props.gmap} className="Card--mapsLink">
              View on Google Maps
            </a>
          </div>
          <div className="Card--placeDetails">
            <h1 className="Card--placeName">{props.title}</h1>
            <h5 className="Card--dates">
              {props.startDate} - {props.endDate}
            </h5>
            <p className="Card--desc">{props.desc}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
