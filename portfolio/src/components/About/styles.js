import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #011726;
  min-height: 55vh;
  padding: 0 13vw;
  color: white;

  img {
    width: 31.25rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35vh;
    width: 30vw;
    margin-left: 2.5rem;

    text-align: justify;

    strong {
      display: block;
    }

    button {
      :hover {
        transform: scale(1.1);
      }

      width: 140px;
      height: 30px;
      border: none;
      border-radius: 7px;
      padding: 5px 30px;
      color: white;
      background-color: rgb(188, 117, 54);
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    max-height: 100%;

    img {
      width: 13rem;
    }

    div {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
`;
