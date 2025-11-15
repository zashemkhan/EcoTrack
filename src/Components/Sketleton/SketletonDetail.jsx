import React from "react";
import Skeleton from "react-loading-skeleton";

const SketletonDetail = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex justify-center items-center mx-auto p-4 md:p-6 lg:p-8 min-h-screen">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden w-full">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
            <div className="shrink-0 w-full md:w-1/2">
              <Skeleton
                className="rounded-xl"
                height={500}
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
              <Skeleton height={35} width="70%" />
              <Skeleton height={30} width={120} />

              <Skeleton count={3} height={18} />
              <div className="flex justify-between items-center border-b border-gray-300">
                <Skeleton width="40%" height={18} />
                <Skeleton width="30%" height={18} />
              </div>
              <div className="flex justify-between items-center border-b border-gray-300">
                <Skeleton width="40%" height={18} />
                <Skeleton width="30%" height={18} />
              </div>
              {/*  */}
              <div className="flex justify-between items-center border-b border-gray-300">
                <Skeleton width="40%" height={18} />
                <Skeleton width="30%" height={18} />
              </div>

              <div className="flex justify-between items-center border-b border-gray-300">
                <Skeleton width="40%" height={18} />
                <Skeleton width="30%" height={18} />
              </div>

              <div className="flex justify-between items-center border-b border-gray-300">
                <Skeleton width="40%" height={18} />
                <Skeleton width="30%" height={18} />
              </div>
              <div className="flex justify-between items-center border-b border-gray-300">
                <Skeleton width="40%" height={18} />
                <Skeleton width="30%" height={18} />
              </div>
              <div className="flex items-center gap-3 mt-6">
                <Skeleton height={45} width={160} />
                <Skeleton height={45} width={140} />
                <Skeleton height={45} width={140} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketletonDetail;
