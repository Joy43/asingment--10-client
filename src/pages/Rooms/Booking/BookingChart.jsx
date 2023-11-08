import { Link } from "react-router-dom";


const BookingChart = ({booking,handleDelete}) => {
    const {_id,roomimg,Name,Price,date,Description,email,offers,roomsize} = booking;
    return (
        <div>
           <div className="flex w-full items-center justify-between rounded-2xl  text-black bg-[#cccff3] p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img
                            className="h-[83px] w-[83px] rounded-lg"
                            src={roomimg}
                            alt="room img"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium  ">
                            {email}
                            </p>
                            <p className="mt-2 text-sm  white"> {date}
                           </p>
                            <p className="mt-2 text-sm  white"> {roomsize}
                           </p>
                            <p className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white">
                                {Price}
                            </p>
                            
                        </div>
                        </div>
                        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                       
                        {/* ---------- UPDATE ------------- */}
              <Link to={`updatebook/${_id}`}>
              <button type="button" className="text-black  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"></path>
                        </svg>
  <span className="sr-only">Icon description</span>
</button>
              </Link>
{/* -----------Delete-------------- */}
                        <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
                        </div>
                    </div> 
        </div>
    );
};

export default BookingChart;