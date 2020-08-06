import React from "react";
import { Container } from "./styles";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

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
          <li>
            <a href="https://www.linkedin.com/in/luan-nunes4/" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/luancn4" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/luanckz/" target="_blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <div>
          <h1>
            Eu sou <br /> Luan Nunes
          </h1>
          <h3>Desenvolvedor Web Full Stack</h3>
          <p>Apaixonado por tecnologia e programação.</p>
        </div>
      </main>
    </Container>
  );
}

export default Introduction;
