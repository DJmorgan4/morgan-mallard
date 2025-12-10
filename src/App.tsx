import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Story from './pages/Story';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/collection" element={<ComingSoon page="Collection" />} />
            <Route path="/journal" element={<ComingSoon page="Journal" />} />
            <Route path="/ranch" element={<ComingSoon page="The Ranch" />} />
            <Route path="/contact" element={<ComingSoon page="Contact" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function ComingSoon({ page }: { page: string }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '90px',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1>{page}</h1>
        <p style={{ fontSize: '1.2rem', marginTop: 'var(--spacing-md)' }}>
          Coming Soon
        </p>
        <button className="primary" style={{ marginTop: 'var(--spacing-lg)' }}>
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--navy)',
      color: 'var(--cream)',
      padding: 'var(--spacing-xl) 0',
      marginTop: 'var(--spacing-xl)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <div>
            <h4 style={{ color: 'var(--cream)', marginBottom: 'var(--spacing-sm)' }}>
              Morgan & Mallard
            </h4>
            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
              Heritage. Land. Legacy.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--cream)', marginBottom: 'var(--spacing-sm)' }}>
              Connect
            </h4>
            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
              Instagram<br />
              Facebook<br />
              Email
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--cream)', marginBottom: 'var(--spacing-sm)' }}>
              Conservation
            </h4>
            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
              The Blue Duck Foundation<br />
              Wetland Restoration<br />
              Habitat Protection
            </p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(245, 241, 232, 0.2)',
          paddingTop: 'var(--spacing-md)',
          textAlign: 'center',
          opacity: 0.7,
          fontSize: '0.9rem'
        }}>
          © 2025 Morgan & Mallard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default App;
