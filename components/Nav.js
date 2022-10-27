import styles from './nav.module.css'
import { logOut , getAllTweets} from '../pages/firebase/client'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Nav({setTweets}){

    const router=useRouter()

    const handleLogOut=()=>{
        logOut();
        router.replace('/')
    }
    const handleHome=()=>{
        router.replace('/Home')
        if (setTweets){
            getAllTweets().then((res)=>{
                setTweets(res)
                window.scroll(0 , 0)
            })
        }
    }

    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={()=>{handleHome()}}>Home</button>
            <Link href="/profile">
                <button className={styles.button}>Profile</button>
            </Link>
            <button className={styles.button} onClick={()=>{handleLogOut()}}>Log out</button>
        </div>
    )
}