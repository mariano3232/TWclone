import { useState } from "react"


export default function PostTweet(){

    let [input,setInput]=useState('')

    function handleChange(e){
        setInput(e.target.value)
    }

    return(
        <div>
            <textarea type="text"
            placeholder="twiteate algo master"
            onChange={(e)=>handleChange(e)}
            className={'xd'}    
            />
            <button>post</button>
        </div>
    )
}