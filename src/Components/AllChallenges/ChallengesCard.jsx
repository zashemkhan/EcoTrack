import React, { use, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const ChallengesCard = ({ challenges }) => {
  const {
    _id,
    title,
    category,
    description,
    duration,
    participants,
    imageUrl,
    createdBy,
  } = challenges;
  console.log(challenges);
  return (
    <div
      className="card bg-base-100 hover:shadow-2xl shadow-xl
    "
    >
      <figure className="overflow-hidden">
        <img
          className="lg:h-64 h-60 w-full  object-cover transform transition-transform duration-500 hover:scale-105"
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title font-extrabold">{title}</h2>
        <h3>{createdBy}</h3>
        <p className="line-clamp-2 ">{description}</p>
        <p className="text-gray-800 font-extrabol">
          {" "}
          <span className="font-bold">category :</span> {category}
        </p>
        <p className="text-gray-800 ">
          {" "}
          <span className="font-bold">Duration :</span> {duration} Days
        </p>
        <p className="text-gray-800 font-extrabol">
          {" "}
          <span className="font-bold">Participants :</span> {participants}
        </p>
        <div className="card-actions justify-end items-center">
          <Link to={`/challenges/${_id}`}>
            <p className="btn bg-linear-to-r from-green-600 to-green-700 text-white mt-3 hover:to-emerald-900">
              View Details
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengesCard;
