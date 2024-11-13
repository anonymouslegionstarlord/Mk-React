import React from 'react';
import Chai from "./Chai";

function App() {
  const username = "chai aur code";

  return (
    <React.Fragment>
      <Chai />
      <h1>chai aur react {username}</h1>
      <p>test para</p>
    </React.Fragment>
  );
}

export default App;