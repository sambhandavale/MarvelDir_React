import React from "react";
import PageLayout from "../../components/layout/page_layout";
import Saga from "../../components/movies/saga_tile";

const Movies = () => {
  return (
    <div className="movies">
      <PageLayout /> 
      <div className="divider">MARVEL STUDIOS PRESENTS</div>
      <Saga />
      <div className="other_movies_tag_container">
        <div className="other_movies_tag">
          <div className="tag">OTHER MOVIES</div>
          <img src="/icons/movies/other_movies.svg" alt="" />
        </div>
      </div>
    </div>
  ); 
};

export default Movies;
