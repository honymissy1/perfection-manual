import { createContext } from "react";
import { useState, useEffect } from "react";
import { Storage } from '@ionic/storage';

const  User = createContext();


export const UserProvider = ({children}) =>{

    const [user, setUser] = useState({paid: false})

    const setUserId = (x) =>{
        setUser({paid: x})
 
    }

    return(
        <User.Provider value={{setUserId, user}}>
            {children}
        </User.Provider>
    )
}

export default User