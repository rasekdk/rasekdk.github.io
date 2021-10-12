import React, { useState } from "react";

import Header from "./components/elements/Header";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
