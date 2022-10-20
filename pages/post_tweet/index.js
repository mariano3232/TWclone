import { useEffect, useState } from "react"
import styles from "../../styles/post.module.css"
import Link from "next/link"
import Avatar from "../../components/avatar"
import useUser from "../../Hooks/useUser"
import { addTweet,getAllTweets } from "../firebase/client"

export default function PostTweet({setTweets}){

    console.log('setTweets :',setTweets)
    let [message,setMessage]=useState('')

    let user=useUser()


    function handleChange(e){
        setMessage(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log('submit')
        addTweet({
            username:user.username,
            message,
            avatar:user.profilePicture,
            mail:user.mail,
            id:user.uid,
        }).then(()=>{
            getAllTweets().then(res=>{
                setTweets(res)
            })
        })
    }
    

    return(
        <div className={styles.container}>
            {/* <div className={styles.Home}>
                <Link href="/Home">Home</Link>
            </div> */}
            <div className={styles.user}>
                <Avatar url={user?.profilePicture}/>
                <p className={styles.username}>{user?.username}</p>
            </div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <textarea
                    type="text"
                    placeholder="twiteate algo master"
                    onChange={(e)=>handleChange(e)}
                    className={styles.textarea}    
                />
                {
                    (message.length!==0&&user===null)?<p>{'Log in to post   >: ('}</p>:null
                }
                <button disabled={message.length===0||user===null} type="submit" className={styles.post} >post</button>
            </form>
        </div>
    )
}