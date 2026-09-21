/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
'use client'
import React , {useState , useEffect , useRef} from "react";
import styles from '../page.module.css'
import { useRouterContext } from "../context/NavbarContext";

export default function Navbar() {
    const [width , setWidth] = useState(1000)
    const [viewMenu , setViewMenu] = useState('none')
    const [viewIconMenu , setViewIconMenu] = useState('block')
    const HideMenu = useRef()
    const { activePage } = useRouterContext();
    // const handlePageClicked = (e, text) => {
    //     setActivePage(text);
    //     sessionStorage.setItem('pageSelect', text);
    // }
    const visableMenu=()=>{
        if(viewMenu == 'flex'){
            setViewMenu('none')
            setViewIconMenu('block')
            
        }else{
            setViewMenu('flex')
            setViewIconMenu('none')
        }
    }
    useEffect(()=>{
        const widthScreen = window.screen.width
        setWidth(widthScreen)
    },[])
    useEffect(() => {
        function handleClickOutside(event) {
            if(HideMenu.current && !HideMenu.current.contains(event.target)) {
                if(viewMenu == 'flex'){
                    setViewMenu('none')
                    setViewIconMenu('block')
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [HideMenu , viewMenu]);
    return (
        <div className={styles.nav}>
            <img src="/assets/icons/logo.png" alt="Monkies Logo" />
            {width > 770 ? 
                <div className={styles.urlNav}>
                    <a 
                        href={"/"} 
                        style={{ color: activePage === 'Home' ? '#C49F02' : '#FFFFFF' }} 
                    >
                        Home
                    </a>
                    
                    <a 
                        href={"/services"} 
                        style={{ color: activePage === 'Services' ? '#C49F02' : '#FFFFFF' }} 
                    >
                        Services
                    </a>
                    
                    <a 
                        href={"/about"} 
                        style={{ color: activePage === 'About' ? '#C49F02' : '#FFFFFF' }} 
                    >
                        About
                    </a>
                    
                    <a className={styles.talk} href={"/contact-us"}
                        >
                        Lets Talk
                    </a>
                </div>
                :
                <img className={styles.iconMainMenu} style={{display:`${viewIconMenu}`}} src="/assets/icons/mainMenu.svg" alt="Monkies Menu" onClick={()=>{visableMenu()}}/>
            }
            <div ref={HideMenu} className={styles.mainMenuMobile} style={{display:`${viewMenu}`}}>
                <img src="/assets/icons/subMenu.svg" alt="Monkies Menu" 
                    onClick={()=>{
                        setViewMenu('none')
                        setViewIconMenu('block')
                    }}
                />
                <div className={styles.menuMobile}>
                    <a href="/"> 
                        <img src="/assets/icons/home.svg" alt="Monkies Home" />
                        <p style={{ color: activePage === 'Home' ? '#C49F02' : '#FFFFFF' }}>Home</p>
                    </a>
                    <a href="/services"> 
                        <img src="/assets/icons/service.svg" alt="Monkies Home" />
                        <p style={{ color: activePage === 'Services' ? '#C49F02' : '#FFFFFF' }}>Services</p>
                    </a>
                    <a href="/ai-services"> 
                        <img src="/assets/icons/ai_service.svg" alt="Monkies Home" />
                        <p style={{ color: activePage === 'AI Service' ? '#C49F02' : '#FFFFFF' }}>AI Service</p>
                    </a>
                    <a href="/about"> 
                        <img src="/assets/icons/about.svg" alt="Monkies Home" />
                        <p style={{ color: activePage === 'About' ? '#C49F02' : '#FFFFFF' }}>About</p>
                    </a>
                </div>
                <div className={styles.lineMenuMobile}></div>
                <a className={`${styles.talk} ${styles.talkMobile}`} href={"/contact-us"}
                        
                        >
                        Lets Talk
                </a>
            </div>

        </div>
    )
}