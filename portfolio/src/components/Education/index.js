import React from "react";
import { Container } from "./styles";

function Education() {
  return (
    <Container>
      <h3>Educação</h3>
      <ul>
        <li>
          <h2>Curso de Web Full Stack na Labenu</h2>
          <p>6 meses - 2020</p>
          <p>
            A Labenu é uma startup que forma Desenvolvedores Web Full Stack
            prontos para o mercado de trabalho. São mais de 1000 horas de
            programação que faz com que seus alunos sejam profissionais
            completos tanto no Back-End quanto no Front-End.
          </p>
        </li>
        <li>
          <h2>FATEC Indaiatuba - Redes de Computadores</h2>
          <p>Jan 2019 - Jan 2020</p>
          <p>
            O curso de Redes de Computadores destina-se ao público com
            habilidades em exatas, eletrônica e computação. As áreas de atuação
            estendem-se desde o desenvolvimento de projetos físicos e lógicos,
            aplicativos voltados para redes e WEB, configuração, administração e
            segurança de redes, quanto para novas tendências apresentadas pelo
            mercado como Internet das Coisas e Computação e Nuvem.
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default Education;
