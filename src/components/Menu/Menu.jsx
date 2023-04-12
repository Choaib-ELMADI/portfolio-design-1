import React,{ useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiBars2 } from 'react-icons/hi2';
import { GiPositionMarker, GiCubes  } from 'react-icons/gi';
import { BsFillPersonFill, BsWechat, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';

import './Menu.css';
import { useStateContext } from '../../StateContext/StateContext';
const menuItems = [
    {
        id: 'home',
        title: 'Home',
        icon: <GiPositionMarker size={ 24 } />,
    },
    {
        id: 'about',
        title: 'About',
        icon: <BsFillPersonFill size={ 24 } />,
    },
    {
        id: 'resume',
        title: 'Resume',
        icon: <HiMenuAlt1 size={ 24 } />,
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        icon: <GiCubes size={ 24 } />,
    },
    {
        id: 'contact',
        title: 'Contact',
        icon: <BsWechat size={ 24 } />,
    },
];
const socialItems = [
    {
        id: 'instagram',
        link: '',
        icon: <BsInstagram size={ 22 } />,
    },
    {
        id: 'linkedin',
        link: '',
        icon: <BsLinkedin size={ 22 } />,
    },
    {
        id: 'github',
        link: '',
        icon: <BsGithub size={ 22 } />,
    },
];



const Menu = () => {
    const { vueMenu, setVueMenu, selectedColor } = useStateContext();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const [color, setColor] = useState(null);
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
            <div className={ vueMenu ? 'menu-overlay active' : 'menu-overlay' } onClick={ () => setVueMenu(false) }/>
            <div className={ vueMenu ? 'app__menu vue' : 'app__menu' }>
                <div className='app__menu-menu'>
                    <h3>Menu</h3>
                    {
                        menuItems.map(item => (
                            <a 
                                key={ item.id } 
                                href={ `#${ item.id }` }
                                className='item-menu'
                                onPointerEnter={ () => {
                                    setColor(selectedColor);
                                    setHoveredItem(item.id);
                                }}
                                onPointerLeave={ () => {
                                    setColor(selectedColor);
                                    setHoveredItem(null);
                                }}
                                onClick={ () => setActiveItem(item.id) }
                                style={{ 
                                    color: activeItem === item.id ? color : '', 
                                    transition: '.3s' 
                                }}
                            >
                                <label 
                                    className='item-menu-icon' 
                                    style={{ 
                                        color: hoveredItem === item.id ? color : '', 
                                        transition: '.3s' 
                                    }}
                                >
                                    { item.icon }
                                </label>
                                <label 
                                    className='item-menu-title' 
                                    style={{ 
                                        color: hoveredItem === item.id ? color : '', 
                                        transition: '.3s' 
                                    }}
                                >
                                    { item.title }
                                </label>
                            </a>
                        ))
                    }
                </div>
                <div className='app__menu-social'>
                    <h3>Social</h3>
                    <div className='social-container'>
                        {
                            socialItems.map(item => (
                                <a 
                                    key={ item.id } 
                                    href={ item.link }
                                    className='item-social'
                                    target='_blank'
                                    rel='noreferrer'
                                    onPointerEnter={ () => {
                                        setColor(selectedColor);
                                        setHoveredItem(item.id);
                                    }}
                                    onPointerLeave={ () => {
                                        setColor(selectedColor);
                                        setHoveredItem(null);
                                    }}
                                >
                                    <label
                                        className='item-social-icon'
                                        style={{ 
                                            color: hoveredItem === item.id ? color : '', 
                                            transition: '.3s' 
                                        }}
                                    >
                                        { item.icon }
                                    </label>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;