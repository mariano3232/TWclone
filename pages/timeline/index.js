import Link from 'next/link'

export default function Timeline({username}){
    return (
    <>
        <Link href="/">Home</Link>
        <h1>This is the timeline of {username}</h1>
    </>
    )
}

Timeline.getInitialProps = ()=>{
    return {
        username:'maiki',
    }
}