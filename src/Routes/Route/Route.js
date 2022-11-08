import { createBrowserRouter } from "react-router-dom";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Services from "../../components/Services/Services";
import ServicesDetails from "../../components/ServicesDetails/ServicesDetails";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../Layout/Main";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])