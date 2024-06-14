import React from "react";
import PageLayout from "../../components/layout/page_layout";

const Movies = () => {
  const details = [
    { class_name: "p1", title: "PHASE ONE", to: "#" },
    { class_name: "p2", title: "PHASE TWO", to: "#" },
    { class_name: "p3", title: "PHASE THREE", to: "#" },
    { class_name: "p4", title: "PHASE FOUR", to: "#" },
    { class_name: "p5", title: "PHASE FIVE", to: "#" },
    { class_name: "p6", title: "PHASE SIX", to: "#" }
  ];

  return <PageLayout details={details} />;
};

export default Movies;
