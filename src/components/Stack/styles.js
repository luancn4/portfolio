import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #024159;
  height: 40vh;
  padding: 5vh 20vw;
  color: white;
  text-align: center;

  h3 {
    font-size: 25px;
  }

  section {
    display: flex;
    justify-content: space-evenly;

    div {
      margin-top: 42px;
      display: flex;
      flex-direction: column;
      text-align: justify;

      p {
        width: 280px;
      }

      h1 {
        font-size: 55px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    padding: 2rem;

    section {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      div {
        margin: 0;
        h1 {
          font-size: 30px;
          margin-top: 1rem;
          text-align: center;
        }
        p {
          margin-top: .5rem;
        }
      }
    }
  }
`;
