
import useServices from '../../Hooks/useServices';
import Gallerycard from './GalleryCard/Gallerycard';

const Gallery = () => {
    const photoGallery = useServices();


    return (
        <div>
            <div>
                <h1 className='justify-center text-center font-bold gap-2 text-2xl '>Gallery</h1>
            </div>
            <div className="container mx-auto p-4 grid grid-cols-1
         sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {
                photoGallery?.map(Services=><Gallerycard 
                    key={Services._id}
               
      
                    Services={Services}>
                    
                    

                </Gallerycard>)
            }
        </div>
        </div>
    );
};

export default Gallery;
