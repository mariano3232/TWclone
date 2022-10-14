
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider,onAuthStateChanged} from 'firebase/auth';

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

const auth = getAuth();

export const authStateChanged = (onChange) =>{
  return onAuthStateChanged(auth, (user)=>{
    onChange({
      username:user.displayName,
      mail:user.email,
      profilePicture:user.photoURL,})
  })
}

export const loginWithGithub=()=>{
    const githubProvider=new GithubAuthProvider();
    return signInWithPopup(auth,githubProvider)
}