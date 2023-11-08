import { useLoaderData } from "react-router-dom";
import useAuthentication from "../../../Hooks/useAuthentication";
import Swal from 'sweetalert2'

const CheakOutbook = () => {
    const roomservice=useLoaderData();
    const{Name,Price,roomimg,_id,Availability,roomsize,Description}=roomservice;
    const {user}=useAuthentication()

    const Handlebookservice =event =>{
      event.preventDefault();
      const form =event.target;
      const name=form.name.value;
      const date=form.date.value;
      const email=user?.email;
    const booking ={
      customerName:name,
      Availability,
      Description,
      email,
      roomimg,
      roomsize,
      date,
      service:Name,
      service_id:_id,
      price:Price
     
    }
    console.log(_id)
    console.log(booking);

    // -------------data send server---------

    fetch('https://server-hotelmanagement.vercel.app/bookings',{  
    method:'POST',
    headers:{
'content-type':'application/json'
    },
    body:JSON.stringify(booking)
  })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        
Swal.fire('Order comfirm!')
    }
    })

     
    }
  
    
    return (
        <div>
             <div className="card-body mt-4 bg-base-200">
     
    {/*------------- card------------- */}
   
<div className="relative ml-6 mt-5  flex w-full max-w-[48rem] flex-row rounded-xl bg-base-100 bg-clip-bordershadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border ">
    <img
      src={roomimg}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
      {Name}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed antialiased">
     {Description} Lorem ipsum dolor sit amet, at!
    </p>
   <span> <p> price:{Price}$</p></span>
    <a className="inline-block" href="#">
      
      size-room: {roomsize}
       
    </a>
  </div>
</div>




<link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/>

{/* -----------------end---------------- */}
     <form className="card-body" onSubmit={Handlebookservice}>
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
          <input type="date"  name="date" placeholder="password" className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>

        {/* email */}
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
          <button className="btn btn-secondary">ORDER CONFIRM</button>
        </div>
     </form>

        
      {/* </form> */}
    </div>
        </div>
    );
};

export default CheakOutbook;