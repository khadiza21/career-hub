import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../shared/NavbarComponent/NavbarComponent';

const MainLayout = () => {
    return (
        <>
        <NavbarComponent /> 
        <div>
            <Outlet></Outlet>
        </div>
        </>
    );
};

export default MainLayout;