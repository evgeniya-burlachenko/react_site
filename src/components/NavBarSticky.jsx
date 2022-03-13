import React from "react"
import NavState from "../context/navState"
import { SideMenu} from './SideMenu';
import "./NavBarSticky.css"
import {SideMenuMob} from "./SideMenuMob";
import HamburgerButtonSticky from "./HamburgerButtonSticky";

export default function NavBarSticky() {
    return <nav className="navbar navbar_st sticky-top navbar-expand-lg navbar-light">
        <div className="container justify-content-start">
            <div className="row">
                <button className="navbar-toggler_st">
                    <NavState>
                        <HamburgerButtonSticky/>
                        <SideMenuMob/>
                    </NavState>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav burger_pc ">
                <NavState>
                    <HamburgerButtonSticky/>
                    <SideMenu />
                </NavState>
            </div>
        </div>
    </nav>
}