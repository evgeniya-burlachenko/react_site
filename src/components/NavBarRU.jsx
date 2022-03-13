import React from "react"
import NavState from "../context/navState"
import {NavLink} from "react-router-dom";
import BlueLogo from "../assets/images/Links/HELMDA SYSTEMS  blue logo.png"
import "./NavBar.css"
import HamburgerButton from "./HamburgerButton";
import {SideMenuMobRU} from "./SideMenuMobRU";
import {SideMenuRU} from "./SideMenuRU";

export default function NavBarRU() {
    return <nav className="navbar navbar-expand-lg bg-white navbar-light">
            <div className="collapse navbar-collapse justify-content-center col-4 nav_logo">
                <NavLink to="/">
                    <img src={BlueLogo}/>
                </NavLink>
            </div>
            <div className="container justify-content-center">
                <div className="row">
                    <button className="navbar-toggler">
                        <NavState>
                            <HamburgerButton />
                            <SideMenuMobRU/>
                        </NavState>
                    </button>
                    <NavLink className="nav-item nav-link burger_mob" to="/sp">SP</NavLink>
                    <NavLink className="nav-item nav-link burger_mob" exact to="/">EN</NavLink>
                    <NavLink className="nav-item nav-link burger_mob" to="/ru">RU</NavLink>
                </div>
            </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav burger_pc">
                <div className="navbar-nav burger_pc">
                    <NavLink className="nav-item nav-link" to="sp">SP</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/">EN</NavLink>
                    <NavLink className="nav-item nav-link" to="ru">RU</NavLink>
                </div>
                <NavState>
                    <HamburgerButton />
                    <SideMenuRU/>
                </NavState>
            </div>
        </div>
    </nav>
}