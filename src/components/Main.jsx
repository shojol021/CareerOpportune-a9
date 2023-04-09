import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='m-9'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;