import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
`;

export const GoBack = styled.div`
  cursor: pointer;
  margin: 3rem 0;
  display: flex;
  align-items: center;

  p {
    font-size: 1.5rem;
  }

  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin: auto;

  img {
    margin: 3rem auto;
    border-radius: 1rem;
    width: 100%;
  }

  h1 {
    max-width: 90rem;
    font-size: 4rem;
  }

  > div {
    margin-top: 1rem;
    display: flex;

    p {
      font-weight: bold;
      font-size: 1.5rem;
    }

    time {
      margin-left: 2rem;
      font-size: 1.5rem;
    }
  }

  > p {
    max-width: 72rem;
    margin: auto;
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: justify;
    line-height: 2.5rem;
  }

  ol {
    li {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }

  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;

    font-family: "Fira Code";
    padding: 2rem 3rem;
    background-color: #24292e;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    line-height: 2.5rem;

    & + pre {
      margin-top: 1rem;
    }
  }
`;
