import Head from 'next/head';
import './Policy.css';

const PolicyPage = () => {
  return (
    <div className="policy-container">
      <Head>
        <title>Intimate Policy & Guidelines | Luvnestor</title>
        <meta name="description" content="Our commitment to sensual, safe connections with mutual respect" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Luxurious Hero Section */}
      <section className="hero-policy">
        <h1 className="policy-heading">The Art of Intimate Connection</h1>
        <p className="policy-intro">
          Where boundaries become bridges to profound experiences — a sanctuary for sensual connection with uncompromising safety.
        </p>
      </section>

      {/* Mission Section */}
      <section className="policy-section">
        <h2>Our Philosophy</h2>
        <p>
          Luvnestor redefines modern intimacy by blending emotional intelligence with sensual connection. 
          We empower you to explore desire within a framework of absolute consent and mutual respect, 
          creating space for both vulnerability and empowerment.
        </p>
      </section>

      {/* Features Section */}
      <section className="policy-section">
        <h2>Pathways to Pleasure</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3><span>💋</span> Sensual Dialogues</h3>
            <p>Monetize your emotional and erotic intelligence through intimate conversations that awaken desire.</p>
          </div>
          <div className="feature-card">
            <h3><span>✨</span> Curated Encounters</h3>
            <p>Design unforgettable experiences — from wine tastings to private dance sessions — at your premium.</p>
          </div>
          <div className="feature-card">
            <h3><span>🧘</span> Tactile Meditation</h3>
            <p>Guide partners through sensual mindfulness and breathwork experiences.</p>
          </div>
          <div className="feature-card">
            <h3><span>👐</span> Consensual Touch</h3>
            <p>Explore therapeutic and erotic touch within pre-negotiated boundaries.</p>
          </div>
          <div className="feature-card">
            <h3><span>🎭</span> Fantasy Fulfillment</h3>
            <p>Create safe containers for roleplay and kink with clear agreements.</p>
          </div>
          <div className="feature-card">
            <h3><span>🔒</span> Discretion Guaranteed</h3>
            <p>End-to-end encryption protects your privacy and all communications.</p>
          </div>
        </div>
      </section>

      {/* Consent Section */}
      <section className="policy-section">
        <h2>The Sacred Yes</h2>
        <p>
          Every interaction flows from enthusiastic, informed consent that can be revoked at any moment. 
          We've built revolutionary consent confirmation tools to ensure every "Yes" is conscious and voluntary.
        </p>
        <ul>
          <li>Multi-step consent verification for physical encounters</li>
          <li>Real-time boundary adjustment during sessions</li>
          <li>Anonymous reporting for any discomfort</li>
        </ul>
      </section>

      {/* Safety Section */}
      <section className="policy-section">
        <h2>Your Safety Ecosystem</h2>
        <ul>
         
          <li>Discreet emergency alert system</li>
          <li>Mandatory meetup user Adhare verification</li>
          <li>Website OTP Varification when they Meet </li>
        
        </ul>
      </section>

      {/* Final CTA */}
      <section className="policy-final">
        <h2>Ready to Explore Conscious Intimacy?</h2>
        <p>
          Join our community of sensual explorers and emotional connoisseurs — where desire meets discernment.
        </p>
        <button className="cta-button btn ">Begin Your Journey</button>
      </section>
    </div>
  );
};

export default PolicyPage;