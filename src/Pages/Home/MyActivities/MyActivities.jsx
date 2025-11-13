import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { Link } from "react-router";
import Skeleton from "../../../Components/Sketleton/Skeleton";

const MyActivities = () => {
  const [joinData, setJoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  // const { email } = user || {};
  console.log(joinData);
  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/api/challenges/join?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJoinData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const getStatus = (joinDate, duration) => {
    const start = new Date(joinDate);
    const end = new Date(start);
    end.setDate(end.getDate() + duration);

    const today = new Date();
    if (today < start) return "Not Started";
    else if (today >= start && today <= end) return "Ongoing";
    else return "Finished";
  };

  const getProgressColor = (status) => {
    switch (status) {
      case "Finished":
        return "bg-gray-500";
      case "Ongoing":
        return "bg-green-600";
      case "Not Started":
        return "bg-yellow-500";
      default:
        return "bg-green-700";
    }
  };

  //
  const getProgressPercentage = (joinDate, duration) => {
    const start = new Date(joinDate);
    const dur = Number(duration);

    if (isNaN(start) || isNaN(dur)) return 0;
    const end = new Date(start);
    end.setDate(end.getDate() + dur);
    const today = new Date();

    if (today < start) return 0;
    if (today >= end) return 100;

    const totalTime = end - start;
    const elapsed = today - start;
    return Math.round((elapsed / totalTime) * 100);
  };

  if (!loading && joinData.length === 0)
    return (
      <p className="text-center text-gray-500 text-lg min-h-screen">
        You haven't joined any challenges yet.
      </p>
    );
  // };

  return (
    <div className="pb-10">
      <div className="w-11/12 mx-auto min-h-screen">
        <div className="py-8 text-center">
          <h2 className="  font-bold lg:text-3xl text-2xl  mb-1">
            My Activiteis
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 ">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, i) => <Skeleton key={i}></Skeleton>)
            : joinData.map((challenges) => (
                <div
                  key={challenges._id}
                  className="card bg-base-100 shadow-sm hover:shadow-2xl"
                >
                  <figure className="overflow-hidden">
                    <img
                      className="lg:h-64 h-58 w-full  object-cover transform transation-transform durotion-500 hover:scale-105"
                      src={challenges.imageUrl}
                      alt={challenges.title}
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title font-extrabold">
                      {challenges.title}
                    </h2>
                    <p className="text-gray-800 font-extrabol">
                      {" "}
                      <span className="font-bold">category :</span>{" "}
                      {challenges.categry}
                    </p>
                    <p className="text-gray-800 ">
                      {" "}
                      <span className="font-bold">Duration :</span>{" "}
                      {challenges.duration} Days
                    </p>
                    <p className="text-gray-800 font-extrabol">
                      {" "}
                      <span className="font-bold">Join Date :</span>{" "}
                      {new Date(challenges.joinDate).toLocaleDateString()}
                    </p>

                    {/* statu */}

                    <p className="text-gray-800 font-extrabol">
                      {" "}
                      <span className="font-bold">Status :</span>
                      {getStatus(challenges.joinDate, challenges.duration)}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                      <div
                        className={`${getProgressColor(
                          getStatus(challenges.joinDate, challenges.duration)
                        )} h-4 rounded-full`}
                        style={{
                          width: `${getProgressPercentage(
                            challenges.joinDate,
                            challenges.duration
                          )}%`,
                        }}
                      ></div>
                      <p className="mt-1">
                        progress:{" "}
                        <span className="text-gray-500">
                          {getProgressPercentage(
                            challenges.joinDate,
                            challenges.duration
                          )}
                          %
                        </span>
                      </p>
                    </div>

                    <div className="card-actions justify-end items-center">
                      <Link to={`/challenges/${challenges.challengeId}`}>
                        <p className="btn bg-linear-to-r from-green-600 to-green-700 text-white mt-3 hover:to-emerald-900">
                          View Details
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
export default MyActivities;
