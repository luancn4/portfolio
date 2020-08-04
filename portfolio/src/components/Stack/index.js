import React from "react";
import { Container } from "./styles";

function Stack() {
  return (
    <Container>
      <h3>O que eu faço?</h3>
      <section>
        <div>
          <h1>Front-end</h1>
          <p>
            Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
          </p>
        </div>
        <div>
          <h1>Back-end</h1>
          <p>
            Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s
            para comunicação com front-end seguindo princípio de Clean Code.
          </p>
        </div>
      </section>
    </Container>
  );
}

export default Stack;
