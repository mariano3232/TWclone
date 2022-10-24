import { useEffect, useState } from "react"
import Image from 'next/image'
import styles from "../../styles/post.module.css"
import Avatar from "../../components/avatar"
import useUser from "../../Hooks/useUser"
import { addTweet,getAllTweets } from "../firebase/client"
import spinner from '../../public/loading.svg'
import Spinner from "../../components/spinner"

export default function PostTweet({setTweets}){
    console.log('loading :',spinner)

    let [loading,setLoading]=useState(false)

    let [message,setMessage]=useState('')

    let user=useUser()


    function handleChange(e){
        setMessage(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        let messageAux=message;
        setMessage("")
        document.getElementById("text").value = "";
        addTweet({
            username:user.username,
            message:messageAux,
            avatar:user.profilePicture,
            mail:user.mail,
            id:user.uid,
        }).then(()=>{
            getAllTweets().then(res=>{
                setTweets(res)
                setTimeout(()=>{
                    setLoading(false)
                    setTweets(res)
                },1000)
            })
        })
    }
    

    return(
        <div className={styles.container}>
            <div className={styles.user}>
                {
                    user?<Avatar url={user.profilePicture}/>:null
                }    
                <p className={styles.username}>{user?.username}</p>
            </div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <textarea
                    type="text"
                    placeholder="twiteate algo master"
                    onChange={(e)=>handleChange(e)}
                    className={styles.textarea}
                    id='text' 
                />
                {
                    (message.length!==0&&user===null)?<p>{'Log in to post   >: ('}</p>:null
                }

                {
                    loading?<div className={styles.spinner}><Spinner/></div>:
                    <button disabled={message.length===0||user===null} type="submit" className={styles.post} >post</button>
                }
            </form>
        </div>
    )
}