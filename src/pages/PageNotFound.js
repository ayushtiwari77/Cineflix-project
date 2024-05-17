import React from "react";
import notFound from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const PageNotFound = () => {
  useEffect(() => {
    document.title = `page not found/cinemate`;
  }, []);

  return (
    <main>
      <section className="flex flex-col items-center">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
          404, Oops!
        </p>
        <div className="img-box max-w-lg mb-5">
          <img src={notFound} alt="notfound" />
        </div>
        <Link to="/">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-8 py-4 text-center me-2 mb-2"
          >
            Go To Home
          </button>
        </Link>
      </section>
    </main>
  );
};
