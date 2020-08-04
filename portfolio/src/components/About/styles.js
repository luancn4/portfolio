import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  height: 55vh;
  padding: 0 15vw;
  color: white;

  img {
    height: 305px;
    width: 305px;
    box-shadow: 6px 6px 1px 1px #fff;
    background-color: white;
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
      cursor: pointer;
    }
  }
`;
