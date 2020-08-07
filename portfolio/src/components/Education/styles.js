import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #5b83a6;
  color: white;
  padding: 5vh 18vw;

  h3 {
    font-size: 25px;
    margin-bottom: 1em;
    text-align: center;
  }

  ul {
    color: black;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));

    li {
      padding: 27px 51px;
      background-color: white;
      margin: 20px;
      border-radius: 8px;
      text-align: justify;

      > p {
        margin: 12px 0;
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;

    ul {
    grid-template-columns: repeat(auto-fit, minmax(19.5rem, 1fr));
      li {
        margin: 5px auto;
        padding: 1.5em 1.5em;

        h2 {
          text-align: center;
        }
      }
    }
  }
`;
