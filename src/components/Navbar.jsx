// Import necessary dependencies
import React, { useState } from 'react'; 
// Import icons we'll use for our navbar
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// Import Link for smooth scrolling between sections
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-50'>
      <div>
        <h1 className='font-thin text-2xl italic font-serif'>Nahuel Silva</h1>
      </div>

      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li >
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
       
      </ul>

      
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="https://www.linkedin.com/in/nahuel-silva-3b7799249/" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a href="https://github.com/Nahjuu" className='flex justify-between items-center w-full text-gray-300 px-4'>
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;