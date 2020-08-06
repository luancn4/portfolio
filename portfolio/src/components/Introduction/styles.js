import styled from "styled-components";
import bg from "../../assets/background.jpg";

export const Container = styled.div`
  background-color: black;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: white;

  headers {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      margin: 25px 61px;
      font-weight: 800;
      font-size: 26px;
    }

    ul {
      display: flex;
      li {
        :hover {
          color: #161515;
          cursor: pointer;
        }
        margin: 19px 61px;
      }
    }
  }

  main {
    display: flex;
    align-items: center;
    height: 70vh;
    padding-left: 61px;

    ul {
      li {
        :hover {
          transform: scale(1.3);
          cursor: pointer;
        }

        svg {
          height: 39px;
          width: 42px;
        }
        
        & + li {
          margin-top: 45px;
        }
      }
    }

    > div {
      margin: 0 192px;
      padding: 15px;
      justify-content: center;

      h1 {
        font-size: 60px;
      }

      h3 {
        margin: 16px 0px 16px;
        font-size: 27px;
      }

      p {
        font-size: 19px;
      }
    }
  }
`;
