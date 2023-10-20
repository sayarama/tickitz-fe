import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/detail/:id",
        element: <Detail/>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
