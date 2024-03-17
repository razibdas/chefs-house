
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const navLinks = <>
        <li className="mr-2 rounded-lg text-white">
            <NavLink to="/" className="">Home</NavLink>
        </li>
        <li className="mr-2 rounded-lg text-white"><NavLink to="/rooms">Recipes</NavLink></li>
        <li className="mr-2 rounded-lg text-white"><NavLink to="/mybooking">About</NavLink></li>

        <li className="text-white"><Link to='/login'>Search</Link></li>


    </>

    return (
        <div className="navbar px-8 fixed z-10 backdrop-brightness-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <h2 className='text-2xl text-white font-bold'>Recipe Calories</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">

                <div className="flex justify-center items-center ">


                    <div className='lg:block hidden'>
                        <div className="join ">
                            <input className="input input-bordered join-item" placeholder="Search here" />
                            <button className="btn join-item rounded-r-full">Subscribe</button>
                        </div>
                    </div>
                    <FaUserCircle className='text-xl text-white ml-4' />

                </div>

            </div>

        </div>


    );
};

export default Navbar;