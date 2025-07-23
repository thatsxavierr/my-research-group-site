import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Home Page Content */}
      <main className="home-content">
        <h1 className="intro-heading">Welcome to Oxide Epitaxy Group!</h1>
        <p className="intro-text">
          <em>
            We are dedicated to exploring [specific research topic/field]. Through collaboration and innovation, our team is committed to solving [specific challenge/goal]. Learn more about our work and connect with us today!
          </em>
        </p>
      </main>
    </div>
  );
}

export default Home;
