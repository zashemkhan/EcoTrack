import React, { useEffect, useState } from "react";
import SketletonEvent from "../Sketleton/SketletonEvent";

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/upComingEvents")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="  font-bold lg:text-3xl text-2xl text-green-700 mb-2">
          Upcoming event
        </h2>
        <p className="text-sm lg:text-[18px] text-gray-500">
          Be Part of the change -Join Us!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SketletonEvent key={i}></SketletonEvent>)
          : events.map((event) => (
              <div
                key={event._id}
                className="card bg-base-100 shadow-sm border rounded-md p-4 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-green-700 mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {event.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                  <span>📍 {event.location}</span>
                </div>
                <div className="mt-3 text-sm ">
                  👥 {event.currentParticipants} / {event.maxParticipants}{" "}
                  Joined
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
