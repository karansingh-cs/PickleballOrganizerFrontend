import React, { useState } from 'react';
import { createTournament } from '../services/api';

const CreateTournament = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !date) {
      alert('Please fill in all fields.');
      return;
    }
    const newTournament = { name, date };
    await createTournament(newTournament);
    setName('');
    setDate('');
    alert('Tournament created successfully!');
  };

  return (
    <div>
      <h2>Create Tournament</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tournament Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter tournament name"
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Create Tournament</button>
      </form>
    </div>
  );
};

export default CreateTournament;
