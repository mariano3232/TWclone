import { useEffect,useState } from "react";
import useUser from "../../Hooks/useUser";
import styles from '../../styles/profile.module.css'
import Image from "next/image";
import { getAllTweets } from "../firebase/client";
import { deleteTweet } from "../firebase/client";
import Nav from "../../components/Nav";

export default function Profile(){

    let user=useUser()
    console.log('user :',user)
    let [tweets,setTweets]=useState(null)

    useEffect(()=>{
        getAllTweets().then(tweets=>{
            console.log('tweetsAntes :',tweets)
            let userTweets=tweets.filter(tweet=>(tweet?.uid===user?.uid))
            setTweets(userTweets);
        })
    },[user])

    function toDateTime(secs) {
        var t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        return t;
    }
    const handleDelete=(e)=>{
        let id=e.target.value;
        deleteTweet(id).then(()=>{
            getAllTweets().then(tweets=>{
                console.log('tweetsAntes :',tweets)
                let userTweets=tweets.filter(tweet=>(tweet?.uid===user?.uid))
                setTweets(userTweets);
            })
        })
    }
    return (
        <div className={styles.layout}>

        <div className={styles.container}>
        {
            user?
                <div className={styles.contain}>
                    <Image src={user.profilePicture} height='100px' width='100px' className={styles.avatar}/>
                    <h1>{user?.username}</h1>
                </div>           
            :null
        }
        {
            tweets?.map(e=>{
                let date=toDateTime(e.createdAt?.seconds)
                return(
                
                <div className={styles.tweetContainer} key={e.id}>
                    {
                        user&&user?.uid===e.uid?
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
        <Nav/>
        </div>
    )
}