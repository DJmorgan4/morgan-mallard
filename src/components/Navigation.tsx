import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-mark">
            {/* Placeholder for crest logo */}
            <div className="crest-placeholder">
              <span className="initials">M&M</span>
            </div>
          </div>
          <div className="logo-text">
            <span className="brand-name">MORGAN & MALLARD</span>
            <span className="brand-tagline">Heritage · Land · Legacy</span>
          </div>
        </Link>
        
        <div className="nav-links">
          <Link to="/story" className="nav-link">Story</Link>
          <Link to="/collection" className="nav-link">Collection</Link>
          <Link to="/journal" className="nav-link">Journal</Link>
          <Link to="/ranch" className="nav-link">The Ranch</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
