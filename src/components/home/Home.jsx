import React from "react";
import "./style.css";
import l1 from "./l1.jpg";
import l2 from "./l2.jpg";
import l3 from "./l3.jpg";
import l4 from "./l4.jpg";

const Home = () => {
  const gameData = [
    {
      image: l1,
      title: "Counter-Strike",
      info: "Counter-Strike is a classic multiplayer first-person shooter (FPS) game.",
    },

    {
      image: l2,
      title: "Roblox",
      info: "Roblox is an online platform and game creation system that allows users to design their own games and play a wide variety of games created by other users.",
    },
    {
      image: l3,
      title: "Apex Legends",
      info: "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment.",
    },
    {
      image: l4,
      title: "Valorant",
      info: "Valorant is a free-to-play tactical first-person shooter (FPS) game developed by Riot Games.",
    },
  ];

  return (
    <div className="home-container">
      <p className="lol">Games Trending Now!</p>
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
  );
};

export default Home;
