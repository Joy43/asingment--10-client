import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Roter.jsx'
import Authprovider from './Authentication/Authprovider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <div className='max-w-7xl ml-auto mr-auto'>
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </React.StrictMode>
  </div>
</HelmetProvider>
)
