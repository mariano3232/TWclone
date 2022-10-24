
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider,onAuthStateChanged,signOut,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, getDocs, addDoc,deleteDoc ,doc , collection, Timestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJ6H2WuqHawCmrX981MpTHtqwm_WIgKfI",
  authDomain: "twclone-ca274.firebaseapp.com",
  projectId: "twclone-ca274",
  storageBucket: "twclone-ca274.appspot.com",
  messagingSenderId: "342514577689",
  appId: "1:342514577689:web:4d9a76cf0601bdc1905588",
  measurementId: "G-GX80LY1849"
};

initializeApp(firebaseConfig)

const db = getFirestore();

const auth = getAuth();

//Authentication

export const authStateChanged = (setUser) =>{
  return onAuthStateChanged(auth, (user)=>{
    if (user){
      setUser({
        username:user.displayName,
        mail:user.email,
        profilePicture:user.photoURL,
        uid:user.uid})
    }
    else setUser(null)
  })
}
export const logOut=()=>{
  signOut(auth).then((res)=>{
    console.log('logOut res :',res)
  })
}

export const loginWithGithub=()=>{
    const provider=new GithubAuthProvider();
    return signInWithPopup(auth,provider)
}

export const loginWithGoogle=()=>{
    const provider=new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
}

//Firestore (DataBase)

export const addTweet = async ({username,message,avatar,mail,id})=>{
  return addDoc(collection(db,'tweets'), {
    username,
    avatar,
    message,
    mail,
    uid:id,
    likes:0,
    rts:0,
    createdAt:Timestamp.fromDate(new Date()),
  }).then(()=>{
    console.log('Post successfull!')
  }).catch((err)=>{
    console.log('ERR :',err)
  })
}

export const deleteTweet= async (id)=>{
  console.log('id :',id)
    return deleteDoc(doc(db, "tweets", id)).then(res=>{
      console.log('Deleted successfully')
    })
    .catch(err=>{
      console.log("Err ;",err)
    })
}

export const getAllTweets= async ()=>{
  let snapshot=await getDocs(collection(db,'tweets'));
  let tweets = snapshot.docs.map(doc=>{
    let data=doc.data()
    let id=doc.id
    return {
      id,
      ...data
    }
  })
  let sortedTweets=tweets.sort((a,b)=>{
    if (a.createdAt.seconds<b.createdAt.seconds) {return 1}
    if (a.createdAt.seconds>b.createdAt.seconds) {return -1}
  })
  return sortedTweets
}

export default function(){

}