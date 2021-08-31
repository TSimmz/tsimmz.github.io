import React from 'react';

const homepage = {
  display: "flex",
  flexFlow: "column",
  width: "600px",
  margin: "30px",
}

function App() {
  return (
    <div style={homepage}>
      <h1> Tyler Simoni</h1>
      <hr style={{width: "inherit"}}/>
      <p>I'm a frontend developer and designer based in the Tampa Bay.</p>
      <button style={{width: "100px"}}>Know more</button>
    </div>
  );
}

export default App;
