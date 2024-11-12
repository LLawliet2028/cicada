import React from 'react';
import './Mainpage.css';

function MainPage() {
  const handleJoinClick = () => {
    // Redirect to the Google Form URL
    window.open('https://forms.gle/MNmdD7zhXSbYDehP7', '_blank');
  };

  return (
    <div className="cicada-container">
      <header className="cicada-header">
        <h1 className="cicada-title">Cicada 036: The Ultimate Puzzle Challenge</h1>
      </header>

      <main className="cicada-content">
        <section className="cicada-intro">
          <h2 className="cicada-subtitle">Welcome to Cicada: The Ultimate Puzzle Challenge</h2>
          <p className="cicada-text">
            Get ready to embark on an unforgettable adventure! Cicada is not just a puzzle game – it's a test of your wit, creativity, and teamwork. With 8 unique puzzles waiting to be solved, each one more challenging than the last, only the most resourceful and collaborative teams will succeed.
          </p>
        </section>

        <section className="cicada-about">
          <h2 className="cicada-subtitle">What's Inside?</h2>
          <ul className="cicada-list">
            <li className="cicada-item">
              <h3 className="cicada-item-title">8 interconnected puzzles</h3>
              <p className="cicada-item-text">
                Each puzzle unlocks the next step of your journey. They are designed to challenge your logic, imagination, and problem-solving skills.
              </p>
            </li>
            <li className="cicada-item">
              <h3 className="cicada-item-title">Unlimited Resources</h3>
              <p className="cicada-item-text">
                You can use anything at your disposal – the web, tools, coding, your knowledge, or even your teammates' expertise. No restrictions, just creativity!
              </p>
            </li>
            <li className="cicada-item">
              <h3 className="cicada-item-title">Time-bound Tasks</h3>
              <p className="cicada-item-text">
                Complete each puzzle before time runs out and unlock the ultimate prize. The clock is ticking!
              </p>
            </li>
          </ul>
        </section>

        <section className="cicada-participate">
          <h2 className="cicada-subtitle">How It Works</h2>
          <ul className="cicada-list">
            <li className="cicada-item">
              <h3 className="cicada-item-title">Sign up</h3>
              <p className="cicada-item-text">
              Join the challenge with your team! You can have up to 4 members in your team, and even if you don't have a team, don’t worry – we will assign you to one. We encourage everyone to participate, so come and be a part of this exciting opportunity!"
              </p>
            </li>
            <li className="cicada-item">
              <h3 className="cicada-item-title">Solve the puzzles</h3>
              <p className="cicada-item-text">
                Each puzzle is designed to push your limits and encourage you to think outside the box.
              </p>
            </li>
            <li className="cicada-item">
              <h3 className="cicada-item-title">Collaborate</h3>
              <p className="cicada-item-text">
                Work together to uncover clues, solve riddles, and navigate through intricate problems.
              </p>
            </li>
            <li className="cicada-item">
              <h3 className="cicada-item-title">Use any tool or resource</h3>
              <p className="cicada-item-text">
                Feel free to explore the web, use online tools, or create your own code. There are no limits except your imagination.
              </p>
            </li>
          </ul>
        </section>

        <section className="cicada-cta">
          <h2 className="cicada-subtitle">Are You Ready?</h2>
          <p className="cicada-text">
            This is no ordinary challenge – it's a test of both your intellect and resourcefulness. Take on Cicada, solve the puzzles, and prove you have what it takes to conquer the challenge!
          </p>
          <button className="cicada-button" onClick={handleJoinClick}>
            Join the Challenge
          </button>
        </section>
      </main>

      <footer className="cicada-footer">
        <p className="cicada-text">&copy; Cicada 036</p>
      </footer>
    </div>
  );
}

export default MainPage;