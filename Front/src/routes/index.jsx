import {
    createBrowserRouter,
    RouterProvider, 
} from "react-router-dom";

import Home from '../views/Home';
import Contact from '../views/Contact';
import AboutUs from '../views/About';
import Appointment from '../views/Appointment';
import FAQ from '../views/FAQ';
import News from '../views/News';
import AllNews from '../views/AllNews';
import Error404 from '../views/Error404';
import Login from '../views/Login';
import Account from '../views/Account'
import Nav from '../views/Profile-Nav'
import Header from '../views/Profile-header'
import Footer from '../views/Profile-Footer'
import Reserva from '../views/Profile-Appointment'
import ContactProfile from '../views/Profile-Contact'
import AboutProfile from '../views/Profile-About'
import CreateNews from '../views/Profile-Post'
import ManageNews from '../views/Profile-News'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: 'about',
        element: <AboutUs />
    },
    {
        path: 'agendartuhora',
        element: <Appointment />
    },
    {
        path: 'preguntas',
        element: <FAQ />
    },
    {
        path: 'noticias/:id',
        element: <News />
    },
    {
        path: 'todasnoticias',
        element: <AllNews />
    },
    {
        path: 'login.access',
        element: <Login />
    },
    {
        path: 'profile',
        element: <Account />
    },
    {
        path: 'profile-nav',
        element: <Nav />
    },
    {
        path: 'profile-header',
        element: <Header />
    },
    {
        path: 'profile-footer',
        element: <Footer />
    },
    {
        path: 'profile-appointment',
        element: <Reserva />
    },
    {
        path: 'profile-contact',
        element: <ContactProfile />
    },
    {
        path: 'profile-about',
        element: <AboutProfile />
    },
    {
        path: 'profile-create-news',
        element: <CreateNews />
    },
    {
        path: 'profile-manage-news',
        element: <ManageNews />
    },
    {
        path: 'profile-edit-news/:id',
        element: <CreateNews />
    },

    

]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;