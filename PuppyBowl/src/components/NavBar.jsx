import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>          
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/new-player" className="nav-link">Add New Player</Link>
          </div>
          <h1 className='tittle'>Puppy Bowl Roster</h1>
        </nav>
      );
    };

export default NavBar;
