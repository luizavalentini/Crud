import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 20%;
  max-width: 1050px;
  margin: 0 auto;
  align-items: center;
  margin-top: 10%;
  text-align: center;
  background-color: var(--white);
  border-radius: 20px;

  img {
    margin-top: 5%;
  }
`;

export const Wrapper = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: baseline;

  .inputEIcon {
    width: 50%;
    display: flex;
    justify-content: baseline;
  }
  input {
    border-radius: 20px;
    margin-right: 3%;
    padding-left: 5%;
    width: 65%;
    font-size: 15px;
    border: 1px solid grey;
    color: grey;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }
  .button-add {
    border-radius: 20px;
    width: 200px;
    height: 40px;
    margin-top: 3%;
    background-color: var(--orange);
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
  }
  button {
    background-color: white;
    border-radius: 20px;
    border: none;
  }
`;

export const Usuarios = styled.div`
  background-color: var(--orange);
  margin-top: 4%;
  margin-left: 2%;
  margin-right: 2%;
  height: 65px;
  padding-top: 2%;
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: var(--white);

  p {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif
  }
  div {
    align-items: center;
    display: flex;
    gap: 5%;
  }
`;

export const UsuariosAdd = styled.div`
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 2%;

  .usuarios-adicionados {
    background-color: bisque;
    display: flex;
    align-items: center;
    gap: 5%;
    height: 65px;
    border-radius: 8px;
    padding-left: 2%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
  .button-exlui-edita{
    display: flex;
    gap: 10%;
    margin-left: -2%;
  }
`;
