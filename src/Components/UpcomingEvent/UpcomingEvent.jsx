import React, { useEffect, useState } from "react";
import SketletonEvent from "../Sketleton/SketletonEvent";

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch("https://eco-track-teal.vercel.app/api/upComingEvents")
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
          Be The Change You Want tTo See - Get Involved!
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SketletonEvent key={i}></SketletonEvent>)
          : events.map((event, i) => (
              <div key={i} className="card bg-base-100 image-full shadow-sm">
                <div>
                  <figure className="object-cover overflow-hidden">
                    <img
                      className="object-cover w-full h-[300px]"
                      src={event.img}
                      alt={event.title}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold text-xl">
                      {event.title}
                    </h2>
                    <p>{event.description}</p>
                    <div className="mt-3 text-sm flex flex-col text-end ">
                      <div className="mt-1">
                        <p>📍 {event.location}</p>
                      </div>
                      <span>
                        👥 {event.currentParticipants} / {event.maxParticipants}{" "}
                        Joined
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
