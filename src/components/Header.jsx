import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='jobs'>Jobs</Link>
            <Link to='blogs'>Blog</Link>
        </div>
    );
};

export default Header;