import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          An atom does not look like this.
        </p>
        <a
          className="App-link"
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FQuantum_mechanics&psig=AOvVaw14J7191xObQ8AkIROO_MjU&ust=1679987427287000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCWjf_G-_0CFQAAAAAdAAAAABAJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          It looks like this
        </a>
      </header>
    </div>
  );
}

export default App;
