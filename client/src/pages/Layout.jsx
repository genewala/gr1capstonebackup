import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Header click={handleClick} />
            <Sidebar open={open} id="Sidebar" />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
