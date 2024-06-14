import React from "react";
import { Link } from "react-router-dom";
import TopComponent from "../../components/layout/top";

const NetflixShows = () => {
    const details = {
        name:"netflix",
        classname: "top_netflix",
        top_header: "NETFLIX MARVEL SHOW",
        bottom_header: "IN ORDER",
        link_path:"https://www.netflix.com/in/title/80002566",
        link_name:"NETFLIX"
    };

    return (
        <div className="netflix">
            <TopComponent details={details} />
        </div>
    );
};

export default NetflixShows;
