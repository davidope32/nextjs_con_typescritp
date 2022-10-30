import React, { createContext, PropsWithChildren, ReactNode, useState } from 'react';
/*
export type UserDetail = {
  nombre: string,
  email: string,
  region: string

}
*/

export type UserContextProps =  {
  userName: string,
  setUsername: (username:string)=>void
  userEmail:  string
  setUserEmail: (userEmail: string)=>void
  userRegion:  string
  setUserRegion: (userRegion: string)=>void

}

export const userContext = createContext<UserContextProps>({} as UserContextProps);

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [userName, setUsername] = useState('No registrado');
  const [userEmail, setUserEmail] = useState('');
  const [userRegion, setUserRegion] = useState('Elige tu region');


  return (<userContext.Provider value={{
    userName,
    setUsername,
    userEmail,
    setUserEmail,
    userRegion,
    setUserRegion
  }}>
    {children}
  </userContext.Provider>);
};

