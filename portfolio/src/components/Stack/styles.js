import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #4eaccf;
  height: 40vh;
  padding: 5vh 15vw;
  color: white;
  text-align: center;

  h3 {
    font-size: 25px;
  }

  section {
    display: flex;
    justify-content: space-around;

    div {
      margin-top: 42px;
      display: flex;
      flex-direction: column;
      width: 26vw;
      text-align: justify;

      h1 {
        font-size: 55px;
      }
    }
  }
`;
