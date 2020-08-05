import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #E1AD7E;
  height: 55vh;
  padding: 0 15vw;
  color: white;

  img {
    width: 500px;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33vw;
    height: 33vh;
    text-align: justify;

    strong {
      display: block;
    }

    button {
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
