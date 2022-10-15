

export default function Avatar({url}){
    console.log('url :',url)
    return(
        <>
            <img src={url} alt="" className="image"/>

            <style jsx>{`
            .image {
            margin: 10px;
            width: 50px;
            height: 50px;
            border-radius:999px;
            }
            `}</style>
        </>
    )
}