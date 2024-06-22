import React from "react";
import { useLocation } from "react-router-dom";

const EntryTitle = () => {
  const location = useLocation();

  const titles = [
    {
      title: "Welcome to the Neighborhood Where Marvel Heroes Rule the Streets!",
      classname:"netflix_tag",
      path: "/series/netflix"
    },
    {
      title: "Phase where The Avengers Assembled for the First Time",
      classname:"netflix_tag",
      path: "/movies/phase/1"
    },
    {
      title: "Avengers realize thier main threat is not from earth",
      classname:"netflix_tag",
      path: "/movies/phase/2"
    }
  ];

  const currentTitle = titles.find(item => item.path === location.pathname);

  return (
    <div className="entry-title">
      <p className={`${currentTitle.classname}`}>{currentTitle ? currentTitle.title : ""}</p>
    </div>
  );
};

export default EntryTitle;
