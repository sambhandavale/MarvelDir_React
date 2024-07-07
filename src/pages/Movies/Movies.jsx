import React, { useState, useEffect } from "react";
import PageLayout from "../../components/layout/page_layout";
import Saga from "../../components/movies/saga_tile";
import SlideShowPoster3 from "../../components/layout/slideshowPoster3";

const Movies = () => {
  const [xmenMovies, setXmenMovies] = useState([]); 
  const [idType, setIdTpye] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchMarvelMovies = async () => {
          try {
              const route = `https://marvel-api-mcu.vercel.app/api/movies?movie=x_men`;
              const response = await fetch(route);
              if (!response.ok) {
                  throw new Error(`Failed to fetch X-Men Movies`);
              }
              const data = await response.json();
              setXmenMovies(data);
              setLoading(false);
          } catch (error) {
              console.error(`Error fetching X-Men Movies:`, error);
              setLoading(false);
              window.location.assign("/");
          }
      };

      fetchMarvelMovies();
  }, []);

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
      <div className="other_movies_container">
        <div className="other_movies">
          <div className="other_x_men other">
            <div className="other_info">
              <div className="title_studios">
                <div className="studios">Fox Studios</div>
                <div className="title">X-MEN</div>
              </div>
              <div className="other_desc">The Fox Studios X-Men movies, spanning from 2000 to 2019, are superhero films based on Marvel Comics characters. Iconic titles like "X-Men," "X2," "The Last Stand," and "Days of Future Past" explore the struggles of mutants led by Professor Xavier against their nemesis, Magneto. Featuring stars like Hugh Jackman as Wolverine, the series delves into themes of identity and discrimination, blending action, drama, and sci-fi, significantly impacting the superhero genre.</div>
            </div>
            <div className="other_posters">
              <div className="other_posters_tag">Explore the Movies</div>
              <SlideShowPoster3 setType={setIdTpye} slideData={xmenMovies}/>
            </div>
          </div>
          <div className="other_fantastic_four other"></div>
          <div className="other_spider_man other"></div>
        </div>
      </div>
    </div>
  ); 
};

export default Movies;
