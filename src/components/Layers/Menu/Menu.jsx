import React,{ useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiBars2 } from 'react-icons/hi2';
import { motion } from 'framer-motion';

import './Menu.css';
import { useStateContext } from '../../../StateContext/StateContext';
import { menuItems, socialItems } from '../../../data';



const Menu = () => {
    const { vueMenu, setVueMenu, selectedColor, menuColor, setMenuColor } = useStateContext();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeItem, setActiveItem] = useState('home');
    const [color2, setColor2] = useState("#e4e4e4");

    return (
        <>
            <div 
                className='open-menu'
                onClick={ () => setVueMenu(!vueMenu) }
                onPointerEnter={ () => setColor2(selectedColor) }
                onPointerLeave={ () => setColor2("#e4e4e4") }
            >
                { vueMenu ? <IoClose color={ color2 } size={ 26 } /> : <HiBars2 color={ color2 } size={ 26 } /> }
            </div>
            <div 
                className={ vueMenu ? 'menu-overlay active' : 'menu-overlay' } 
                onClick={ () => setVueMenu(false) }
            />
            <div className={ vueMenu ? 'app__menu vue' : 'app__menu' }>
                <div 
                    className='app__menu-menu'
                >
                    <h3>Menu</h3>
                    {
                        menuItems.map((item, index) => (
                            <motion.a 
                                key={ item.id } 
                                href={ `#${ item.id }` }
                                className='item-menu'
                                onPointerEnter={ () => {
                                    setMenuColor(selectedColor);
                                    setHoveredItem(item.id);
                                }}
                                onPointerLeave={ () => {
                                    setMenuColor(selectedColor);
                                    setHoveredItem(null);
                                }}
                                onClick={ () => {
                                    setVueMenu(false);
                                    setActiveItem(item.id);
                                }}
                                style={{ 
                                    color: activeItem === item.id ? menuColor : '', 
                                    transition: '.3s',
                                }}
                                animate={ vueMenu ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 } }
                                transition={{ 
                                    duration: .5, 
                                    delay: vueMenu ? .15 * index : 0 
                                }}
                            >
                                <label 
                                    className='item-menu-icon' 
                                    style={{ 
                                        color: hoveredItem === item.id ? menuColor : '', 
                                        transition: '.3s' 
                                    }}
                                >
                                    { item.icon }
                                </label>
                                <label 
                                    className='item-menu-title' 
                                    style={{ 
                                        color: hoveredItem === item.id ? menuColor : '', 
                                        transition: '.3s' 
                                    }}
                                >
                                    { item.title }
                                </label>
                            </motion.a>
                        ))
                    }
                </div>
                <div className='app__menu-social'>
                    <h3>Social</h3>
                    <div className='social-container'>
                        {
                            socialItems.map((item, index) => (
                                <motion.a 
                                    key={ item.id } 
                                    href={ item.link }
                                    className='item-social'
                                    target='_blank'
                                    rel='noreferrer'
                                    onPointerEnter={ () => {
                                        setMenuColor(selectedColor);
                                        setHoveredItem(item.id);
                                    }}
                                    onPointerLeave={ () => {
                                        setMenuColor(selectedColor);
                                        setHoveredItem(null);
                                    }}
                                    animate={ vueMenu ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 } }
                                    transition={{ 
                                        duration: .5, 
                                        delay: vueMenu ? .4 * index : 0 
                                    }}
                                >
                                    <label
                                        className='item-social-icon'
                                        style={{ 
                                            color: hoveredItem === item.id ? menuColor : '', 
                                            transition: '.3s' 
                                        }}
                                    >
                                        { item.icon }
                                    </label>
                                </motion.a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;