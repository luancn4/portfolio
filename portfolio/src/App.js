import React from "react";
import GlobalStyle from "./styles/global";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Introduction />
      <About />
      <Stack />
      <Education />
      <Projects />
      <Contact />
      {/* <Footer /> */}
      <GlobalStyle />
    </div>
  );
}

export default App;
