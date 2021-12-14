import styled from "styled-components";

export const Header = styled.header`
  padding: 2rem;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    a {
      font-size: 2rem;
      color: #bd9aff;
      transition: 0.2s;
      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: #fff;
      }
      svg {
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15rem 2rem;

  h1 {
    font-size: 7rem;
    font-weight: 500;

    span {
      color: #d9cf79;
    }
  }

  p {
    margin-top: 1rem;
    max-width: 40rem;
    font-size: 1.5rem;
    text-indent: 50px;
    text-align: justify;
    letter-spacing: 1px;
  }

  > div {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 2rem;
    svg {
      margin-left: 1rem;
      font-size: 2rem;
      animation: upAndDown 1s linear infinite;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

export const Posts = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
`;

export const Post = styled.div`
  > div {
    max-width: 72rem;
    margin: auto;
    height: 12rem;
    border: 1px solid #fff;
    display: flex;

    & + div {
      margin-top: 1rem;
    }

    > div {
      width: 52rem;
      height: 100%;
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 2rem;
      }
    }

    a {
      text-decoration: none;
      width: 15rem;
      background-color: #fff;
      height: 100%;
      margin-left: auto;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      color: black;
      font-size: 1.7rem;
      font-weight: bold;
      padding: 1rem;
    }
  }
`;
