type VideoProps = {
    poster: string
    src: string
}

export const Video = ({ poster, src }: VideoProps) => {
    return (
        <video
            autoPlay={true}
            loop
            muted
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
