
import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'; // Importing specific icons

const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6 w-full">
            <h3 className="text-2xl font-semibold ">Welcome Back!</h3>
            <div className="flex items-center">
                <FaSearch className="mr-4 text-gray-600" />
                <FaBell className="mr-4 text-gray-600" />
                <FaUserCircle className="text-gray-600" />
            </div>
        </div>
    );
};

export default Header;
