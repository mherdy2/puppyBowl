import { useEffect, useState } from 'react';
import SinglePlayer from '../components/SinglePlayer';
import { fetchPlayers, deletePlayer } from '../API/index';

const AllPlayers = ({ onAddPlayer }) => {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(''); // New state for selected position
  
    useEffect(() => {
      const fetchAllPlayers = async () => {
        try {
          const playersData = await fetchPlayers();
          setPlayers(playersData.data.players);
        } catch (error) {
          console.error('Error fetching players:', error);
        }
      };
  
      fetchAllPlayers();
    }, [onAddPlayer]);
  
    const handleRemovePlayer = async (playerId) => {
      try {
        await deletePlayer(playerId);
        const updatedPlayers = players.filter((player) => player.id !== playerId);
        setPlayers(updatedPlayers);
      } catch (error) {
        console.error('Error removing player:', error);
      }
    };
  
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedPosition === '' || player.status === selectedPosition) // Filter by selected position
    );
  
    // Options for player position
    const positionOptions = ['', 'field', 'bench'];
  
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Player Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
          >
            {positionOptions.map((position) => (
              <option key={position} value={position}>
                {position === '' ? 'All Positions' : position}
              </option>
            ))}
          </select>
        </div>
        <div className="players-grid">
          {filteredPlayers.map((player) => (
            <SinglePlayer
              key={player.id}
              player={player}
              onRemove={handleRemovePlayer}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default AllPlayers;