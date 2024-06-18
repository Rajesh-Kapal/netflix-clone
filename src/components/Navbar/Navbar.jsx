import './Navbar.css';
import logo from '../../assets/logo.png';
import React, { useEffect, useRef } from 'react';
import search_icon from '../../assets/search_icon.svg';
import bell from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png'
import cret from '../../assets/caret_icon.svg'


export function Navbar() {
    const navRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark');
            } else {
                navRef.current.classList.remove('nav-dark');
            }
        })
    }, []);

    return (
        <div ref={navRef} className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browsed by Language</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="" className='icons' />
                <p>Children</p>
                <img src={bell} alt="" className='icons' />
                <div className="navbar-profile">
                    <img src={profile} className='profile' alt="" />
                    <img src={cret} alt="" />

                    <div className="dropdown">
                        <p>Sign out of Netflix</p>
                    </div>

                </div>


            </div>
        </div>
    )
}