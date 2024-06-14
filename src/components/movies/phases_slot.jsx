import React from "react";
import FlipBox from "../flipbox";
import { flipbox } from "../flipbox";

import phase1 from "../../data/movies/phase_movies/phase1";
import phase2 from "../../data/movies/phase_movies/phase2";
import phase3 from "../../data/movies/phase_movies/phase3";
import phase4 from "../../data/movies/phase_movies/phase4";
import phase5 from "../../data/movies/phase_movies/phase5";

const PhaseSlots = ({ phase }) => {
  const phaseData = {
    phase1,
    phase2,
    phase3,
    phase4,
    phase5,
  };

  const phaseMovies = phaseData[phase.phase_no].movies.map((p) => flipbox(p));

  // Calculate columns and rows
  const numberOfMovies = phase.movies.length;
  const columns = Math.ceil(Math.sqrt(numberOfMovies));
  const rows = Math.ceil(numberOfMovies / columns);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, auto)`,
    gap: '10px',
    padding: 0,
  };

  return (
    <div className="marvel_phases">
      <div className="phase_header">
        <h2>{phase.phase_name.toUpperCase()}</h2>
      </div>
      <div className="phase">
        <div className="phase_content">
          <div className="overview">OVERVIEW</div>
          <div className="overview_content">
            <p className="description1">{phase.description1}</p> 
            <br />
            <p className="description2">{phase.description2}</p>
            <br />
            <ol className="movie_list" style={gridStyle}>
              {phase.movies.map((movie, index) => (
                <li key={index} className="grid-item">{movie}</li>
              ))}
            </ol>
          </div>
          <div className="more">
            <a href="#">For More</a>
          </div>
        </div>
        <div className="phase_photo">
          <img src={phase.imagePath} alt="" />
        </div>
      </div>
      <div className="phase_movies">{phaseMovies}</div>
    </div>
  );
};

export default PhaseSlots;
