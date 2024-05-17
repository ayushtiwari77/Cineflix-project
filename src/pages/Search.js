import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  useEffect(() => {
    document.title = `search result for ${queryTerm}/cinemate`;
  }, []);
  return (
    <main className="p-3">
      <section className="py-7">
        <p className=" text-3xl  text-gray-700 dark:text-white">
          {movies.length === 0
            ? `no result found for ${queryTerm}`
            : `results for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex flex-wrap justify-start ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
