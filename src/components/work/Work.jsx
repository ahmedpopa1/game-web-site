import React from "react";
import "./style.css";

import l1 from "./l1.jpg";
import l2 from "./l2.jpg";
import l3 from "./l3.jpg";
import l4 from "./l4.jpg";
import l5 from "./l5.jpg";
import l6 from "./l6.jpg";

const Work = () => {
  const gameData = [
    {
      image: l1,
      title: "Max Payne III",
      info: "Max Payne III is an action-packed game!",
      text: "Follow Max Payne as he battles through intense action and a compelling storyline.",
    },
    {
      image: l2,
      title: "Mafia III",
      info: "Mafia III is a crime drama set in the 1960s!",
      text: "Step into the shoes of Lincoln Clay and build your criminal empire in New Bordeaux.",
    },
    {
      image: l3,
      title: "Watch Dogs II",
      info: "Explore San Francisco in Watch Dogs II!",
      text: "Hack everything as Marcus Holloway and take down ctOS 2.0.",
    },
    {
      image: l4,
      title: "FIFA 19",
      info: "Experience intense football action in FIFA 19!",
      text: "Play with your favorite teams and players in realistic matches.",
    },
    {
      image: l5,
      title: "The Witcher",
      info: "A story-driven RPG set in a visually stunning fantasy universe, following Geralt of Rivia.",
      text: "Play A story-driven RPG set in a visually stunning The Witcher.",
    },
    {
      image: l6,
      title: "The Legend of Zelda: Breath of the Wild",
      info: "An open-world action-adventure game where players explore the kingdom of Hyrule.",
      text: "Play The Legend of Zelda: Breath of the Wild in realistic matches.",
    },
  ];

  return (
    <div className="work">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">Gaming is life!</h1>
          <p className="primary-text">
            We're passionate about creating immersive and captivating gaming
            experiences. Our dedicated team blends creativity and cutting-edge
            technology to bring you adventures that inspire and entertain. Join
            us on a journey through unique worlds, where every game is crafted
            with care and a commitment to excellence.
          </p>
        </div>

        <div className="work-section-bottom">
          <p className="lol">New releases!</p>
          {/* Display games and new releases */}
          {gameData.map((item, index) => (
            <div key={index} className="game-info">
              <p>{item.text}</p>
              <h2>{item.title}</h2>
              <p>{item.info}</p>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
