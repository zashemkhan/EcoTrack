import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-48 bg-gray-200 w-full"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mt-2"></div>
      </div>
    </div>
  );
};

export default Skeleton;
