import './App.css';

function App() {
  return (
    <div className="container">
      {/* Vertical paragraphs */}
      <div className="vertical-lines">
        {/* v1-v4: bottom to top */}
        <p className="vertical v1 btt">1The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v2 btt">2The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v3 btt">3The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v4 btt">4The quick brown fox jumps over the lazy dog. This sentence.</p>
        {/* v5-v8: top to bottom */}
        <p className="vertical v5 ttb">5The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v6 ttb">6The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v7 ttb">7The quick brown fox jumps over the lazy dog. This sentence.</p>
        <p className="vertical v8 ttb">8The quick brown fox jumps over the lazy dog. This sentence.</p>
      </div>

      {/* Horizontal paragraphs */}
      <div className="horizontal-lines">
        {/* h1-h3: right to left */}
        <p className="horizontal h1 rtl">1The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        <p className="horizontal h2 rtl">2The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        <p className="horizontal h3 rtl">3The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        {/* h4-h6: left to right */}
        <p className="horizontal h4 ltr">4The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        <p className="horizontal h5 ltr">5The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
        <p className="horizontal h6 ltr">6The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet and is often used for typing.</p>
      </div>

      <div className="center-space">
        <div className="center-content" >
          <iframe
            src="https://community.vivavoce.live/"
            title="VivaVoce Community"
            width="100%"
            height="370"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
