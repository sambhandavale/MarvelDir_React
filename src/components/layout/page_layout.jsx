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
        <div className={`intro_poster ${isMovies ? "marvel_movies" : isSeries ? "shows" : ""}`}></div>
        <div className="recent_movies">
          {isSeries &&
            disneyPlusSeries.series
              .filter(({ seriespage }) => seriespage === 1)
              .map(({ name, imagePath, infoLink }) => (
                <FlipBoxHeader key={name} name={name} imagePath={imagePath} infoLink={infoLink} />
              ))}
          {isMovies &&
            allPhases.flatMap(phase =>
              phase.movies
                .filter(({ moviepage }) => moviepage === 1)
                .map(({ name, imagePath, infoLink }) => (
                  <FlipBoxHeader key={name} name={name} imagePath={imagePath} infoLink={infoLink} />
                ))
            )}
        </div>
      </div>
      <div className="divider">PICK YOUR CHOICE</div>
      <div className={`${isMovies ? "movie_slides" : ""} slide_show`}>
        <SlideShow details={details} />
      </div>
    </div>
  );
};

export default PageLayout;
