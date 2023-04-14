import { GiPositionMarker, GiCubes  } from 'react-icons/gi';
import { BsFillPersonFill, BsWechat, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';
import images from './constants/images';


export const services = [
    {
        title: 'Web',
        desc: 'UI Development - Technical Consultancy - App Development - Front-End Development - Dev-Ops',
    },
    {
        title: 'Arduino',
        desc: 'Raspberry PI - Uno R3 - Nano - Mega - Electronics - Embedded Systems - Microcontrollers',
    },
    {
        title: '3D Modeling',
        desc: '3d Modeling - 3d Rendering - Rapid Prototyping - 3D Sculpturing - CAD CAM',
    },
];

export const achievements = [
    {
        title: 11,
        desc: 'Certificates',
        background: '#181818',
    },
    {
        title: '23+',
        desc: 'Projects',
        background: '#111111',
    },
    {
        title: '9+',
        desc: 'Websites',
        background: '#080808',
    },
    {
        title: '130%',
        desc: 'Happy',
        background: 'black',
    },
];

export const menuItems = [
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

export const socialItems = [
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

export const experiences = [
    {
        company: 'Self-employed',
        date   : '2021 - Present',
        title  : 'Front-End Developer',
        desc   : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Pariatur.',
    },
    {
        company: 'Self-employed',
        date   : '2023',
        title  : 'Back-End Developer',
        desc   : 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        company: 'Freelancer',
        date   : '2022 - Present',
        title  : 'React Developer',
        desc   : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
];

export const skills = [
    {
        title: 'HTML/CSS',
        progress: '85%',
        category: 'web',
    },
    {
        title: 'JavaScript',
        progress: '78%',
        category: 'web',
    },
    {
        title: 'ReactJs',
        progress: '70%',
        category: 'web',
    },
    {
        title: 'SolidWorks',
        progress: '75%',
        category: '3d',
    },
    {
        title: 'Blender',
        progress: '35%',
        category: '3d',
    },
];

export const projects = [
    {
        background: images.cars2,
        title: 'Immersive Solutions',
        pictures: [images.cars1, images.cars2, images.cars3, images.cars4],
        detailsTitle: 'Immersive Solutions',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
    {
        background: images.electro3,
        title: 'Adaptive Generation',
        pictures: [images.electro1, images.electro2, images.electro3, images.electro4],
        detailsTitle: 'Adaptive Generation',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
    {
        background: images.ice1,
        title: 'Surface Experience',
        pictures: [images.ice1, images.ice2, images.ice3, images.ice4],
        detailsTitle: 'Surface Experience',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
    {
        background: images.nature4,
        title: 'Frame Manifacturer',
        pictures: [images.nature1, images.nature2, images.nature3, images.nature4],
        detailsTitle: 'Frame Manifacturer',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
];