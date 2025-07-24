import '../App.css';

export default function NewsAndResearch() {
  return (
    <>
      {/* Only the h1 is wrapped for the white/gray background */}
      <div className="page-content" style={{ textAlign: "center", marginBottom: "1.2rem" }}>
  <h1>News and Research</h1>
  <p>Below is a list of the news and current research of our team</p>
</div>


      {/* The rest stays on the main background */}
      <div className="centered-content" style={{ marginTop: "0" }}>
        <h2 style={{ fontWeight: "bold" }}>News</h2>
        <div style={{ marginBottom: "2.5rem" }}>
          <p><strong>March 10, 2025:</strong> Farewell to Bena... (Placeholder)</p>
          <p><strong>March 1, 2025:</strong> Nicole and Dan's paper... (Placeholder)</p>
        </div>
        <h2 style={{ fontWeight: "bold" }}>Research</h2>
        <div>
          <p><strong>Emergent Phenomena in Oxide Thin Films</strong></p>
          <p>
            Materials systems with many strongly interacting degrees... (Placeholder content)
          </p>
        </div>
      </div>
    </>
  );
}
