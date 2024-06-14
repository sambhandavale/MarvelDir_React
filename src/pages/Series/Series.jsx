import React from "react";
import PageLayout from "../../components/layout/page_layout";

const Series = () => {
  const details = [
    { class_name: "netflix_shows", title: "NETFLIX SHOWS", to: "#" },
    { class_name: "disney_plus", title: "", to: "#" },
    { class_name: "animated_shows", title: "ANIMATED SHOWS", to: "#" }
  ];

  return <PageLayout details={details} />;
};

export default Series;
