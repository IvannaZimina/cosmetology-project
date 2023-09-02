import { createBrowserRouter } from "react-router-dom"
import AboutMe from "./pages/AboutMe/AboutMe";
import HomePage from "./pages/Home/Home";
import MyServices from "./pages/MyServices/MyServices";
import ContactMe from "./pages/ContactMe/ContactMe";
import HomeCare from "./pages/HomeCare/HomeCare";
import { Layout } from "./layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const routes = [
    {
        element: <HomePage />,
        index: true,
    },
    {
        path: "/about-me",
        element: <AboutMe />,
    },
    {
        path: "/servicies",
        element: <MyServices />,
    },
    {
        path: "/contact-me",
        element: <ContactMe />,
    },
    {
        path: "/home-care",
        element: <HomeCare />,
    },
    // {
    //     path: "/sevicies/:seviceId",
    //     element: <HomeCare />,
    //     loader: fetchService,
    // }
];

export const routing = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: routes,
    },
]);
