import React from "react";
import { Container } from "./styles";
import Note from "./notebookteste.png";
import Ipad from "./ipad.png";
import Imac from "./imac.png";

function Projects() {
  return (
    <Container>
      <h3>Meus projetos</h3>
      <section>
        <div>
          <img src={Note} alt="notebook" />
          <ul>
            <h1>Whats4</h1>
            <h4>Front-end</h4>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <button>ver no GitHub</button>
          </ul>
        </div>
        <div id="second">
          <ul>
            <h1>Whats4</h1>
            <h4>Front-end</h4>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <button>ver no GitHub</button>
          </ul>
          <img src={Ipad} alt="Ipad" />
        </div>
        <div>
          <img src={Imac} alt= "Imac"/>
          <ul>
            <h1>Whats4</h1>
            <h4>Front-end</h4>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
            <button>ver no GitHub</button>
          </ul>
        </div>
      </section>
      <button>Mais projetos</button>
    </Container>
  );
}

export default Projects;
