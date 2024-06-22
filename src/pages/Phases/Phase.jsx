import React, { useState, useEffect } from "react"

import TopComponent from "../../components/layout/top_component";
import EntryTitle from "../../components/layout/entry_title";
import Content from "../../components/layout/content";
import { useParams } from "react-router-dom";

const Phase = () => {
    const details = {
        name:"phase1",
        classname: "top_phase1",
        top_header: "MARVEL PHASE ONE",
        bottom_header: "IN ORDER",
        link_path:"https://www.disneyplus.com/movies/marvel-studios-the-avengers/2h6PcHFDbsPy", 
        link_name:"DISNEY+" 
    };
    let { phase_no } = useParams();

    const [marvelMovies, setMarvelMovies] = useState([]); // to store the fetched data from API
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNetflixShows = async () => {
            try {
                const route = `http://localhost:3000/api/movies/phase/${phase_no}`;
                const response = await fetch(route);
                if (!response.ok) {
                    throw new Error(`Failed to fetch Phase ${phase_no} Movies`);
                }
                const data = await response.json();
                setMarvelMovies(data);
                setLoading(false);
            } catch (error) {
                console.error(`Error fetching Phase ${phase_no} Movies:`, error);
                setLoading(false);
            }
        };

        fetchNetflixShows();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    console.log(marvelMovies);

    return (
        <div className="phase1">
            <TopComponent details={details} />
            <EntryTitle/>
            <Content data={marvelMovies}/>
        </div>
    );
};

export default Phase;
