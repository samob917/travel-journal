import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        location={item.location}
        title={item.title}
        gmap={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        pic={item.imageURL}
        desc={item.description}
      />
    );
  });
  return (
    <div>
      <Header />
      <section className="Cards--list"> {cards}</section>
    </div>
  );
}
