import React from "react";
import { Container } from "./styles";
import Note from "../../assets/notebook.png";
import Ipad from "../../assets/ipad.png";
import Imac from "../../assets/imac.png";

function Projects() {
  return (
    <Container id = "projects">
      <h1>Meus projetos</h1>
      <section>
        <div>
          <img className="notebook" src={Note} alt="notebook" />

          <ul>
            <h1>Labook</h1>
            <h4>Back-end</h4>
            <li>
              O Labook é um projeto de Backend que utilizei para treinar alguns
              casos de CRUD de uma API. O projeto consiste em:{" "}
              <ul>
                <li>Cadastro</li>
                <li>Login</li>
                <li>Fazer e desfazer amizade</li>
                <li>Criar um post</li>
                <li>Ver o feed com os posts dos amigos que você adicionou</li>
                <li>
                  Filtrar o feed para aparecer apenas um tipo de post ('normal'
                  ou 'evento')
                </li>
              </ul>
            </li>
            <a
              href="https://github.com/luancn4/Labook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>ver no GitHub</button>
            </a>
          </ul>
        </div>
        <div>
          <ul>
            <h1>4eddit</h1>
            <h4>Front-end</h4>
            <li>
              O 4eddit foi desenvolvido durante o curso da{" "}
              <a
                href="http://www.labenu.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Labenu
              </a>{" "}
              inspirado no site do{" "}
              <a
                href="https://www.reddit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>
              , onde o usuário pode ver, criar, curtir posts e comentá-los.
            </li>
            <a
              href="https://github.com/luancn4/4eddit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>ver no GitHub</button>
            </a>
          </ul>
          <img src={Ipad} alt="Ipad" />
        </div>
        <div>
          <img src={Imac} alt="Imac" />
          <ul>
            <h1>Spotenu</h1>
            <h4>Front e Back-end</h4>
            <li>
              O Spotenu foi o projeto de finalização de curso da Labenu. Ele
              consiste em:
              <ul>
                <li>Cadastro (ouvinte ou banda)</li>
                <li>Login</li>
                <li>Listagem de bandas</li>
                <li>Aprovação de bandas</li>
                <li>Adição de gêneros musicais</li>
                <li>Criação de álbuns</li>
                <li>Criação de músicas</li>
              </ul>
            </li>
            <div className="Buttons">
              <a
                href="https://github.com/luancn4/Frontend-Spotenu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Front-end</button>
              </a>
              <a
                href="https://github.com/luancn4/Backend-Spotenu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Back-end</button>
              </a>
            </div>
          </ul>
        </div>
      </section>
      <a
        href="https://github.com/luancn4?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Mais projetos</button>
      </a>
    </Container>
  );
}

export default Projects;
