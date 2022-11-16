import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: var(--white);
    width: 35%;
    height: 90%;
    border-radius: 20px;
    padding-top: 2%;
    padding-left: 1.6%;
    padding-right: 2%;
  }

  label {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    color: var(--orange);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2%;
    margin-top: 1%;
  }

  img {
    text-align: center;
    margin-bottom: 5%;
  }

  input {
    border: 1px solid grey;
    height: 25px;
    width: 100%;
    margin-bottom: 2%;
  }

  input::placeholder {
        color: grey;
        opacity: 35%;
}

  select {
    border: 1px solid grey;
    width: 100%;
    height: 25px;
    margin-bottom: 4%;
    color: gray;
    border-radius: 20px;
    padding-left: 4%;
  }
  button {
    text-align: center;
    border-radius: 20px;
    width: 200px;
    height: 30px;
    background-color: var(--orange);
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: var(--white);
    font-family: "Montserrat", sans-serif;
    margin-bottom: 3%;
    margin-top: 4%;
  }
`;
