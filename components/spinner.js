import Image from "next/image";

export default function Spinner(){
    return (
        <Image src="/_next/static/media/loading.c489cc83.svg"
            layout='fixed'
            height={70}
            width={70}>
        </Image>
    )
}