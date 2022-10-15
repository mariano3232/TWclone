import { useState } from "react"
import styles from "../../styles/post.module.css"
import Link from "next/link"
import Avatar from "../../components/avatar"
import useUser from "../../Hooks/useUser"

export default function PostTweet(){

    let [input,setInput]=useState('')

    const user=useUser()

    function handleChange(e){
        setInput(e.target.value)
    }

    return(
        <div className={styles.container}>
            <div className={styles.Home}>
                <Link href="/Home">Home</Link>
            </div>
            <div className={styles.user}>
                <Avatar url={user?.profilePicture}/>
                <p>{user?.username}</p>
            </div>
            <form>
                <textarea
                    type="text"
                    placeholder="twiteate algo master"
                    onChange={(e)=>handleChange(e)}
                    className={styles.textarea}    
                />
                <button>post</button>
            </form>
        </div>
    )
}