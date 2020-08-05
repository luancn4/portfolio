import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #063447;
  text-align: center;
  color: #ffffff;
  padding: 3vh 32.5vw;

  p {
    font-family: Montserrat;
    font-size: 18px;
  }

  p:nth-of-type(1) {
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: space-around;
    padding: 0 3rem;
    li {
      svg {
        height: 36px;
        width: 39px;
      }
    }
  }
`;
