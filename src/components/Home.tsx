import '../styles/components/home.css'
import VideoElement from './VideoElement';

function Home() {
    return (
        <div className="homepage-container">
            <div className="video-section">
                <VideoElement videoUrl='/latest_video.mkv' />
                <VideoElement videoUrl='/test_conversione.mp4' />
            </div>
        </div>

    )
}
export default Home;
