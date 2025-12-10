import './Story.css';

export default function Story() {
  return (
    <div className="story-page">
      <section className="story-hero section">
        <div className="container">
          <div className="story-intro">
            <h1>Our Story</h1>
            <p className="story-lead">
              Morgan & Mallard represents a fundamental shift in how sporting brands approach 
              conservation—where product quality and environmental stewardship are inseparable.
            </p>
          </div>
        </div>
      </section>
      
      <section className="story-content section">
        <div className="container">
          <div className="story-grid">
            <div className="story-block">
              <h2>Heritage</h2>
              <p>
                Waterfowl hunting has always required intimate knowledge of habitat, migration 
                patterns, and ecosystem health. This connection between sporting tradition and 
                environmental understanding forms the foundation of our approach.
              </p>
              <p>
                We design apparel that performs in demanding field conditions while maintaining 
                the refinement expected in professional settings. This isn't compromise—it's 
                recognition that serious sportsmen operate across multiple contexts.
              </p>
            </div>
            
            <div className="story-image-block">
              <div className="story-placeholder">
                [ Wetland landscape ]
              </div>
            </div>
          </div>
          
          <div className="story-grid reverse">
            <div className="story-image-block">
              <div className="story-placeholder">
                [ Conservation work ]
              </div>
            </div>
            
            <div className="story-block">
              <h2>Conservation</h2>
              <p>
                Quality habitat doesn't maintain itself. Through our partnership with The Blue Duck 
                Foundation, we fund active wetland restoration projects across North Texas—water 
                management systems, native species planting, and long-term habitat monitoring.
              </p>
              <p>
                This isn't corporate greenwashing. It's direct investment in the ecosystems that 
                waterfowl and other wildlife depend on. We measure success in restored acres, 
                water quality metrics, and species diversity—not in marketing narratives.
              </p>
            </div>
          </div>
          
          <div className="story-grid">
            <div className="story-block">
              <h2>Standards</h2>
              <p>
                Every product we create is designed for longevity. Natural fibers, timeless 
                construction, and attention to materials sourcing. We're building a brand 
                that values durability over disposability—pieces that improve with use rather 
                than merely wearing out.
              </p>
              <p>
                This approach requires higher upfront investment in quality, but delivers 
                significantly better cost-per-wear economics and reduced environmental impact 
                through extended product life cycles.
              </p>
            </div>
            
            <div className="story-image-block">
              <div className="story-placeholder">
                [ Material detail ]
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="story-cta section bg-khaki">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us</h2>
            <p>
              Morgan & Mallard combines field-tested performance with conservation 
              impact. Products built to last, supporting habitats built to thrive.
            </p>
            <button className="primary">Join the Waitlist</button>
          </div>
        </div>
      </section>
    </div>
  );
}
