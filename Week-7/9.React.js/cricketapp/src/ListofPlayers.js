import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 45 },
    { name: "Hardik", score: 72 },
    { name: "Dhoni", score: 68 },
    { name: "Jadeja", score: 90 },
    { name: "Gill", score: 55 },
    { name: "Pant", score: 35 },
    { name: "Surya", score: 88 },
    { name: "Shami", score: 60 },
    { name: "Bumrah", score: 95 },
    { name: "Kuldeep", score: 40 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2> All Players</h2>
      {players.map((p, i) => (
        <p key={i}>{p.name} - Score: {p.score}</p>
      ))}

      <h3> Players with score below 70</h3>
      {lowScorers.map((p, i) => (
        <p key={i}>{p.name}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;