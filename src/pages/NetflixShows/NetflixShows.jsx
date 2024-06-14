import React from "react";
import { Link } from "react-router-dom";

const NetflixShows = () => {
  return (
    <div className="netflix">
      <div className="top">
        <div className="header">
          <p className="top_header">NETFLIX MARVEL SHOW</p>
          <p className="bottom_header">IN ORDER</p>
        </div>
        <div className="to_netflix">
            <Link to="https://www.netflix.com/in/title/80002566">
                <p className="link_to_netflix">
                    WATCH ON <span class="highlight_netflix">NETFLIX</span>
                </p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NetflixShows;
