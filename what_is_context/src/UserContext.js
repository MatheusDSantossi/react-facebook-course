import { createContext, useState, useContext } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: "Matheus",
        age: 25,
        email: "matheus@gmail.com",
        dob: "02/02/2001"
    });
    return <UserContext.Provider value={{ user }}>{ children }</UserContext.Provider>
};

export const useUser = () => useContext(UserContext);

// export default UserProvider;
