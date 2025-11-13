import React, { use, useEffect, useState } from "react";

const LiveStatics = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/livestatics")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      });
  }, []);
  return (
    <div className=" mb-15">
      <div className="overflow-hidden bg-green-50 py-4 border-b border-green-700 ">
        <div className="flex animate-scroll whitespace-nowrap text-lg font-semibold text-green-700">
          {stats.map((s, index) => (
            <>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.co2}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.plastic}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.trees}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl">{s.activeUsers}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl">{s.completedChallenges}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl">{s.events}</span>
              </span>
            </>
          ))}
          {/* for infinite */}
          {stats.map((s, index) => (
            <>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.co2}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.plastic}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.trees}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.activeUsers}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.completedChallenges}</span>
              </span>
              <span key={`dup-${index}`} className="mx-10 flex items-center">
                <span className="text-2xl"> {s.events}</span>
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStatics;
