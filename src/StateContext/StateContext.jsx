import React, { createContext, useContext, useState } from 'react';
const Context = createContext();



export const StateContext = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState("orange");
    const [selectedBar, setSelectedBar] = useState("default");
    const [selectedEffect, setSelectedEffect] = useState("tech");

    return (
        <Context.Provider
            value={{
                selectedColor,
                setSelectedColor,
                selectedBar,
                setSelectedBar,
                selectedEffect,
                setSelectedEffect,
            }}
        >
            { children }
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);