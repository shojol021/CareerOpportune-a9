import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    const handleScrollToFeatured = () => {
        location.pathname == '/' && window.scrollTo({
          top: document.getElementById("featured").offsetTop,
          behavior: "smooth"
        });
      };

    const currentLocation = location.pathname;
    const isJobDetails = currentLocation.slice(0, 12) == '/job-details';
    const isJobs = currentLocation == '/jobs';
    const isStatistics = currentLocation == '/statistics';
    const isBlogs = currentLocation == '/blogs';
    const headerStyle = isJobDetails || isJobs || isStatistics || isBlogs ? "bg-[url('/banner1.png')]" : "";
    
    return (
        <nav className={`navbar bg-base-100 text-center flex justify-between md:p-9 ${headerStyle}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='me-5'><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
                    <li className='me-5'><NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink></li>
                    <li className='me-5'><NavLink to='jobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink></li>
                    <li className='me-5'><NavLink to='blogs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink></li>
                    </ul>
                </div>
                <Link to='/'><h1 className='md:text-2xl font-bold'>CareerOpportune</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='me-5'><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
                    <li className='me-5'><NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink></li>
                    <li className='me-5'><NavLink to='jobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink></li>
                    <li className='me-5'><NavLink to='blogs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={handleScrollToFeatured} className="btn btn-primary">Start Applying</a>
            </div>
        </nav>
    );
};

export default Header;