import Loading from "../components/Loading"
import styles from '../page.module.css'
export default function CommingSoon(){
    return(
        <div className={styles.CommingSoon}>
            <h1>Comming Soon</h1>
            <Loading className={styles.LoadingCommingSoon}></Loading>
        </div>
    )
}