import styled from "styled-components";

export const Card = styled.section`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  width: 500px;

  h1 {
    color: #fff;
    font-size: 2.8rem;
    font-family: "Arial", cursive;
    font-weight: 500;
  }

  label {
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
  }

  button {
    background-color: #181818;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 0 5px 5px 0;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #2e2e2e;
  }

  h2 {
    max-width: 100%;
    word-wrap: break-word;
    color: #fff;
  }

  @media (max-width: 598px) {
    width: 300px;

    h1 {
      font-size: 2rem;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
