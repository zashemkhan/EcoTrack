import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full relative bg-gray-900">
      <img
        src="https://cdn.dribbble.com/userupload/3497903/file/original-b36db77d656ed8be7b09e609a4f1f7e5.png?resize=1600x1200&vertical=center"
        alt="404 not found illustration"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
          Oops! Page not found. The page you're looking for might have been
          moved or removed.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            to="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-medium shadow-md transition"
          >
            Go to Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-medium shadow-md transition"
          >
            Retry
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-300">
          If you think this is a mistake,contact support@example.com
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
