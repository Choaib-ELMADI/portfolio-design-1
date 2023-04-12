import React, { createContext, useContext, useState, useEffect } from 'react';
const Context = createContext();



export const StateContext = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState("yellow");
    const [selectedBar, setSelectedBar] = useState("none");
    const [selectedEffect, setSelectedEffect] = useState("tech");
    const [visible, setVisible] = useState(true);
    const [vueMenu, setVueMenu] = useState(false);
    const [menuColor, setMenuColor] = useState(selectedColor);

    const scrolling = () => {
      if (window.scrollY > 80) {
          setVisible(false);
      } else {
        setVisible(true);
      }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrolling);
    }, []);

    return (
        <Context.Provider
            value={{
                selectedColor,
                setSelectedColor,
                selectedBar,
                setSelectedBar,
                selectedEffect,
                setSelectedEffect,
                visible,
                vueMenu,
                setVueMenu,
                menuColor,
                setMenuColor
            }}
        >
            { children }
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);