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
                element: <AddService></AddService>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/reviews/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
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