import React from "react";
import { Wrapper } from "./Modal.styled";
import Logo2 from "../../assets/Logo-2.svg";

export const Modal: React.FC = () => (
  <Wrapper>
    <div>
      <img src={Logo2}></img>
      <label>Nome Completo:</label>
      <input placeholder="Insira seu nome completo"></input>
      <label>CPF:</label>
      <input placeholder="Insira seu CPF"></input>
      <label>RG:</label>
      <input placeholder="Insira seu RG"></input>
      <label>CNH:</label>
      <input placeholder="Insira sua CNH"></input>
      <label>Nome da mãe:</label>
      <input placeholder="Insira o nome da sua Mãe"></input>
      <label>Nome da pai:</label>
      <input placeholder="Insira o nome do seu Pai"></input>
      <label>Título de eleitor:</label>
      <input placeholder="Insira o seu titulo de eleitor"></input>
      <label>Sexo:</label>
      <select name="" id="">
        <option value="F">Feminino</option>
        <option value="M">Masculino</option>
      </select>
      <button>Adicionar usuário</button>
    </div>
  </Wrapper>
);
