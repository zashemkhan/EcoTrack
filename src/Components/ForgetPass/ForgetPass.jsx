import React from "react";

const ForgetPass = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient to-br from-green-50 to-green-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          ForgetPassword?
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Enter your registered email address and we'll send you a code
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Email{" "}
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="ENter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500"
            />
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200">
            Send
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/login"
            className="text-green-700 hover:underline font-semibold"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
