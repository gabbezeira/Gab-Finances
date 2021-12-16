import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--blue);
  }

  form {
    margin-top: 1.5rem;
    width: 100%;
    max-width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      border-radius: 0.25rem;

      color: #707070;
      border: none;
      background: #262626;

      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: #707070;
        opacity: .7;
      }

      textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }

      & + input {
        margin-top: 1rem;
      }
    }
  }

  button,
  a {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  button[type="submit"] {
    background: var(--green);
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    color: var(--text-title);

    transition: background-color 0.4s;

    &:hover {
      background: ${transparentize(0.1, "#191919")};
    }
  }
`;
