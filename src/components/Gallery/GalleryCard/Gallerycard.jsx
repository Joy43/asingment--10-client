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
        <div className="gallery-card rounded-lg">
            <div className="image-container re  ">
          
             <div className=''>
             <img
                    className="w-80 h-64"
                    src={roomimg}
                    alt=""
                    onClick={openPopup}
                />
             
               
                <div className="see-more-button bg-slate-100 text-center -mt-20 " onClick={openPopup}>
                <button
        className="flex   select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs  uppercase text-pink-500 font-bold transition-all hover:bg-pink-500 active:bg-pink-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
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
