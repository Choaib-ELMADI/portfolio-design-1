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
        back: 'rgba(66, 103, 178, .2)',
        color: '#4267B2',
    },
    {
        title: 'JavaScript',
        progress: '78%',
        category: 'web',
        back: 'rgba(66, 103, 178, .2)',
        color: '#4267B2',
    },
    {
        title: 'ReactJs',
        progress: '70%',
        category: 'web',
        back: 'rgba(66, 103, 178, .2)',
        color: '#4267B2',
    },
    {
        title: 'SolidWorks',
        progress: '75%',
        category: '3d',
        back: 'rgba(255, 68, 0, .2)',
        color: 'orangered',
    },
    {
        title: 'Blender',
        progress: '35%',
        category: '3d',
        back: 'rgba(255, 68, 0, .2)',
        color: 'orangered',
    },
    {
        title: 'Arduino',
        progress: '66%',
        category: 'Electronics',
        back: 'rgba(0, 128, 0, .2)',
        color: 'green',
    }
];

export const projects = [
    {
        background: images.cars2,
        backgroundHash: 'L38;ACO@00=Z00IU~qtR00=__457',
        title: 'Immersive Solutions',
        pictures: [images.cars1, images.cars2, images.cars3, images.cars4],
        hashes: [
            'L^K203xaf+ae~qs:afj[R+oLaeof', 
            'L38;ACO@00=Z00IU~qtR00=__457', 
            'L36kbV?utQM{9sxu-;xu~XM{IBD%', 
            'LxHVk@xuIUj]_Nt7M{flM{azWBaz'
        ],
        detailsTitle: 'Immersive Solutions',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
    {
        background: images.electro3,
        backgroundHash: 'LCFFQt5EV?MzRP-op0%0Rj~UIVbc',
        title: 'Adaptive Generation',
        pictures: [images.electro1, images.electro2, images.electro3, images.electro4],
        hashes: [
            'LBGbeo.T0LI8%$_4IUEK-U?b8{rY', 
            'L385u^00QUyW00.l.l%fi0x]k;Io', 
            'LCFFQt5EV?MzRP-op0%0Rj~UIVbc', 
            'L6Dl[^009ax_~qs.IBXA01^+00bw'
        ],
        detailsTitle: 'Adaptive Generation',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
    {
        background: images.ice1,
        backgroundHash: 'L2Bf^dQ9?daj00_Ntn%N00ExD$E0',
        title: 'Surface Experience',
        pictures: [images.ice1, images.ice2, images.ice3, images.ice4],
        hashes: [
            'L2Bf^dQ9?daj00_Ntn%N00ExD$E0', 
            'LBD^cp00#OIU00xBiaWU_M-q9Fx]', 
            'LHB|{f_N9G4oNytlj?IV,,oNInNF', 
            'LLBDZ*IUE1M__4M{M{Rj.9RiNGWA'
        ],
        detailsTitle: 'Surface Experience',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
    {
        background: images.nature4,
        backgroundHash: 'L]MX-#-mW.oe}=g1WCoKSgNIaMjG',
        title: 'Frame Manifacturer',
        pictures: [images.nature1, images.nature2, images.nature3, images.nature4],
        hashes: [
            'LSBzIGOFR-fS%QS4k9bHOtnhaeWV', 
            'LODbyS^%E1M{~Vt7E2V@ENE3Rkxt', 
            'LUF5T@%1E1NG~VxZNGRk9vWVt6of', 
            'L]MX-#-mW.oe}=g1WCoKSgNIaMjG'
        ],
        detailsTitle: 'Frame Manifacturer',
        detailsDesc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus deserunt itaque iste ipsam necessitatibus animi culpa ut eveniet quos? Rem porro facilis expedita!',
    },
];

export const customers = [
    {
        name: 'company__1',
        logo: images.image1,
    },
    {
        name: 'company__2',
        logo: images.image2,
    },
    {
        name: 'company__3',
        logo: images.image3,
    },
    {
        name: 'company__4',
        logo: images.image4,
    },
    {
        name: 'company__5',
        logo: images.image5,
    },
    {
        name: 'company__6',
        logo: images.image6,
    },
    {
        name: 'company__7',
        logo: images.image7,
    },
    {
        name: 'company__8',
        logo: images.image8,
    },
    {
        name: 'company__9',
        logo: images.image9,
    },
];

export const testimonials = [
    {
        testimonial: "We chose Ch.ELMADI because it's the perfect combination of convenience and quality. Team takes care of getting us high-quality websites quickly and all the other services.",
        name: 'Elena Clouse',
        company: 'CEO Stellar Inc.',
    },
    {
        testimonial: "We chose Ch.ELMADI because it's the perfect combination of convenience and quality. Team takes care of getting us high-quality websites quickly and all the other services.",
        name: 'John Miller',
        company: 'CTO SpaceX Industries',
    },
    {
        testimonial: "We chose Ch.ELMADI because it's the perfect combination of convenience and quality. Team takes care of getting us high-quality websites quickly and all the other services.",
        name: 'Brandon Hadid',
        company: 'CTO Market Hero',
    },
    {
        testimonial: "We chose Ch.ELMADI because it's the perfect combination of convenience and quality. Team takes care of getting us high-quality websites quickly and all the other services.",
        name: 'John Miller',
        company: 'CTO SpaceX Industries',
    },
];