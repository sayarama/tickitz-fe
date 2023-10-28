import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/Login";
import Register from "./pages/Register"
import ChooseSeat from "./pages/ChooseSeat"
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/detail/:slug",
        element: <Detail/>
    },
    {
        path: "/choose-seat/:slug",
        element: <ChooseSeat/>
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword/>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
