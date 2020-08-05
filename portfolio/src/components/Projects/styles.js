import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  text-align: center;
  padding: 5vh 10vw;
  color: #063447;

  h3 {
    font-size: 25px;
    color: #4eaccf;
  }

  button {
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 7px;
    background-color: #063447;
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
        width: 35%;
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
          background-color: #4eaccf;
        }
      }
    }

    div:nth-of-type(2) {
      ul {
        text-align: end;
      }

      button {
        float: right;
      }
    }
  }
`;
