import React from "react";
import { Container } from "./styles";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <Container>
      <h1>Contrate-me!</h1>
      <p>
        Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver
        e evoluir na minha carreira profissional.
      </p>
      <p>E-mail para contato: luancnunes04@gmail.com</p>
      <p>Celular: (19) 99698-5213</p>
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
    </Container>
  );
}

export default Contact;
