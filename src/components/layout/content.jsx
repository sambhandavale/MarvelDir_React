import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PosterSlideShow from "../../components/layout/poster_slideshow";
import marvelNetflixSeries from "../../data/series/netflix/marvel_netflix";

const Content = () => {
    const [series, setSeries] = useState("netflix_daredevil_001");
    const [bg, setBg] = useState("/assets/series/netflix/daredevil/daredevil_bg.jpg");
    const [gradiant, setGradient] = useState("daredevil");

    useEffect(() => {
        const foundSeries = marvelNetflixSeries.series.find(item => item.id === series);
        if (foundSeries) {
            setGradient(foundSeries.title);
            setBg(foundSeries.bg_link);
        } else {
            setGradient("daredevil");
            setBg("/assets/series/netflix/daredevil/daredevil_bg.jpg");
        }
    }, [series]);

    const svgArray = Array(5).fill(null);

    return (
        <div className="content" style={{ background: `var(--bg-linear-gradient-${gradiant}), url(${bg}) lightgray 50% / cover no-repeat` }}>
            {marvelNetflixSeries.series.map((show) => (
                show.id === series &&
                <div className="information" key={show.id}>
                    <div className="main_info">
                        <div className="content_header">
                            <div className="content_header_top">
                                <div className="content_title">Marvel’s {show.name} ({show.year_of_release})</div>
                                <div className="genre_lang">
                                    <div className="genre">Crime  |  Drama  |  Action</div>
                                    <div className="lang">• {show.language_name}</div>
                                </div>
                            </div>
                            <div className="userscore">
                                <div className="score">
                                    <img src="/icons/components/rating.svg" alt="rating" />
                                    <div className="percent">{show.imdb_rating * 10}%</div>
                                </div>
                                <div className="userscore_title">USER SCORE</div>
                            </div>
                        </div>
                        <div className="content_info">
                            <div className="no_of_seasons">SEASONS: {show.no_of_seasons}</div>
                            <div className="desc">{show.description}</div>
                            <div className="visit_option">
                                <Link to={show.watch_now_link}>
                                    <div className="watch_now">WATCH NOW</div>
                                </Link>
                                <div className="trailer">
                                    <img src="/icons/components/play.svg" alt="trailer" />
                                    <Link to={show.trailer_link}>
                                        <div className="watch_now">PLAY TRAILER</div>
                                    </Link>
                                </div>
                                <img src="/icons/components/heart.svg" alt="heart" />
                                <div className="more_info watch_now">MORE</div>
                            </div>
                        </div>
                    </div>
                    <div className="review_container">
                        <div className="review_box">
                            <div className="profile_rating">
                                <div className="review_user">
                                    <div className="profile_photo"></div>
                                    <div className="user_name_date">
                                        <div className="user_name">Review By Karen Page</div>
                                        <div className="review_date">Written on 15 Jun 2024</div>
                                    </div>
                                </div>
                                <div className="rating_stars">
                                    {svgArray.map((_, index) => (
                                        <img key={index} src="/icons/components/star_filled.svg" alt="star" />
                                    ))}
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="review_content">{show.default_review}</div>
                        </div>
                        <div className="write_review">
                            <div className="read_more">Read More Review</div>
                            <div className="write_your_review">
                                <img src="/icons/components/pen.svg" alt="pen" />
                                <div className="write_review_title">Write Your Review</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <PosterSlideShow series={series} setSeries={setSeries} />
        </div>
    );
};

export default Content;
