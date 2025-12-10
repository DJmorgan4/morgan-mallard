import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <FeaturedProducts />
      
      <section className="heritage-section section bg-navy">
        <div className="container">
          <div className="heritage-content">
            <h2 style={{ color: 'var(--cream)' }}>Built to Last. Meant to Matter.</h2>
            <p style={{ color: 'var(--cream)', opacity: 0.9, fontSize: '1.2rem', maxWidth: '800px' }}>
              Morgan & Mallard isn't about fast fashion or fleeting trends. We're building 
              a brand that honors sporting tradition, respects the land, and creates pieces 
              worthy of passing down. Every product we make is designed to develop character 
              over time—to become part of your story, your hunts, your legacy.
            </p>
            <p style={{ color: 'var(--cream)', opacity: 0.9, fontSize: '1.2rem', maxWidth: '800px' }}>
              A portion of every purchase directly supports wetland restoration and habitat 
              conservation through The Blue Duck Foundation. When you wear Morgan & Mallard, 
              you're not just representing a brand—you're supporting the places we hunt, 
              fish, and conserve for the next generation.
            </p>
          </div>
        </div>
      </section>
      
      <section className="newsletter section">
        <div className="container">
          <div className="newsletter-content" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Stay Connected</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)' }}>
              Join our community. Be the first to know about new releases, journal stories, 
              and conservation updates from the land we're building.
            </p>
            <form className="newsletter-form" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '1rem 1.5rem',
                  border: '2px solid var(--navy)',
                  backgroundColor: 'white',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem'
                }}
              />
              <button type="submit" className="primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
