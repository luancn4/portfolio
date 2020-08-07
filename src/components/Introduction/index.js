import React from "react";
import { Container } from "./styles";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Introduction() {
  return (
    <Container>
      <div className= "header">
        <div>Luan</div>
        <ul>
          <a href= "#about"><li>quem sou</li></a>
          <a href= "#projects"><li>projetos</li></a>
          <a href= "#contact"><li>contato</li></a>
        </ul>
      </div>
      <main>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/luan-nunes4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luancn4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/luanckz/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
