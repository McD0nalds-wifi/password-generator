import styles from './index.module.css'

type VideoProps = {
    onClick?: () => void
    poster?: string
    src: string
}

export const Video = ({ onClick, poster, src }: VideoProps) => {
    return (
        <video
            autoPlay={true}
            className={onClick && styles.video}
            loop
            muted
            onClick={onClick}
            playsInline
            poster={poster}
            preload='auto'
            style={{ borderRadius: '6px', height: 'auto', maxWidth: '100%' }}
        >
            <source src={src} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    )
}
