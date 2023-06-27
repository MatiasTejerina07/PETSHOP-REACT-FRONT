import { createContext, useState, useContext } from "react";

export const UserContext = createContext()

const userProvider = ({ children }) => {
    const [user, setUser] = useState(false)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default userProvider

export const useUserContext = () => useContext(UserContext)