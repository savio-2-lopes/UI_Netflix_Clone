import React, { useState, useEffect } from 'react'
import Logo from './assets/logo.png'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return(
        <div className = {`nav ${show && "nav_black"}`}>
            <img 
                className = "nav_logo"
                src  ={Logo}
                alt = "Netflix Clone logo"
            />

            <img 
                className = "nav_avatar"
                src = "https://img.icons8.com/nolan/64/user-manual.png"
                alt = "Netflix Logo"
            />
        </div>
    )
}

export default Nav;