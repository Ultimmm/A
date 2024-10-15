import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Gorgeous App</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Messaging</li>
            <li>Channels</li>
            <li>Education</li>
            <li>Comics & Animation</li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="section">
          <h2>Messaging</h2>
          <p>Send and receive messages with end-to-end encryption.</p>
        </section>

        <section className="section">
          <h2>Channels</h2>
          <p>Join channels and explore content, similar to YouTube.</p>
        </section>

        <section className="section">
          <h2>Education</h2>
          <p>Access educational videos, courses, and books.</p>
        </section>

        <section className="section">
          <h2>Comics & Animation</h2>
          <p>Explore amazing comics and animated series.</p>
        </section>
      </main>

      <footer>
        <p>Powered by Kariyakaalamman Technologies</p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Importing App component

// Rendering the App component into the #root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This corresponds to the div in index.html
);

