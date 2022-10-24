import Head from 'next/head'
import Link from 'next/link'
import {loginWithGithub,loginWithGoogle,logOut} from './firebase/client.js'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import useUser from '../Hooks/useUser.js'
import { useRouter } from 'next/router'

export default function Login() {

  const router=useRouter()

  // const [user,setUser]=useState({})

  // useEffect(()=>{
  //   authStateChanged(setUser)
  // },[])

  const user=useUser()

  const handleGitHub=()=>{
    loginWithGithub().then(res=>{
      router.replace('/Home')
    }).catch(err=>{
      console.log('ERR :',err)
    })
  }
  const handleGoogle=()=>{
    loginWithGoogle().then(res=>{
      router.replace('Home')
    }).catch(err=>{
      console.log('ERR :',err)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TWclone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
           twClone
        </h1>
        <div>
          <h3>{user?.username}</h3>
          <p>{user?.mail}</p>
          {/* <img src={user?.profilePicture} alt="" height="100px"/> */}
        </div>
    
        <Link href="/Home">Home</Link>
        {
          user?null:<button className={styles.google} onClick={()=>handleGoogle()}>Login with Google</button>
        }
        <button onClick={()=>{logOut()}} >Log out</button>
      </main>

    </div>
  )
}
