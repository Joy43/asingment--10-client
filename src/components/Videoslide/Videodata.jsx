import Videoslide from "./Videoslide";
import video from '../../assets/video/1.mp4' 
import video1 from '../../assets/video/2.mp4' 
import video2 from '../../assets/video/3.mp4' 
import video3 from '../../assets/video/4.mp4' 
import video4 from '../../assets/video/5.mp4' 


const Videodata = () => {
    const videos = [

    {
        url: {video},
        thumbnail: 'thumbnail1.jpg',
        title: 'Video 1',
      },
      {
        url: {video1},
        thumbnail: 'thumbnail2.jpg',
        title: 'Video 2',
      },
      {
        url: {video2},
        thumbnail: 'thumbnail2.jpg',
        title: 'Video 2',
      },
      {
        url: {video3},
        thumbnail: 'thumbnail2.jpg',
        title: 'Video 2',
      },
      {
        url: {video4},
        thumbnail: 'thumbnail2.jpg',
        title: 'Video 2',
      },
      
    ];
    return (
        <div className="app">
        <h1>Video Carousel</h1>
        <Videoslide videos={videos} />
      </div>
    );
};

export default Videodata;