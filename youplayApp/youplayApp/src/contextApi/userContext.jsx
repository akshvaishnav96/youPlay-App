
import { createContext,useContext } from 'react'

 export const  userContext = createContext({
     userLoggedIn:false,
    setUserLoggedIn : ()=>{}
});


export const  UserContextProvider = userContext.Provider

export default function useUserContext(){
    return useContext(userContext);
}