import React from "react";
import { Container } from "./styles";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

function Introduction() {
  return (
    <Container>
      <headers>
        <div>Luan</div>
        <ul>
          <li>quem sou</li>
          <li>projetos</li>
          <li>contato</li>
        </ul>
      </headers>
      <main>
        <ul>
          <li><FaLinkedinIn/></li>
          <li><FaGithub/></li>
          <li><FaInstagram/></li>
          <li><FaInstagram/></li>
        </ul>
        <div>
          <h1>
            Eu sou <br /> Luan Nunes
          </h1>
          <h3>Desenvolvedor Web Full Stack</h3>
          <p>Eu amo bolo de chocolate. É sério.</p>
        </div>
      </main>
    </Container>
  );
}

export default Introduction;
