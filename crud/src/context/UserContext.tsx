import { api } from "../utils/api";
import React, {createContext } from "react";
import { IChildren, INewUser } from "../utils/interface";
import { useNavigate } from "react-router-dom"; 
import { toast } from 'react-toastify';
import { toastConfig } from "../utils/toast";
import nProgress from 'nprogress';

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: IChildren) => {

  const navigate = useNavigate();

  const createNewUser = async (user: INewUser) => {
    try {
      nProgress.start();
        await api.post("", user);
        toast.success("Usuário criado com sucesso!", toastConfig)
        navigate("/")
    } catch (error) {
      toast.error("Houve algum error, tente novamente!", toastConfig)
      console.log(error);
    }
    nProgress.done();
  };
  return (
    <UserContext.Provider value={{ createNewUser }}>
      {children}
    </UserContext.Provider>
  );
};
