import  { useState } from 'react';

const SinglePlayer = ({ player, onRemove }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} className="player-image" />
      <button className='selection' onClick={toggleDetails}>See details</button>
      <button  className='selection' onClick={() => onRemove(player.id)}>Remove from roster</button>
      {showDetails && (
        <div className="player-details">
         <p>Status: {player.status}</p>
          <p>Team: {player.teamId}</p>
          <p>Breed: {player.breed}</p>
          <p>ID Number: {player.id}</p>
          <p>Created: {player.createdAt}</p>
          <p>Modified: {player.updatedAt}</p>
          
       
        </div>
      )}
    </div>
  );
};

export default SinglePlayer;
