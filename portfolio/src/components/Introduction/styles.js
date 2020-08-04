import styled from "styled-components";

export const Container = styled.div`
  background-color: #063447;
  height: 80vh;
  color: white;

  headers {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      margin: 25px 61px;
      font-weight: 800;
      font-size: 21px;
    }

    ul {
      display: flex;

      li {
        margin: 19px 61px;
      }
    }
  }

  main {
    display: flex;
    margin: 150px 61px;

    ul {
      li {
        svg {
          height: 33px;
          width: 36px;
          margin-bottom: 24px;
        }
      }
    }

    > div {
      margin: 0 192px;
      padding: 15px;
      justify-content: center;

      h1 {
        font-size: 50px;
      }

      h3 {
        margin: 16px 0px 16px;
        font-size: 24px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
