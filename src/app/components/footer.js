'use client'
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
import React , {useState , useEffect}from "react";
import { useRouterContext } from "../context/NavbarContext";
import styles from '../page.module.css'
export function Footer(){
    const {activePage} = useRouterContext();
    const [width , setWidth] = useState(1000)
    // const handlePageClicked = (e, text) => {
    //     sessionStorage.setItem('pageSelect', text);
    // }
    useEffect(()=>{
        const widthScreen = window.screen.width;
        setWidth(widthScreen)
    },[])
    return(
        <div className={styles.Footer}>
            <div className={styles.topFooter}>
                <div className={styles.dataFooter}>
                    <div>
                        <img src="/assets/icons/logo.png" alt="Monkies Logo" />
                        {width > 650 ?
                            <p>
                                The premier agency for brands that want to <br />
                                dominate the digital landscape through <br /> code and creativity.
                            </p>:
                            <p>
                                The premier agency for brands that want to
                                dominate the digital landscape through code and creativity.
                            </p>

                        }
                    </div>
                    {width > 650 ?
                        <div className={styles.SitemapFooter}>
                            <h2>SITEMAP</h2>
                            <a style={{ color: activePage === 'Services' ? '#C49F02' : '#858585' }}  href={"/services"} >Services</a>
                            <a style={{ color: activePage === 'Terms & conditions' ? '#C49F02' : '#858585' }} href={"/terms-and-conditions"} >Terms & conditions</a>
                            <a style={{ color: activePage === 'Privacy policy' ? '#C49F02' : '#858585' }} href={"/privacy-policy"} >Privacy policy</a>
                            <a style={{ color: activePage === 'About' ? '#C49F02' : '#858585' }} href={"/about"}>About us</a>
                        </div>:
                        <div className={styles.SitemapFooter}>
                            <div>
                                <h2>SITEMAP</h2>
                                <a style={{ color: activePage === 'Services' ? '#C49F02' : '#ffffff' }}  href={"/services"} >Services</a>
                                <a style={{ color: activePage === 'Terms & conditions' ? '#C49F02' : '#ffffff' }} href={"/terms-and-conditions"} >Terms & conditions</a>
                                <a style={{ color: activePage === 'Privacy policy' ? '#C49F02' : '#ffffff' }} href={"/privacy-policy"} >Privacy policy</a>
                                <a style={{ color: activePage === 'About' ? '#C49F02' : '#ffffff' }} href={"/about"}>About us</a>
                            </div>
                        </div>
                    }
                    <div className={styles.contactFooter}>   
                        <h2>CONTACT</h2>
                        <p>966568338942</p>
                        <p>00201017140869</p>
                    </div>
                </div>
                <div className={styles.socialMonkies}>
                    <a href=""> <img src="/assets/icons/facebook.svg" alt="Monkies Facebook"/></a>
                    <a href=""> <img src="/assets/icons/youtube.svg" alt="Monkies Youtube"/></a>
                    <a href=""> <img src="/assets/icons/x.svg" alt="Monkies X"/></a>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <p>© 2023 Coding Monkies. All rights reserved. Made with love (and bananas).</p>
            </div>
        </div>
    )
}