import React, { useState } from 'react';
import './Gallerycard.css';

const Gallerycard = ({ Services }) => {
    const { roomimg, imghotel } = Services;

    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="gallery-card">
            <div className="image-container re  ">
          
             <div className=''>
             <img
                    className="w-80 h-64"
                    src={roomimg}
                    alt=""
                    onClick={openPopup}
                />
             
               
                <div className="see-more-button text-center -mt-20 " onClick={openPopup}>
                    <button className='btn-neutral'>see more</button>
                </div>
                </div>
            </div>

            {showPopup && (
                <div className="full-page-popup">
                    <span className="close-button" onClick={closePopup}>
                        &times;
                    </span>
                    <img src={imghotel} alt="Room Image" />
                </div>
            )}
        </div>
    );
};

export default Gallerycard;
