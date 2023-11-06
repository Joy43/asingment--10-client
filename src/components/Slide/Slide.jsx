import { Link } from "react-router-dom";


const Slide = () => {
    return (
        <div className="carousel w-full h-[600px]">
            {/* ---------1-------- */}
      <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/KDy9kcm/4.png" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                  <h2 className='text-6xl font-bold'>Beautiful 2 BeaRoom apartment in singapur</h2>
                  <p>Beautiful 2Bedroom apartment in Singapore! is set in the Orchard district of Singapore, 500 metres from Lucky Plaza,
                     1.1 km from 313@Somerset and 1.2 km from Orchard Gateway.</p>
                  <div>
                   <Link to="/rooms">
                   <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">Book Now</span>
  </button>
                   </Link>
                   
                  </div>
              </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle mr-5">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
      </div>
      {/*-------- 2---- */}
      <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/7gx821c/2.png" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                  <h2 className='text-6xl font-bold'>VicHaus Serviced Apartment</h2>
                  <p>Boasting a year-round outdoor pool, VicHaus Serviced Apartment in Singapore offers accommodation with free WiFi
                     and free private parking for guests who drive.</p>
                  <div>
                  <Link to="/rooms">
                   <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">Book Now</span>
  </button>
                   </Link>
                    
                  </div>
              </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle mr-5">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
      </div>

      {/* --------3-------- */}
      <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/SmPtFVj/6.png" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                  <h2 className='text-6xl font-bold'>COZY 2BR Fairlane Residences Next To Lot 10</h2>
                  <p>Situated in Kuala Lumpur, 500 metres from Starhill Gallery and 500 metres from Pavilion Kuala Lumpur, COZY 2BR Fairlane Residences Next To Lot 10 offers a
                     fitness centre and air conditioning</p>
                  <div>
                  <Link to="/rooms">
                   <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">Book Now</span>
  </button>
                   </Link>
                      {/* <button className="btn btn-outline btn-secondary">Latest Project</button> */}
                  </div>
              </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide2" className="btn btn-circle mr-5">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
      </div>
      {/* -------4----------- */}
      <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/HNjS9xP/10.png" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                  <h2 className='text-6xl font-bold'>Cox's Bazar: 95 properties </h2>
                  <p>Castle Bay Touch Cox's Bazar is offering accommodation in Cox's Bazar. Featuring a restaurant, the 3-star hotel has air-conditioned rooms 
                    with free WiFi, each with a private bathroom.</p>
                  <div>
                  <Link to="/rooms">
                   <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">Book Now</span>
  </button>
                   </Link>
                      
                  </div>
              </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide3" className="btn btn-circle mr-5">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
      </div>
  </div>
    );
};

export default Slide;