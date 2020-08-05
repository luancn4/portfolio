import React from "react";
import { Container } from "./styles";
import gatinho from "./teste3.jpg";

function About() {
  return (
    <Container>
      <img src={gatinho} alt= "Profile"/>
      <div>
        <h1>Sobre mim</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <strong>NodeJS | MySQL | HTML | CSS | Javascript</strong>
        <button>CV em PDF</button>
      </div>
    </Container>
  );
}

export default About;
