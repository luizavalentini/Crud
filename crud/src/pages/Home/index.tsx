import { Container, Usuarios, Wrapper, UsuariosAdd } from "./Home.styled";
import Logo from "../../assets/Logo.svg";
import { MagnifyingGlass, Pen, Trash } from "phosphor-react";
import { Modal } from "../../components/Modal";
import { useState } from "react";

export const Home: React.FC = () => {
   const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Container>
      <img src={Logo}></img>
      <Wrapper>
        <div className="inputEIcon">
          <input placeholder="Insira o CPF"></input>
          <button><MagnifyingGlass size={32} color="#919191" weight="bold"/></button>
        </div>
          <button className="button-add" onClick={() => setIsModalVisible(true)}>Adicionar usuários </button>{isModalVisible ? <Modal /> : null}
      </Wrapper>
    <Usuarios>
     <div>
      <p>Nome</p>
      <p>CPF</p>
      <p>RG</p>
      <p>CNH</p>
      <p>Nome da Mãe</p>
      <p>Nome do Pai</p>
      <p>Título de eleitor</p>
      <p>Sexo</p>
      <p>Ações</p>
     </div>
    </Usuarios>
    <UsuariosAdd>
       <div className="usuarios-adicionados">
        <div >
           <p>Nome</p>
        </div>
        <div >
           <p>CPF</p>
        </div>
        <div  >
           <p>RG</p>
        </div>
        <div>
           <p>CNH</p>
        </div>
        <div>
           <p> Nome da Mãe </p>
        </div>
        <div>
           <p>Nome da Mãe</p>
        </div>
        <div>
           <p>Título de eleitor</p>
        </div>
        <div>
           <p>Sexo</p>
        </div>
        <div className="button-exlui-edita">
           <button><Pen size={20} weight="bold" /></button>
           <button><Trash size={20} weight="bold" /></button>
        </div>
      </div>
    </UsuariosAdd>
    <UsuariosAdd>
       <div className="usuarios-adicionados">
        <div >
           <p>Nome</p>
        </div>
        <div >
           <p>CPF</p>
        </div>
        <div  >
           <p>RG</p>
        </div>
        <div>
           <p>CNH</p>
        </div>
        <div>
           <p> Nome da Mãe </p>
        </div>
        <div>
           <p>Nome da Mãe</p>
        </div>
        <div>
           <p>Título de eleitor</p>
        </div>
        <div>
           <p>Sexo</p>
        </div>
        <div className="button-exlui-edita">
           <button><Pen size={20} weight="bold" /></button>
           <button><Trash size={20} weight="bold" /></button>
        </div>
      </div>
    </UsuariosAdd>
    </Container>
  );
};
