import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({children} : any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false)
  const navigate = useNavigate()

    const getUser = (email: string) => {
      setUser(email);
      setLogin(true);
  }

  const logOut = () => {
    setLogin(false);
    setUser({});
  }
  
  
  const handleLogin = (email: string, password: string) => {
      setLogin(true);
      getUser(email);
      navigate('/')
  }

  const handleCreateUser = (name: string, email: string, password: string) => {
      alert('Usuário criado com sucesso')
      handleLogin(email, password);
      navigate('/') 
  }
  

  return (
    <UserContext.Provider value={{
      login,
      user,
      openDropDownMenu,
      setOpenDropDownMenu,                          
      handleLogin,
      handleCreateUser,
      logOut
    }}>
      {children}
    </UserContext.Provider>
  )
}