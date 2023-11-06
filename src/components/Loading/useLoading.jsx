
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const useLoading = () => {
    return (
        <div className='ml-40'>
           <Player
        autoplay
        loop
        src="https://lottie.host/?file=bb39d38d-bbc1-4995-8ad0-fe126cf99e20/0hU9jK33WU.json"
        style={{ height: '450px', width: '350px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player> 
        </div>
    );
};

export default useLoading;