import React, { createContext, useContext, useState } from 'react';
const Context = createContext();



export const StateContext = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState("yellow");
    const [selectedBar, setSelectedBar] = useState("none");
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