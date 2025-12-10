import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        {/* Placeholder for wetland/duck hunting imagery */}
        <div className="image-placeholder">
          <p>[ Golden hour wetland landscape ]</p>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Where Tradition<br/>
            Meets Purpose
          </h1>
          <p className="hero-subtitle">
            Morgan & Mallard represents the intersection of sporting heritage 
            and land stewardship—crafted for those who understand that 
            conservation is the ultimate form of ownership.
          </p>
          <div className="hero-buttons">
            <button className="primary">Join the Waitlist</button>
            <button>Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
}
