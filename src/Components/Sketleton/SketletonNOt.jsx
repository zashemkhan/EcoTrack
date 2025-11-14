
import React from "react";

const SketletonNOt = () => {
  return (
    <div className="card rounded-md bg-base-100 shadow-sm animate-pulse pb-5">
      <div className="h-10 bg-gray-300 rounded-t-md w-full"></div>
      <div className="px-4 py-3 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/5"></div>
        <div className="h-4 bg-gray-200 rounded w-2/5"></div>
      </div>
    </div>
  );
};

export default SketletonNOt;
