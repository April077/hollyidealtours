import React from "react";
import TripCard from "./ui/tripPackageCard";

const trips = [
  {
    place: "Varanasi, U.P.",
    image: "/Bodh.png",
    price: 9999,
    day: "3",
    night: "4",
  },
  {
    place: "Varanasi, U.P.",
    image: "/Bodh.png",
    price: 9999,
    day: "3",
    night: "4",
  },
  {
    place: "Varanasi, U.P.",
    image: "/Bodh.png",
    price: 9999,
    day: "3",
    night: "4",
  },
  {
    place: "Varanasi, U.P.",
    image: "/Bodh.png",
    price: 9999,
    day: "3",
    night: "4",
  },
  {
    place: "Varanasi, U.P.",
    image: "/Bodh.png",
    price: 9999,
    day: "3",
    night: "4",
  },
  {
    place: "Varanasi, U.P.",
    image: "/Bodh.png",
    price: 9999,
    day: "3",
    night: "4",
  },
  
];

function TripPlans() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {trips.map((trip, index) => {
          return (
            <TripCard
              key={index}
              model={trip.place}
              image={trip.image}
              price={trip.price}
              day={trip.day}
              night={trip.night}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TripPlans;
