import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    
    const currentLocation = location.pathname;
    const checkPath = currentLocation.slice(0, 12) == '/job-details';
    const headerStyle = checkPath? "bg-[url('/banner1.png')]" : "";
    return (
        <nav className={`text-center flex justify-between md:p-9 ${headerStyle}`}>
            <Link to='/'><h1 className='text-2xl font-bold'>CareerOpportune</h1></Link>
            <ul className='flex justify-center'>
                <li className='me-5'><NavLink  to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
                <li className='me-5'><NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink></li>
                <li className='me-5'><NavLink to='jobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink></li>
                <li className='me-5'><NavLink to='blogs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink></li>
            </ul>
            <button className='btn btn-primary'>Start Applying</button>
        </nav>
    );
};

export default Header;