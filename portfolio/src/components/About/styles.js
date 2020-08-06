import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #011726;
  height: 55vh;
  padding: 0 13vw;
  color: white;

  img {
    width: 500px;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 34%;
    height: 33vh;
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
`;
