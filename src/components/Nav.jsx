import React from 'react';
import { NavLink } from 'react-router-dom';

// we need to use client side routing quicker(not full page refresh from server) bij using NavLink instead of <a>


export default function Nav() {
  return (
    <nav>
    <ul className='flex justify-between'>
      <li className='mx-2'>
        {/* exact not needed any more */}
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
      </li>
      <li className='mx-2'>
        <NavLink to="/about" activeClassName="active" exact>
          About
        </NavLink>
      </li>
      <li className='mx-2'>
        <NavLink to="/contact" activeClassName="active" exact>
          Contact
        </NavLink>
      </li>
      <li className='mx-2'>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
      </li>
    </ul>
  </nav>
  );
}
