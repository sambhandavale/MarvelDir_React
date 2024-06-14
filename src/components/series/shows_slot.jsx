import React from "react";
import { flipbox } from "../flipbox";
import marvelNetflixSeries from "../../data/series/netflix/marvel_netflix"

const ShowSlots = ({ description1, description2, series_list, imagePath }) => {
  return (
    <div className="marvel_phases">
      <div className="phase">
        <div className="phase_content">
          <div className="overview">Television Shows</div>
          <div className="overview_content">
            <p className="description1">{description1}</p>
            <br />
            <p className="description2">{description2}</p>
            <br />
            <p>Some of the Marvel Television Shows are: </p>
            <ol className="series_list">
              {series_list && series_list.map((show, index) => ( 
                <li key={index}>{show}</li>
              ))}
            </ol> 
          </div>
          <div className="more">
            <a href="#">For More</a>
          </div>
        </div>
        <div className="phase_photo">
          <img src={imagePath} alt="" />
        </div>
      </div>
      <div class="Netflix phase_header">
        <h2>NETFLIX SHOWS</h2>
      </div>
      <div className="phase_movies">
        {marvelNetflixSeries.series.map((p) => flipbox(p))}
      </div>
    </div>
  );
};

export default ShowSlots;
