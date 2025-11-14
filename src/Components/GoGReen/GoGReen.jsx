import React from "react";

const GoGReen = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-green-50 to bg-emerald-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-800">why Go Green?</h2>
        <p className="text-gray-600 mt-2 ">
          Smaall action , Big Environment impact
          
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mx-auto max-w-6xl px-6">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-green-600 text-4xl mb-4">🌱</div>
          <h3 className="font-bold text-xl text-gray-800">
            Healthier lifestyle{" "}
          </h3>
          <p className="text-gray-600 mt-2">
            Eating local and reducing waste improves your health and well-being.{" "}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-green-600 text-4xl mb-4">🌏</div>
          <h3 className="font-bold text-xl text-gray-800">
            Protect the Planet{" "}
          </h3>
          <p className="text-gray-600 mt-2">
            Reduce carbon footprint to keep our Earth clean and safe.{" "}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-green-600 text-4xl mb-4">🔄️</div>
          <h3 className="font-bold text-xl text-gray-800">Save Reasources </h3>
          <p className="text-gray-600 mt-2">
            Use energy efficently and conserve water for future generations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoGReen;
