import styles from './nav.module.css'

export default function Nav(){


    return(
        <div className={styles.container}>
            <button className={styles.button}>Home</button>
            <button className={styles.button}>Profile</button>
            <button className={styles.button}>Log out</button>
        </div>
    )
}