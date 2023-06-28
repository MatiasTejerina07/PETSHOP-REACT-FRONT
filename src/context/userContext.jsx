import { createContext, useState, useContext } from "react";

export const UserContext = createContext()

const userProvider = ({ children }) => {
    const [user, setUser] = useState(
        {
            isActive: false,
            id: 1233,
            photo: '',
            role: ""
        })
    const [cart, setCart] = useState({
        id: user.id,
        items: []
    })

    return (
        <UserContext.Provider value={{ user, setUser, cart, setCart }}>
            {children}
        </UserContext.Provider>
    )
}
export default userProvider

export const useUserContext = () => useContext(UserContext)