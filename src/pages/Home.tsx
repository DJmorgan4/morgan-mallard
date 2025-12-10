import './FeaturedProducts.css';

export default function FeaturedProducts() {
  const products = [
    {
      name: 'The Signature Polo',
      description: '100% Pima cotton. From the duck blind to the clubhouse.',
      price: 'Coming Soon',
      image: '[ Product flatlay ]'
    },
    {
      name: 'The Quarter-Zip',
      description: 'Versatile layering piece. Built for dawn patrols and afternoon rounds.',
      price: 'Coming Soon',
      image: '[ Product flatlay ]'
    },
    {
      name: 'The Button-Down',
      description: 'Classic oxford cloth. Ready for any occasion.',
      price: 'Coming Soon',
      image: '[ Product flatlay ]'
    }
  ];

  return (
    <section className="featured-products section">
      <div className="container">
        <div className="section-header">
          <h2>The Collection</h2>
          <p className="section-subtitle">
            Crafted pieces designed to move from field to life. Each garment is built 
            to last, develop character, and become part of your story.
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <p>{product.image}</p>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-center">
          <button className="primary">Join the Waitlist</button>
        </div>
      </div>
    </section>
  );
}
