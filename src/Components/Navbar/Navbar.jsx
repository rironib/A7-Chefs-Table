import { RiSearchLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className="w-10/12 mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden px-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex="0"
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-3xl px-3 lg:px-4">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <div className="form-control hidden md:block">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <RiSearchLine />
                        </div>
                        <input type="text" id="simple-search"
                               className="bg-gray-100 focus:outline-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                               placeholder="Search" required/>
                    </div>
                </div>
                <div className="bg-green-500 p-2 rounded-full">
                    <FaRegCircleUser />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
