/* eslint-disable react-hooks/set-state-in-effect */
'use client'
/*eslint-disable @next/next/no-img-element */
import React ,{useState , useEffect} from "react";
import styles from '../page.module.css'
export default function About(){
    const [width , setWidth] = useState(1000)
    useEffect(()=>{
        const widthScreen = window.screen.width;
        setWidth(widthScreen)
    },[])
    return(
        <div className={styles.AboutPage}>
            <h1 className={styles.AboutHeader}>About us</h1>
            {width > 775 ?
                <p>At <span>MONKIES</span>, we don’t just build digital products <br /> 
                    we craft experiences with personality. <br />
                    We’re a creative tech company specializing in web and mobile development, UI/UX design, <br />
                    branding, and digital marketing, helping brands stand out and grow in the digital jungle.
                </p>:
                <p>At <span>MONKIES</span>, we don’t just build digital products
                    we craft experiences with personality.
                    We’re a creative tech company specializing in web and mobile development, UI/UX design,
                    branding, and digital marketing, helping brands stand out and grow in the digital jungle.
                </p>
            }
            <div>
                <img className={styles.imgSmaller} src="/assets/images/5.png" alt="Monkies About" />
                <p>Founded 5 years ago, MONKIES has been swinging between Egypt and Saudi Arabia, partnering with businesses to turn bold ideas into powerful, high-performing digital solutions.</p>
            </div>
            {width > 700 ?
                <div>
                    <p>Our team blends creativity with technical expertise to deliver work that’s not only visually striking but also smart, scalable, and built to perform. From building strong brand identities and designing intuitive user experiences to developing robust platforms and launching impactful marketing campaigns — we make sure every detail works in harmony.</p>
                    <img src="/assets/images/Cards.png" alt="Monkies About" />
                </div>:
                <div>
                    <img src="/assets/images/Cards.png" alt="Monkies About" />
                    <p>Our team blends creativity with technical expertise to deliver work that’s not only visually striking but also smart, scalable, and built to perform. From building strong brand identities and designing intuitive user experiences to developing robust platforms and launching impactful marketing campaigns — we make sure every detail works in harmony.</p>
                </div>
            }
            <div>
                <img className={styles.imgSmaller} src="/assets/images/Ai monk.png" alt="Monkies About" />
                <p>We also leverage the power of AI to move faster and work smarter. But we don’t rely on it blindly — we use it as a tool, guided by real expertise and creative thinking. Because the truth is, not everyone knows how to use AI the right way, and real value comes from knowing how to get the best out of it.</p>
            </div>
                {width > 775 ?
                    <p>
                        We move fast, think smart, and keep things clear. No unnecessary complexity, <br />
                        no guesswork — just clean execution and results that matter. <br />
                        At the end of the day, we’re a bunch of passionate MONKIES who love what we do… <br />
                        and we’re here to help you build something wild 🐒🔥
                    </p>:
                    <p>
                        We move fast, think smart, and keep things clear. No unnecessary complexity,
                        no guesswork — just clean execution and results that matter.
                        At the end of the day, we’re a bunch of passionate MONKIES who love what we do…
                        and we’re here to help you build something wild 🐒🔥
                    </p>
                }
        </div>
    )
}