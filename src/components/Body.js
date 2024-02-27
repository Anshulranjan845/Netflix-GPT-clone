import React, { Suspense, lazy } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Moviedescription = lazy(()=>import('./MovieDesc'))

const Body = () => {

    const appRouter = createBrowserRouter([
      {
        path: "/",
        element:<Login />
      },
      {
        path: "/browse",
        element:<Browse />,
        
      },
      {
        path:"/movies/:id",
        element:<Suspense fallback={<h1 className='text-2xl'>loading....please wait</h1>}><Moviedescription /></Suspense>
      }
    ]);
    return (
      <div>
         <RouterProvider router={appRouter}/>
      </div>
    );
   
}

export default Body
