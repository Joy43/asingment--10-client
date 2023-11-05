import PropTypes from 'prop-types';

import  { useState } from 'react';
import ReactPlayer from 'react-player';

const Videoslide = ({videos}) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoChange = (index) => {
      setCurrentVideoIndex(index);
    };

    // prop type 
    Videoslide.propTypes = {
        videos: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          })
        ).isRequired,
      };
      
    return (
        <div className="video-carousel">
        <ReactPlayer
          url={videos[currentVideoIndex].url}
          controls
          width="100%"
          height="auto"
        />
  
        <div className="video-thumbnails">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`video-thumbnail ${
                index === currentVideoIndex ? 'active' : ''
              }`}
              onClick={() => handleVideoChange(index)}
            >
              <img src={video.thumbnail} alt={video.title} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Videoslide;