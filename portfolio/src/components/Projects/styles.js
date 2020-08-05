import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  text-align: center;
  padding: 5vh 10vw;
  color: #063447;

  h3 {
    font-size: 25px;
    color: rgb(188, 117, 54);
  }

  button {
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

      img {
        background-size: 100%;
        background-size: cover;
        width: 40%;
      }

      h1 {
        font-size: 42px;
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
        }

        button {
          background-color: rgb(188, 117, 54);
        }
      }
    }

    div:nth-of-type(2) {
      ul {
        text-align: end;
      }

      button {
      }
    }
  }
`;
