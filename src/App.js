import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>DICTIONARY</h1>
          <h4>What word are you looking for?</h4>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
            <p>Created by Madara Biezā</p>
            <a href="https://github.com/madara-bie/dictionary-project" target="_blank" rel="noreferrer">
              Open the source code
            </a>
        </footer>
      </div>
    </div>
  );
}
