import { useState, createContext } from "react";

export const ActiveTabContext = createContext();

export const ActiveTabContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <ActiveTabContext.Provider value={[activeTab, setActiveTab]}>
            {children}
        </ActiveTabContext.Provider>
    );
};
