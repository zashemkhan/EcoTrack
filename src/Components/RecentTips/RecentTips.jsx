import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SketletonNOt from "../Sketleton/SketletonNOt";
// import Skeleton from "../Sketleton/Skeleton";

const RecentTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/tips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="py-18 px-0 ">
      <div className="text-center mb-8">
        <h2 className="  font-bold lg:text-3xl text-2xl text-green-700 mb-1">
          Recent Tips
        </h2>
        <p className="text-sm lg:text-[18px] text-gray-500">
          Stay inspired with the Latest Eco-Friendly Tips
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 ">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SketletonNOt key={i}></SketletonNOt>)
          : tips.map((tip) => (
              <div
                key={tip._id}
                className="card rounded-md hover:shadow-2xl  bg-base-100 card-xl shadow-sm pb-5"
              >
                <h2 className="bg-green-800 py-3 rounded-t-md text-white text-center">
                  {tip.title}
                </h2>
                <div className="px-4 py-3 space-y-3">
                  <p className="text-center">{tip.content}</p>

                  <div className="flex justify-between items-center border-b border-gray-300">
                    <p className=" py-1 text-sm flex justify-between">
                      Category :
                    </p>
                    <span className="text-sm">{tip.category}</span>
                  </div>

                  <div className="border-b border-gray-300 py-1 flex justify-between items-center">
                    <p className="  text-sm">Auther Name :</p>
                    <span className="text-sm">{tip.authorName}</span>
                  </div>

                  <div className="border-b border-gray-300 py-1 flex justify-between items-center">
                    <p className="  text-sm"> Upvotes :</p>
                    <span className="text-sm">{tip.upvotes}</span>
                  </div>
                  <div className="border-b border-gray-300 py-1 flex justify-between items-center">
                    <p className="  text-sm"> CreatedAt : </p>
                    <span className="text-sm">
                      {tip.createdAt.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default RecentTips;
