import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Roter.jsx'
import Authprovider from './Authentication/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl ml-auto mr-auto'>
   <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
 </div>
)
