import React, { useState } from "react";
import { Link } from "react-router-dom";
import marvelNetflixSeries from "../../data/series/netflix/marvel_netflix";

const PosterSlideShow = ({ series, setSeries }) => {
    const [enlarge, setEnlarge] = useState(null);

    const handleClick = (id) => {
        if (enlarge === id) {
            setEnlarge(null);
        } else {
            setSeries(id);
            setEnlarge(id);
        }
    };

    return (
        <div className="poster_slideshow">
            {marvelNetflixSeries.series.map((show) => (
                <Link key={show.id} to="#" onClick={() => handleClick(show.id)}>
                    <div className={`poster1 poster ${show.id === enlarge ? "grow" : ""}`}>
                        <img src={show.poster_link} alt={show.name} />
                        <div className="poster_title">{show.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PosterSlideShow;
