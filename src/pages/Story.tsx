import './Story.css';

export default function Story() {
  return (
    <div className="story-page">
      <section className="story-hero section">
        <div className="container">
          <div className="story-intro">
            <h1>Our Story</h1>
            <p className="story-lead">
              Morgan & Mallard began with a simple belief: that the best way to 
              honor sporting tradition is to protect the land it depends on.
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
                For generations, waterfowl hunting has connected people to the land, 
                to seasons, to tradition. It's taught patience, respect, and the value 
                of working for something worth having. Morgan & Mallard carries forward 
                that heritage—not as nostalgia, but as a living practice.
              </p>
              <p>
                We're building apparel that honors this tradition. Pieces that can move 
                from the duck blind at dawn to the clubhouse by afternoon. Clothing that 
                doesn't apologize for being refined, because true sportsmen have always 
                understood that respect for tradition and attention to detail go hand in hand.
              </p>
            </div>
            
            <div className="story-image-block">
              <div className="story-placeholder">
                [ Duck blind at golden hour ]
              </div>
            </div>
          </div>
          
          <div className="story-grid reverse">
            <div className="story-image-block">
              <div className="story-placeholder">
                [ Wetland restoration work ]
              </div>
            </div>
            
            <div className="story-block">
              <h2>Land</h2>
              <p>
                Good hunting requires good habitat. Good habitat requires work. We don't 
                just talk about conservation—we're actively engaged in wetland restoration, 
                land management, and habitat protection across North Texas.
              </p>
              <p>
                Through our partnership with The Blue Duck Foundation, a portion of every 
                purchase directly funds wetland restoration projects. We're not buying 
                carbon offsets or writing checks to feel better. We're in the field, doing 
                the work—managing water levels, planting native species, creating the 
                habitat that waterfowl and other wildlife depend on.
              </p>
            </div>
          </div>
          
          <div className="story-grid">
            <div className="story-block">
              <h2>Legacy</h2>
              <p>
                Morgan & Mallard is the name of a ranch that doesn't exist yet. It's a 
                vision of what we're building—a place where conservation and tradition 
                come together, where the land is managed not extracted, where the next 
                generation can experience what we've been privileged to know.
              </p>
              <p>
                Everything we make is designed with permanence in mind. Quality materials, 
                timeless design, construction that improves with age. These aren't disposable 
                goods. They're meant to become part of your story, to develop character 
                alongside you, to be worth passing down.
              </p>
              <p>
                We're building something that lasts. Not just apparel, but a legacy of 
                land stewardship, sporting tradition, and craftsmanship that means something.
              </p>
            </div>
            
            <div className="story-image-block">
              <div className="story-placeholder">
                [ Ranch landscape vision ]
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
              Be part of something that matters. Morgan & Mallard is more than apparel—it's 
              a commitment to the land, to tradition, and to building something permanent.
            </p>
            <button className="primary">Join the Waitlist</button>
          </div>
        </div>
      </section>
    </div>
  );
}
