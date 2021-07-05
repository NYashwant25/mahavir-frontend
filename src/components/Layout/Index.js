import React from 'react';
import MobileMenu from './../Header/MobileMenu';
import DesktopMenu from './../Header/DesktopMenu';
import Footer from './../Footer/Footer.js';

const Layout = (props) => {
    return(
        <>
        <MobileMenu />
        <DesktopMenu />
        {props.children}
        <Footer />
        </>
    )
}

export default Layout;