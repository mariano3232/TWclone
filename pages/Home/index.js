import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../styles/timeline.module.css'
import useUser from '../../Hooks/useUser'
import { getAllTweets } from '../firebase/client'
import PostTweet from '../post_tweet'

export default function Home(){

    let [tweets,setTweets]=useState([])

    let user=useUser()

    console.log('user :',user)

    getAllTweets().then(e=>{
        console.log('getalltweets',e)
    })

    useEffect(()=>{
        getAllTweets().then(e=>{
            setTweets(e)
        })
    },[])

    return (
    <div className={styles.container}>
        <PostTweet setTweets={setTweets}/>
        <Link href="/">Login</Link>
        <h1>This is the timeline of {user?.username}</h1>
        {/* <Link href="/post_tweet"><button className={styles.button}>Post</button></Link> */}
        {
            tweets?.map(e=>{
                return(
                <div className={styles.tweetContainer} key={e.id}>
                    <img src={e.avatar} alt="" className={styles.avatar}/>
                    <div className={styles.text}>
                        <h3>{e.username}</h3>
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