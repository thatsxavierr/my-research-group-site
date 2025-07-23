import '../App.css' 

export default function NewsAndResearch() {
  return (
    <div className="centered-container">
      <div className="centered-content">
        {/* --- News Section --- */}
        <h2 style={{fontWeight: "bold"}}>News</h2>
        <div style={{marginBottom: "2.5rem"}}>
          <p><strong>March 10, 2025:</strong> Farewell to Bena, who has accepted a new job with PsiQuantum. (Placeholder)</p>
          <p><strong>March 1, 2025:</strong> Nicole and Dan's paper on nickelate films published. (Placeholder)</p>
          {/* Add more fake news here as placeholders */}
        </div>
        {/* --- Research Section --- */}
        <h2 style={{fontWeight: "bold"}}>Research</h2>
        <div>
          <p><strong>Emergent Phenomena in Oxide Thin Films</strong></p>
          <p>
            Materials systems with many strongly interacting degrees of freedom can host some of the most exotic physical states known... (Placeholder content)
          </p>
        </div>
      </div>
    </div>
  );
}
