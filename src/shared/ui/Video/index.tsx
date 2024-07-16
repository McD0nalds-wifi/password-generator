import { useRef } from 'react'

import styles from './index.module.css'

type VideoProps = {
    poster?: string
    src: string
}

export const Video = ({ poster, src }: VideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleClick = () => {
        if (!videoRef.current) {
            return
        }

        videoRef.current.requestFullscreen()
    }

    return (
        <video
            autoPlay={true}
            className={styles.video}
            loop
            muted
            onClick={handleClick}
            playsInline
            poster={poster}
            preload='auto'
            ref={videoRef}
            style={{ borderRadius: '6px', height: 'auto', maxWidth: '100%' }}
        >
            <source src={src} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    )
}
