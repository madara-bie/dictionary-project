import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
