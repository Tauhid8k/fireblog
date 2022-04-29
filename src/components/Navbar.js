import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuth, userSignOut }) => {
  return (
    <nav className='bg-white shadow py-3 mb-8'>
      <div className='container flex justify-between items-center'>
        <div className='logo font-medium text-2xl text-red-500'>
          <Link to='/'>FireBlog</Link>
        </div>
        <ul className='menu flex gap-5 font-medium text-gray-700'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/create'>Create</Link>
          </li>
          <li>
            {!isAuth ? (
              <Link to='/login'>Login</Link>
            ) : (
              <button
                type='button'
                className='font-medium text-gray-700'
                onClick={userSignOut}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
