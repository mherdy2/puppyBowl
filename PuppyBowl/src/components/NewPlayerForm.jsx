import { useState } from 'react';
import { addPlayer } from '../API/index';

const NewPlayerForm = ({ onAddPlayer }) => {
    const [playerData, setPlayerData] = useState({
      name: '',
      status: '',
      teamId: 777,
      cohortId: 422,
      imageUrl: '',
      breed: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPlayerData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            await addPlayer(playerData);
            onAddPlayer();
            setPlayerData({
                name: '',
                status: '',
                teamId: 777,
                cohortId: 422,
                imageUrl: '',
                breed: '',
            });
            setSuccessMessage('Player added successfully!');
        } catch (error) {
            console.error('Error adding player:', error);
            setSuccessMessage('');
        }
    };
    
    return (
      <div>
        <h2>Player Form</h2>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form  className='form' onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={playerData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Position: (Field/Bench) 
            <input
              type="text"
              name="status"
              value={playerData.status}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Team ID:
            <input
              type="number"
              name="teamId"
              value={playerData.teamId}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={playerData.breed}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={playerData.imageUrl}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
  };
  
  export default NewPlayerForm;