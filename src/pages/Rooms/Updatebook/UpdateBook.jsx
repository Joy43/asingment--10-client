import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuthentication from "../../../Hooks/useAuthentication";

const UpdateBook = () => {
    const  bookingloader=useLoaderData()
   const {_id,roomimg,Name,Price,date,Description,email,offers,roomsize} = bookingloader;
    const{user}=useAuthentication()
   
   // Send data to the server------------


    const handleUpdatePhone = (event) => {
        event.preventDefault();
        const form = event.target;
        const Name=form.Name.value;
        const date=form.date.value;
        const email=form.email.value;
        const Price=form.Price.value;
        const updatebook={Name,date,roomimg,Price,email,roomsize}
        console.log(updatebook)
    fetch(`http://localhost:5000/services/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json', 
        },
        body: JSON.stringify(updatebook),

      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0){
            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success update'
            )
  
          }
        })
        .catch((error) => {
           console.error('Error:', error);
          
        });
    }
  
    return (
        <div>
             <form className="card-body" onSubmit={handleUpdatePhone}>
     <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {/* --------------Name ----------------*/}
       <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text"  name="Name" defaultValue={user?.displayName}   placeholder="Enter Name" className="input input-bordered" required />
        </div>
        {/* ----------date------------ */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Booking Date</span>
          </label>
          <input type="date"defaultValue={date}  name="date" placeholder="password" className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>

        {/*--------- email ------------*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        {/* duePrice */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" placeholder="password" defaultValue={'$'+ Price} className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>
       </div>
       <div className="form-control mt-6">
          <button className="btn btn-secondary">Update Now</button>
        </div>
     </form> 
        </div>
    );
};

export default UpdateBook;