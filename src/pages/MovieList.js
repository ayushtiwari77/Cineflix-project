import React, { useEffect } from "react";
import { Card } from "../components/Card";

import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(() => {
    document.title = `${title}`;
  }, [apiPath]);
  return (
    <main className="p-3">
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex flex-wrap justify-start other:justify-evenly ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
