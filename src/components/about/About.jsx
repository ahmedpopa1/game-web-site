import React from "react";
import "./style.css";
import l1 from "./l1.jpg";
import l2 from "./l2.jpg";
import l3 from "./l3.jpg";
import l4 from "./l4.jpg";

const About = () => {
  const gameData = [
    {
      image: l1,
      title: "Forza",
      info: "Forza is a series of racing video games developed by Turn 10 Studios and Playground Games, published by Xbox Game Studios.",
    },

    {
      image: l2,
      title: "Assassin's Creed",
      info: "Assassin's Creed is an action-adventure video game series developed by Ubisoft.",
    },
    {
      image: l3,
      title: "Call of Duty",
      info: "Call of Duty is a popular first-person shooter (FPS) video game series developed by various studios including Infinity Ward, Treyarch, and Sledgehammer Games, and published by Activision.",
    },
    {
      image: l4,
      ttitle: "Star Wars",
      info: "Star Wars: Battlefront is a series of action shooter games set in the Star Wars universe, developed by EA DICE and published by Electronic Arts.",
    },
  ];

  return (
    <div className="about">
      <div className="home-container">
        <p className="lol">Games coming soon!</p>
        <div className="home-banner-container">
          {gameData.map((game, index) => (
            <div key={index} className="game-card">
              <img src={game.image} alt={game.title} className="game-image" />
              <div className="game-info">
                <h2>{game.title}</h2>
                <p>{game.info}</p>
                <p>{game.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
