import React, { use, useEffect, useState } from "react";

const LiveStatics = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch("https://eco-track-teal.vercel.app/api/livestatics")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      });
  }, []);
  return (
    <div className=" mb-15">
      <div className="overflow-hidden bg-green-50 py-4 border-b border-green-700 ">
        <div className="flex animate-scroll whitespace-nowrap text-lg font-semibold text-green-700">
          {stats.length > 0 &&
            [...stats, ...stats].map((s, index) => (
              <span key={`stat-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl">
                  {s.co2} • {s.plastic} • {s.trees} • {s.activeUsers} •{" "}
                  {s.completedChallenges} • {s.events}
                </span>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStatics;
