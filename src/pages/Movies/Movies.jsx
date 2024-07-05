import React from "react";
import PageLayout from "../../components/layout/page_layout";
import Saga from "../../components/movies/saga_tile";

const Movies = () => {

  const saga_details = [
    {
      "class":"infinity_saga",
      "title":"INFINITY SAGA",
      "tag":"PATH T0 THE ENDGAME",
      "info":"The Infinity Saga revolves around the story of the Avengers and their allies as they come together to face various threats to the universe, particularly the cosmic warlord Thanos. Thanos seeks to collect the six Infinity Stones, which are powerful artifacts that, when combined in the Infinity Gauntlet, give him the ability to wipe out half of all life in the universe. The saga explores themes of heroism, sacrifice, and the balance between power and responsibility, culminating in the epic showdown in 'Avengers: Endgame.'",
      "phases":[1,2,3],
    },
    {
      "class":"multiverse_saga",
      "title":"MULTIVERSE SAGA",
      "tag":"PATH TO THE SECRET WARS",
      "info":"The Multiverse Saga, starting with Phase 4 of the Marvel Cinematic Universe (MCU), explores the fracturing of reality across different dimensions. Doctor Strange emerges as a pivotal figure, navigating the complexities of the multiverse. The Loki series provides a broader perspective, unraveling the machinations of Kang the Conqueror, the main antagonist orchestrating chaos across timelines. The saga culminates in 'Secret Wars,' where multiple universes collide, leading to epic confrontations and alliances reshaping the MCU's future.",
      "phases":[4,5,6],
    }
  ];

  return (
    <div className="movies">
      <PageLayout /> 
      <div className="divider">MARVEL STUDIOS PRESENTS</div>
      <Saga />
    </div>
  ); 
};

export default Movies;
