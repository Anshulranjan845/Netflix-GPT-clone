import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDesc from './MovieDesc';

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
        element:<MovieDesc />
      }
    ]);
    return (
      <div>
         <RouterProvider router={appRouter}/>
      </div>
    );
   
}

export default Body
