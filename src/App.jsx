
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Vertical paragraphs */}
      <div className="vertical-lines">
        <p className="vertical v1">The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v2">The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v3">The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v4">The quick brown fox jumps over the lazy dog. This sentence.</p>
      </div>

      {/* Horizontal paragraphs */}
      <div className="horizontal-lines">
        <p className="horizontal h1">The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        <p className="horizontal h2">The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        <p className="horizontal h3">The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        <p className="horizontal h4">The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
      </div>

      <div className="center-space"></div>
    </div>
  );
}

export default App;
