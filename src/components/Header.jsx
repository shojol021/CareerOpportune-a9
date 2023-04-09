import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-center flex justify-between'>
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