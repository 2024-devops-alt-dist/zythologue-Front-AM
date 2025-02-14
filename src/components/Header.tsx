import Logo from '../assets/watou.png'
import {Link } from "react-router";

const Header = () => {
        return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img
                src={Logo} 
                alt="Logo"
                className="w-10 h-10 rounded-full border-2 border-white"
                />
                <h1 className="text-xl font-bold">Watou</h1>
            </div>
    
            <nav>
                <ul className="hidden md:flex space-x-6">
                <li>
                    <Link
                    to = "/"
                    className="text-gray-400 hover:text-[#c88e1b] transition"
                    >
                    Accueil
                    </Link>
                </li>
                <li>
                    <Link
                    to = "/PageBiere"
                    className="text-gray-400 hover:text-[#c88e1b] transition"
                    >
                    Bières
                    </Link>
                </li>
                <li>
                    <Link
                    to = "/PageBrasserie"
                    className="text-gray-400 hover:text-[#c88e1b] transition"
                    >
                    Brasseries
                    </Link>
                </li>
                <li>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-[#c88e1b] transition"
                    >
                    Contact
                    </a>
                </li>
                </ul>
            </nav>
    
            <div className="md:hidden">
                <button className="text-gray-400 hover:text-[#c88e1b] transition">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                </button>
            </div>
            </div>
        </header>
        );
    };
    
    export default Header;
