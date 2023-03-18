import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/pages/Layout";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Gallery from "../src/pages/Gallery";
import Services from "../src/pages/Services";
import Connect from "../src/pages/Connect";
import OliviaJohn from "../src/pages/Galleries-page/OliviaJohn";
import LizThomas from "../src/pages/Galleries-page/LizThomas";
import BeccaAndrew from "../src/pages/Galleries-page/BeccaAndrew";
import TheresaJamil from "../src/pages/Galleries-page/TheresaJamil";
import MeganJake from "../src/pages/Galleries-page/MeganJake";
import HannahCarson from "../src/pages/Galleries-page/HannahCarson";
import KayleenTristan from "../src/pages/Galleries-page/KayleenTristan";
import NinaZach from "../src/pages/Galleries-page/NinaZach";
import JessJordan from "../src/pages/Galleries-page/JessJordan";
import Login from "../src/pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import GuestLayout from "./pages/GuestLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/gallery",
                element: <Gallery />,
            },
            {
                path: "/gallery/OliviaJohn",
                element: <OliviaJohn />,
            },
            {
                path: "/gallery/LizThomas",
                element: <LizThomas />,
            },
            {
                path: "/gallery/BeccaAndrew",
                element: <BeccaAndrew />,
            },
            {
                path: "/gallery/TheresaJamil",
                element: <TheresaJamil />,
            },
            {
                path: "/gallery/MeganJake",
                element: <MeganJake />,
            },
            {
                path: "/gallery/HannahCarson",
                element: <HannahCarson />,
            },
            {
                path: "/gallery/KayleenTristan",
                element: <KayleenTristan />,
            },
            {
                path: "/gallery/NinaZach",
                element: <NinaZach />,
            },
            {
                path: "/gallery/JessJordan",
                element: <JessJordan />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/connect",
                element: <Connect />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router;
