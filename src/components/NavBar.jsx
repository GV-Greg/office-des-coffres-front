<<<<<<< HEAD
import React, { useState } from 'react';
import {Link} from "react-router-dom";

const pages = [
    { name: "Admin", link: "/admin"},
    { name: "Vit'Art", link: "/company"},
    { name: "Login", link: "/login"},
    { name: "404", link: "/404"},
];

const navLinks = pages.map(
    ({ name, link }) =>
        <Link to={link} key={name} className="no-underline text-gray-800 font-semibold hover:text-gray-600">
            {name}
        </Link>
)

const NavBar = ({ menuOpen, setMenuOpen }) => (
    <div className="flex items-center justify-end p-4">
        <nav className="hidden md:block space-x-6">
            {navLinks}
        </nav>
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50">
            <MenuAlt4Svg menuOpen={menuOpen} />
        </button>
    </div>
)

const MobileMenu = ({children}) => (
    <nav className="p-4 flex flex-col space-y-3 md:hidden">
        {children}
    </nav>
)

const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);

export const ResponsiveNavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-100">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
        </div>
    )
}
=======
import {Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const AuthButtons = () => {
    const navigate = useNavigate();

    const logoutSubmit = async function() {
        return await AuthService.logout()
            .then(response => {
                if(response.data.success === true) {
                    localStorage.removeItem('auth_pseudo');
                    localStorage.removeItem('auth_token');
                    navigate('/');
                }
            })
    }

    return (
        !localStorage.getItem('auth_token')
            ? <div className="inline-block">
                <Link to="/login"
                        className="px-3 py-1 no-underline bg-blue-600 rounded-md font-semibold text-white hover:bg-blue-800 transform hover:translate-x-0.5 hover:translate-y-0.5">
                    Se connecter
                </Link>
                <Link to="/register"
                        className="ml-2 px-3 py-1 no-underline bg-blue-600 rounded-md font-semibold text-white hover:bg-blue-800 transform hover:translate-x-0.5 hover:translate-y-0.5">
                    S'enregistrer
                </Link>
            </div>
            : <button type="button" onClick={() => logoutSubmit()}
                    className="px-3 py-1 no-underline bg-red-600 rounded-md font-semibold text-white hover:bg-red-800 transform hover:translate-x-0.5 hover:translate-y-0.5">
                Se déconnecter
            </button>
    )
}

const NavBar = () => {
    return (
        <nav className="hidden md:block space-x-6">
            <Link to='company' className="no-underline font-semibold text-gray-800 hover:text-gray-600">
                Vit'Art
            </Link>
            <a href='https://odc-admin.creacube.be' target="_blank" rel="noopener noreferrer" className="no-underline font-semibold text-gray-800 hover:text-gray-600">
                Admin
            </a>
            <AuthButtons />
        </nav>
    );
}

export default NavBar;
>>>>>>> develop