import React from 'react';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const loc = useLocation();
    if(loc.pathname == '/'){
        document.title = 'CareerOpportune';
    }
    else if(loc.pathname == '/statistics'){
        document.title = 'Statistics';
    }
    else if(loc.pathname == '/jobs'){
        document.title = 'Applied Jobs';
    }
    else if(loc.pathname == '/blogs'){
        document.title = 'Blogs';
    }
    else {
        document.title = 'Job Details';
    }

    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;