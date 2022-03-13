import React from "react"
import NavState from "../context/navState"
import { SideMenu} from './SideMenu';
import "./NavBarSticky.css"
import {SideMenuMob} from "./SideMenuMob";
import HamburgerButtonSticky from "./HamburgerButtonSticky";
import {SideMenuMobRU} from "./SideMenuMobRU";
import {SideMenuRU} from "./SideMenuRU";

export default function NavBarStickyRU() {
    return <nav className="navbar navbar_st sticky-top navbar-expand-lg navbar-light">
        <div className="container justify-content-start">
            <div className="row">
                <button className="navbar-toggler_st">
                    <NavState>
                        <HamburgerButtonSticky/>
                        <SideMenuMobRU/>
                    </NavState>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav burger_pc ">
                <NavState>
                    <HamburgerButtonSticky/>
                    <SideMenuRU/>
                </NavState>
            </div>
        </div>
    </nav>
}