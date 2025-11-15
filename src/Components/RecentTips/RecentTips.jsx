import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SketletonNOt from "../Sketleton/SketletonNOt";
import { MdHowToVote } from "react-icons/md";
// import Skeleton from "../Sketleton/Skeleton";

const RecentTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://eco-track-teal.vercel.app/api/tips")
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
                className="card rounded-md hover:shadow-2xl  bg-base-100 card-xl shadow-sm py-2 border-l-5 border-green-800"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-8 ">
                    <h2 className="py-1.5 px-2 text-xs rounded-md text-start bg-green-100  w-fit font-semibold">
                      {tip.category} - Tips
                      {/* {tip.title} */}
                    </h2>
                    <span className="text-sm text-gray-600">
                      {tip.createdAt.slice(0, 10)}
                    </span>
                  </div>

                  <div className="flex items-center  justify-between">
                    <div>
                      <h2 className="mt- text-xl  rounded-md text-start  font-bold">
                        {tip.title}
                      </h2>
                    </div>
                    <div className="flex items-center">
                      <MdHowToVote />
                      <h4 className="text-sm text-gray-600 font-semibold">
                        {" "}
                        Vote-{tip.upvotes}
                      </h4>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-start text-sm text-gray-600">
                      {tip.content}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-end">
                        {tip.authorName}
                      </h4>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-300 mt-4 "></div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default RecentTips;
