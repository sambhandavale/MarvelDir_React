import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const SlideShowPoster3 = ({ setType, slideData }) => {
    const [enlarge, setEnlarge] = useState(null);
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    console.log(slideData);

    const handleClick = (id) => {
        if (enlarge === id) {
            setEnlarge(null);
        } else { 
            setType(id);
            setEnlarge(id);
        }
    };

    return (
        <div className="poster_slideshow">
            <Swiper
                grabCursor
                // centeredSlides
                slidesPerView={4.5}
                spaceBetween={0}  // Reduce space between slides
                // loop
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
            >
            {slideData.map((show) => (
                <SwiperSlide key={show.id}>
                    <Link key={show.id} to="#" onClick={() => handleClick(show.id)}>
                        <div className={`poster1 poster ${show.id === enlarge ? "grow" : ""}`}>
                            <img src={path === "series" ? `/assets/series/netflix/${show.title}/${show.title}.jpg` : `/assets/movies/phase${show.phase}/${show.title}/${show.title}.jpg`} alt={show.name} />
                            <div className="poster_title">{show.name}</div>
                            <div className="poster_year poster_title">{path === "series" && show.series_duration || path === "movies" && show.year_of_release}</div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default SlideShowPoster3;
