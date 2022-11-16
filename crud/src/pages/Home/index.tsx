import { Container, Usuarios, Wrapper, UsuariosAdd } from "./Home.styled";
import Logo from "../../assets/Logo.svg";
import { MagnifyingGlass, Pen, Trash } from "phosphor-react";
import { Modal } from "../../components/Modal";
import { useEffect, useState, useContext } from "react";
import { api } from "../../utils/api";
import { INewUser } from "../../utils/interface"
import { UserContext } from "../../context/UserContext";



export const Home: React.FC = () => {
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [users, setUsers ] = useState<INewUser[]>([]);
   const [cpfFilter, setcpfFilter] = useState<string>();
   const [currentUser, setCurrentUser] = useState<INewUser>();


const getUsers = async () => {
    const response =  await api.get("");
      setUsers(response.data);
}
     useEffect(() => {
      getUsers();
   })
   const filterCpf = () => {
      getUsersWithFilters(cpfFilter);
   }

const getUsersWithFilters = async (cpfFilter? : string) => {
      console.log(cpfFilter);
      const response =  await api.get(`/${cpfFilter? cpfFilter : ""}`);
      console.log(response.data);
      setUsers([response.data]);
  }

  const deleteUser = (cpf:string) => {
     api.delete(`/${cpf}`);
     getUsers();
  }

   const setModalVisible = (value: boolean) => {
       setIsModalVisible(value);
   }

   const createUser = () => {
      setCurrentUser(undefined);
      setIsModalVisible(true);
   }

   const editUser = (user: INewUser) => {
      setIsModalVisible(true);
      setCurrentUser(user);
   }

  return (
    <Container>
      <img src={Logo}></img>
      <Wrapper>
        <div className="inputEIcon">
          <input onChange={(e) => setcpfFilter(e.target.value)} placeholder="Insira o CPF"></input>
          <button onClick={filterCpf}><MagnifyingGlass size={32} color="#919191" weight="bold"/></button>
        </div>
          <button className="button-add" onClick={createUser}>Adicionar usuários </button>{isModalVisible ? <Modal {...{setModalVisible, user : currentUser}} /> : null}
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
    {
      users && users.map(user => 
      <UsuariosAdd>
         <div className="usuarios-adicionados">
          <div >
             <p>{user.nome}</p>
          </div>
          <div >
             <p>{user.cpf}</p>
          </div>
          <div  >
             <p>{user.rg}</p>
          </div>
          <div>
             <p>{user.cnh}</p>
          </div>
          <div>
             <p>{user.nomeMae}</p>
          </div>
          <div>
             <p>{user.nomePai}</p>
          </div>
          <div>
             <p>{user.tituloEleitor}</p>
          </div>
          <div>
             <p>{user.sexo}</p>
          </div>
          <div className="button-exlui-edita">
             <button onClick={() => editUser(user)}><Pen size={20} weight="bold" /></button>
             <button onClick={() => deleteUser(user.cpf)}><Trash size={20} weight="bold" /></button>
          </div>
        </div>
      </UsuariosAdd>)
      }
    </Container>
  );
};
