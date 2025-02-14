import React, { useEffect, useState } from "react";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tournaments")
      .then(response => setTournaments(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Pickleball Tournaments</h1>
      <ul>
        {tournaments.map(tournament => (
          <li key={tournament.id}>
            {tournament.name} - {tournament.location} on {tournament.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tournaments;
