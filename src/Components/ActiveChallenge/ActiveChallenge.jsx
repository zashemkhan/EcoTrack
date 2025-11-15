import { useEffect, useState } from "react";
import { Link } from "react-router";
import Skeleton from "../Sketleton/Skeleton";

const ActiveChallenge = () => {
  const [activeData, setActiveData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://eco-track-teal.vercel.app/api/activechallenges")
      .then((res) => res.json())
      .then((data) => {
        setActiveData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <h2 className="  font-bold lg:text-3xl text-2xl text-center text-green-700 mb-8">
        Active Challenges
      </h2>

      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10  ">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i}></Skeleton>
            ))}
        </div>
      ) : activeData.length === 0 ? (
        <p className="text-center w-full text-gray-500 text-lg ">
          No Active Challenges Available Right Now
        </p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10  ">
          {activeData.map((active) => (
            <div
              key={active._id}
              className="card bg-base-100 shadow-sm hover:shadow-2xl"
            >
              <figure className="overflow-hidden">
                <img
                  className="lg:h-64 h-58 w-full  object-cover transform transation-transform durotion-500 hover:scale-105"
                  src={active.imageUrl}
                  alt={active.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-extrabold">{active.title}</h2>
                <p>
                  <span className="font-bold"> Impact Metric :</span>{" "}
                  {active.impactMetric}
                </p>
                <p className="text-gray-800 font-extrabol">
                  {" "}
                  <span className="font-bold">category : </span>
                  {active.category}
                </p>

                <div className="card-actions justify-end items-center">
                  <Link to={`/challenges/${active._id}`}>
                    <p className="btn bg-linear-to-r from-green-600 to-green-700 text-white mt-3 hover:to-emerald-900">
                      View Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveChallenge;
