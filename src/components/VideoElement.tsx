import { motion } from 'framer-motion';

interface VideoElementProps {
    videoUrl: string
}

function VideoElement({videoUrl}:VideoElementProps) {
    return (
        <motion.div className='video-container'>
            <video
                className='home-video'
                src={videoUrl}
                autoPlay
                muted
                loop
                preload="auto"
            >
            </video>
        </motion.div>
    )
}
export default VideoElement;