import React from 'react';

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Hardik", "Gill", "Pant"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Jadeja", "Shreyas", "Ashwin"];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      {oddTeam.map((p, i) => <p key={i}>{p}</p>)}

      <h2>Even Team Players</h2>
      {evenTeam.map((p, i) => <p key={i}>{p}</p>)}

      <h3>Merged Team</h3>
      {allPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
};

export default IndianPlayers;