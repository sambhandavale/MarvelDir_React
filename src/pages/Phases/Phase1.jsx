import React from "react";
import { Link } from "react-router-dom";
import TopComponent from "../../components/layout/top";

const Phase1 = () => {
    const details = {
        name:"phase1",
        classname: "top_phase1",
        top_header: "MARVEL PHASE ONE",
        bottom_header: "IN ORDER",
        link_path:"https://www.disneyplus.com/movies/marvel-studios-the-avengers/2h6PcHFDbsPy", 
        link_name:"DISNEY+"
    };

    return (
        <div className="phase1">
            <TopComponent details={details} />
        </div>
    );
};

export default Phase1;
