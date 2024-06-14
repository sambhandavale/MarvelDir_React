import React from 'react';
import { useLocation } from 'react-router-dom';
import FlipBoxHeader from "../../components/flipbox_header";

import phase1 from "../../data/movies/phase_movies/phase1";
import phase2 from "../../data/movies/phase_movies/phase2";
import phase3 from "../../data/movies/phase_movies/phase3";
import phase4 from "../../data/movies/phase_movies/phase4";
import phase5 from "../../data/movies/phase_movies/phase5";

const Home = () =>{

    const allPhases = [phase1, phase2, phase3, phase4, phase5];

    const location = useLocation();
    const currentPath = location.pathname;
    return(
        <div className="home">
            <div className="intro_poster">
                <img src="/assets/home/home_header_logo.jpg" alt="Marvel Studios" />
            </div>
            <div className="upcoming_movies">
                {allPhases.map(phase =>
                  phase.movies
                    .filter(movie => movie.homepage === 1)
                    .map(movie => (
                      <FlipBoxHeader
                        key={movie.name} 
                        name={movie.name}
                        imagePath={movie.imagePath}
                        infoLink={movie.infoLink}
                      />
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;