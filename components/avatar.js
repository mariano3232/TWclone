import Image from 'next/image'
import styles from './avatar.module.css'

export default function Avatar({url}){

    return(
        <div className={styles.image}>
            <Image
            src={url}
            alt="avatar"
            layout='fixed'
            height={50}
            width={50}
            className={styles.image}
            />
        </div>
    )
}