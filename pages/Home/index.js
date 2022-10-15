import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../styles/timeline.module.css'

export default function Home({username}){

    let [tweets,setTweets]=useState([])

    async function getTweets(){
       let call=await axios("http://localhost:3000/api/hello")
       setTweets(call.data)
    }

    useEffect(()=>{
        getTweets()
    },[])

    return (
    <div className={styles.container}>
        <Link href="/">Login</Link>
        <h1>This is the timeline of {username}</h1>
        <Link href="/post_tweet"><button className={styles.button}>Post</button></Link>
        {
            tweets.map(e=>{
                return(
                <div className={styles.tweetContainer}>
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

Home.getInitialProps = ()=>{
    return {
        username:'username',
    }
}