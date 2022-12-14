import { createBrowserRouter } from "react-router-dom";
import AddService from "../../components/AddService/AddService";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import MyReviews from "../../components/MyReviews/MyReviews";
import Services from "../../components/Services/Services";
import ServicesDetails from "../../components/ServicesDetails/ServicesDetails";
import SignUp from "../../components/SignUp/SignUp";
import UpdateReview from "../../components/UpdateReview/UpdateReview";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://alex-photography-server.vercel.app/services/${params.id}`),
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/reviews/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://alex-photography-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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