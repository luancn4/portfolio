import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  text-align: center;
  padding: 5vh 10vw;
  background-color: #f2f2f2;
  color: #063447;

  > h1 {
    color: rgb(188, 117, 54);
  }

  button {
    :hover {
      transform: scale(1.1);
    }
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 7px;
    background-color: rgb(173, 104, 45);
    color: white;
    cursor: pointer;
  }
  section {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 5vh 10vw;

      .notebook {
        width: 50%;
        min-width: 45%;
      }

      img {
        background-size: 100%;
        background-size: cover;
        width: 45%;
        min-width: 45%;
      }

      h1 {
        font-size: 39px;
      }

      h4 {
        margin-top: 10px;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: left;

        li {
          width: 370px;
          margin: 23px 0 21px;

          ul {
            list-style: circle;
            margin-top: 7px;
            li {
              margin: 5px 0 5px 20px;
            }
          }
        }

        button {
          background-color: rgb(188, 117, 54);
        }
      }
    }

    div:nth-of-type(2) {
      h4 {
        margin: 0;
      }
      ul {
        text-align: end;

        li {
          margin: 10px 0;
        }
      }
    }

    .Buttons {
      padding: 0;
      justify-content: space-evenly;
    }
  }

  @media screen and (max-width: 1024px) {
    section {
      div {
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 2em auto;

        h1,
        h4 {
          text-align: center;
        }
        ul {
          text-align: justify;

          li {
            width: 95%;
          }

          a {
            text-align: center;
          }
        }

        img,
        .notebook {
          width: 100%;
        }
      }

      div:nth-of-type(2) {
        flex-direction: column-reverse;
        margin: 2em auto;

        ul {
          text-align: justify;
          margin-top: 1.2em;
          li {
            margin: 1em 0 1.2em;
          }
        }
      }

      .Buttons {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        button {
          width: 10em;
        }
      }
    }
  }
`;
