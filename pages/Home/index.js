import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../styles/timeline.module.css'
import useUser from '../../Hooks/useUser'
import { deleteTweet, getAllTweets } from '../firebase/client'
import PostTweet from '../post_tweet'
import Image from 'next/image'

export default function Home(){

    let [tweets,setTweets]=useState([])

    let user=useUser()

    function toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    useEffect(()=>{
        getAllTweets().then(res=>{
            setTweets(res)
        })
    },[])

    const handleDelete=(e)=>{
        let id=e.target.value;
        deleteTweet(id).then(()=>{
            getAllTweets().then(res=>{
                setTweets(res)
            })
        })
    }

    return (
    <div className={styles.container}>
        <PostTweet setTweets={setTweets}/>
        <Link href="/">Login</Link>
        <h1>This is the timeline of {user?.username}</h1>
        {/* <Link href="/post_tweet"><button className={styles.button}>Post</button></Link> */}
        {
            tweets?.map(e=>{
                let date=toDateTime(e.createdAt?.seconds)
                return(
                <div className={styles.tweetContainer} key={e.id}>
                    {
                        user.uid===e.uid?
                        <button value={e.id} onClick={(e)=> handleDelete(e)} className={styles.delete}>x</button>
                        :null
                    }
                    <div className={styles.avatar}>
                        <Image src={e.avatar}
                            alt="avatar"
                            height='50px'
                            width='50px'
                            layout='fixed'
                            className={styles.avatar}                      
                        />
                    </div>   
                    <div className={styles.text}>
                        <div className={styles.flex}>
                            <h3>{e.username}</h3>
                            <p className={styles.date}>{date.toString().slice(4,21)}</p>
                        </div>
                        <p>{e.message}</p>
                    </div>
                </div>
                )
            })
        }
    </div>
    )
}

// Home.getInitialProps = ()=>{
//     return {
//         username:'username',
//     }
// }