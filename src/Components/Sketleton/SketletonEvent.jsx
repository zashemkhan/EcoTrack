import React from "react";

const SketletonEvent = () => {
  return (
    <div className="card bg-base-100 image-full shadow-sm border rounded-md overflow-hidden animate-pulse">
      <div className="w-full h-[300px] bg-gray-300"></div>
      <div className="card-body space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

        <div className="flex flex-col text-end mt-3 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/3 ml-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 ml-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SketletonEvent;
