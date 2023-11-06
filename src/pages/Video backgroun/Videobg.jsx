import './Videobg.css'
import video1 from '../../assets/video/1.mp4'
import video2 from '../../assets/video/2.mp4'
import video3 from '../../assets/video/3.mp4'
import video4 from '../../assets/video/4.mp4'
import video5 from '../../assets/video/5.mp4'
import { useState } from 'react'


const Videobg = () => {
    const [currentVideo, setCurrentVideo] = useState(video1);

    const handleVideoChange = (newVideo) => {
        setCurrentVideo(newVideo);
    };
    return (
        <div className=''>

        <div className="home" id="home">
           

            <div className="controls">
                <span
                    className={`vid-btn ${currentVideo === video1 ? 'active' : ''}`}
                    data-src={video1}
                    onClick={() => handleVideoChange(video1)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video2 ? 'active' : ''}`}
                    data-src={video2}
                    onClick={() => handleVideoChange(video2)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video3 ? 'active' : ''}`}
                    data-src={video3}
                    onClick={() => handleVideoChange(video3)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video4 ? 'active' : ''}`}
                    data-src={video4}
                    onClick={() => handleVideoChange(video4)}
                ></span>
                <span
                    className={`vid-btn ${currentVideo === video5 ? 'active' : ''}`}
                    data-src={video5}
                    onClick={() => handleVideoChange(video5)}
                ></span>
            </div>

            <div className="video-container">
                <video src={currentVideo} id="video-slider" loop autoPlay muted></video>
            </div>
        </div>
    </div>
    );
};

export default Videobg;