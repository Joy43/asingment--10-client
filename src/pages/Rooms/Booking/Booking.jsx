import useAuthentication from "../../../Hooks/useAuthentication";
import Swal from 'sweetalert2'


import {  useEffect, useState } from "react";

import BookingChart from "./BookingChart";
import { Helmet } from "react-helmet";

const Booking = () => {
    const{user}=useAuthentication();
   
    
    const [bookings, setBookings] = useState([]);
    // ********data load axios **********
    const url = `https://server-hotelmanagement.vercel.app/bookings?email=${user?.email}`;
    // const url =`/bookings?email=${user?.email}`;

    
    // --------------- axios use  -----------------------
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url]);
    
    
// *******************handle delete ************
const handleDelete =id=> {
    Swal.fire({
        title: 'Are you sure you want to delete?',
        text: "This action is irreversible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://server-hotelmanagement.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire('Delete Success!', '', 'success');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            });
        }
    });
}

//   ---------
    return (
        <div className="mt-8 bottom-4" >
          <Helmet>
      <title>Booking</title>
      <meta name='Booking' content='This is Booking page' />
      </Helmet> 
<html>
    <head>
        <link rel="stylesheet" href="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/css/main.d7f96858.css" />
    </head>
    <body >
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <div
                className="relative flex max-w-[500px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none"
            >
                <div className="!z-5 gap-3 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-black dark:shadow-none">
                    <div className="mb-8 w-full">
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                        All Booking{bookings.length}
                        </h4>
                        <p className="mt-2 text-base text-gray-600">
                        Here you can find more details about your Booking. Keep you user
                        engaged by providing meaningful information.
                        </p>
                    </div>
                    {/* ---------card --------------------*/}

                    {
                        bookings.map(booking=><BookingChart key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        ></BookingChart>)
                    }



                    {/* --------end----- */}
                    
                </div>
            </div>
            
        </div>
    </body>
</html>
        </div>
    );
};

export default Booking;