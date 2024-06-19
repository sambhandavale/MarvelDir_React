import React from "react";
import { useLocation } from "react-router-dom";
import SlideShow from "../slide_show";
import FlipBoxHeader from "../flipbox_header";
import disneyPlusSeries from "../../data/series/disney+/disney+";

import phase1 from "../../data/movies/phase_movies/phase1";
import phase2 from "../../data/movies/phase_movies/phase2";
import phase3 from "../../data/movies/phase_movies/phase3";
import phase4 from "../../data/movies/phase_movies/phase4";
import phase5 from "../../data/movies/phase_movies/phase5";

const allPhases = [phase1, phase2, phase3, phase4, phase5];

const PageLayout = ({ details }) => {
  const { pathname: currentPath } = useLocation();

  const isMovies = currentPath === "/movies";
  const isSeries = currentPath === "/series";

  return (
    <div className={isMovies ? "movies" : isSeries ? "series" : ""}>
      <div className="top">
        <div
          className={`intro_poster ${
            isMovies ? "marvel_movies" : isSeries ? "shows" : ""
          }`}
        ></div>
        <div className="recent_movies">
          {isSeries &&
            disneyPlusSeries.series
              .filter(({ series_page }) => series_page === 1)
              .map(({ name, poster_link, info_link }) => (
                <FlipBoxHeader
                  key={name}
                  name={name}
                  imagePath={poster_link}
                  infoLink={info_link}
                />
              ))}
          {isMovies &&
            allPhases.flatMap((phase) =>
              phase.movies
                .filter(({ moviepage }) => moviepage === 1)
                .map(({ name, poster_link, info_link }) => (
                  <FlipBoxHeader
                    key={name}
                    name={name}
                    imagePath={poster_link}
                    infoLink={info_link}
                  />
                ))
            )}
        </div>
      </div>
      <div className="divider">PICK YOUR CHOICE</div>
      {isSeries && (
        <div className="series_slides slide_show">
          <SlideShow details={details} />
        </div>
      )}
      
    </div>
  );
};

export default PageLayout;
