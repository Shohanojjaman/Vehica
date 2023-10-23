import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const logoV1 = 'https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-dark-retina.png';
  const logoV2 = 'https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-white-retina.png';

  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  console.log(navbar);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-primary'
              : `${navbar ? 'text-lg text-black hover:text-primary' : 'text-lg text-white hover:text-primary'}`
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-primary'
              : `${navbar ? 'text-lg text-black hover:text-primary' : 'text-lg text-white hover:text-primary'}`
          }>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-primary'
              : `${navbar ? 'text-lg text-black hover:text-primary' : 'text-lg text-white hover:text-primary'}`
          }>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-primary'
              : `${navbar ? 'text-lg text-black hover:text-primary' : 'text-lg text-white hover:text-primary'}`
          }>
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <header className={navbar ? 'bg-white fixed top-0 w-full py-8' : 'bg-transparent w-full py-8 -mb-28'}>
      <div className="container flex items-center justify-between">
        <Link to={'/'}>
          <img src={navbar ? logoV1 : logoV2} className="w-48" alt="Vehica" />
        </Link>
        <nav>
          <ul className={navbar ? 'flex gap-8 text-lg ' : 'flex gap-8 text-lg '}>{links}</ul>
        </nav>
        <div className="flex items-center gap-6 text-white">
          <FaOpencart
            className={
              navbar
                ? 'text-lg text-black hover:text-primary hover:cursor-pointer'
                : 'text-lg text-white hover:text-primary hover:cursor-pointer'
            }
          />
          <Link
            to="/login"
            className={navbar ? 'text-lg text-black hover:text-primary' : 'text-lg text-white hover:text-primary'}>
            Login
          </Link>
          <RxDividerVertical className={navbar ? 'text-lg text-black' : 'text-lg text-white'} />
          <Link
            to={''}
            className={
              navbar
                ? 'text-primary flex items-center gap-2 border border-primary py-3 px-5 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 font-bold'
                : 'text-white flex items-center gap-2 border border-primary py-3 px-5 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 font-bold'
            }>
            <AiOutlinePlus />
            Add Product
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
