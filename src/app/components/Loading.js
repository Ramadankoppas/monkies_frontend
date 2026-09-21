'use client'
import dynamic from "next/dynamic";
import styles from '../page.module.css'
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function Loading({className = ''}){
    return(
        <div className={`${styles.loadingPage} ${className}`}>
            <Lottie path="/assets/images/loading.json" autoplay={true} loop={true} className={styles.lottieJson}></Lottie>
        </div>
    )
}