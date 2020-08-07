import React from "react";
import { Container } from "./styles";
import Me from "../../assets/me.jpg";

function About() {
  return (
    <Container id="about">
      <img src={Me} alt="Profile" />
      <div>
        <h1>Sobre mim</h1>
        <p>
          Sempre fui apaixonado por tecnologia, e aos 18 anos comecei a estudar
          programação. Meu primeiro contato foi com a linguagem Python através
          de buscas pessoais. Resolvi aprender mais a fundo a programar, foi
          quando eu apliquei e passei no curso de desenvolvimento full stack da
          Labenu. Atualmente procuro uma oportunidade como
          desenvolvedor júnior. 
        </p>
        <strong>NodeJS | MySQL | HTML | CSS | Javascript</strong>
        <button
          onClick={() =>
            window.open(
              "https://github.com/luancn4/portfolio/files/5036867/Curriculo.Luan.C.Nunes.pdf"
            )
          }
        >
          CV em PDF
        </button>
      </div>
    </Container>
  );
}

export default About;
