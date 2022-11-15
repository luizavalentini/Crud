import React, { useContext } from "react";
import { Wrapper } from "./Modal.styled";
import Logo2 from "../../assets/Logo-2.svg";
import { useForm } from "react-hook-form";
import { INewUser } from "../../utils/interface";
import { UserContext } from "../../context/UserContext";

export const Modal: React.FC = () => {

  const { register, handleSubmit } = useForm<INewUser>();
  const { createNewUser } = useContext(UserContext);

  const addNewUser = (data: INewUser) => {
    createNewUser(data);
  };

  return (
    <Wrapper>
      <div>
        <img src={Logo2}></img>
        <form onSubmit={handleSubmit(addNewUser)}>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            required
            id="nome"
            {...register("nome")}
            type="text"
            placeholder="Insira seu nome completo"
          />

          <label htmlFor="cpf">CPF:</label>
          <input
            required
            id="cpf"
            {...register("cpf")}
            type="text"
            placeholder="Insira seu CPF"
          ></input>
          <label htmlFor="rg">RG:</label>
          <input
            required
            id="rg"
            {...register("rg")}
            type="text"
            placeholder="Insira seu RG"
          ></input>

          <label htmlFor="cnh">CNH:</label>
          <input
            required
            id="cnh"
            {...register("cnh")}
            type="text"
            placeholder="Insira sua CNH"
          ></input>

          <label htmlFor="nomeMae">Nome da mãe:</label>
          <input
            required
            id="nomeMae"
            {...register("nomeMae")}
            type="text"
            placeholder="Insira o nome da sua Mãe"
          ></input>

          <label htmlFor="nomePai">Nome da pai:</label>
          <input
            required
            id="nomePai"
            {...register("nomePai")}
            type="text"
            placeholder="Insira o nome do seu Pai"
          ></input>

          <label htmlFor="tituloEleitor">Título de eleitor:</label>
          <input
            required
            id="tituloEleitor"
            {...register("tituloEleitor")}
            type="text"
            placeholder="Insira o seu titulo de eleitor"
          ></input>

          <label htmlFor="sexo">Sexo:</label>
          <select id="sexo" {...register("sexo")}>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
          </select>

          <input type="submit" value="adicionar usuário" />
        </form>
      </div>
    </Wrapper>
  );
};

// {...register("sexo")}
