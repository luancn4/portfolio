import React from "react";
import GlobalStyle from "./styles/global";
import Introduction from "./components/Introduction";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Introduction />
      <About />
      <GlobalStyle />
    </div>
  );
}

export default App;
