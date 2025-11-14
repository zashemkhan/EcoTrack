import React from "react";

const SketletonDetail = () => {
  return (
    <div className="max-w-5xl min-h-screen flex justify-center items-center mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2 bg-gray-200 rounded-xl h-80 md:h-full flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
         
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <div className="bg-gray-200 h-10 w-3/4 rounded-md"></div>
            <div className="bg-gray-300 h-6 w-1/4 rounded-full"></div>
            <div className="bg-gray-200 h-20 w-full rounded-md"></div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-gray-300 py-1">
                <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/6 rounded"></div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 py-1">
                <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/6 rounded"></div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 py-1">
                <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/6 rounded"></div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-gray-400 h-10 w-32 rounded-md"></div>
              <div className="bg-gray-400 h-10 w-32 rounded-md"></div>
              <div className="bg-gray-400 h-10 w-32 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketletonDetail;
